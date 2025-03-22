"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { Checkbox, Label, Select, TextInput } from "flowbite-react";
import AuthLoadingButton from "../resuable/button/AuthLoading";
import AuthButton from "../resuable/button/AuthButton";
import { employees } from "@/app/context/invoices";
import { accountType } from "@/utils/helpers/accountType";
import { currencies } from "@/utils/helpers/currency";

interface FormValues {
  account_type: string;
  account_code: string;
  account_name: string;
  description: string;
  sub_account: boolean;
  parent_account: string;
  currency: string;
  account_number: string;
}

const ChartOfAccount = ({
  loading,
  setLoading,
}: {
  loading: boolean;
  setLoading: (e: boolean) => void;
}) => {
  const validationSchema = Yup.object().shape({
    account_type: Yup.string().required("Account Type is required"),
    account_name: Yup.string().required("Account Name is required"),
    account_code: Yup.string().required("Account Code is required"),
    description: Yup.string().required("Description is required"),
    account_number: Yup.string().when("account_type", {
      is: "bank",
      then: (schema) => schema.required("Account Number is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    currency: Yup.string().when("account_type", {
      is: "bank",
      then: (schema) => schema.required("Currency is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
    parent_account: Yup.string().when("sub_account", {
      is: true,
      then: (schema) => schema.required("Parent Account is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
  });

  const [subAccount, setSubAccount] = useState(false);

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
          account_code: "",
          account_name: "",
          account_type: "",
          description: "",
          sub_account: false,
          parent_account: "",
          account_number: "",
          currency: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors, handleChange, values }) => (
          <Form className="mt-6">
            <div className="grid grid-cols-12 gap-6 mb-4">
              {/* Account Type */}
              <div className="lg:col-span-6 md:col-span-6 col-span-12 ">
                <div className="mb-2 block">
                  <Label htmlFor="account_type" value="Account Type *" />
                </div>
                <Field
                  as={Select}
                  id="account_type"
                  name="account_type"
                  sizing="lg"
                  className={`select-md form-control ${touched.account_type && errors.account_type ? "error" : ""}`}
                >
                  <option value=""></option>
                  {accountType.map((type, index) => (
                    <optgroup key={index} label={type.name}>{type.name}
                      {type?.sub?.map((subType, subIndex) => (
                        <option key={subIndex} value={subType.toLowerCase()}>
                          {subType}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </Field>
                <ErrorMessage
                  name="account_type"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Account Code */}
              <div className=" lg:col-span-6 md:col-span-6 col-span-12">
                <Label
                  htmlFor="account_code"
                  value="Account Code *"
                  className="mb-2 block"
                />
                <Field
                  id="account_code"
                  name="account_code"
                  type="text"
                  className={`form-control w-full ${touched.account_code && errors.account_code ? "error" : ""}`}
                  sizing="lg"
                  as={TextInput}
                />
                <ErrorMessage
                  name="account_code"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              {/* Account Name */}
              <div className=" lg:col-span-6 md:col-span-6 col-span-12">
                <Label
                  htmlFor="account_name"
                  value="Account Name *"
                  className="mb-2 block"
                />
                <Field
                  id="account_name"
                  name="account_name"
                  type="text"
                  className={`form-control w-full ${touched.account_name && errors.account_name ? "error" : ""}`}
                  sizing="lg"
                  as={TextInput}
                />
                <ErrorMessage
                  name="account_name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              {/* Description */}
              <div className=" lg:col-span-6 md:col-span-6 col-span-12">
                <Label
                  htmlFor="description"
                  value="Description *"
                  className="mb-2 block"
                />
                <Field
                  id="description"
                  name="description"
                  type="text"
                  className={`form-control w-full ${touched.description && errors.description ? "error" : ""}`}
                  sizing="lg"
                  as={TextInput}
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Sub Account */}
              {values.account_type === "asset" && (
                <div className=" lg:col-span-6 md:col-span-6 col-span-12">
                  <Field
                    as={Checkbox}
                    id="sub_account"
                    name="sub_account"
                    sizing="lg"
                    className={`checkbox me-2 form-control ${touched.sub_account && errors.sub_account ? "error" : ""}`}
                  />
                  <Label
                    htmlFor="sub_account"
                    className="opacity-90 font-normal cursor-pointer"
                  >
                    Make a Sub Account
                  </Label>
                </div>
              )}

              {/* Parent Account */}
              {values.account_type === "asset" && values.sub_account && (
                <div className=" lg:col-span-6 md:col-span-6 col-span-12">
                  <Label
                    htmlFor="parent_account"
                    value="Parent Account *"
                    className="mb-2 block"
                  />
                  <Field
                    id="parent_account"
                    name="parent_account"
                    type="text"
                    className={`form-control w-full ${touched.parent_account && errors.parent_account ? "error" : ""}`}
                    sizing="lg"
                    as={TextInput}
                  />
                  <ErrorMessage
                    name="parent_account"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              )}

              {/* Account Number */}
              {values.account_type === "bank" && (
                <div className=" lg:col-span-6 md:col-span-6 col-span-12">
                  <Label
                    htmlFor="account_number"
                    value="Account Number *"
                    className="mb-2 block"
                  />
                  <Field
                    as={TextInput}
                    id="account_number"
                    name="account_number"
                    sizing="lg"
                    className={`form-control ${touched.account_number && errors.account_number ? "error" : ""}`}
                  />
                  <ErrorMessage
                    name={`account_number`}
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              )}

              {/* Currency */}
              {values.account_type === "bank" && (
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                  <Label
                    htmlFor="currency"
                    value="Currency *"
                    className="mb-2 block"
                  />
                  <Field
                    name="currency"
                    as={Select}
                    sizing="lg"
                    placeholder="NGN"
                    className={`form-control select-md ${touched.currency && errors.currency ? "error" : ""}`}
                  >
                    <option value="">Choose a currency</option>
                                        {currencies.map((val, i) => (
                                          <option key={i} value={val}>
                                            {val}
                                          </option>
                                        ))}
                  </Field>
                  <ErrorMessage
                    name={`currency`}
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              )}
            </div>
            {loading ? (
              <AuthLoadingButton></AuthLoadingButton>
            ) : (
              <AuthButton>Add Account</AuthButton>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChartOfAccount;
