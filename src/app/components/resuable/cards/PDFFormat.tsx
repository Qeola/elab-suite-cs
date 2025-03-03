/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { format } from "date-fns";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { companyDetails } from "@/app/context/invoices";

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  logo: { width: 80 },
  receiptInfo: { textAlign: "right" },
  section: { marginBottom: 10 },

  // Grid for Items
  table: { display: "flex", marginTop: 10 },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // Cells
  descriptionCell: { flex: 3, backgroundColor: "#f0f0f0", padding: 8 }, // Light gray
  rateCell: {
    flex: 1,
    backgroundColor: "#001F60",
    color: "white",
    textAlign: "right",
    padding: 8,
  },

  bold: { fontWeight: "bold" },
  totalSection: { marginTop: 10, textAlign: "right" },
  totalAmount: { backgroundColor: "#001F60", color: "white", padding: 20 },

  // Payment Section - Side by Side
  paymentContainer: { flexDirection: "row", gap: 10, marginTop: 10 },
  //   paymentBox: { flex: 1, padding: 10, borderWidth: 1, borderRadius: 5 }
});

export const PDFFormat = ({ invoice, company }: any) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image src="/images/logos/logo.svg" style={styles.logo} />
        <View style={styles.receiptInfo}>
          <Text style={styles.bold}>From</Text>
          <Text>{company.name || "Qeola"}</Text>
          <Text>{company.address || "Ogbomoso"}</Text>
          <Text>{company.phone || "234709828492"}</Text>
        </View>
      </View>

      <View style={styles.header}>
        <View style={styles.section}>
          <Text style={styles.bold}>To:</Text>
          <Text>{invoice.customer_name}</Text>
          <Text>{invoice.customer_email}</Text>
          <Text>{invoice.customer_address}</Text>
          <Text>{invoice.customer_phone}</Text>
        </View>
        <View style={styles.receiptInfo}>
          <Text style={styles.bold}>INVOICE</Text>
          <Text>Invoice No: {invoice.id}</Text>
          <Text>Date: {format(new Date(), "MMMM dd, yyyy")}</Text>
        </View>
      </View>

      {/* Table */}
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={[styles.descriptionCell, styles.bold]}>Description</Text>
          <Text style={[styles.rateCell, styles.bold]}>Rate</Text>
        </View>

        {invoice.service.map((order: any, index: number) => (
          <View key={index} style={styles.tableRow}>
            <Text style={{ padding: 8 }}>{order.name}</Text>
            <Text style={{ padding: 8 }}>{order.amount}</Text>
          </View>
        ))}
      </View>

      {/* Amount Breakdown */}
      <View style={styles.totalSection}>
        <Text>Sub Total: {invoice.total_amount}</Text>
        <Text>VAT: {invoice.vat}</Text>
        <Text>
          Grand Total:{" "}
          <Text style={styles.totalAmount}>{invoice.grand_total}</Text>
        </Text>
      </View>

      {/* Payment Methods Side by Side */}
      <View style={styles.paymentContainer}>
        <Text>Payment Details</Text>
        {companyDetails.payment.map((payment: any, index: number) => (
          <View key={index}>
            <Text style={styles.bold}>{payment.account_name}</Text>
            <Text>{payment.bank_name}</Text>
            <Text>{payment.account}</Text>
            <Text>{payment.dollar_account}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

const styled = StyleSheet.create({
  page: { padding: 20 },
  section: { marginBottom: 10 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 5 },
  text: { fontSize: 12, marginBottom: 3 },
  tableHeader: { fontWeight: "bold", marginBottom: 5 },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
});

export const InvoicePDF = ({ invoice, company }: any) => (
  <Document>
    <Page size="A4" style={styled.page}>
      <View style={styled.section}>
        <Text style={styled.title}>INVOICE</Text>
        <Text style={styled.text}>Invoice No: {invoice.id}</Text>
        <Text style={styled.text}>
          Date: {format(new Date(), "MMMM dd, yyyy")}
        </Text>
      </View>

      <View style={styled.section}>
        <Text style={styled.tableHeader}>From</Text>
        <Text style={styled.text}>{company.name || "Qeola"}</Text>
        <Text style={styled.text}>{company.address}</Text>
        <Text style={styled.text}>{company.phone || "234709828492"}</Text>
      </View>

      <View style={styled.section}>
        <Text style={styled.tableHeader}>To</Text>
        <Text style={styled.text}>{invoice.customer_name}</Text>
        <Text style={styled.text}>{invoice.customer_email}</Text>
        <Text style={styled.text}>{invoice.customer_address}</Text>
        <Text style={styled.text}>{invoice.customer_phone}</Text>
      </View>

      <View style={styled.section}>
        <Text style={styled.tableHeader}>Services</Text>
        {invoice.service.map((order: any, index: number) => (
          <View key={index} style={styled.tableRow}>
            <Text>{order.name}</Text>
            <Text>{order.amount}</Text>
          </View>
        ))}
      </View>

      <View style={styled.section}>
        <Text style={styled.text}>Sub Total: {invoice.total_amount}</Text>
        <Text style={styled.text}>VAT: {invoice.vat}</Text>
        <Text style={styled.text}>Grand Total: {invoice.grand_total}</Text>
      </View>
    </Page>
  </Document>
);
