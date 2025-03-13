/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ChildItem {
  id?: number | string;
  name?: string;
  icon?: any;
  children?: ChildItem[];
  item?: any;
  url?: any;
  color?: string;
}

export interface MenuItem {
  heading?: string;
  name?: string;
  icon?: any;
  id?: number;
  to?: string;
  items?: MenuItem[];
  children?: ChildItem[];
  url?: any;
}

import { uniqueId } from "lodash";

const SidebarContent: MenuItem[] = [
  {
    id: 1,
    name: "HR",
    items: [
      {
        heading: "Onboarding",
        children: [
          {
            name: "Department",
            icon: "healthicons:outpatient-department-outline",
            id: uniqueId(),
            url: "/dashboard/hr/onboarding/departments",
            color: "text-primary",
          },
          {
            name: "Employee",
            icon: "clarity:employee-group-line",
            id: uniqueId(),
            url: "/dashboard/hr/onboarding/employees",
            color: "text-warning",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Accounting",
    items: [
      {
        heading: "Payment",
        children: [
          {
            name: "Invoice",
            icon: "material-symbols:receipt-long-outline-rounded",
            id: uniqueId(),
            url: "/dashboard/account/invoice",
            color: "text-success",
          },
          {
            name: "Receipt",
            icon: "akar-icons:receipt",
            id: uniqueId(),
            url: "/dashboard/account/receipt",
            color: "text-secondary",
          },
        ],
      },
      {
        heading: "Budget",
        children: [
          {
            name: "Expenses",
            icon: "hugeicons:payment-02",
            id: uniqueId(),
            url: "/dashboard/account/expenses",
            color: "text-info",
          },
          {
            name: "Income",
            icon: "healthicons:low-income-level-outline",
            id: uniqueId(),
            url: "/dashboard/account/income",
            color: "text-danger",
          },
        ],
      },
    ],
  },
];

export default SidebarContent;
