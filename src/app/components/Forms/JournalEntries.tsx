"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import {
  Button,
  Checkbox,
  Label,
  Select,
  Table,
  TextInput,
  Tooltip,
} from "flowbite-react";
import { Icon } from "@iconify/react";
import AuthButton from "../resuable/button/AuthButton";
import { accountType } from "@/utils/helpers/accountType";
import { currencies } from "@/utils/helpers/currency";

interface Order {
  account_type: string;
  description: string;
  transaction_type: string;
  contact: string;
  tax: string;
  debit: string;
  credit: string;
}

interface FormValues {
  id: number;
  date: string;
  journal_number: string;
  reference_number: string;
  currency: string;
  journal_type: string;
  status: string;
  orders: Order[];
}

const validationSchema = Yup.object({
  date: Yup.string().required("Required"),
  journal_number: Yup.string().required("Required"),
  reference_number: Yup.string().required("Required"),
  currency: Yup.string().required("Required"),
  status: Yup.string().required("Required"),
  orders: Yup.array().of(
    Yup.object({
      account_type: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      transaction_type: Yup.string().required("Required"),
      contact: Yup.string().required("Required"),
      tax: Yup.string().required("Required"),
    }),
  ),
});

const initialValues = {
  id: 1,
  date: new Date().toISOString().split("T")[0],
  journal_number: "",
  reference_number: "",
  currency: "",
  journal_type: "",
  status: "Pending",
  orders: [
    {
      account_type: "",
      contact: "",
      tax: "",
      debit: "",
      credit: "",
      description: "",
      transaction_type: "",
    },
  ],
};

