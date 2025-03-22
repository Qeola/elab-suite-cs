"use client";
import React, { useState } from "react";
import { department } from "@/app/context/invoices";
import { Dropdown, Modal, Table } from "flowbite-react";
import { Icon } from "@iconify/react";
import BreadcrumbComp from "../../../layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";
import DepartmentOnboarding from "@/app/components/Forms/DepartmentOnboarding";
import UserAvatar from "@/app/components/resuable/UserAvatar";
import FunctionButton from "@/app/components/resuable/button/FunctionButton";
import { IconDotsVertical } from "@tabler/icons-react";
import EditDepartmentForm from "@/app/components/Forms/EditDepartment";
import DeleteModal from "@/app/components/modals/DeleteModal";
import ChartOfAccount from "@/app/components/Forms/ChartOfAccount";

const ChartOfAccountPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditLoading, setIsEditLoading] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState<string>("");

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

  const BCrumb = [
    {
      to: "/dashboard/account/department",
      title: "Settings",
    },
    {
      title: "Chart of Account",
    },
  ];

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
                  Name
                </Table.HeadCell>
                <Table.HeadCell className="text-base font-semibold py-3">
                  Total Member
                </Table.HeadCell>
                <Table.HeadCell className="text-base font-semibold py-3">
                  Lead
                </Table.HeadCell>
                <Table.HeadCell className="text-base font-semibold py-3"></Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y divide-border dark:divide-darkborder ">
                {department.map((item, index) => (
                  <Table.Row key={index}>
                    <Table.Cell className="whitespace-nowrap">
                      <p className="text-bodytext text-sm">{item.name}</p>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap">
                      <p className="text-bodytext text-sm">
                        {item.member.length}
                      </p>
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap">
                      {(() => {
                        const lead = item.member?.find(
                          (member) => member.role === "lead",
                        );
                        return lead ? (
                          <UserAvatar
                            name={lead.name}
                            email={lead.email}
                            avatar={lead.avatar}
                          />
                        ) : (
                          <p>Nil</p>
                        );
                      })()}
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
                          onClick={() => setOpenEditModal(true)}
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
                          onClick={() => handleDeleteClick(selectedSlug)}
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
        <DeleteModal
          isOpen={isDeleteModalOpen}
          title="Department"
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={confirmDelete}
        />
      </CardBox>
    </div>
  );
};

export default ChartOfAccountPage;
