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

interface Income {
  name: string;
  description: string;
  category: string;
  currency: string;
  amount: number;
  recurring: string;
  date: string;
  status: string;
}

interface FormValues {
  income: Income[];
}

const page = () => {
  const initialValues = {
    income: [
      {
        name: "",
        description: "",
        category: "",
        currency: "",
        amount: 0,
        recurring: "",
        date: "",
        status: "",
      },
    ],
  };

  const validationSchema = Yup.object().shape({
    income: Yup.array().of(
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
      to: "/dashboard/account/income",
      title: "Income",
    },
    {
      title: "See a list of all your income",
    },
  ];

  return (
    <>
      <BreadcrumbComp
        title="Income"
        items={BCrumb}
        image="/images/crumbs/income.svg"
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
                  <Table.HeadCell>Amount *</Table.HeadCell>
                  <Table.HeadCell>Currency *</Table.HeadCell>
                  <Table.HeadCell>Date *</Table.HeadCell>
                  <Table.HeadCell>Recurring</Table.HeadCell>
                  <Table.HeadCell>Status</Table.HeadCell>
                  <Table.HeadCell></Table.HeadCell>
                  <Table.HeadCell>Actions</Table.HeadCell>
                </Table.Head>
                <FieldArray name="income">
                  {({ push, remove }) => (
                    <Table.Body className="divide-y divide-border dark:divide-darkborder">
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      {values.income.map((emp: any, index: number) => (
                        <Table.Row key={index} className="">
                          <Table.Cell className="whitespace-nowrap sticky left-0 bg-lightgray dark:bg-dark z-10">
                            <Tooltip content="Add income" placement="bottom">
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
                              name={`income[${index}].name`}
                              as={TextInput}
                              sizing="lg"
                              placeholder="Name"
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              className={`form-control w-full ${touched.income?.[index]?.name && (errors.income as any)?.[index]?.name ? "error" : ""}`}
                            />
                            <ErrorMessage
                              name={`income[${index}].name`}
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </Table.Cell>

                          <Table.Cell className="whitespace-nowrap min-w-44">
                            <Field
                              as={Select}
                              name={`income[${index}].category`}
                              sizing="lg"
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              className={`form-control select-md w-full ${touched.income?.[index]?.category && (errors.income as any)?.[index]?.category ? "error" : ""}`}
                            >
                              <option value="">Choose a category</option>
                              {department.map((val, i) => (
                                <option key={i} value={val.name}>
                                  {val.name}
                                </option>
                              ))}
                            </Field>
                            <ErrorMessage
                              name={`income[${index}].category`}
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </Table.Cell>

                          <Table.Cell className="whitespace-nowrap min-w-44">
                            <Field
                              name={`income[${index}].description`}
                              as={TextInput}
                              sizing="lg"
                              placeholder="Description"
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              className={`form-control w-full ${touched.income?.[index]?.description && (errors.income as any)?.[index]?.description ? "error" : ""}`}
                            />
                            <ErrorMessage
                              name={`income[${index}].description`}
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </Table.Cell>

                          <Table.Cell className="whitespace-nowrap min-w-44">
                            <Field
                              name={`income[${index}].amount`}
                              as={TextInput}
                              sizing="lg"
                              placeholder="0"
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              className={`form-control w-full ${touched.income?.[index]?.amount && (errors.income as any)?.[index]?.amount ? "error" : ""}`}
                            />
                            <ErrorMessage
                              name={`income[${index}].amount`}
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </Table.Cell>

                          <Table.Cell className="whitespace-nowrap min-w-44">
                            <Field
                              name={`income[${index}].currency`}
                              as={TextInput}
                              sizing="lg"
                              placeholder="NGN"
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              className={`form-control w-full ${touched.income?.[index]?.currency && (errors.income as any)?.[index]?.currency ? "error" : ""}`}
                            />
                            <ErrorMessage
                              name={`income[${index}].currency`}
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </Table.Cell>

                          <Table.Cell className="whitespace-nowrap min-w-44">
                            <Field
                              name={`income[${index}].date`}
                              as={TextInput}
                              sizing="lg"
                              placeholder="date"
                              type="date"
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              className={`form-control w-full ${touched.income?.[index]?.date && (errors.income as any)?.[index]?.date ? "error" : ""}`}
                            />
                            <ErrorMessage
                              name={`income[${index}].date`}
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </Table.Cell>

                          <Table.Cell className="whitespace-nowrap min-w-44">
                            <Field
                              as={Select}
                              name={`income[${index}].recurring`}
                              sizing="lg"
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              className={`form-control select-md ${touched.income?.[index]?.recurring && (errors.income as any)?.[index]?.recurring ? "error" : ""}`}
                            >
                              <option value=""></option>
                              <option value={"yes"}>Yes</option>
                              <option value={"no"}>No</option>
                            </Field>
                            <ErrorMessage
                              name={`income[${index}].recurring`}
                              component="div"
                              className="text-red-500 text-sm mt-1"
                            />
                          </Table.Cell>

                          <Table.Cell className="whitespace-nowrap min-w-44">
                            <Field
                              name={`income[${index}].status`}
                              as={TextInput}
                              sizing="lg"
                              placeholder="Status"
                              // eslint-disable-next-line @typescript-eslint/no-explicit-any
                              className={`form-control w-full ${touched.income?.[index]?.status && (errors.income as any)?.[index]?.status ? "error" : ""}`}
                            />
                            <ErrorMessage
                              name={`income[${index}].status`}
                              component="div"
                              className="text-red-500 text-sm"
                            />
                          </Table.Cell>

                          <Table.Cell className="whitespace-nowrap"></Table.Cell>
                          <Table.Cell className="whitespace-nowrap">
                            <Tooltip content="Delete income" placement="bottom">
                              <Button
                                color="lighterror"
                                className="btn-circle py-2 mb-2"
                                disabled={values.income.length == 1}
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
                <AuthButton>Add Income</AuthButton>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default page;
