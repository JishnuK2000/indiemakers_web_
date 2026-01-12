// validation.ts
import * as Yup from "yup";

export const labsSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  role: Yup.string().required("Role is required"),
  problem: Yup.string().required("Problem is required"),
  targetCustomer: Yup.string().required("Target customer is required"),
  solution: Yup.string().required("Solution is required"),
  whyNow: Yup.string().required("This field is required"),
  validation: Yup.array().min(1, "Select at least one option"),
  businessModel: Yup.string().required("Business model is required"),
  opportunitySize: Yup.string().required("Opportunity size is required"),
  whyYou: Yup.string().required("This field is required"),
  expectations: Yup.string().required("This field is required"),
  equityPartnership: Yup.string().required("Required"),
  involvement: Yup.string().required("Required"),
  timeline: Yup.string().required("Required"),
  success3Years: Yup.string().required("Required"),
});
