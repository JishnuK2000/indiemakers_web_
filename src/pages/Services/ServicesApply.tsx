import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { useState } from "react";
import * as Yup from "yup";

/* -------------------- STEPS -------------------- */
const STEPS = ["Intent", "Basic Info", "Company Context", "Engagement Scope", "Review"];

/* -------------------- VALIDATION -------------------- */
const stepSchemas = [
  Yup.object(), // Step 0 - Intent (no required fields)

  // Step 1 - Basic Info
  Yup.object({
    fullName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    company: Yup.string().required("Required"),
  }),

  // Step 2 - Company Context
  Yup.object({
    companyStage: Yup.string().required("Required"),
    revenue: Yup.string().required("Required"),
    funding: Yup.string().required("Required"),
  }),

  // Step 3 - Engagement Scope
  Yup.object({
    helpWith: Yup.array().min(1, "Select at least one"),
    problem: Yup.string().required("Required"),
    budget: Yup.string().required("Required"),
  }),

  // Step 4 - Review (no required fields)
  Yup.object(),
];

/* -------------------- PAGE -------------------- */
export default function ServicesApply() {
  const [step, setStep] = useState(0);
  const isLast = step === STEPS.length - 1;

  return (
    <div className="bg-white pt-28 sm:pt-40 lg:pt-[220px] pb-24 px-4 sm:px-6 lg:px-16 max-h-screen overflow-y-auto">
      <div className="max-w-4xl mx-auto text-[#062F2C]">

        {/* HEADER */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Work With Indiemakers Services
        </h1>

        <p className="text-gray-600 mb-10">
          Step {step + 1} of {STEPS.length} — {STEPS[step]}
        </p>

        <Formik
          initialValues={{
            fullName: "",
            email: "",
            company: "",
            website: "",
            companyStage: "",
            revenue: "",
            funding: "",
            helpWith: [] as string[],
            problem: "",
            budget: "",
          }}
          validationSchema={stepSchemas[step]}
          validateOnMount
          onSubmit={async (values, { resetForm, setSubmitting }: FormikHelpers<any>) => {
            try {
              const res = await fetch(
                "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
                {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    key: "INDIEMAKERS_SERVICES_SECRET",
                    ...values,
                  }),
                }
              );

              const result = await res.json();

              if (result.success) {
                alert("Thanks — we’ll review your request ✨");
                resetForm();
                setStep(0);
              } else {
                alert("Submission failed ❌");
              }
            } catch {
              alert("Network error. Please try later.");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isValid, values, setFieldValue, validateForm }) => (
            <Form>
              <div key={step} className="transition-all duration-500 ease-out">
                {renderStep(step, values, setFieldValue)}
              </div>

              {/* NAVIGATION */}
              <div className="flex justify-between mt-14">
                {step > 0 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 border rounded-full hover:bg-gray-50"
                  >
                    Back
                  </button>
                )}

                {!isLast && (
                  <button
                    type="button"
                    onClick={async () => {
                      // Validate current step fields
                      const errors = await validateForm();
                      const stepKeys = Object.keys(stepSchemas[step].fields);
                      const stepErrors = stepKeys.filter((key) => errors[key]);

                      if (stepErrors.length === 0) {
                        setStep(step + 1);
                      } else {
                        // Optional: mark all fields as touched to show errors
                        alert("Please fill all required fields before continuing");
                      }
                    }}
                    className="ml-auto px-6 py-3 rounded-full text-white bg-[#062F2C]"
                  >
                    Next
                  </button>
                )}

                {isLast && (
                  <button
                    type="submit"
                    className="ml-auto px-8 py-3 bg-[#062F2C] text-white rounded-full"
                  >
                    Request Review
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
        <Section>
          <p className="text-lg text-gray-700 max-w-2xl">
            We provide senior-level product and engineering execution for teams
            building serious digital products.
            <br /><br />
            This short form helps us understand your needs and determine whether
            we’re a fit.
          </p>
        </Section>
      );

    case 1:
      return (
        <Section title="Basic Information">
          <TwoCol>
            <Input name="fullName" label="Full Name" />
            <Input name="email" label="Work Email" />
          </TwoCol>
          <TwoCol>
            <Input name="company" label="Company / Startup Name" />
            <Input name="website" label="Website or Product URL (optional)" />
          </TwoCol>
        </Section>
      );

    case 2:
      return (
        <Section title="Company Context">
          <Select
            name="companyStage"
            options={[
              "Pre-launch / MVP stage",
              "Early revenue",
              "Growing revenue",
              "Funded startup",
              "Established business",
            ]}
          />
          <Select
            name="revenue"
            options={[
              "No revenue yet",
              "Under $10k",
              "$10k–$50k",
              "$50k–$200k",
              "$200k+",
            ]}
          />
          <Select
            name="funding"
            options={[
              "No",
              "Yes (Angel)",
              "Yes (Seed)",
              "Yes (Series A or later)",
            ]}
          />
        </Section>
      );

    case 3:
      return (
        <Section title="Engagement Scope">
          {[
            "Product strategy & roadmap",
            "MVP build",
            "SaaS engineering",
            "System architecture",
            "Scaling & performance",
            "Growth & monetization",
            "CTO-as-a-Service",
          ].map((v) => (
            <label key={v} className="flex gap-2 items-center">
              <input
                type="checkbox"
                checked={values.helpWith.includes(v)}
                onChange={(e) =>
                  setFieldValue(
                    "helpWith",
                    e.target.checked
                      ? [...values.helpWith, v]
                      : values.helpWith.filter((x: string) => x !== v)
                  )
                }
                className="w-4 h-4"
              />
              {v}
            </label>
          ))}

          <ErrorMessage name="helpWith" component="p" className="text-red-500 text-sm mt-1" />

          <Textarea name="problem" label="Describe the problem you're solving" />

          <Select
            name="budget"
            options={[
              "Under $5k",
              "$5k–$15k",
              "$15k–$40k",
              "$40k+",
            ]}
          />
        </Section>
      );

    case 4:
      return (
        <Section title="Thanks — We’ll Review Your Request">
          <p className="text-gray-600">
            We review every submission carefully.
            <br />
            If there’s a strong fit, we’ll reach out to schedule a conversation.
            <br />
            If not, we’ll let you know — no hard feelings.
          </p>
        </Section>
      );

    default:
      return null;
  }
}

/* -------------------- UI COMPONENTS -------------------- */
function Section({ title, children }: any) {
  return (
    <section className="space-y-6">
      {title && <h2 className="text-2xl font-semibold">{title}</h2>}
      {children}
    </section>
  );
}

function TwoCol({ children }: any) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-5">{children}</div>;
}

function Input({ name, label }: any) {
  return (
    <div>
      <Field name={name} placeholder={label} className="w-full border p-3 rounded" />
      <ErrorMessage name={name} component="p" className="text-red-500 text-sm mt-1" />
    </div>
  );
}

function Textarea({ name, label }: any) {
  return (
    <div>
      <Field as="textarea" rows={4} name={name} placeholder={label} className="w-full border p-3 rounded" />
      <ErrorMessage name={name} component="p" className="text-red-500 text-sm mt-1" />
    </div>
  );
}

function Select({ name, options }: any) {
  return (
    <div>
      <Field as="select" name={name} className="w-full border p-3 rounded">
        <option value="">Select</option>
        {options.map((o: string) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component="p" className="text-red-500 text-sm mt-1" />
    </div>
  );
}
