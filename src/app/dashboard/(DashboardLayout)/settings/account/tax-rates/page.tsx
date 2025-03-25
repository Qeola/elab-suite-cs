"use client";
import React, { useState } from "react";
import { taxRateDetail } from "@/app/context/invoices";
import { Dropdown, Modal, Table } from "flowbite-react";
import BreadcrumbComp from "../../../layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";
import FunctionButton from "@/app/components/resuable/button/FunctionButton";
import TaxRate from "@/app/components/Forms/TaxRate";
import EditTaxRate from "@/app/components/Forms/EditTaxRate";
import DeleteModal from "@/app/components/modals/DeleteModal";
import { Icon } from "@iconify/react/dist/iconify.js";
import { IconDotsVertical } from "@tabler/icons-react";

const TaxRatePage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditLoading, setIsEditLoading] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState<string>("");

  const BCrumb = [
    {
      to: "/dashboard/settings",
      title: "Settings",
    },
    {
      title: "Tax Rate",
    },
  ];

  const handleDeleteClick = (slug: string) => {
    console.log("working...", slug);
    setSelectedSlug(slug);
    setIsDeleteModalOpen(true);
  };
  const confirmDelete = () => {
    if (selectedSlug) {
      console.log("Deleting employee with slug:", selectedSlug);
      // Call your delete API function here
    }
    setIsDeleteModalOpen(false);
  };

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
                    <Table.Cell className="whitespace-nowrap">
                      <Dropdown
                        label=""
                        dismissOnClick={false}
                        renderTrigger={() => (
                          <span className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer">
                            <IconDotsVertical size={22} />
                          </span>
                        )}
                      >
                        <Dropdown.Item
                          className="flex gap-3"
                          onClick={() => {
                            setOpenEditModal(true);
                            setSelectedSlug(item.slug);
                          }}
                        >
                          <>
                            <Icon
                              icon={"solar:pen-new-square-broken"}
                              height={18}
                            />
                            <span>Edit</span>
                          </>
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="flex gap-3"
                          onClick={() => {
                            handleDeleteClick(selectedSlug);
                            setSelectedSlug(item.slug);
                          }}
                        >
                          <>
                            <Icon
                              icon={"solar:pen-new-square-broken"}
                              height={18}
                            />
                            <span>Delete</span>
                          </>
                        </Dropdown.Item>
                      </Dropdown>
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
        <Modal show={openEditModal} onClose={() => setOpenEditModal(false)}>
          <Modal.Header className="rounded-t-md pb-0">
            Edit Department
          </Modal.Header>
          <Modal.Body>
            <EditTaxRate
              loading={isEditLoading}
              slug={selectedSlug}
              setLoading={setIsEditLoading}
            />
          </Modal.Body>
        </Modal>
        <DeleteModal
          isOpen={isDeleteModalOpen}
          title="Tax Rate"
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
      </CardBox>
    </div>
  );
};

export default TaxRatePage;
