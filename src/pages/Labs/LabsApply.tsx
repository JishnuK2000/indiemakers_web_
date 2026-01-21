import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { useState } from "react";
import * as Yup from "yup";

/* -------------------- STEP DEFINITIONS -------------------- */

const STEPS = [
  "About You",
  "The Idea",
  "Validation & Market",
  "You as a Partner",
  "Commitment & Timeline",
  "Review & Submit",
];
// Define TypeScript type for form values
interface LabsFormValues {
  fullName: string;
  email: string;
  role: string;
  website: string;
  problem: string;
  targetCustomer: string;
  solution: string;
  whyNow: string;
  validation: string[];
  businessModel: string;
  opportunitySize: string;
  whyYou: string;
  expectations: string;
  equityPartnership: string;
  involvement: string;
  timeline: string;
  success3Years: string;
}

/* -------------------- VALIDATION PER STEP -------------------- */

const stepSchemas = [
  Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email().required("Email is required"),
    role: Yup.string().required("Role is required"),
  }),

  Yup.object({
    problem: Yup.string().required("Problem is required"),
    targetCustomer: Yup.string().required("Target customer is required"),
    solution: Yup.string().required("Solution is required"),
    whyNow: Yup.string().required("This helps us understand timing"),
  }),

  Yup.object({
    validation: Yup.array().min(1, "Select at least one"),
    businessModel: Yup.string().required("Business model is required"),
    opportunitySize: Yup.string().required("Please explain opportunity size"),
  }),

  Yup.object({
    whyYou: Yup.string().required("This is important"),
    expectations: Yup.string().required("Please share expectations"),
    equityPartnership: Yup.string().required("Please select one"),
  }),

  Yup.object({
    involvement: Yup.string().required("Required"),
    timeline: Yup.string().required("Required"),
    success3Years: Yup.string().required("Please answer"),
  }),

  Yup.object(),
];

// Helper function to build email body
const buildEmailBody = (values: LabsFormValues): string => {
  return `
Indiemakers Labs – New Application

ABOUT YOU
Full Name: ${values.fullName}
Email: ${values.email}
Role: ${values.role}
Website: ${values.website}

THE IDEA
Problem: ${values.problem}
Target Customer: ${values.targetCustomer}
Solution: ${values.solution}
Why Now: ${values.whyNow}

VALIDATION & MARKET
Validation: ${values.validation.join(", ")}
Business Model: ${values.businessModel}
Opportunity Size: ${values.opportunitySize}

YOU AS A PARTNER
Why You: ${values.whyYou}
Expectations: ${values.expectations}
Equity Partnership: ${values.equityPartnership}
Involvement: ${values.involvement}

COMMITMENT & TIMELINE
Timeline: ${values.timeline}
Success in 3 Years: ${values.success3Years}

Submitted On: ${new Date().toLocaleString()}
`.trim();
};
/* -------------------- PAGE -------------------- */

