"use client";
import React, { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Badge, Button, Table } from "flowbite-react";
import { format, isValid, parseISO } from "date-fns";
import FullLogo from "@/app/dashboard/(DashboardLayout)/layout/shared/logo/FullLogo";
import { invoices } from "@/app/context/invoices";
import { RootState } from "@/utils/stores/store";
import { useDispatch, useSelector } from "@/utils/stores/hooks";

const InvoiceCardDetail = () => {
  const [selectedInvoice, setSelectedInvoice]: any = useState(null);

  const company: any = useSelector((state: RootState) => state.company.company);
  const dispatch = useDispatch();

  useEffect(() => {
    // Set the first invoice as the default selected invoice initially
    if (invoices.length > 0) {
      setSelectedInvoice(invoices[0]);
    }
  }, [invoices]);

  // Get the last part of the URL path as the billFrom parameter
  const pathName = usePathname();
  const getTitle = pathName.split("/").pop();

  // Find the invoice that matches the billFrom extracted from the URL
  useEffect(() => {
    if (getTitle) {
      const invoice = invoices.find(
        (p: { customer_name: string }) => p.customer_name === getTitle,
      );
      if (invoice) {
        setSelectedInvoice(invoice);
      }
    }
  }, [getTitle, invoices]);

  if (!selectedInvoice) {
    return <div>Loading...</div>;
  }

  const orderDate = selectedInvoice.orderDate
    ? isValid(parseISO(selectedInvoice.orderDate))
      ? format(parseISO(selectedInvoice.orderDate), "EEEE, MMMM dd, yyyy")
      : "Invalid Date"
    : format(new Date(), "EEEE, MMMM dd, yyyy");
  return (
    <>
      {/* <div className="sm:flex justify-between items-start mb-6">
        <div className="md:text-end md:mt-0 mt-5">
          <Badge color={"success"}>{selectedInvoice.status}</Badge>
          <h3 className="items-center mt-1 text-xl"># {selectedInvoice.id}</h3>
        </div>
      </div> */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="md:col-span-6 col-span-12">
          <FullLogo />
        </div>
        <div className="md:col-span-6 col-span-12 flex md:justify-end">
          <div className="md:text-right">
            <h6 className="text-base">Bill From</h6>
            <p> {}</p>
            <p>{company.name || "Qeola"}</p>
            <p>{company.address}</p>
            <p>{company.phone}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="md:col-span-6 col-span-12">
          <div className="">
            <h6 className="text-base">To</h6>
            <p> {selectedInvoice.customer_name}</p>
            <p> {selectedInvoice.customer_email}</p>
            <p>{selectedInvoice.customer_address}</p>
            <p>{selectedInvoice.customer_phone}</p>
            <p>Total Cost: {selectedInvoice.total_amount}</p>
            <p>Status: {selectedInvoice.status}</p>
            <p>OrderDate: {orderDate}</p>
          </div>
        </div>

        {/* Invoice detail */}
        <div className="md:col-span-6 col-span-12 flex md:justify-end">
          <div className="md:text-left">
            <h1 className="text-xl">INVOICE</h1>
            <p className="items-center mt-1 text-xl">
              Invoice No: {selectedInvoice.id}
            </p>
            <p className="items-center mt-1 text-lg">
              Date: {format(new Date(), "MMMM dd, yyyy")}
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="md:col-span-12 col-span-12 flex md:justify-end"></div>
      </div>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Item Name</Table.HeadCell>
            <Table.HeadCell>Unit Price</Table.HeadCell>
            <Table.HeadCell>Unit</Table.HeadCell>
            <Table.HeadCell className="text-end">Total Cost</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y divide-border dark:divide-darkborder ">
            {/* {selectedInvoice.orders.map(
              (
                order: {
                  itemName:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<React.AwaitedReactNode>
                  | null
                  | undefined;
                  unitPrice:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<React.AwaitedReactNode>
                  | null
                  | undefined;
                  units:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<React.AwaitedReactNode>
                  | null
                  | undefined;
                  unitTotalPrice:
                  | string
                  | number
                  | bigint
                  | boolean
                  | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | Promise<React.AwaitedReactNode>
                  | null
                  | undefined;
                },
                index: React.Key | null | undefined
              ) => (
                <Table.Row key={index}>
                  <Table.Cell className="whitespace-nowrap ">
                    <h5 className="text-sm">{order.itemName}</h5>
                  </Table.Cell>
                  <Table.Cell className="text-ld">{order.unitPrice}</Table.Cell>
                  <Table.Cell className="text-ld">{order.units}</Table.Cell>
                  <Table.Cell className="text-end">
                    <h4 className="text-sm">{order.unitTotalPrice}</h4>
                  </Table.Cell>
                </Table.Row>
              )
            )} */}
          </Table.Body>
        </Table>
        <div className="border-t border-ld  py-5 px-4">
          <div className="flex justify-end mb-3">
            <div className="flex gap-3 lg:w-1/5">
              <h2 className="max-w-52 w-full opacity-80">Sub Total:</h2>
              <h3 className="ms-auto text-base">
                {selectedInvoice.total_amount}
              </h3>
            </div>
          </div>
          <div className="flex justify-end mb-3">
            <div className="flex gap-3 lg:w-1/5">
              <h2 className="max-w-52 w-full opacity-80">Vat:</h2>
              <h3 className="ms-auto text-base">{selectedInvoice.vat}</h3>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex gap-3 lg:w-1/5">
              <h2 className="max-w-52 w-full opacity-80">Grand Total:</h2>
              <h3 className="ms-auto text-base">
                {selectedInvoice.grand_total}
              </h3>
            </div>
          </div>
        </div>

        {/* Payment Detail */}
        <div className="flex justify-start">
          {company?.payment?.map((detail: any, index: any) => (
            <div key={index} className="me-3">
              <h6>{detail.name}</h6>
              <p>{detail.bank_name}</p>
              {detail.dollar_account && <p>{detail.dollar_account}</p>}
              {detail.account && <p>{detail.account}</p>}
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <Button color={"warning"}>
            <Link href={`/dashboard/invoice/${selectedInvoice.slug}/edit`}>
              Edit Invoice
            </Link>
          </Button>
          <Button color="primary">
            <Link href="/dashboard/invoice">Back to Invoice List</Link>
          </Button>
        </div>
      </div>
    </>
  );
};
export default InvoiceCardDetail;
