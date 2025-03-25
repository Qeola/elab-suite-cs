"use client";
import React, { useState } from "react";
import { chartOfAccountDetail } from "@/app/context/invoices";
import { Dropdown, Modal, Table } from "flowbite-react";
import BreadcrumbComp from "../../../layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";
import FunctionButton from "@/app/components/resuable/button/FunctionButton";
import ChartOfAccount from "@/app/components/Forms/ChartOfAccount";
import EditChartOfAccount from "@/app/components/Forms/EditChartOfAccount";
import DeleteModal from "@/app/components/modals/DeleteModal";
import { IconDotsVertical } from "@tabler/icons-react";
import { Icon } from "@iconify/react/dist/iconify.js";

const ChartOfAccountPage = () => {
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
      title: "Chart of Account",
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
        title="Chart of Account"
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
                  Account Name
                </Table.HeadCell>
                <Table.HeadCell className="text-base font-semibold py-3">
                  Account Type
                </Table.HeadCell>
                <Table.HeadCell className="text-base font-semibold py-3">
                  Account Code
                </Table.HeadCell>
                <Table.HeadCell className="text-base font-semibold py-3">
                  Parent Account Name
                </Table.HeadCell>
                <Table.HeadCell className="text-base font-semibold py-3"></Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y divide-border dark:divide-darkborder ">
                {chartOfAccountDetail.map((item, index) => (
                  <Table.Row key={index}>
                    <Table.Cell className="whitespace-nowrap">
                      <p className="text-bodytext text-sm">
                        {item.account_name}
                      </p>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap">
                      <p className="text-bodytext text-sm">
                        {item.account_type}
                      </p>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap">
                      <p className="text-bodytext text-sm">
                        {item.account_code || "-"}
                      </p>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap">
                      <p className="text-bodytext text-sm">
                        {item.parent_name || "-"}
                      </p>
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
          <Modal.Header className="rounded-t-md pb-0">Add Account</Modal.Header>
          <Modal.Body>
            <ChartOfAccount loading={isLoading} setLoading={setIsLoading} />
          </Modal.Body>
        </Modal>
        <Modal show={openEditModal} onClose={() => setOpenEditModal(false)}>
          <Modal.Header className="rounded-t-md pb-0">
            Edit Department
          </Modal.Header>
          <Modal.Body>
            <EditChartOfAccount
              loading={isEditLoading}
              slug={selectedSlug}
              setLoading={setIsEditLoading}
            />
          </Modal.Body>
        </Modal>
        <DeleteModal
          isOpen={isDeleteModalOpen}
          title="Account"
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
      </CardBox>
    </div>
  );
};

export default ChartOfAccountPage;
