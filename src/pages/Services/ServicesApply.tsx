import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { motion, AnimatePresence } from "framer-motion";

/* -------------------- STEPS -------------------- */
const STEPS = ["Intent", "Basic Info", "Company Context", "Engagement Scope", "Review"];

/* -------------------- VALIDATION -------------------- */
const stepSchemas = [
  Yup.object(), // Step 0 - Intent (no required fields)
  Yup.object({
    fullName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    company: Yup.string().required("Required"),
  }),
  Yup.object({
    companyStage: Yup.string().required("Required"),
    revenue: Yup.string().required("Required"),
    funding: Yup.string().required("Required"),
  }),
  Yup.object({
    helpWith: Yup.array().min(1, "Select at least one"),
    problem: Yup.string().required("Required"),
    budget: Yup.string().required("Required"),
  }),
  Yup.object(),
];

/* -------------------- EMAIL HELPER -------------------- */
const buildEmailBody = (values: any) => {
  return `
Indiemakers Services – New Request

BASIC INFO
Full Name: ${values.fullName}
Email: ${values.email}
Company: ${values.company}
Website: ${values.website}

COMPANY CONTEXT
Stage: ${values.companyStage}
Revenue: ${values.revenue}
Funding: ${values.funding}

ENGAGEMENT SCOPE
Help With: ${values.helpWith.join(", ")}
Problem: ${values.problem}
Budget: ${values.budget}

Submitted On: ${new Date().toLocaleString()}
`.trim();
};

/* -------------------- PAGE -------------------- */
export default function ServicesApply() {
  const [step, setStep] = useState(0);
  const isLast = step === STEPS.length - 1;

  return (
    <div className="bg-white pt-28 sm:pt-40 lg:pt-[220px] pb-24 px-4 sm:px-6 lg:px-16 max-h-screen overflow-y-auto">
      <div className="max-w-4xl mx-auto text-[#062F2C]">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Work With Indiemakers Services
        </motion.h1>

        <motion.p
          className="text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Step {step + 1} of {STEPS.length} — {STEPS[step]}
        </motion.p>

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
              const subject = encodeURIComponent(`New Services Request – ${values.fullName}`);
              const body = encodeURIComponent(buildEmailBody(values));
              const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=vinilvalsan1991@gmail.com&su=${subject}&body=${body}`;
              window.open(gmailUrl, "_blank");

              alert("Request opened in Gmail! 🚀");
              resetForm();
              setStep(0);
            } catch {
              alert("Something went wrong. Please try again.");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isValid, values, setFieldValue, validateForm }) => (
            <Form>
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  {renderStep(step, values, setFieldValue)}
                </motion.div>
              </AnimatePresence>

              {/* NAVIGATION */}
              <div className="flex justify-between mt-14">
                {step > 0 && (
                  <motion.button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-6 py-3 border rounded-full hover:bg-gray-50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Back
                  </motion.button>
                )}

                {!isLast && (
                  <motion.button
                    type="button"
                    onClick={async () => {
                      const errors = await validateForm();
                      const stepKeys = Object.keys(stepSchemas[step].fields);
                      const stepErrors = stepKeys.filter((key) => errors[key]);
                      if (stepErrors.length === 0) setStep(step + 1);
                      else alert("Please fill all required fields before continuing");
                    }}
                    className="ml-auto px-6 py-3 rounded-full text-white bg-[#062F2C]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Next
                  </motion.button>
                )}

                {isLast && (
                  <motion.button
                    type="submit"
                    className="ml-auto px-8 py-3 bg-[#062F2C] text-white rounded-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Request Review
                  </motion.button>
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
          <motion.p
            className="text-lg text-gray-700 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            We provide senior-level product and engineering execution for teams
            building serious digital products.
            <br /><br />
            This short form helps us understand your needs and determine whether
            we’re a fit.
          </motion.p>
        </Section>
      );

    case 1:
      return (
        <Section title="Basic Information">
          <TwoCol>
            <AnimatedInput name="fullName" label="Full Name" />
            <AnimatedInput name="email" label="Work Email" />
          </TwoCol>
          <TwoCol>
            <AnimatedInput name="company" label="Company / Startup Name" />
            <AnimatedInput name="website" label="Website or Product URL (optional)" />
          </TwoCol>
        </Section>
      );

    case 2:
      return (
        <Section title="Company Context">
          <AnimatedSelect
            name="companyStage"
            options={[
              "Pre-launch / MVP stage",
              "Early revenue",
              "Growing revenue",
              "Funded startup",
              "Established business",
            ]}
          />
          <AnimatedSelect
            name="revenue"
            options={[
              "No revenue yet",
              "Under $10k",
              "$10k–$50k",
              "$50k–$200k",
              "$200k+",
            ]}
          />
          <AnimatedSelect
            name="funding"
            options={["No", "Yes (Angel)", "Yes (Seed)", "Yes (Series A or later)"]}
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
            <motion.label
              key={v}
              className="flex gap-2 items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Field
                type="checkbox"
                name="helpWith"
                value={v}
                className="w-4 h-4"
              />
              {v}
            </motion.label>
          ))}
          <ErrorMessage name="helpWith" component="p" className="text-red-500 text-sm mt-1" />

          <AnimatedTextarea name="problem" label="Describe the problem you're solving" />

          <AnimatedSelect
            name="budget"
            options={["Under $5k", "$5k–$15k", "$15k–$40k", "$40k+"]}
          />
        </Section>
      );

    case 4:
      return (
        <Section title="Thanks — We’ll Review Your Request">
          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            We review every submission carefully.
            <br />
            If there’s a strong fit, we’ll reach out to schedule a conversation.
            <br />
            If not, we’ll let you know — no hard feelings.
          </motion.p>
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

/* -------------------- ANIMATED FORM ELEMENTS -------------------- */
function AnimatedInput({ name, label }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Field name={name} placeholder={label} className="w-full border p-3 rounded" />
      <ErrorMessage name={name} component="p" className="text-red-500 text-sm mt-1" />
    </motion.div>
  );
}

function AnimatedTextarea({ name, label }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Field as="textarea" rows={4} name={name} placeholder={label} className="w-full border p-3 rounded" />
      <ErrorMessage name={name} component="p" className="text-red-500 text-sm mt-1" />
    </motion.div>
  );
}

function AnimatedSelect({ name, options }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Field as="select" name={name} className="w-full border p-3 rounded">
        <option value="">Select</option>
        {options.map((o: string) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component="p" className="text-red-500 text-sm mt-1" />
    </motion.div>
  );
}
