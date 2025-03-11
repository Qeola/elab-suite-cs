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
            url: "/dashboard/onboarding/departments",
          },
          {
            name: "Employee",
            icon: "clarity:employee-group-line",
            id: uniqueId(),
            url: "/dashboard/onboarding/employees",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Payment",
    items: [
      {
        heading: "Payment",
        children: [
          {
            name: "Invoice",
            icon: "solar:home-angle-outline",
            id: uniqueId(),
            url: "/dashboard/invoice",
          },
          {
            name: "Receipt",
            icon: "solar:settings-minimalistic-line-duotone",
            id: uniqueId(),
            url: "/dashboard/receipt",
          },
        ],
      },
      {
        heading: "Budget",
        children: [
          {
            name: "Expenses",
            icon: "solar:home-angle-outline",
            id: uniqueId(),
            url: "/dashboard/expenses",
          },
        ],
      },
    ],
  },
];

export default SidebarContent;
