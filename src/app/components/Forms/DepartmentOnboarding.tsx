"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Label, TextInput } from "flowbite-react";
import AuthLoadingButton from "../resuable/button/AuthLoading";
import AuthButton from "../resuable/button/AuthButton";

interface FormValues {
  name: string;
  lead: string;
}

const DepartmentOnboarding = ({
  loading,
  setLoading,
}: {
  loading: boolean;
  setLoading: (e: boolean) => void;
}) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Email is required"),
    lead: Yup.string().required("Password is required"),
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
        {({}) => (
          <Form className="mt-6">
            {/* Name */}
            <div className="mb-4">
              <Label htmlFor="name" value="Name" className="mb-2 block" />
              <Field
                id="name"
                name="name"
                type="text"
                className="form-control w-full"
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
              <Label htmlFor="lead" value="Lead" className="mb-2 block" />
              <Field
                id="lead"
                name="lead"
                type="text"
                className="form-control w-full"
                sizing="lg"
                as={TextInput}
              />
              <ErrorMessage
                name="lead"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            {loading ? (
              <AuthLoadingButton>Onboard Department</AuthLoadingButton>
            ) : (
              <AuthButton>Onboard Department</AuthButton>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DepartmentOnboarding;
