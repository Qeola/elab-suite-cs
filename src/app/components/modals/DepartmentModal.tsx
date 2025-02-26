import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Label, TextInput } from "flowbite-react";
import AuthLoadingButton from "../resuable/button/AuthLoading";
import AuthButton from "../resuable/button/AuthButton";

const DepartmentModal = ({
  loading,
  setLoading,
}: {
  loading: boolean;
  setLoading: (e: boolean) => void;
}) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values: any, { resetForm }: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      resetForm();
      console.log("Submitted Data:", values);
    }, 1500);
  };
  return (
    <div className="space-y-6">
      <Formik
        initialValues={{ name: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="mt-6">
            {/* Email */}
            <div className="mb-4">
              <Label
                htmlFor="email"
                value="Department Name"
                className="mb-2 block"
              />
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
            <div className="mt-6">
              {loading ? (
                <AuthLoadingButton>Onboarding</AuthLoadingButton>
              ) : (
                <AuthButton>Onboarding</AuthButton>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DepartmentModal;
