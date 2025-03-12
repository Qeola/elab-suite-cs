export const invoices = [
  {
    id: 1,
    customer: "/images/blog/blog-img2.jpg",
    customer_name: "Popular Authors",
    handle: "Most Successful",
    tranche: "40%",
    amount: "$9000",
    status: "pending",
    product_name: "awaHealth",
    slug: "one",
    total_amount: 9983,
    grand_total: 9933,
    vat: 7.5,
    service: [
      { name: "Brand Design", amount: 150000 },
      { name: "UI/Ux", amount: 250000 },
      { name: "Web dev", amount: 580000 },
    ],
    // service: ["Brand Design, UI/Ux, Web dev"],
  },
  {
    id: 2,
    customer: "/images/blog/blog-img2.jpg",
    customer_name: "Micheal Authors",
    handle: "Most Successful",
    tranche: "50%",
    amount: "$700",
    status: "pending",
    slug: "two",
    product_name: "Product Field",
    total_amount: 9983,
    grand_total: 9993,
    vat: 7.5,
    service: [{ name: "Web dev", amount: 580000 }],
  },
  {
    id: 3,
    customer: "/images/blog/blog-img2.jpg",
    customer_name: "Popular Listeners",
    handle: "Most Successful",
    tranche: "60%",
    amount: "$20000",
    total_amount: 9983,
    grand_total: 99834,
    vat: 7.5,
    status: "paid",
    slug: "three",
    product_name: "Venture Nation",
    service: [
      { name: "Brand Design", amount: 150000 },
      { name: "Web dev", amount: 580000 },
    ],
  },
];

export const receipt = [
  {
    id: "INV-001",
    customer: "/images/blog/blog-img2.jpg",
    customer_name: "Popular Authors",
    handle: "Most Successful",
    tranche: "40%",
    amount: "$9000",
    status: "pending",
    product_name: "awaHealth",
    slug: "one",
    date: "15-1-2025",
    total_amount: 9983,
    grand_total: 9933,
    vat: 7.5,
    service: [
      { name: "Brand Design", amount: 150000 },
      { name: "UI/Ux", amount: 250000 },
      { name: "Web dev", amount: 580000 },
    ],
    // service: ["Brand Design, UI/Ux, Web dev"],
  },
  {
    id: "INV-082",
    customer: "/images/blog/blog-img2.jpg",
    customer_name: "Micheal Authors",
    handle: "Most Successful",
    tranche: "50%",
    amount: "$700",
    status: "pending",
    slug: "two",
    date: "2-10-2024",
    product_name: "Product Field",
    total_amount: 9983,
    grand_total: 9993,
    vat: 7.5,
    service: [{ name: "Web dev", amount: 580000 }],
  },
  {
    id: "INV-1920",
    customer: "/images/blog/blog-img2.jpg",
    customer_name: "Popular Listeners",
    handle: "Most Successful",
    tranche: "60%",
    amount: "$20000",
    total_amount: 9983,
    grand_total: 99834,
    vat: 7.5,
    status: "paid",
    slug: "three",
    date: "22-08-2024",
    product_name: "Venture Nation",
    service: [
      { name: "Brand Design", amount: 150000 },
      { name: "Web dev", amount: 580000 },
    ],
  },
];

export const menuItems = [
  "Dashboard",
  "Settings",
  "Profile",
  "Messages",
  "Notifications",
  "Help",
  "Logout",
  "Menu",
  "Manage",
  "Managed",
];

export const department = [
  {
    name: "Engineering",
    member: [
      { name: "Gee Ola", email: "", avatar: "", role: "member" },
      { name: "Zitere Duru", email: "", avatar: "", role: "member" },
      { name: "Ziglo Ade", email: "", avatar: "", role: "member" },
      { name: "Temi Oke", email: "", avatar: "", role: "member" },
      { name: "Ola Oke", email: "ola@mail.me", avatar: "", role: "lead" },
    ],
  },
  {
    name: "Design",
    member: [
      { name: "Bambo", email: "", avatar: "", role: "member" },
      { name: "Israel", email: "", avatar: "isr@mail.me", role: "member" },
    ],
  },
];

export const employees = [
  {
    department: "Design",
    email: "jay@mail.me",
    employee_id: "QO-87261",
    first_name: "Tola",
    last_name: "James",
    phone_number: "234908727364",
    role: "HR",
    start_date: "2025-01-28",
    status: "non-active",
    avatar: "",
  },
  {
    department: "Engineering",
    email: "tee@gmail.com",
    employee_id: "QO-88273",
    first_name: "Florence",
    last_name: "Temitope",
    phone_number: "2338917267",
    role: "Accountant",
    start_date: "2024-02-01",
    status: "active",
    avatar: "",
  },
];

export const companyDetails = {
  payment: [
    {
      account_name: "Qeola",
      bank_name: "Access",
      account: "2028938423",
      dollar_account: "412876358",
    },
    {
      account_name: "Qeola",
      bank_name: "GTB",
      account: "0289384423",
      dollar_account: "0128746358",
    },
  ],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ChartData: any = {
  series: [44, 55, 13, 43, 22],
  chart: {
    type: "pie",
    height: 300,
    fontFamily: `inherit`,
    foreColor: "#adb0bb",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        size: "70px",
      },
    },
  },
  legend: {
    show: true,
    position: "bottom",
    width: "50px",
  },
  colors: [
    "var(--color-info)",
    "var(--color-primary)",
    "var(--color-error)",
    "var(--color-success)",
    "var(--color-warning )",
  ],
  tooltip: {
    fillSeriesColor: false,
  },
  stroke: {
    width: 2,
    colors: "var(--color-surface-ld)",
  },
  labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ChartData2: any = {
  series: [
    {
      name: "Desktop",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Mobile",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Other",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
    fontFamily: `inherit`,
    foreColor: "#a1aab2",
    toolbar: {
      show: false,
    },
  },
  colors: [
    "var(--color-error)",
    "var(--color-primary)",
    "var(--color-secondary)",
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      endingShape: "rounded",
      columnWidth: "20%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },

  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    axisBorder: {
      color: "rgba(173,181,189,0.3)",
    },
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },

  tooltip: {
    theme: "dark",
    // y: {
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   formatter(val:any) {
    //     return `$ ${val} thousands`;
    //   },
    // },
  },
  grid: {
    show: false,
  },
  legend: {
    show: true,
    position: "bottom",
    width: "50px",
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        yaxis: {
          show: false,
        },
      },
    },
  ],
};
