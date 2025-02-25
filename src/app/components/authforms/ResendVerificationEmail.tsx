"use client";
import { Button, Label, TextInput } from "flowbite-react";
import Link from "next/link";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthLoadingButton from "@/app/components/resuable/button/AuthLoading";
import AuthButton from "@/app/components/resuable/button/AuthButton";

const ResendVerificationEmail = () => {
   const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required("Email is required"),
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
    <>
      <Formik
      initialValues={{ email: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
    <Form className="mt-6">
       {/* Email */}
            <div className="mb-4">
                  <Label htmlFor="email" value="Email Address" className="mb-2 block" />
                  <Field id="email" name="email" type="text" className="form-control w-full" sizing='lg' as={TextInput} />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>

          {/* Submit Button */}
          <div className="mt-6">

          {loading ? <AuthLoadingButton>Resend Verification Email</AuthLoadingButton> : <AuthButton>Resend Verification Email</AuthButton>}
          </div>
        </Form>
      )}
      </Formik>
    </>
  );
};

export default ResendVerificationEmail;
