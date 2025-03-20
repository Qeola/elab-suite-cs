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
export const report = [
  {
    name: "General Ledger",
    description: "View all completed company transactions.",
    slug: "general-ledger",
  },
  {
    name: "Journal Entries",
    description: "Chronological transaction log for review.",
    slug: "journal-entries",
  },
  {
    name: "Trial Balance",
    description: "Displays all debit & credit balances.",
    slug: "trial-balance",
  },
  {
    name: "Statement of Cash Flow",
    description: "Movement of cash over a time period.",
    slug: "statement-of-cash-flow",
  },
];

export const generalLedger = [
  {
    account_type: "Asset",
    account_code: "AS-3u429",
    debit: 9000,
    balance: 18000,
  },
  {
    account_type: "Expense",
    account_code: "AS-917b9",
    credit: 1000,
    balance: 17000,
  },
  {
    account_type: "Revenue",
    account_code: "AS-568u8",
    debit: 10000,
    balance: 27000,
  },
];
export const generalLedgerDetail = [
  {
    account_type: "Asset",
    account_code: "AS-3u429",
    debit: 9000,
    date: "2025-01-28",
    detail: "Payment for Brand Design",
    transaction_type: "Debit",
    transaction_number: "TR-001",
    reference_number: "REF-001",
  },
  {
    account_type: "Expense",
    account_code: "AS-917b9",
    credit: 1000,
    date: "2025-01-28",
    detail: "Payment for Brand Design",
    transaction_type: "Credit",
    transaction_number: "TR-001",
    reference_number: "REF-001",
  },
  {
    account_type: "Revenue",
    account_code: "AS-568u8",
    debit: 10000,
    date: "2025-01-28",
    detail: "Payment for Brand Design",
    transaction_type: "Debit",
    transaction_number: "TR-001",
    reference_number: "REF-001",
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ChartData: any = {
  series: [44, 55, 13, 43, 22, 18, 12, 5],
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
    "var(--color-warning)",
    "var(--color-secondary)",
    "var(--color-lightprimary)",
    "var(--color-lightsecondary)",
    "var(--color-lightinfo)",
    "var(--color-lighterror)",
    "var(--color-lightsuccess)",
    "var(--color-lightwarning)",
  ],
  tooltip: {
    fillSeriesColor: false,
  },
  stroke: {
    width: 2,
    colors: "var(--color-surface-ld)",
  },
  labels: [
    "Team A",
    "Team B",
    "Team C",
    "Team D",
    "Team E",
    "Team F",
    "Team G",
    "Team H",
  ],
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
      name: "Tablet",
      data: [67, 25, 141, 98, 17, 115, 91, 104, 55, 32],
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
    "var(--color-warning)",
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
    categories: [
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
    ],
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ChartData3: any = {
  series: [
    {
      name: "Income",
      data: [1.2, 2.7, 1, 3.6, 2.1, 2.7, 2.2, 1.3, 2.5],
    },
    {
      name: "Expense",
      data: [2.8, 1.1, 2.5, 1.5, 2.3, 1.9, 1, 2.1, 1.3],
    },
    {
      name: "Invoice",
      data: [2.8, 1.1, 2.5, 1.5, 2.3, 1.9, 1, 2.1, 1.3],
    },
  ],
  chart: {
    toolbar: {
      show: false,
    },
    type: "bar",
    fontFamily: "inherit",
    foreColor: "#adb0bb",
    height: 295,
    stacked: true,
    offsetX: -15,
  },
  colors: ["var(--color-primary)", "var(--color-error)", "var(--color-info)"],
  plotOptions: {
    bar: {
      horizontal: false,
      barHeight: "60%",
      columnWidth: "15%",
      borderRadius: [6],
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "all",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  grid: {
    show: true,
    padding: {
      top: 0,
      bottom: 0,
      right: 0,
    },
    borderColor: "rgba(0,0,0,0.05)",
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  yaxis: {
    min: -1,
    // max: 5,
    tickAmount: 4,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
    ],
    labels: {
      style: { fontSize: "13px", colors: "#adb0bb", fontWeight: "400" },
    },
  },

  tooltip: {
    theme: "dark",
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ChartData4: any = {
  series: [
    {
      name: "Sales Summery 1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Sales Summery 2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    id: "area-chart",
    fontFamily: `inherit`,
    foreColor: "#adb0bb",
    zoom: {
      enabled: true,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0,
      inverseColors: false,
      opacityFrom: 0.2,
      opacity: 0.1,
      stops: [100],
    },
  },
  stroke: {
    width: "3",
    curve: "smooth",
  },
  colors: ["var(--color-primary)", "var(--color-secondary)"],
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00",
      "2018-09-19T01:30:00",
      "2018-09-19T02:30:00",
      "2018-09-19T03:30:00",
      "2018-09-19T04:30:00",
      "2018-09-19T05:30:00",
      "2018-09-19T06:30:00",
    ],
    axisBorder: {
      color: "rgba(173,181,189,0.3)",
    },
  },
  yaxis: {
    opposite: false,
    labels: {
      show: true,
    },
  },
  legend: {
    show: true,
    position: "bottom",
    width: "50px",
  },
  grid: {
    show: false,
  },
  tooltip: {
    theme: "dark",
    fillSeriesColor: false,
  },
};
