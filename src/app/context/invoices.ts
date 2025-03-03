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
    customer_name: "Popular Authors",
    handle: "Most Successful",
    tranche: "50%",
    amount: "$700",
    status: "pending",
    slug: "two",
    product_name: "PF",
    total_amount: 9983,
    grand_total: 9993,
    vat: 7.5,
    service: [{ name: "Web dev", amount: 580000 }],
  },
  {
    id: 3,
    customer: "/images/blog/blog-img2.jpg",
    customer_name: "Popular Authors",
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
      { name: "Gee" },
      { name: "Zitere" },
      { name: "Ziglo" },
      { name: "Temi" },
    ],
    lead: "Ola",
  },
  {
    name: "Design",
    member: [{ name: "Bambo" }, { name: "Israel" }],
    lead: "Nil",
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
