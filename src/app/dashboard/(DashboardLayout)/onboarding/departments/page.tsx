"use client";
import React, { useState } from "react";
import { department } from "@/app/context/invoices";
import { Modal, Table } from "flowbite-react";
import { Icon } from "@iconify/react";
import BreadcrumbComp from "../../layout/shared/breadcrumb/BreadcrumbComp";
import CardBox from "@/app/components/shared/CardBox";
import DepartmentOnboarding from "@/app/components/Forms/DepartmentOnboarding";
import UserAvatar from "@/app/components/resuable/UserAvatar";
import FunctionButton from "@/app/components/resuable/button/FunctionButton";

const OnboardingDepartment = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <BreadcrumbComp title="Department" items={[]} />
      <CardBox>
        <div className="sm:flex justify-between mb-4">
          <div className="">{/* <SearchBar /> */}</div>
          <div className="">
            <FunctionButton click={() => setOpenModal(true)}>
              Add Department
            </FunctionButton>
          </div>
        </div>
        <div className="rounded-md border-ld overflow-hidden">
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
                      <div className="flex gap-3">
                        <Icon icon={`tabler:plus`} height={18} />
                        <span>Add</span>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
        <Modal show={openModal} onClose={() => setOpenModal(false)} size="lg">
          <Modal.Header className="rounded-t-md pb-0">
            Add Department
          </Modal.Header>
          <Modal.Body>
            <DepartmentOnboarding
              loading={isLoading}
              setLoading={setIsLoading}
            />
          </Modal.Body>
        </Modal>
      </CardBox>
    </div>
  );
};

export default OnboardingDepartment;
