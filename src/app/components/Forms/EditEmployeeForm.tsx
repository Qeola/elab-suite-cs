"use client";

import React from "react";
import { Label, TextInput } from "flowbite-react";
import { department } from "@/app/context/invoices";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthButton from "../resuable/button/AuthButton";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  dob: Yup.string().required("Date of Birth is required"),
  gender: Yup.string().required("Date of Birth is required"),
  department: Yup.string().required("Department is required"),
  job_title: Yup.string().required("Date of Birth is required"),
  employee_id: Yup.string().required("Date of Birth is required"),
  role: Yup.string().required("Date of Birth is required"),
  start_date: Yup.string().required("Start Date is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10,15}$/, "Phone number must be 10-15 digits")
    .required("Phone number is required"),
});

function EditEmployeeForm() {
  // const [showAlert, setShowAlert] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
    phone: "",
    start_date: "",
    department: "",
    job_title: "",
    employee_id: "",
    role: "",
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
      {/* <p>Date: {formattedOrderDate}</p> */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors }) => (
          <Form>
            <div className="bg-lightgray dark:bg-gray-800/70 px-6 rounded-md">
              {/* Basic Info */}
              <div className="pb-3 mb-9 text-lg">Basic Information</div>
              <div className="grid grid-cols-12 gap-6">
                {/* First Name */}
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                  <div className="mb-2 block">
                    <Label htmlFor="firstName" value="First Name *" />
                  </div>
                  <Field
                    id="firstName"
                    name="firstName"
                    as={TextInput}
                    sizing="lg"
                    className={`form-control w-full ${touched.firstName && errors.firstName ? "error" : ""}`}
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Last Name */}
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                  <div className="mb-2 block">
                    <Label htmlFor="lastName" value="Last Name *" />
                  </div>
                  <Field
                    id="lastName"
                    name="lastName"
                    as={TextInput}
                    sizing="lg"
                    className={`form-control w-full ${touched.lastName && errors.lastName ? "error" : ""}`}
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Email */}
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="Email *" />
                  </div>
                  <Field
                    id="email"
                    name="email"
                    as={TextInput}
                    sizing="lg"
                    type="email"
                    className={`form-control w-full ${touched.email && errors.email ? "error" : ""}`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* DOB */}
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                  <div className="mb-2 block">
                    <Label htmlFor="dob" value="Date of Birth *" />
                  </div>
                  <Field
                    id="dob"
                    name="dob"
                    as={TextInput}
                    sizing="lg"
                    className={`form-control w-full ${touched.dob && errors.dob ? "error" : ""}`}
                  />
                  <ErrorMessage
                    name="dob"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Gender */}
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                  <div className="mb-2 block">
                    <Label htmlFor="gender" value="Gender *" />
                  </div>
                  <Field
                    as="select"
                    id="gender"
                    name="gender"
                    sizing="lg"
                    className={`rounded-md form-control block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${touched.gender && errors.gender ? "error" : ""}`}
                  >
                    <option value=""></option>
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                  </Field>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Start Date */}
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                  <div className="mb-2 block">
                    <Label htmlFor="start_date" value="Start Date *" />
                  </div>
                  <Field
                    id="start_date"
                    name="start_date"
                    as={TextInput}
                    type="date"
                    sizing="lg"
                    className={`form-control w-full ${touched.start_date && errors.start_date ? "error" : ""}`}
                  />
                  <ErrorMessage
                    name="start_date"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>

              {/* Work Info */}
              <div className="py-3 my-9 mb-3 text-lg">Work Information</div>

              <div className="grid grid-cols-12 gap-6">
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                  {/* Department */}
                  <div className="mb-2 block">
                    <Label htmlFor="role" value="Department *" />
                  </div>
                  <Field
                    as="select"
                    name="department"
                    sizing="lg"
                    className="rounded-md form-control block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  >
                    <option value="">Choose a department</option>
                    {department.map((val, i) => (
                      <option key={i} value={val.name}>
                        {val.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="department"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                {/* Job Title */}
                <div className="lg:col-span-6 md:col-span-6 col-span-12">
                  <div className="mb-2 block">
                    <Label htmlFor="job_title" value="Job Title *" />
                  </div>
                  <Field
                    id="job_title"
                    name="job_title"
                    type="text"
                    as={TextInput}
                    sizing="lg"
                    className={`form-control w-full ${touched.job_title && errors.job_title ? "error" : ""}`}
                  />
                  <ErrorMessage
                    name="job_title"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Employee ID */}
                <div className="lg:col-span-6 md:col-span-6 col-span-12 mb-5">
                  <div className="mb-2 block">
                    <Label htmlFor="employee_id" value="Employee ID *" />
                  </div>
                  <Field
                    id="employee_id"
                    name="employee_id"
                    as={TextInput}
                    sizing="lg"
                    disabled={true}
                    className={`form-control w-full ${touched.employee_id && errors.employee_id ? "error" : ""}`}
                  />
                  <ErrorMessage
                    name="employee_id"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Role */}
                <div className="lg:col-span-6 md:col-span-6 col-span-12 mb-5">
                  <div className="mb-2 block">
                    <Label htmlFor="role" value="Role" />
                  </div>
                  <Field
                    id="role"
                    name="role"
                    as={TextInput}
                    sizing="lg"
                    className={`form-control w-full ${touched.role && errors.role ? "error" : ""}`}
                  />
                  <ErrorMessage
                    name="role"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end ">
              <div className="flex justify-end gap-3 mt-2">
                <AuthButton>Save Changes</AuthButton>
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

export default EditEmployeeForm;
