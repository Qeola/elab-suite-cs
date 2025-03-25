"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Checkbox, Label, TextInput } from "flowbite-react";
import AuthLoadingButton from "../resuable/button/AuthLoading";
import AuthButton from "../resuable/button/AuthButton";

interface FormValues {
  name: string;
  rate: string;
  compound_tax: boolean;
}

const EditTaxRate = ({
  loading,
  setLoading,
  slug,
}: {
  loading: boolean;
  slug: string;
  setLoading: (e: boolean) => void;
}) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Tax Name is required"),
    rate: Yup.string().required("Tax Rate is required"),
  });

  const [data, setData] = useState({
    name: "VAT",
    rate: "5%",
    compound_tax: false,
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
        initialValues={{
          name: data.name || "",
          rate: data.rate || "",
          compound_tax: data.compound_tax || false,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors }) => (
          <Form className="mt-6">
            <div className="grid grid-cols-12 gap-6 mb-4">
              {/* Tax Name */}
              <div className=" lg:col-span-6 md:col-span-6 col-span-12">
                <Label
                  htmlFor="name"
                  value="Account Code *"
                  className="mb-2 block"
                />
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
              {/* Account Name */}
              <div className=" lg:col-span-6 md:col-span-6 col-span-12">
                <Label
                  htmlFor="rate"
                  value="Tax Rate *"
                  className="mb-2 block"
                />
                <Field
                  id="rate"
                  name="rate"
                  type="text"
                  className={`form-control w-full ${touched.rate && errors.rate ? "error" : ""}`}
                  sizing="lg"
                  as={TextInput}
                />
                <ErrorMessage
                  name="rate"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Compound Tax */}
              <div className=" lg:col-span-6 md:col-span-6 col-span-12"></div>
              <div className=" lg:col-span-6 md:col-span-6 col-span-12">
                <Field
                  as={Checkbox}
                  id="compound_tax"
                  name="compound_tax"
                  sizing="lg"
                  className={`checkbox me-2 form-control ${touched.compound_tax && errors.compound_tax ? "error" : ""}`}
                />
                <Label
                  htmlFor="compound_tax"
                  className="opacity-90 font-normal cursor-pointer"
                >
                  This tax is a compound tax
                </Label>
              </div>
            </div>
            {loading ? (
              <AuthLoadingButton></AuthLoadingButton>
            ) : (
              <AuthButton>Update Tax Rate</AuthButton>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditTaxRate;
