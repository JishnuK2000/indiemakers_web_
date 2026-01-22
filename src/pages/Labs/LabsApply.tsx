import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { motion, AnimatePresence, Variants } from "framer-motion";

/* -------------------- STEP DEFINITIONS -------------------- */

const STEPS = [
  "About You",
  "The Idea",
  "Market & Validation",
  "You as a Partner",
  "Commitment & Timeline",
  "Review & Submit",
];

interface LabsFormValues {
  fullName: string;
  email: string;
  role: string;
  website: string;
  problem: string;
  targetCustomer: string;
  solution: string;
  validation: string[];
  businessModel: string;
  whyYou: string;
  expectations: string;
  involvement: string;
  startTimeline: string;
}

/* -------------------- VALIDATION PER STEP -------------------- */
/* -------------------- VALIDATION PER STEP -------------------- */
const stepSchemas = [
  // Step 0 — About You
  Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    role: Yup.string().required("Role is required"),
    website: Yup.string(), // optional
  }),

  // Step 1 — The Idea
  Yup.object({
    problem: Yup.string().required("Problem is required"),
    targetCustomer: Yup.string().required("Target customer is required"),
    solution: Yup.string().required("Solution is required"),
  }),

  // Step 2 — Market & Validation
  Yup.object({
    validation: Yup.array()
      .min(1, "Please select at least one validation option")
      .required("Validation is required"),
    businessModel: Yup.string().required("Business model is required"),
  }),

  // Step 3 — You as a Partner
  Yup.object({
    whyYou: Yup.string().required("Please explain why you / your team"),
    expectations: Yup.string().required("Please explain the support you need"),
  }),

  // Step 4 — Commitment & Timeline
  Yup.object({
    involvement: Yup.string().required("Please select your involvement"),
    startTimeline: Yup.string().required("Please select a start timeline"),
  }),

  // Step 5 — Review & Submit
  Yup.object(),
];
/* -------------------- STEP ANIMATION -------------------- */
const stepVariants: Variants = {
  enter: { opacity: 0, y: 30 },
  center: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.3, ease: "easeIn" } },
};

/* -------------------- EMAIL BODY -------------------- */

const buildEmailBody = (values: LabsFormValues): string =>
  `
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

MARKET & VALIDATION
Validation: ${values.validation.join(", ")}
Business Model: ${values.businessModel}

YOU AS A PARTNER
Why You: ${values.whyYou}
Expectations: ${values.expectations}

COMMITMENT & TIMELINE
Involvement: ${values.involvement}
Start Timeline: ${values.startTimeline}

Submitted On: ${new Date().toLocaleString()}
`.trim();

/* -------------------- PAGE -------------------- */

export default function LabsApply() {
  const [step, setStep] = useState(0);
  const isLast = step === STEPS.length - 1;

  return (
    <div className="bg-white pt-28 sm:pt-40 lg:pt-[220px] pb-24 px-4 sm:px-6 lg:px-16 max-h-screen overflow-y-auto">
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
            validation: [],
            businessModel: "",
            whyYou: "",
            expectations: "",
            involvement: "",
            startTimeline: "",
          }}
          validationSchema={stepSchemas[step]}
          validateOnMount
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            try {
              const payload = {
                ...values,
                validation: values.validation.join(", "),
                createdAt: new Date().toISOString(),
              };

              // const res = await fetch(
              //   "https://sheetdb.io/api/v1/prbayidgix6el",
              //   {
              //     method: "POST",
              //     headers: { "Content-Type": "application/json" },
              //     body: JSON.stringify({ data: [payload] }),
              //   },
              // );
              // if (!res.ok) throw new Error("Request failed");

              const subject = encodeURIComponent(
                `New Labs Application – ${values.fullName}`,
              );
              const body = encodeURIComponent(buildEmailBody(values));
              window.open(
                `https://mail.google.com/mail/?view=cm&fs=1&to=vinilvalsan1991@gmail.com&su=${subject}&body=${body}`,
                "_blank",
              );

              alert("Application submitted successfully 🚀");
              resetForm();
              setStep(0);
            } catch {
              alert("Submission failed ❌");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isValid, values, setFieldValue }) => (
            <Form>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  {renderStep(step, values, setFieldValue)}
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-between mt-14">
                <button
                  type="button"
                  disabled={!isValid} // <-- disables button if current step is invalid
                  onClick={() => setStep(step + 1)}
                  className={`ml-auto px-6 py-3 rounded-full text-white transition-all duration-300 ${
                    isValid
                      ? "bg-[#062F2C] hover:scale-[1.02]"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                >
                  Next
                </button>

                {/* Submit Button */}
                {isLast && (
                  <button
                    type="submit"
                    disabled={!isValid} // <-- disables submit if form invalid
                    className={`ml-auto px-8 py-3 rounded-full text-white transition-all duration-300 ${
                      isValid
                        ? "bg-[#062F2C] hover:scale-[1.02]"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
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
          <Input name="targetCustomer" label="Target customer" />
          <Textarea name="solution" label="Proposed solution" />
        </Section>
      );

    case 2:
      return (
        <Section title="Market & Validation">
          {[
            "No validation yet",
            "Customer interviews",
            "Pilot users",
            "Paying customers",
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

          <Input name="businessModel" label="Business model" />
        </Section>
      );

    case 3:
      return (
        <Section title="You as a Partner">
          <Textarea name="whyYou" label="Why you? Why your team?" />
          <Textarea
            name="expectations"
            label="What kind of support are you looking for?"
          />
        </Section>
      );

    case 4:
      return (
        <Section title="Commitment & Timeline">
          <Select
            name="involvement"
            options={["Full-time", "Part-time", "Advisory only"]}
          />
          <Select
            name="startTimeline"
            options={["Immediately", "1–3 months", "3+ months"]}
          />
        </Section>
      );

    case 5:
      return (
        <Section title="Review & Submit">
          <p className="text-gray-600">
            Review your answers before submitting.
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
