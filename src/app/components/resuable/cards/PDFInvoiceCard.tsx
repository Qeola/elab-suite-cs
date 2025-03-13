"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button, Table } from "flowbite-react";
import { format } from "date-fns";
import { PDFDownloadLink } from "@react-pdf/renderer";
import FullLogo from "@/app/dashboard/(DashboardLayout)/layout/shared/logo/FullLogo";
import { companyDetails, invoices } from "@/app/context/invoices";
import { RootState } from "@/utils/stores/store";
import { useSelector } from "@/utils/stores/hooks";
import { PDFFormat } from "./PDFFormat";
import CurrencyFormatter from "@/utils/CurrencyFormatter";

const InvoiceCardDetails = () => {
  const [selectedInvoice, setSelectedInvoice]: any = useState(null);
  const company: any = useSelector((state: RootState) => state.company.company);
  const pathName = usePathname();
  const getTitle = pathName.split("/").pop();

  useEffect(() => {
    if (invoices.length > 0) {
      setSelectedInvoice(invoices[0]);
    }
  }, [invoices]);

  useEffect(() => {
    if (getTitle) {
      const invoice = invoices.find(
        (p: { slug: string }) => p.slug === getTitle,
      );
      if (invoice) setSelectedInvoice(invoice);
    }
  }, [getTitle, invoices]);

  if (!selectedInvoice) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="grid grid-cols-12 gap-6 mb-6">
        <div className="md:col-span-6 col-span-12">
          <FullLogo />
        </div>
        <div className="md:col-span-6 col-span-12 flex md:justify-end">
          <div className="md:text-right">
            <h6 className="text-base">From</h6>
            <p>{company.name || "Qeola"}</p>
            <p>{company.address || "Ogbomoso"}</p>
            <p>{company.phone || "234709828492"}</p>
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

      <div className="overflow-x-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell className="w-5/6 bg-primary dark:bg-darkprimary">
              Description
            </Table.HeadCell>
            <Table.HeadCell className="w-1/6 text-end bg-yellow-300 dark:bg-yellow-600">
              Rate
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="min-h-[27rem] relative">
            {selectedInvoice.service.map((order: any, index: number) => (
              <Table.Row key={index} className="bg-gray-200 dark:bg-gray-500">
                <Table.Cell>{order.name}</Table.Cell>
                <Table.Cell className="text-end bg-gray-400 dark:bg-gray-700">
                  {order.amount.toLocaleString()}
                </Table.Cell>
              </Table.Row>
            ))}

            <Table.Row className="bg-gray-100 dark:bg-gray-500">
              <Table.Cell>
                <div className="h-full min-h-[8rem]"></div>
              </Table.Cell>
              <Table.Cell className="bg-gray-400 dark:bg-gray-700">
                <div className="h-full min-h-[8rem]"></div>
              </Table.Cell>
            </Table.Row>

            {/* Total Amount */}
            <Table.Row className="bg-gray-100 dark:bg-gray-500">
              <Table.Cell className="font-semibold text-end col-span-10">
                Total
              </Table.Cell>
              <Table.Cell className="text-end font-semibold col-span-2 bg-gray-400 dark:bg-gray-700">
                <CurrencyFormatter
                  amount={selectedInvoice.service.reduce(
                    (sum: number, order: any) => sum + order.amount,
                    0,
                  )}
                />
              </Table.Cell>
            </Table.Row>

            {/* VAT (7.5%) */}
            <Table.Row className="bg-gray-100 dark:bg-gray-500">
              <Table.Cell className="font-semibold text-end">
                VAT (7.5%)
              </Table.Cell>
              <Table.Cell className="text-end font-semibold bg-gray-400 dark:bg-gray-700">
                <CurrencyFormatter
                  amount={
                    selectedInvoice.service.reduce(
                      (sum: number, order: any) => sum + order.amount,
                      0,
                    ) * 0.075
                  }
                />
              </Table.Cell>
            </Table.Row>

            {/* Grand Total Amount */}
            <Table.Row className="">
              <Table.Cell className="font-semibold text-end col-span-10 text-xl md:text-2xl">
                Grand Total
              </Table.Cell>
              <Table.Cell className="text-end font-semibold col-span-2 bg-gray-400 dark:bg-gray-900 text-lg md:text-xl">
                <CurrencyFormatter
                  amount={selectedInvoice.service.reduce(
                    (sum: number, order: any) => sum + order.amount,
                    0,
                  )}
                />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>

      <div className="flex justify-start">
        {companyDetails?.payment?.map((detail: any, index: any) => (
          <div key={index} className="me-3">
            <h6>{detail.account_name}</h6>
            <p>{detail.bank_name}</p>
            {detail.dollar_account && <p>{detail.dollar_account}</p>}
            {detail.account && <p>{detail.account}</p>}
          </div>
        ))}
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <Button
          color={"warning"}
          href={`/dashboard/account/invoice/${selectedInvoice.slug}/edit`}
        >
          Edit Invoice
        </Button>
        <PDFDownloadLink
          document={<PDFFormat invoice={selectedInvoice} company={company} />}
          fileName={`Invoice-${selectedInvoice.id}.pdf`}
        >
          {({ loading }: { loading: any }) => (
            <Button color="primary">
              {loading ? "Generating PDF..." : "Download PDF"}
            </Button>
          )}
        </PDFDownloadLink>
      </div>
    </>
  );
};

export default InvoiceCardDetails;