export default function LabsApply() {
  const [step, setStep] = useState(0);
  const isLast = step === STEPS.length - 1;

  return (
    <div
      className="
        bg-white
        pt-28 sm:pt-40 lg:pt-[220px]
        pb-24
        px-4 sm:px-6 lg:px-16
        max-h-screen
        overflow-y-auto
      "
    >
      <div className="max-w-4xl mx-auto text-[#062F2C]">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Apply to Co-Build With Indiemakers
        </h1>

        <p className="text-gray-600 mb-10">
          Step {step + 1} of {STEPS.length} — {STEPS[step]}
        </p>

        <Formik<LabsFormValues>
          initialValues={{
            fullName: "",
            email: "",
            role: "",
            website: "",
            problem: "",
            targetCustomer: "",
            solution: "",
            whyNow: "",
            validation: [],
            businessModel: "",
            opportunitySize: "",
            whyYou: "",
            expectations: "",
            equityPartnership: "",
            involvement: "",
            timeline: "",
            success3Years: "",
          }}
          validationSchema={stepSchemas[step]}
          validateOnMount
          onSubmit={async (
            values: LabsFormValues,
            { setSubmitting, resetForm }: FormikHelpers<LabsFormValues>,
          ) => {
            try {
              // Send to SheetDB
              const payload = {
                ...values,
                validation: values.validation.join(", "),
                createdAt: new Date().toISOString(),
              };

              const res = await fetch(
                "https://sheetdb.io/api/v1/prbayidgix6el",
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    data: [payload],
                  }),
                },
              );

              if (!res.ok) throw new Error("Request failed");

              // Optional: Open Gmail with prefilled email
              const subject = encodeURIComponent(
                `New Labs Application – ${values.fullName}`,
              );
              const body = encodeURIComponent(buildEmailBody(values));
              const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=vinilvalsan1991@gmail.com&su=${subject}&body=${body}`;
              window.open(gmailUrl, "_blank");

              alert("Application submitted successfully 🚀");
              resetForm();
              setStep(0);
            } catch (err) {
              console.error(err);
              alert("Submission failed ❌");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isValid, values, setFieldValue }) => (
            <Form>
              {/* STEP CONTENT WITH TRANSITION */}
              <div
                key={step}
                className="
                  transition-all duration-500 ease-out
                  opacity-100 translate-y-0
                  animate-step
                "
              >
                {renderStep(step, values, setFieldValue)}
              </div>

              {/* NAVIGATION */}
              <div className="flex justify-between mt-14">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 border rounded-full transition hover:bg-gray-50"
                  >
                    Back
                  </button>
                )}

                {!isLast && (
                  <button
                    type="button"
                    disabled={!isValid}
                    onClick={() => setStep(step + 1)}
                    className={`ml-auto px-6 py-3 rounded-full text-white transition-all duration-300
                      ${
                        isValid
                          ? "bg-[#062F2C] hover:scale-[1.02]"
                          : "bg-gray-300 cursor-not-allowed"
                      }
                    `}
                  >
                    Next
                  </button>
                )}

                {isLast && (
                  <button
                    type="submit"
                    className="ml-auto px-8 py-3 bg-[#062F2C] text-white rounded-full transition hover:scale-[1.02]"
                  >
                    Submit Application
                  </button>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

/* -------------------- STEP CONTENT -------------------- */

function renderStep(step: number, values: any, setFieldValue: any) {
  switch (step) {
    case 0:
      return (
        <Section title="About You">
          <TwoCol>
            <Input name="fullName" label="Full Name" />
            <Input name="email" label="Email Address" />
          </TwoCol>
          <TwoCol>
            <Input name="role" label="Current Role / Background" />
            <Input name="website" label="Website (Optional)" />
          </TwoCol>
        </Section>
      );

    case 1:
      return (
        <Section title="The Idea">
          <Textarea name="problem" label="Problem you want to solve" />
          <TwoCol>
            <Input name="targetCustomer" label="Target customer" />
            <Input name="whyNow" label="Why now?" />
          </TwoCol>
          <Textarea name="solution" label="Proposed solution" />
        </Section>
      );

    case 2:
      return (
        <Section title="Validation & Market">
          {[
            "No validation yet",
            "Customer interviews",
            "Pilot users",
            "Paying customers",
            "Revenue-generating business",
          ].map((v) => (
            <label key={v} className="flex gap-2">
              <input
                type="checkbox"
                checked={values.validation.includes(v)}
                onChange={(e) =>
                  setFieldValue(
                    "validation",
                    e.target.checked
                      ? [...values.validation, v]
                      : values.validation.filter((x: string) => x !== v),
                  )
                }
              />
              {v}
            </label>
          ))}
          <ErrorMessage
            name="validation"
            component="p"
            className="text-red-500"
          />

          <TwoCol>
            <Input name="businessModel" label="Business model" />
            <Input name="opportunitySize" label="Opportunity size" />
          </TwoCol>
        </Section>
      );

    case 3:
      return (
        <Section title="You as a Partner">
          <Textarea name="whyYou" label="Why you?" />
          <Textarea name="expectations" label="Expectations from Indiemakers" />
          <Select
            name="equityPartnership"
            options={["Yes", "Yes, with conditions", "No"]}
          />
        </Section>
      );

    case 4:
      return (
        <Section title="Commitment & Timeline">
          <TwoCol>
            <Select
              name="involvement"
              options={[
                "Full-time",
                "Part-time (significant)",
                "Advisory only",
              ]}
            />
            <Select
              name="timeline"
              options={["Immediately", "1–3 months", "3+ months"]}
            />
          </TwoCol>
          <Textarea name="success3Years" label="Success in 3 years" />
        </Section>
      );

    case 5:
      return (
        <Section title="Review & Submit">
          <p className="text-gray-600">
            Clicking submit will open your email with all answers prefilled.
          </p>
        </Section>
      );

    default:
      return null;
  }
}

/* -------------------- UI -------------------- */

function Section({ title, children }: any) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function TwoCol({ children }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">{children}</div>
  );
}

function Input({ name, label }: any) {
  return (
    <div>
      <Field
        name={name}
        placeholder={label}
        className="w-full border p-3 rounded"
      />
      <ErrorMessage
        name={name}
        component="p"
        className="text-red-500 text-sm"
      />
    </div>
  );
}

function Textarea({ name, label }: any) {
  return (
    <div>
      <Field
        as="textarea"
        name={name}
        rows={4}
        placeholder={label}
        className="w-full border p-3 rounded"
      />
      <ErrorMessage
        name={name}
        component="p"
        className="text-red-500 text-sm"
      />
    </div>
  );
}

function Select({ name, options }: any) {
  return (
    <div>
      <Field as="select" name={name} className="w-full border p-3 rounded">
        <option value="">Select</option>
        {options.map((o: string) => (
          <option key={o}>{o}</option>
        ))}
      </Field>
      <ErrorMessage
        name={name}
        component="p"
        className="text-red-500 text-sm"
      />
    </div>
  );
}
