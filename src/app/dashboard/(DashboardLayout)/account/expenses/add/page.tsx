"use client";
import {
  Formik,
  Form,
  Field,
  FieldArray,
  ErrorMessage,
  FormikHelpers,
} from "formik";
import * as Yup from "yup";
import { Button, Tooltip, TextInput, Table, Select } from "flowbite-react";
import { Icon } from "@iconify/react";
import AuthButton from "@/app/components/resuable/button/AuthButton";
import { department } from "@/app/context/invoices";
import BreadcrumbComp from "../../../layout/shared/breadcrumb/BreadcrumbComp";
import { currencies } from "@/utils/helpers/currency";

interface Expense {
  name: string;
  description: string;
  category: string;
  currency: string;
  amount: number;
  recurring: string;
  date: string;
  bank: string;
  status: string;
}

interface FormValues {
  expenses: Expense[];
}

const page = () => {
  const initialValues = {
    expenses: [
      {
        name: "",
        description: "",
        category: "",
        currency: "",
        amount: 0,
        recurring: "",
        date: "",
        bank: "",
        status: "",
      },
    ],
  };

  const validationSchema = Yup.object().shape({
    expenses: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required("Required"),
        description: Yup.string().required("Required"),
        amount: Yup.number()
          .required("Required")
          .min(1, "Amount must be greater than 0"),
        category: Yup.string().required("Required"),
        currency: Yup.string().required("Required"),
        date: Yup.string().required("Required"),
        status: Yup.string().required("Required"),
        bank: Yup.string().required("Required"),
        recurring: Yup.string().required("Required"),
      }),
    ),
  });

  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>,
  ) => {
    setTimeout(() => {
      resetForm();
      console.log("Submitted Data:", values);
    }, 1500);
  };
  const BCrumb = [
    {
      to: "/dashboard/account/expenses",
      title: "Expenses",
    },
    {
      title: "Expenses Details",
    },
  ];

  return (
    <>
      <BreadcrumbComp
        title="Expenses"
        items={BCrumb}
        image="/images/crumbs/expenses.svg"
      />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, touched, errors }) => (
          <Form>
            <div className="mt-6 overflow-x-auto">
              <Table className="">
                <Table.Head>
                  <Table.HeadCell className="sticky left-0 bg-lightgray dark:bg-dark z-10"></Table.HeadCell>
                  <Table.HeadCell>Name *</Table.HeadCell>
                  <Table.HeadCell>Category *</Table.HeadCell>
                  <Table.HeadCell>Description *</Table.HeadCell>
                  <Table.HeadCell>Paid Through *</Table.HeadCell>
                  <Table.HeadCell>Amount *</Table.HeadCell>
                  <Table.HeadCell>Currency *</Table.HeadCell>
                  <Table.HeadCell>Date *</Table.HeadCell>
                  <Table.HeadCell>Recurring</Table.HeadCell>
                  <Table.HeadCell>Status</Table.HeadCell>
                  <Table.HeadCell></Table.HeadCell>
                  <Table.HeadCell>Action</Table.HeadCell>
                </Table.Head>
                <FieldArray name="expenses">
                  {({ push, remove }) => (
                    <Table.Body className="divide-y divide-border dark:divide-darkborder">
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      {values.expenses.map((emp: any, index: number) => (
                        <Table.Row key={index} className="">
                          <Table.Cell className="whitespace-nowrap sticky left-0 bg-lightgray dark:bg-dark z-10">
                            <Tooltip content="Add expense" placement="bottom">
                              <Button
                                className="p-0 mb-2 bg-lightprimary text-primary h-8 w-8 rounded-full flex justify-center items-center hover:bg-primary hover:text-white"
                                onClick={() =>
                                  push({
                                    name: "",
                                    description: "",
                                    category: "",
                                    amount: "",
                                    currency: "",
                                    date: "",
                                    status: "",
                                    recurring: "",
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
                              name={`expenses[${index}].name`}
                              as={TextInput}
                              sizing="lg"
                              placeholder="Name"
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              className={`form-control w-full ${touched.expenses?.[index]?.name && (errors.expenses as any)?.[index]?.name ? "error" : ""}`}
                            />
                            <ErrorMessage
                              name={`expenses[${index}].name`}
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </Table.Cell>

                          <Table.Cell className="whitespace-nowrap min-w-44">
                            <Field
                              as={Select}
                              name={`expenses[${index}].category`}
                              sizing="lg"
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              className={`form-control select-md w-full ${touched.expenses?.[index]?.category && (errors.expenses as any)?.[index]?.category ? "error" : ""}`}
                            >
                              <option value="">Choose a category</option>
                              {department.map((val, i) => (
                                <option key={i} value={val.name}>
                                  {val.name}
                                </option>
                              ))}
                            </Field>
                            <ErrorMessage
                              name={`expenses[${index}].category`}
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </Table.Cell>

                          <Table.Cell className="whitespace-nowrap min-w-44">
                            <Field
                              name={`expenses[${index}].description`}
                              as={TextInput}
                              sizing="lg"
                              placeholder="Description"
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              className={`form-control w-full ${touched.expenses?.[index]?.description && (errors.expenses as any)?.[index]?.description ? "error" : ""}`}
                            />
                            <ErrorMessage
                              name={`expenses[${index}].description`}
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </Table.Cell>

                          <Table.Cell className="whitespace-nowrap min-w-44">
                            <Field
                              as={Select}
                              name={`income[${index}].bank`}
                              sizing="lg"
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              className={`form-control select-md ${touched.expenses?.[index]?.bank && (errors.expenses as any)?.[index]?.bank ? "error" : ""}`}
                            >
                              <option value=""></option>
                              <option value={"yes"}>Yes</option>
                              <option value={"no"}>No</option>
                            </Field>
                            <ErrorMessage
                              name={`income[${index}].bank`}
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            />
                          </Table.Cell>

                          <Table.Cell className="whitespace-nowrap min-w-44">
                            <Field
                              name={`expenses[${index}].amount`}
                              as={TextInput}
                              sizing="lg"
                              placeholder="0"
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              className={`form-control w-full ${touched.expenses?.[index]?.amount && (errors.expenses as any)?.[index]?.amount ? "error" : ""}`}
                            />
                            <ErrorMessage
                              name={`expenses[${index}].amount`}
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </Table.Cell>

                          <Table.Cell className="whitespace-nowrap min-w-44">
                            <Field
                              name={`expenses[${index}].currency`}
                              as={TextInput}
                              sizing="lg"
                              placeholder="NGN"
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              className={`form-control w-full ${touched.expenses?.[index]?.currency && (errors.expenses as any)?.[index]?.currency ? "error" : ""}`}
                            >
                              <option value="">Choose a currency</option>
                                                  {currencies.map((val, i) => (
                                                    <option key={i} value={val}>
                                                      {val}
                                                    </option>
                                                  ))}
                            </Field>
                            <ErrorMessage
                              name={`expenses[${index}].currency`}
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </Table.Cell>

                          <Table.Cell className="whitespace-nowrap min-w-44">
                            <Field
                              name={`expenses[${index}].date`}
                              as={TextInput}
                              sizing="lg"
                              placeholder="date"
                              type="date"
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              className={`form-control w-full ${touched.expenses?.[index]?.date && (errors.expenses as any)?.[index]?.date ? "error" : ""}`}
                            />
                            <ErrorMessage
                              name={`expenses[${index}].date`}
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </Table.Cell>

                          <Table.Cell className="whitespace-nowrap min-w-44">
                            <Field
                              as={Select}
                              name={`expenses[${index}].recurring`}
                              sizing="lg"
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              className={`form-control select-md ${touched.expenses?.[index]?.recurring && (errors.expenses as any)?.[index]?.recurring ? "error" : ""}`}
                            >
                              <option value=""></option>
                              <option value={"yes"}>Yes</option>
                              <option value={"no"}>No</option>
                            </Field>
                            <ErrorMessage
                              name={`expenses[${index}].recurring`}
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            />
                          </Table.Cell>

                          <Table.Cell className="whitespace-nowrap min-w-44">
                            <Field
                              name={`expenses[${index}].status`}
                              as={TextInput}
                              sizing="lg"
                              placeholder="Status"
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              className={`form-control w-full ${touched.expenses?.[index]?.status && (errors.expenses as any)?.[index]?.status ? "error" : ""}`}
                            />
                            <ErrorMessage
                              name={`expenses[${index}].status`}
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </Table.Cell>

                          <Table.Cell className="whitespace-nowrap"></Table.Cell>
                          <Table.Cell className="whitespace-nowrap">
                            <Tooltip
                              content="Delete expense"
                              placement="bottom"
                            >
                              <Button
                                color="lighterror"
                                className="btn-circle py-2 mb-2"
                                disabled={values.expenses.length == 1}
                                onClick={() => remove(Number(index))}
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
                <AuthButton>Add Expense(s)</AuthButton>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default page;