const JournalEntriesForm: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl mb-6">Add New Journal Entries</h2>
      <Formik<FormValues>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        {({ values, touched, errors }) => (
          <Form>
            <div className="grid grid-cols-12 gap-6">
              <div className="lg:col-span-4 md:col-span-6 col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="date" value="Date *" />
                </div>
                <Field
                  as={TextInput}
                  id="date"
                  type="date"
                  sizing="lg"
                  name="date"
                  className={`form-control ${touched.date && errors.date ? "error" : ""}`}
                />
                <ErrorMessage
                  name="date"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="lg:col-span-4 md:col-span-6 col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="journal_number" value="Journal Number *" />
                </div>
                <Field
                  as={TextInput}
                  id="journal_number"
                  sizing="lg"
                  name="journal_number"
                  className={`form-control ${touched.journal_number && errors.journal_number ? "error" : ""}`}
                />
                <ErrorMessage
                  name="journal_number"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="lg:col-span-4 md:col-span-6 col-span-12">
                <div className="mb-2 block">
                  <Label
                    htmlFor="reference_number"
                    value="Reference Number *"
                  />
                </div>
                <Field
                  as={TextInput}
                  id="reference_number"
                  sizing="lg"
                  name="reference_number"
                  className={`form-control ${touched.reference_number && errors.reference_number ? "error" : ""}`}
                />
                <ErrorMessage
                  name="reference_number"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="lg:col-span-4 md:col-span-6 col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="currency" value="Currency *" />
                </div>
                <Field
                  as={TextInput}
                  id="currency"
                  name="currency"
                  sizing="lg"
                  className={`form-control ${touched.currency && errors.currency ? "error" : ""}`}
                >
                  <option value="">Choose a currency</option>
                  {currencies.map((val, i) => (
                    <option key={i} value={val}>
                      {val}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                  name="currency"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="lg:col-span-4 md:col-span-6 col-span-12">
                <div className="mb-2 block">
                  <Label htmlFor="journal_type" value="Journal Type" />
                </div>
                <div className="flex items-center gap-2"></div>
                <Field
                  as={Checkbox}
                  id="journal_type"
                  name="journal_type"
                  sizing="lg"
                  className={`checkbox me-2 form-control ${touched.currency && errors.currency ? "error" : ""}`}
                />
                <Label
                  htmlFor="accept"
                  className="opacity-90 font-normal cursor-pointer"
                >
                  Cash based journal
                </Label>
              </div>
            </div>

            <div className="mt-6 overflow-x-auto overflow-y-hidden">
              <FieldArray name="orders">
                {({ push, remove }) => (
                  <Table className="mt-4">
                    <Table.Head>
                      <Table.HeadCell></Table.HeadCell>
                      <Table.HeadCell>Account Type *</Table.HeadCell>
                      <Table.HeadCell>Description *</Table.HeadCell>
                      <Table.HeadCell>Contact *</Table.HeadCell>
                      <Table.HeadCell>Transaction Type *</Table.HeadCell>
                      <Table.HeadCell>Tax *</Table.HeadCell>
                      <Table.HeadCell>Debit *</Table.HeadCell>
                      <Table.HeadCell>Credit *</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y divide-border dark:divide-darkborder">
                      {values.orders.map((order, index) => (
                        <Table.Row key={index}>
                          <Table.Cell className="whitespace-nowrap">
                            <Tooltip content="Add Item" placement="bottom">
                              <Button
                                className="p-0 mb-2 bg-lightprimary text-primary h-8 w-8 rounded-full flex justify-center items-center hover:bg-primary hover:text-white"
                                onClick={() =>
                                  push({
                                    account_type: "",
                                    contact: "",
                                    tax: "",
                                    debit: "",
                                    credit: "",
                                    description: "",
                                    transaction_type: "",
                                  })
                                }
                              >
                                <Icon icon="mdi:plus-circle" height={18} />
                              </Button>
                            </Tooltip>
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap min-w-44">
                            <Field
                              as={Select}
                              id={`orders.${index}.account_type`}
                              name={`orders.${index}.account_type`}
                              sizing="lg"
                              className={`select-md form-control ${touched.orders?.[index]?.account_type && typeof errors.orders?.[index] === "object" && errors.orders?.[index]?.account_type ? "error" : ""}`}
                            >
                              <option value=""></option>
                              {accountType.map((type, index) => (
                                <optgroup key={index} label={type.name}>
                                  {type.name}
                                  {type?.sub?.map((subType, subIndex) => (
                                    <option
                                      key={subIndex}
                                      value={subType.toLowerCase()}
                                    >
                                      {subType}
                                    </option>
                                  ))}
                                </optgroup>
                              ))}
                            </Field>
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap min-w-44">
                            <Field
                              as={TextInput}
                              type="text"
                              name={`orders.${index}.description`}
                              sizing="lg"
                              //   placeholder="Item Name"
                              className={`form-control ${touched.orders?.[index]?.description && typeof errors.orders?.[index] === "object" && errors.orders?.[index]?.description ? "error" : ""}`}
                            />
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap min-w-44">
                            <Field
                              as={TextInput}
                              type="number"
                              name={`orders.${index}.contact`}
                              sizing="lg"
                              //   placeholder="Unit Price"
                              className={`form-control ${touched.orders?.[index]?.contact && typeof errors.orders?.[index] === "object" && errors.orders?.[index]?.contact ? "error" : ""}`}
                            />
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap min-w-44">
                            <Field
                              as={TextInput}
                              type="text"
                              name={`orders.${index}.transaction_type`}
                              sizing="lg"
                              //   placeholder="Item Name"
                              className={`form-control ${touched.orders?.[index]?.transaction_type && typeof errors.orders?.[index] === "object" && errors.orders?.[index]?.transaction_type ? "error" : ""}`}
                            />
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap min-w-44">
                            <Field
                              as={Select}
                              type="number"
                              name={`orders.${index}.tax`}
                              sizing="lg"
                              //   placeholder="tax"
                              className={`select-md form-control ${touched.orders?.[index]?.tax && typeof errors.orders?.[index] === "object" && errors.orders?.[index]?.tax ? "error" : ""}`}
                            />
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap min-w-44">
                            <Field
                              as={TextInput}
                              type="number"
                              name={`orders.${index}.credit`}
                              sizing="lg"
                              //   placeholder="tax"
                              className={`form-control ${touched.orders?.[index]?.credit && typeof errors.orders?.[index] === "object" && errors.orders?.[index]?.credit ? "error" : ""}`}
                            />
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap min-w-44">
                            <Field
                              as={TextInput}
                              type="number"
                              sizing="lg"
                              name={`orders.${index}.debit`}
                              //   placeholder="tax"
                              className={`form-control ${touched.orders?.[index]?.debit && typeof errors.orders?.[index] === "object" && errors.orders?.[index]?.debit ? "error" : ""}`}
                            />
                          </Table.Cell>
                          <Table.Cell className="whitespace-nowrap">
                            <Tooltip content="Delete Item" placement="bottom">
                              <Button
                                color="lighterror"
                                className="btn-circle p-0 mb-2"
                                onClick={() => remove(index)}
                              >
                                <Icon
                                  icon="solar:trash-bin-minimalistic-outline"
                                  height={18}
                                />
                              </Button>
                            </Tooltip>
                          </Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table>
                )}
              </FieldArray>
            </div>

            <div className="flex justify-end ">
              <div className="flex justify-end gap-3 mt-2">
                <AuthButton>Submit</AuthButton>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default JournalEntriesForm;
