"use client";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Tooltip, TextInput, Table } from "flowbite-react";
import { Icon } from "@iconify/react";
import AuthButton from "@/app/components/resuable/button/AuthButton";
import { department } from "@/app/context/invoices";

const page = () => {
  const initialValues = {
    employee: [
      {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        employee_id: "",
        department: "",
        role: "",
        start_date: "",
      },
    ],
  };

  const validationSchema = Yup.object().shape({
    employee: Yup.array().of(
      Yup.object().shape({
        first_name: Yup.string().required("Required"),
        last_name: Yup.string().required("Required"),
        email: Yup.string().email("Invalid Email").required("Required"),
        phone_number: Yup.number().required("Required"),
        employee_id: Yup.string().required("Required"),
        department: Yup.string().required("Required"),
        role: Yup.string().required("Required"),
        start_date: Yup.string().required("Required"),
      }),
    ),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values }) => (
        <Form>
          <div className="mt-6 overflow-x-auto">
            <Table className="">
              <Table.Head>
                <Table.HeadCell className="sticky left-0 bg-lightgray dark:bg-dark z-10"></Table.HeadCell>
                <Table.HeadCell>First Name</Table.HeadCell>
                <Table.HeadCell>Last Name</Table.HeadCell>
                <Table.HeadCell>Email</Table.HeadCell>
                <Table.HeadCell>Phone Number</Table.HeadCell>
                <Table.HeadCell>Employee ID</Table.HeadCell>
                <Table.HeadCell>Department</Table.HeadCell>
                <Table.HeadCell>Role</Table.HeadCell>
                <Table.HeadCell>Start Date</Table.HeadCell>
                <Table.HeadCell></Table.HeadCell>
                <Table.HeadCell>Actions</Table.HeadCell>
              </Table.Head>
              <FieldArray name="employee">
                {({ push, remove }) => (
                  <Table.Body className="divide-y divide-border dark:divide-darkborder">
                    {values.employee.map((emp, index) => (
                      <Table.Row key={index} className="">
                        <Table.Cell className="whitespace-nowrap sticky left-0 bg-lightgray dark:bg-dark z-10">
                          <Tooltip content="Add Employee" placement="bottom">
                            <Button
                              className="p-0 mb-2 bg-lightprimary text-primary h-8 w-8 rounded-full flex justify-center items-center hover:bg-primary hover:text-white"
                              onClick={() =>
                                push({
                                  first_name: "",
                                  last_name: "",
                                  email: "",
                                  phone_number: "",
                                  employee_id: "",
                                  department: "",
                                  role: "",
                                  start_date: "",
                                })
                              }
                              type="button"
                            >
                              <Icon icon="mdi:plus-circle" height={18} />
                            </Button>
                          </Tooltip>
                        </Table.Cell>

                        <Table.Cell className="whitespace-nowrap min-w-44">
                          <Field
                            name={`employee[${index}].first_name`}
                            as={TextInput}
                            sizing="lg"
                            placeholder="First Name"
                            className="form-control"
                          />
                          <ErrorMessage
                            name={`employee[${index}].first_name`}
                            component="div"
                            className="text-red-500 text-sm"
                          />
                        </Table.Cell>

                        <Table.Cell className="whitespace-nowrap min-w-44">
                          <Field
                            name={`employee[${index}].last_name`}
                            as={TextInput}
                            sizing="lg"
                            placeholder="Last Name"
                            className="form-control"
                          />
                          <ErrorMessage
                            name={`employee[${index}].last_name`}
                            component="div"
                            className="text-red-500 text-sm"
                          />
                        </Table.Cell>

                        <Table.Cell className="whitespace-nowrap min-w-44">
                          <Field
                            name={`employee[${index}].email`}
                            as={TextInput}
                            sizing="lg"
                            placeholder="Email Address"
                            className="form-control"
                          />
                          <ErrorMessage
                            name={`employee[${index}].email`}
                            component="div"
                            className="text-red-500 text-sm"
                          />
                        </Table.Cell>

                        <Table.Cell className="whitespace-nowrap min-w-44">
                          <Field
                            name={`employee[${index}].phone_number`}
                            as={TextInput}
                            sizing="lg"
                            placeholder="Phone Number"
                            className="form-control"
                          />
                          <ErrorMessage
                            name={`employee[${index}].phone_number`}
                            component="div"
                            className="text-red-500 text-sm"
                          />
                        </Table.Cell>

                        <Table.Cell className="whitespace-nowrap min-w-44">
                          <Field
                            name={`employee[${index}].employee_id`}
                            as={TextInput}
                            sizing="lg"
                            placeholder="ID"
                            className="form-control"
                          />
                          <ErrorMessage
                            name={`employee[${index}].employee_id`}
                            component="div"
                            className="text-red-500 text-sm"
                          />
                        </Table.Cell>

                        <Table.Cell className="whitespace-nowrap min-w-44">
                          <Field
                            as="select"
                            name={`employee[${index}].department`}
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
                            name={`employee[${index}].department`}
                            component="div"
                            className="text-red-500 text-sm"
                          />
                        </Table.Cell>

                        <Table.Cell className="whitespace-nowrap min-w-44">
                          <Field
                            name={`employee[${index}].role`}
                            as={TextInput}
                            sizing="lg"
                            placeholder="Role"
                            className="form-control"
                          />
                          <ErrorMessage
                            name={`employee[${index}].role`}
                            component="div"
                            className="text-red-500 text-sm"
                          />
                        </Table.Cell>

                        <Table.Cell className="whitespace-nowrap min-w-44">
                          <Field
                            name={`employee[${index}].start_date`}
                            as={TextInput}
                            sizing="lg"
                            placeholder="Role"
                            type="date"
                            className="form-control"
                          />
                          <ErrorMessage
                            name={`employee[${index}].start_date`}
                            component="div"
                            className="text-red-500 text-sm"
                          />
                        </Table.Cell>

                        <Table.Cell className="whitespace-nowrap"></Table.Cell>
                        <Table.Cell className="whitespace-nowrap">
                          <Tooltip content="Delete Employee" placement="bottom">
                            <Button
                              color="lighterror"
                              className="btn-circle py-2 mb-2"
                              disabled={values.employee.length == 1}
                              onClick={() => remove(index)}
                              type="button"
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
                )}
              </FieldArray>
            </Table>
          </div>
          <div className="flex justify-end mt-3">
            <div className="flex justify-end gap-3 mt-2">
              <AuthButton>Invite Employee(s)</AuthButton>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default page;
