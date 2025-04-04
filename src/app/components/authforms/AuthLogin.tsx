"use client";
import { Label, TextInput } from "flowbite-react";
import Link from "next/link";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { HiEye, HiEyeOff } from "react-icons/hi";
import AuthLoadingButton from "@/app/components/resuable/button/AuthLoading";
import AuthButton from "@/app/components/resuable/button/AuthButton";
import { useRouter } from "next/navigation";

interface FormValues {
  email: string;
  password: string;
}

const AuthLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
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
      router.push("/dashboard/hr/onboarding/departments");
    }, 1500);
  };
  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors }) => (
          <Form className="mt-6">
            {/* Email */}
            <div className="mb-4">
              <Label
                htmlFor="email"
                value="Email Address *"
                className="mb-2 block"
              />
              <Field
                id="email"
                name="email"
                type="text"
                className={`form-control w-full ${touched.email && errors.email ? "error" : ""}`}
                sizing="lg"
                as={TextInput}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Password */}
            <div className="mb-3">
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
            <div className="flex justify-end mb-5">
              {/* <div className="flex items-center gap-2">
            <Checkbox id="accept" className="checkbox" />
            <Label
              htmlFor="accept" 
              className="opacity-90 font-normal cursor-pointer"
            >
              Remember this Device
            </Label>
          </div> */}
              <Link
                href={"/auth/forgot-password"}
                className="text-primary text-sm font-medium"
              >
                Forgot Password ?
              </Link>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              {loading ? (
                <AuthLoadingButton />
              ) : (
                <AuthButton>Sign In</AuthButton>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AuthLogin;
