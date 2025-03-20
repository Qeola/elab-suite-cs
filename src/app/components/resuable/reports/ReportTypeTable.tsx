import { Dropdown, Table } from "flowbite-react";
import React from "react";
import UserAvatar from "../UserAvatar";
import { Icon } from "@iconify/react/dist/iconify.js";
import { IconDotsVertical } from "@tabler/icons-react";

interface Report {
  name: string;
  slug: string;
  description: string;
}

interface ReportTypeTableProps {
  data: Report[];
}

const ReportTypeTable: React.FC<ReportTypeTableProps> = ({ data }) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className="text-base font-semibold py-3">
              Name
            </Table.HeadCell>
            <Table.HeadCell className="text-base font-semibold py-3">
              Description
            </Table.HeadCell>
            <Table.HeadCell className="text-base font-semibold py-3"></Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y divide-border dark:divide-darkborder ">
            {data.map((item, index) => (
              <Table.Row key={index}>
                <Table.Cell className="whitespace-nowrap">
                  <p className="text-bodytext text-sm">{item.name}</p>
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap">
                  <p className="text-bodytext text-sm">{item.description}</p>
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
                      href={`/dashboard/account/reports/${item.slug}`}
                    >
                      <>
                        <Icon
                          icon={"solar:pen-new-square-broken"}
                          height={18}
                        />
                        <span>View</span>
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
  );
};

export default ReportTypeTable;
