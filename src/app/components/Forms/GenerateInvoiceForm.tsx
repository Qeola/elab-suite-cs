"use client";

import React from "react";
import { Label, TextInput } from "flowbite-react";
import { menuItems } from "@/app/context/invoices";
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
  // const [showAlert, setShowAlert] = useState(false);

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

  return (
    <div>
      <h2 className="text-xl mb-6">Add New Invoice Details</h2>
      {/* <p>Date: {formattedOrderDate}</p> */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({}) => (
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
                  {/* <select id="large" className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose a country</option>
    {menuItems.map((val, i)=>(
    <option value={val}>{val}</option>
    ))}
  </select> */}
                  <Field
                    as="select"
                    id="client_name"
                    name="client_name"
                    sizing="lg"
                    // size={6}
                    className="rounded-md form-control block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  >
                    <option value="">Choose a country</option>
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
                  <ErrorMessage
                    name="client_email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>

              {/* Product */}
              <div className="border-b border-ld  py-3 my-9 text-lg">
                Product Details
              </div>
              <div className="grid grid-cols-12 gap-6">
                <div className="lg:col-span-6 md:col-span-6 col-span-12 mb-5">
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
                  <ErrorMessage
                    name="project_name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="lg:col-span-6 md:col-span-6 col-span-12 mb-5">
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
                  <ErrorMessage
                    name="project_timeline"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-6">
                <div className="lg:col-span-6 md:col-span-6 col-span-12 mb-5">
                  <div className="mb-2 block">
                    <Label htmlFor="amount" value="Amount" />
                  </div>
                  <Field
                    id="amount"
                    name="amount"
                    as={TextInput}
                    sizing="lg"
                    type="number"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="amount"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div className="lg:col-span-6 md:col-span-6 col-span-12 mb-5">
                  <div className="mb-2 block">
                    <Label htmlFor="currency" value="Currency" />
                  </div>
                  <Field
                    id="currency"
                    name="currency"
                    type="text"
                    as={TextInput}
                    sizing="lg"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="currency"
                    component="div"
                    className="text-red-500 text-sm mt-1"
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
      {/* {showAlert && (
        <Alert color="warning" rounded className="fixed top-3">
          Invoice added successfully.
        </Alert>
      )} */}
    </div>
  );
}

export default GenerateInvoiceForm;
