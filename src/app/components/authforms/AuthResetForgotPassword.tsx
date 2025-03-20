"use client";
import { Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import AuthLoadingButton from "@/app/components/resuable/button/AuthLoading";
import AuthButton from "@/app/components/resuable/button/AuthButton";
import { useParams } from "next/navigation";
import { HiEye, HiEyeOff } from "react-icons/hi";

interface FormValues {
  token: string | string[] | undefined;
  password: string;
  confirm_Password: string;
}

const AuthResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const params = useParams();
  const initialValues = {
    token: params.token,
    password: "",
    confirm_Password: "",
  };
  const validationSchema = Yup.object({
    password: Yup.string()
      .required("Password is required")
      .required("Password is required")
      .matches(
        RegExp("(.*[a-z].*)"),
        "Password must contain at least one lowercase letter",
      )
      .matches(
        RegExp("(.*[A-Z].*)"),
        "Password must contain at least one uppercase letter",
      )
      .matches(RegExp("(.*\\d.*)"), "Password must contain a number")
      .matches(
        RegExp('[!@#$%^&*(),.?":{}|<>]'),
        "Password must contain a special character",
      )
      .min(8, "Password must be at least 8 characters long"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
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
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors }) => (
          <Form className="mt-6">
            {/* New Password */}
            <div className="mb-4">
              <Label
                htmlFor="password"
                value="Password *"
                className="mb-2 block"
              />
              <div className="relative w-full">
                <Field
                  id="password"
                  name="password"
                  sizing="lg"
                  type={showPassword ? "text" : "password"}
                  className={`form-control w-full ${touched.password && errors.password ? "error" : ""}`}
                  as={TextInput}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showPassword ? <HiEyeOff size={22} /> : <HiEye size={22} />}
                </button>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-4">
              <Label
                htmlFor="confirm_password"
                value="Confirm Password *"
                className="mb-2 block"
              />
              <div className="relative w-full">
                <Field
                  id="confirm_password"
                  name="confirm_password"
                  sizing="lg"
                  type={showNewPassword ? "text" : "password"}
                  className={`form-control w-full ${touched.confirm_Password && errors.confirm_Password ? "error" : ""}`}
                  as={TextInput}
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                >
                  {showNewPassword ? (
                    <HiEyeOff size={22} />
                  ) : (
                    <HiEye size={22} />
                  )}
                </button>
              </div>
              <ErrorMessage
                name="confirm_password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              {loading ? (
                <AuthLoadingButton />
              ) : (
                <AuthButton>Reset Password</AuthButton>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AuthResetPassword;
