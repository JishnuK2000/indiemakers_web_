// src/pages/Labs/LabsApply.tsx
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { labsSchema } from "../../Schema/LabsSchema";
import { useState } from "react";

export default function LabsApply() {
  const navigate = useNavigate();
const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div
      className="h-screen bg-white 
  pt-64 
  px-4 sm:px-6 md:px-10 lg:px-16 
  pb-16
  overflow-y-scroll"
    >
      <div className="max-w-4xl mx-auto text-[#062F2C]">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Apply to Co-Build With Indiemakers
        </h1>

        <p className="text-lg mb-2">
          Indiemakers Labs partners with a small number of founders and domain
          experts to build scalable, profitable digital businesses.
        </p>

        <p className="text-gray-600 mb-10">
          We are selective. Not every application will receive a response.
        </p>

        <Formik
          initialValues={{
            fullName: "",
            email: "",
            role: "",
            website: "",
            problem: "",
            targetCustomer: "",
            solution: "",
            whyNow: "",
            validation: [] as string[],
            validationDetails: "",
            businessModel: "",
            opportunitySize: "",
            whyYou: "",
            expectations: "",
            equityPartnership: "",
            involvement: "",
            timeline: "",
            success3Years: "",
          }}
          validationSchema={labsSchema}
          onSubmit={(values) => {
            console.log("LABS APPLICATION DATA:", values);
            setShowSuccess(true);
          }}
        >
          {({ values, setFieldValue }) => (
            <Form className="space-y-10">
              {/* ABOUT YOU */}
              <Section title="About You">
                <Input name="fullName" label="Full Name" />
                <Input name="email" label="Email Address" />
                <Input name="role" label="Current Role / Background" />
                <Input
                  name="website"
                  label="LinkedIn / Personal Website (Optional)"
                />
              </Section>

              {/* IDEA */}
              <Section title="The Idea">
                <Textarea name="problem" label="Problem you want to solve" />
                <Input name="targetCustomer" label="Target customer" />
                <Textarea name="solution" label="Proposed solution" />
                <Textarea name="whyNow" label="Why now?" />
              </Section>

              {/* VALIDATION */}
              <Section title="Validation & Market">
                {[
                  "No validation yet",
                  "Customer interviews",
                  "Pilot users",
                  "Paying customers",
                  "Revenue-generating business",
                ].map((v) => (
                  <label key={v} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={values.validation.includes(v)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setFieldValue("validation", [
                            ...values.validation,
                            v,
                          ]);
                        } else {
                          setFieldValue(
                            "validation",
                            values.validation.filter((x) => x !== v)
                          );
                        }
                      }}
                    />
                    {v}
                  </label>
                ))}
                <ErrorMessage
                  name="validation"
                  component="p"
                  className="text-red-500"
                />

                <Textarea
                  name="validationDetails"
                  label="Validation details (optional)"
                />
                <Input name="businessModel" label="Business model" />
                <Textarea name="opportunitySize" label="Opportunity size" />
              </Section>

              {/* PARTNER */}
              <Section title="You as a Partner">
                <Textarea name="whyYou" label="Why are you the right person?" />
                <Textarea
                  name="expectations"
                  label="What do you expect from Indiemakers?"
                />
                <Select
                  name="equityPartnership"
                  options={["Yes", "Yes, with conditions", "No"]}
                />
              </Section>

              {/* COMMITMENT */}
              <Section title="Commitment & Timeline">
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
                  options={["Immediately", "Within 1–3 months", "3+ months"]}
                />
                <Textarea name="success3Years" label="Success in 3 years" />
              </Section>

              <p className="text-gray-600">
                Labs partnerships are long-term and selective. We prioritize
                alignment, commitment, and real market opportunity over polished
                pitches.
              </p>

              <button
                type="submit"
                className="px-8 py-3 bg-[#062F2C] text-white rounded-full"
              >
                Submit Application
              </button>
            </Form>
          )}

        </Formik>
        {/* SUCCESS MODAL */}
{showSuccess && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    {/* Backdrop */}
    <div
      className="absolute inset-0 bg-black/50"
      onClick={() => setShowSuccess(false)}
    />

    {/* Modal */}
    <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full mx-4 p-8 text-center">
      <h2 className="text-3xl font-bold text-[#062F2C] mb-4">
        Application Submitted 🎉
      </h2>

      <p className="text-gray-600 mb-6">
        Thank you for applying to Indiemakers Labs.
        <br />
        If there’s a strong fit, we’ll reach out.
      </p>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => setShowSuccess(false)}
          className="px-6 py-3 border rounded-full"
        >
          Close
        </button>

        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-[#062F2C] text-white rounded-full"
        >
          Back to Home
        </button>
      </div>
    </div>
  </div>
)}

      </div>
    </div>
  );
}

/* ---------- Reusable UI Components ---------- */

function Section({ title, children }: any) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

function Input({ name, label }: any) {
  return (
    <div>
      <Field
        name={name}
        placeholder={label}
        className="w-full border p-2 rounded"
      />
      <ErrorMessage name={name} component="p" className="text-red-500" />
    </div>
  );
}

function Textarea({ name, label }: any) {
  return (
    <div>
      <Field
        as="textarea"
        name={name}
        placeholder={label}
        rows={3}
        className="w-full border p-2 rounded"
      />
      <ErrorMessage name={name} component="p" className="text-red-500" />
    </div>
  );
}

function Select({ name, options }: any) {
  return (
    <div>
      <Field as="select" name={name} className="w-full border p-2 rounded">
        <option value="">Select</option>
        {options.map((o: string) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component="p" className="text-red-500" />
    </div>
  );
}
