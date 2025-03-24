"use client";
import React, { useState } from "react";
import { taxRateDetail } from "@/app/context/invoices";
import { Modal, Table } from "flowbite-react";
import BreadcrumbComp from "../../../layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";
import FunctionButton from "@/app/components/resuable/button/FunctionButton";
import EditDepartmentForm from "@/app/components/Forms/EditDepartment";
import TaxRate from "@/app/components/Forms/TaxRate";

const TaxRatePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditLoading, setIsEditLoading] = useState(false);

  const BCrumb = [
    {
      to: "/dashboard/settings",
      title: "Settings",
    },
    {
      title: "Tax Rate",
    },
  ];

  return (
    <div>
      <BreadcrumbComp
        title="Tax Rate"
        items={BCrumb}
        image="/images/crumbs/department.svg"
      />
      <CardBox>
        <div className="sm:flex justify-between mb-4">
          <div className="">{/* <SearchBar /> */}</div>
          <div className="">
            <FunctionButton click={() => setOpenModal(true)}>
              Add Account
            </FunctionButton>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="overflow-x-auto">
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell className="text-base font-semibold py-3">
                  Tax Name
                </Table.HeadCell>
                <Table.HeadCell className="text-base font-semibold py-3">
                  Tax Rate
                </Table.HeadCell>
                <Table.HeadCell className="text-base font-semibold py-3"></Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y divide-border dark:divide-darkborder ">
                {taxRateDetail.map((item, index) => (
                  <Table.Row key={index}>
                    <Table.Cell className="whitespace-nowrap">
                      <p className="text-bodytext text-sm">{item.name}</p>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap">
                      <p className="text-bodytext text-sm">{item.rate}</p>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header className="rounded-t-md pb-0">
            Add Tax Rate
          </Modal.Header>
          <Modal.Body>
            <TaxRate loading={isLoading} setLoading={setIsLoading} />
          </Modal.Body>
        </Modal>
        <Modal
          show={openEditModal}
          onClose={() => setOpenEditModal(false)}
          size="lg"
        >
          <Modal.Header className="rounded-t-md pb-0">
            Edit Department
          </Modal.Header>
          <Modal.Body>
            <EditDepartmentForm
              loading={isEditLoading}
              setLoading={setIsEditLoading}
            />
          </Modal.Body>
        </Modal>
      </CardBox>
    </div>
  );
};

export default TaxRatePage;
