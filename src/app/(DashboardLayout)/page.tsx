import React from "react";
import CardBox from "../components/shared/CardBox";
import PaginationTable from "../components/resuable/Pagination";

const page = () => {
  return (
    <>
      <CardBox>
        <h5 className="card-title">Sample page 1</h5>
        <p>
          1. 
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <PaginationTable tableData={[
            {
              customer: "/images/blog/blog-img2.jpg",
              customer_name: "Popular Authors",
              handle: "Most Successful",
              tranche: "40%",
              amount: '$9000',
              status: "pending",
              product_name: "awaHealth",
              service: ['Brand Design, UI/Ux, Web dev'],
            },
            {
              customer: "/images/blog/blog-img2.jpg",
              customer_name: "Popular Authors",
              handle: "Most Successful",
              tranche: "60%",
              amount: '$20000',
              status: "paid",
              product_name: "Venture Nation",
              service: ['Brand Design, Web Dev'],
            },
        ]} />
        
      </CardBox>
    </>
  );
};

export default page;
