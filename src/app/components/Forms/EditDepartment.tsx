"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Label, Select, TextInput } from "flowbite-react";
import AuthLoadingButton from "../resuable/button/AuthLoading";
import AuthButton from "../resuable/button/AuthButton";
import { employees } from "@/app/context/invoices";

interface FormValues {
  name: string;
  lead: string;
}

const EditDepartmentForm = ({
  loading,
  setLoading,
}: {
  loading: boolean;
  setLoading: (e: boolean) => void;
}) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    lead: Yup.string(),
  });

  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>,
  ) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      resetForm();
      console.log("Submitted Data:", values);
    }, 1500);
  };
  return (
    <div>
      <Formik
        initialValues={{ name: "", lead: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors }) => (
          <Form className="mt-6">
            {/* Name */}
            <div className="mb-4">
              <Label htmlFor="name" value="Name *" className="mb-2 block" />
              <Field
                id="name"
                name="name"
                type="text"
                className={`form-control w-full ${touched.name && errors.name ? "error" : ""}`}
                sizing="lg"
                as={TextInput}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            {/* Lead */}
            <div className="mb-4">
              <Label htmlFor="lead" value="Lead *" className="mb-2 block" />
              <Field
                as={Select}
                id="lead"
                name="lead"
                sizing="lg"
                className={`select-md ${touched.lead && errors.lead ? "error" : ""}`}
              >
                <option value="">Nil</option>
                {employees.map((val, i) => (
                  <option key={i} value={val.first_name}>
                    {val.first_name}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="lead"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            {loading ? (
              <AuthLoadingButton></AuthLoadingButton>
            ) : (
              <AuthButton>Edit Department</AuthButton>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditDepartmentForm;
