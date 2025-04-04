"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Label, Progress, TextInput } from "flowbite-react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import AuthLoadingButton from "@/app/components/resuable/button/AuthLoading";
import AuthButton from "@/app/components/resuable/button/AuthButton";

interface FormValues {
  name: string;
  company_name: string;
  email: string;
  password: string;
}

const AuthRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progressColor, setProgressColor] = useState("#DC2626");
  const [progressStrength, setProgressStrength] = useState("Weak");

  // Validation schema
  const validationSchema = Yup.object({
    company_name: Yup.string().required("Company Name is required"),
    name: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email Address is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        RegExp("(.*[a-z].*)"),
        "Password must contain at least one lowercase letter",
      )
      .matches(
        RegExp("(.*[A-Z].*)"),
        "Password must contain at least one uppercase letter",
      )
      .matches(
        RegExp("(.*[a-z].*)"),
        "Password must contain at least one lowercase letter",
      )
      .matches(RegExp("(.*\\d.*)"), "Password must contain a number")
      .matches(
        RegExp('[!@#$%^&*(),/.?":{}|<>]'),
        "Password must contain a special character",
      )
      .min(8, "Password must be at least 8 characters long"),
  });

  // Handle form submission
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
    <Formik
      initialValues={{ company_name: "", name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ touched, errors, values }) => {
        const validationConditions = [
          { condition: "Password is valid", isValid: !errors.password },
          {
            condition: "Password is at least 8 characters long",
            isValid: values.password.length >= 8,
          },
          {
            condition: "Password contains at least one uppercase letter",
            isValid: /[A-Z]/.test(values.password),
          },
          {
            condition: "Password contains at least one lowercase letter",
            isValid: /[a-z]/.test(values.password),
          },
          {
            condition: "Password contains at least one number",
            isValid: /\d/.test(values.password),
          },
          {
            condition: "Password contains at least one special character",
            isValid: /[!@#$%^&*(),.?":{}|<>]/.test(values.password),
          },
        ];

        const fulfilledConditions = validationConditions.filter(
          (condition) => condition.isValid,
        );

        // let progress = 0;
        const progress = Math.floor(
          (fulfilledConditions.length / validationConditions.length) * 100,
        );

        if (progress <= 25) {
          setProgressColor("error");
          setProgressStrength("Weak");
        } else if (progress > 25 && progress <= 50) {
          setProgressColor("warning");
          setProgressStrength("Fair");
        } else if (progress > 50 && progress <= 70) {
          setProgressColor("primary");
          setProgressStrength("Good");
        } else if (progress > 70) {
          setProgressColor("success");
          setProgressStrength("Strong");
        }
        return (
          <Form className="mt-6">
            {/* Full Name */}
            <div className="mb-4">
              <Label
                htmlFor="name"
                value="Full Name *"
                className="mb-2 block"
              />
              <Field
                id="name"
                name="name"
                type="text"
                className={`form-control w-full ${
                  touched.name && errors.name ? "error" : ""
                }`}
                sizing="lg"
                as={TextInput}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Company Name */}
            <div className="mb-4">
              <Label
                htmlFor="company_name"
                value="Company Name *"
                className="mb-2 block"
              />
              <Field
                id="company_name"
                name="company_name"
                type="text"
                className={`form-control w-full ${touched.company_name && errors.company_name ? "error" : ""}`}
                sizing="lg"
                as={TextInput}
              />
              <ErrorMessage
                name="company_name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

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
              <div className="mt-3">
                {values.password !== "" && (
                  <Progress
                    progress={progress}
                    textLabel={progressStrength}
                    size="lg"
                    color={progressColor}
                    labelText
                  />
                )}
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              {loading ? (
                <AuthLoadingButton />
              ) : (
                <AuthButton>Sign Up</AuthButton>
              )}
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AuthRegister;
