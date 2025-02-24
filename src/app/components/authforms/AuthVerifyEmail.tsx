"use client";
import { Label, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthLoadingButton from "@/app/components/resuable/button/AuthLoading";
import AuthButton from "@/app/components/resuable/button/AuthButton";
import { useParams } from "next/navigation";

const AuthVerifyEmail = () => {
   const [loading, setLoading] = useState(false);
   const params = useParams();
   const { token } = params;
   const initialValues = {
     token: token || "",
   };
  const validationSchema = Yup.object({
        token: Yup.string().required("Email Token is required"),
      });

      useEffect(() => {
        if (!token) {
        //   toast.error("Invalid token.");
        } else {
          handleSubmit({ token: token });
        }
      }, [token]);

      const handleSubmit = (values: any) => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          console.log("Submitted Data:", values);
        }, 1500);
      };
  return (
    <>
      <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
    <Form>
       {/* Email */}
            <div className="mb-4">
                  <Label htmlFor="token" value="Token" className="mb-2 block" />
                  <Field id="token" name="token" type="text" className="form-control w-full" sizing='lg' as={TextInput} />
                  <ErrorMessage name="token" component="div" className="text-red-500 text-sm mt-1" />
                </div>

          {/* Submit Button */}
          {loading ? <AuthLoadingButton>Verification Email</AuthLoadingButton> : <AuthButton>Verification Email</AuthButton>}
        </Form>
      )}
      </Formik>
    </>
  );
};

export default AuthVerifyEmail;
