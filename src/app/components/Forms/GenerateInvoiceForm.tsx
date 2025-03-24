"use client";

import React, { useEffect, useState } from "react";
import { Label, Select, TextInput } from "flowbite-react";
import { menuItems } from "@/app/context/invoices";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthButton from "../resuable/button/AuthButton";
import { currencies } from "@/utils/helpers/currency";

const validationSchema = Yup.object({
  client_name: Yup.string().required("Client's Name is required"),
  client_email: Yup.string()
    .email("Invalid email format")
    .required("Client's Email is required"),
  project_name: Yup.string().required("Project Name is required"),
  focus: Yup.string().required("Project Focus is required"),
  due_date: Yup.string().required("Due Date is required"),
  project_timeline: Yup.string().required("Project Timeline is required"),
  project_focus: Yup.string().required("Project Focus is required"),
  tranches: Yup.string().required("No. of Tranches is required"),
  trancheValues: Yup.array()
    .of(Yup.string().required("Tranche Value is required"))
    .test("has-values", "Tranche Value is required", (value) => {
      return (
        Array.isArray(value) &&
        value.length > 0 &&
        value.every((v) => typeof v === "string" && v.trim() !== "")
      );
    }),
  amount: Yup.number()
    .positive("Amount must be positive")
    .required("Amount is required"),
  currency: Yup.string().required("Currency is required"),
  payment_dueDate: Yup.date().required("Payment Due Date is required"),
  discount: Yup.string(),
});

interface FormValues {
  client_name: string;
  client_email: string;
  project_name: string;
  project_timeline: string;
  project_focus: string;
  tranches: string;
  amount: string;
  focus: string;
  due_date: string;
  currency: string;
  payment_dueDate: string;
  discount: string;
  trancheValues: string[];
}

