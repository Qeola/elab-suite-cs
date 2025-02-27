"use client";

import React, { useState, useContext, useEffect } from "react";
import {
  Alert,
  Button,
  Label,
  Select,
  TextInput,
  Table,
  Tooltip,
} from "flowbite-react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { format, isValid } from "date-fns";
import { invoices } from "@/app/context/invoices";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthButton from "../resuable/button/AuthButton";

const validationSchema = Yup.object({
  client_name: Yup.string().required("Client's Name is required"),
  client_email: Yup.string()
    .email("Invalid email format")
    .required("Client's Email is required"),
  project_name: Yup.string().required("Project Name is required"),
  project_timeline: Yup.string().required("Project Timeline is required"),
  project_focus: Yup.string().required("Project Focus is required"),
  tranches: Yup.string().required("No. of Tranches is required"),
  amount: Yup.number()
    .positive("Amount must be positive")
    .required("Amount is required"),
  currency: Yup.string().required("Currency is required"),
  payment_dueDate: Yup.date().required("Payment Due Date is required"),
  discount: Yup.string(),
});

function GenerateInvoiceForm() {
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();

  const initialValues = {
    client_name: "",
    client_email: "",
    project_name: "",
    project_timeline: "",
    project_focus: "",
    tranches: "",
    amount: "",
    currency: "USD",
    payment_dueDate: "",
    discount: "",
  };

  const calculateTotals = (orders: any[]) => {
    let subtotal = 0;

    orders.forEach((order) => {
      const unitPrice = parseFloat(order.unitPrice) || 0;
      const units = parseInt(order.units) || 0;
      const totalCost = unitPrice * units;

      subtotal += totalCost;
      order.unitTotalPrice = totalCost;
    });

    const vat = subtotal * 0.1;
    const grandTotal = subtotal + vat;

    return { subtotal, vat, grandTotal };
  };

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

  return (
    <div>
      <h2 className="text-xl mb-6">Add New Invoice Details</h2>
      {/* <p>Date: {formattedOrderDate}</p> */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <div className="bg-lightgray dark:bg-gray-800/70 p-6 my-6 rounded-md">
              {/* Client */}
              <div className="border-b border-ld  py-3 mb-9 text-lg">
                Client Details
              </div>
              <div className="grid grid-cols-12 gap-6">
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                  <div className="mb-2 block">
                    <Label htmlFor="client_name" value="Client Name" />
                  </div>
                  <Field
                    id="client_name"
                    name="client_name"
                    type="text"
                    as={TextInput}
                    sizing="lg"
                    className="form-control"
                  />
                </div>
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                  <div className="mb-2 block">
                    <Label htmlFor="client_email" value="Client Email" />
                  </div>
                  <Field
                    id="client_email"
                    name="client_email"
                    as={TextInput}
                    sizing="lg"
                    type="email"
                    className="form-control"
                  />
                </div>
              </div>

              {/* Product */}
              <div className="border-b border-ld  py-3 my-9 text-lg">
                Product Details
              </div>
              <div className="grid grid-cols-12 gap-6">
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                  <div className="mb-2 block">
                    <Label htmlFor="project_name" value="Product Name" />
                  </div>
                  <Field
                    id="project_name"
                    name="project_name"
                    type="text"
                    as={TextInput}
                    sizing="lg"
                    className="form-control"
                  />
                </div>
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="project_timeline"
                      value="Product Timeline"
                    />
                  </div>
                  <Field
                    id="project_timeline"
                    name="project_timeline"
                    as={TextInput}
                    sizing="lg"
                    type="email"
                    className="form-control"
                  />
                </div>
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
      {showAlert && (
        <Alert color="warning" rounded className="fixed top-3">
          Invoice added successfully.
        </Alert>
      )}
    </div>
  );
}

export default GenerateInvoiceForm;
