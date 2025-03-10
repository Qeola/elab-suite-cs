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
    name: "Payment",
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
    ],
  },
  {
    id: 2,
    name: "Menu",
    items: [
      {
        heading: "Multi level",
        children: [
          {
            name: "Menu Level",
            icon: "solar:widget-add-line-duotone",
            id: uniqueId(),
            children: [
              {
                id: uniqueId(),
                name: "Level 1",
                url: "",
              },
              {
                id: uniqueId(),
                name: "Level 1.1",
                icon: "fad:armrecording",
                url: "",
                children: [
                  {
                    id: uniqueId(),
                    name: "Level 2",
                    url: "",
                  },
                  {
                    id: uniqueId(),
                    name: "Level 2.1",
                    icon: "fad:armrecording",
                    url: "",
                    children: [
                      {
                        id: uniqueId(),
                        name: "Level 3",
                        url: "",
                      },
                      {
                        id: uniqueId(),
                        name: "Level 3.1",
                        url: "",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        heading: "More Options",
        children: [
          {
            id: uniqueId(),
            url: "",
            name: "Applications",
            icon: "solar:check-circle-bold",
            color: "text-primary",
          },
          {
            id: uniqueId(),
            url: "",
            name: "Form Options",
            icon: "solar:check-circle-bold",
            color: "text-secondary",
          },
          {
            id: uniqueId(),
            url: "",
            name: "Table Variations",
            icon: "solar:check-circle-bold",
            color: "text-info",
          },
          {
            id: uniqueId(),
            url: "",
            name: "Charts Selection",
            icon: "solar:check-circle-bold",
            color: "text-warning",
          },
          {
            id: uniqueId(),
            url: "",
            name: "Widgets",
            icon: "solar:check-circle-bold",
            color: "text-success",
          },
        ],
      },
    ],
  },
];

export default SidebarContent;