function GenerateInvoiceForm() {
  const [trancheCount, setTrancheCount] = useState(1);

  const initialValues = {
    client_name: "",
    client_email: "",
    project_name: "",
    project_timeline: "",
    project_focus: "",
    tranches: "",
    amount: "",
    focus: "",
    due_date: "",
    currency: "USD",
    payment_dueDate: "",
    discount: "",
    trancheValues: Array(trancheCount).fill(""),
  };

  // const calculateTotals = (orders: any[]) => {
  //   let subtotal = 0;

  //   orders.forEach((order) => {
  //     const unitPrice = parseFloat(order.unitPrice) || 0;
  //     const units = parseInt(order.units) || 0;
  //     const totalCost = unitPrice * units;

  //     subtotal += totalCost;
  //     order.unitTotalPrice = totalCost;
  //   });

  //   const vat = subtotal * 0.1;
  //   const grandTotal = subtotal + vat;

  //   return { subtotal, vat, grandTotal };
  // };

  const handleSubmit = async () => {
    // e.preventDefault();
    // try {
    //   //   await addInvoice(formData);
    //   setShowAlert(true);
    //   setTimeout(() => {
    //     setShowAlert(false);
    //   }, 5000);
    //   router.push("/apps/invoice/list");
    // } catch (error) {
    //   console.error("Error adding invoice:", error);
    // }
  };

  // const parsedDate = isValid(new Date(formData.date))
  //   ? new Date(formData.date)
  //   : new Date();
  // const formattedOrderDate = format(parsedDate, "EEEE, MMMM dd, yyyy");

  const [trancheValues, setTrancheValues] = useState(Array(1).fill(""));

  useEffect(() => {
    setTrancheValues(Array(trancheCount).fill(""));
  }, [trancheCount]);

  return (
    <div>
      <h2 className="text-xl mb-6">Add New Invoice Details</h2>
      {/* <p>Date: {formattedOrderDate}</p> */}
      <Formik<FormValues>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {({ touched, errors, setFieldValue }: any) => (
          <Form>
            <div className="bg-lightgray dark:bg-gray-800/70 p-6 my-6 rounded-md">
              <div className="grid grid-cols-12 gap-6">
                <div className="lg:col-span-4 md:col-span-6 col-span-12">
                  <div className="mb-2 block">
                    <Label htmlFor="client_name" value="Client Name *" />
                  </div>
                  <Field
                    as={Select}
                    id="client_name"
                    name="client_name"
                    sizing="lg"
                    // size={6}
                    className={`select-md ${touched.client_name && errors.client_name ? "error" : ""}`}
                  >
                    <option value="">Choose a client</option>
                    {menuItems.map((val, i) => (
                      <option key={i} value={val}>
                        {val}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="client_name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="lg:col-span-4 md:col-span-6 col-span-12">
                  <div className="mb-2 block">
                    <Label htmlFor="client_email" value="Client Email *" />
                  </div>
                  <Field
                    id="client_email"
                    name="client_email"
                    as={TextInput}
                    sizing="lg"
                    type="email"
                    className={`form-control w-full ${touched.client_email && errors.client_email ? "error" : ""}`}
                  />
                  <ErrorMessage
                    name="client_email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="lg:col-span-4 md:col-span-6 col-span-12 mb-5">
                  <div className="mb-2 block">
                    <Label htmlFor="project_name" value="Product Name *" />
                  </div>
                  <Field
                    id="project_name"
                    name="project_name"
                    type="text"
                    as={TextInput}
                    sizing="lg"
                    className={`form-control w-full ${touched.project_name && errors.project_name ? "error" : ""}`}
                  />
                  <ErrorMessage
                    name="project_name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-12 gap-6">
                <div className="lg:col-span-4 md:col-span-6 col-span-12 mb-5">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="project_timeline"
                      value="Product Timeline *"
                    />
                  </div>
                  <Field
                    id="project_timeline"
                    name="project_timeline"
                    as={TextInput}
                    sizing="lg"
                    type="email"
                    className={`form-control w-full ${touched.project_timeline && errors.project_timeline ? "error" : ""}`}
                  />
                  <ErrorMessage
                    name="project_timeline"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="lg:col-span-4 md:col-span-6 col-span-12 mb-5">
                  <div className="mb-2 block">
                    <Label htmlFor="amount" value="Amount *" />
                  </div>
                  <Field
                    id="amount"
                    name="amount"
                    as={TextInput}
                    sizing="lg"
                    type="number"
                    className={`form-control w-full ${touched.amount && errors.amount ? "error" : ""}`}
                  />
                  <ErrorMessage
                    name="amount"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="lg:col-span-4 md:col-span-6 col-span-12 mb-5">
                  <div className="mb-2 block">
                    <Label htmlFor="currency" value="Currency *" />
                  </div>
                  <Field
                    id="currency"
                    name="currency"
                    type="text"
                    as={Select}
                    sizing="lg"
                    className={`select-md ${touched.currency && errors.currency ? "error" : ""}`}
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
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-6">
                <div className="lg:col-span-4 md:col-span-6 col-span-12 mb-5">
                  <div className="mb-2 block">
                    <Label htmlFor="focus" value="Project Focus *" />
                  </div>
                  <Field
                    id="focus"
                    name="focus"
                    type="text"
                    as={Select}
                    sizing="lg"
                    className={`select-md ${touched.focus && errors.focus ? "error" : ""}`}
                  >
                    <option value="">Choose a focus</option>
                    {menuItems.map((val, i) => (
                      <option key={i} value={val}>
                        {val}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="focus"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="lg:col-span-4 md:col-span-6 col-span-12">
                  <div className="mb-2 block">
                    <Label htmlFor="due_date" value="Due Date *" />
                  </div>
                  <Field
                    id="due_date"
                    name="due_date"
                    as={TextInput}
                    sizing="lg"
                    type="date"
                    className={`form-control w-full ${touched.due_date && errors.due_date ? "error" : ""}`}
                  />
                  <ErrorMessage
                    name="due_date"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="lg:col-span-4 md:col-span-6 col-span-12 mb-5">
                  <div className="mb-2 block">
                    <Label htmlFor="discount" value="Discount" />
                  </div>
                  <Field
                    id="discount"
                    name="discount"
                    as={TextInput}
                    sizing="lg"
                    type="number"
                    className={`form-control w-full ${touched.discount && errors.discount ? "error" : ""}`}
                  />
                  <ErrorMessage
                    name="discount"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="lg:col-span-4 md:col-span-6 col-span-12 mb-5">
                  <div className="mb-2 block">
                    <Label htmlFor="tranches" value="No. of Tranches *" />
                  </div>
                  <Field
                    id="tranches"
                    name="tranches"
                    as={Select}
                    className={`select-md ${touched.tranches && errors.tranches ? "error" : ""}`}
                    sizing="lg"
                    value={trancheCount}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    onChange={(e: { target: { value: any } }) => {
                      const num = Number(e.target.value);
                      setTrancheCount(num);
                      setFieldValue("tranches", num);
                    }}
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </Field>
                </div>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {trancheValues.map((_: any, index: number) => (
                  <div
                    key={index}
                    className="mb-3 lg:col-span-4 md:col-span-6 col-span-12"
                  >
                    <div className="mb-2 block">
                      <Label
                        htmlFor={`trancheValues.${index}`}
                        value={`Tranche ${index + 1} *`}
                      />
                    </div>
                    <Field
                      type="text"
                      as={TextInput}
                      name={`trancheValues.${index}`}
                      id={`trancheValues.${index}`}
                      sizing="lg"
                      // placeholder={`Enter tranche ${index + 1} details`}
                      className={`form-control w-full ${
                        touched.trancheValues?.[index] &&
                        errors.trancheValues?.[index]
                          ? "error"
                          : ""
                      }`}
                    />
                    <ErrorMessage
                      name={`trancheValues.${index}`}
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Totals */}
            <div className="border-t border-ld  py-5 px-4 ">
              <div className="flex justify-end mb-3">
                <div className="flex gap-3 lg:w-1/5">
                  <h2 className="max-w-52 w-full opacity-80">Sub Total:</h2>
                  {/* <h3 className="ms-auto text-base">{formData.subtotal}</h3> */}
                </div>
              </div>
              <div className="flex justify-end mb-3">
                <div className="flex gap-3 lg:w-1/5">
                  <h2 className="max-w-52 w-full opacity-80">Vat:</h2>
                  {/* <h3 className="ms-auto text-base">{formData.vat}</h3> */}
                </div>
              </div>
              <div className="flex justify-end">
                <div className="flex gap-3 lg:w-1/5">
                  <h2 className="max-w-52 w-full opacity-80">Grand Total:</h2>
                  {/* <h3 className="ms-auto text-base">{formData.grandTotal}</h3> */}
                </div>
              </div>
            </div>
            <div className="flex justify-end ">
              <div className="flex justify-end gap-3 mt-2">
                <AuthButton>Create Invoice</AuthButton>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default GenerateInvoiceForm;
