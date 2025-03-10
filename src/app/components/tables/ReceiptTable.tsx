"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  createColumnHelper,
} from "@tanstack/react-table";
import { Button, Dropdown } from "flowbite-react";
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
  IconDotsVertical,
} from "@tabler/icons-react";
import { Icon } from "@iconify/react";
import UserAvatar from "../resuable/UserAvatar";
import EmptyState from "../resuable/EmptyState";
import DeleteModal from "../modals/DeleteModal";
import FormatDate from "@/utils/FormatDate";

const columnHelper = createColumnHelper<any>();

const columns = (handleDeleteClick: (slug: string) => void) => [
  columnHelper.accessor("id", {
    cell: (info: any) => (
      <div className="flex gap-3 items-center">
        <p className="text-darklink dark:text-bodytext text-sm">
          {info.getValue()}
        </p>
      </div>
    ),
    header: () => <span>Invoice No.</span>,
  }),
  columnHelper.accessor("avatar", {
    cell: (info: any) => (
      <UserAvatar
        name={info.row.original.customer_name}
        avatar={info.getValue()}
        email={info.row.original.handle}
      />
    ),
    header: () => <span>Customer</span>,
  }),
  columnHelper.accessor("product_name", {
    cell: (info: any) => (
      <p className="text-darklink dark:text-bodytext text-sm">
        {info.getValue()}
      </p>
    ),
    header: () => <span>Product Name</span>,
  }),

  columnHelper.accessor("date", {
    cell: (info: any) => (
      <p className="text-darklink dark:text-bodytext text-sm">
        <FormatDate date={info.getValue()} />
      </p>
    ),
    header: () => <span>Payment Date</span>,
  }),

  columnHelper.accessor("amount", {
    cell: (info: any) => (
      <div className="flex gap-3 items-center">
        <p className="text-darklink dark:text-bodytext text-sm">
          {info.getValue()}
        </p>
      </div>
    ),
    header: () => <span>Amount</span>,
  }),
  columnHelper.accessor("tranche", {
    cell: (info: any) => (
      <div className="flex gap-3 items-center">
        <p className="text-darklink dark:text-bodytext text-sm">
          {info.getValue()}
        </p>
      </div>
    ),
    header: () => <span>Tranche</span>,
  }),
  columnHelper.accessor("actions", {
    cell: (info: any) => {
      const rowData = info.row.original;
      const slug = rowData.slug;

      return (
        <Dropdown
          label=""
          dismissOnClick={false}
          renderTrigger={() => (
            <span className="h-9 w-9 flex justify-center items-center rounded-full hover:bg-lightprimary hover:text-primary cursor-pointer">
              <IconDotsVertical size={22} />
            </span>
          )}
        >
          {[
            {
              icon: "solar:eye-outline",
              listtitle: "View",
              link: `/dashboard/receipt/${slug}`,
            },
            { icon: "solar:diskette-outline", listtitle: "Generate Receipt" },
            {
              icon: "solar:pen-new-square-broken",
              listtitle: "Edit",
              link: `/dashboard/receipt/${slug}/edit`,
            },
            {
              icon: "solar:trash-bin-minimalistic-outline",
              listtitle: "Delete",
              action: () => handleDeleteClick(slug),
            },
          ].map((item, index) => (
            <Dropdown.Item
              key={index}
              className="flex gap-3"
              onClick={item.action}
            >
              {item.link ? (
                <a href={item.link} className="flex gap-3 items-center w-full">
                  <Icon icon={item.icon} height={18} />
                  <span>{item.listtitle}</span>
                </a>
              ) : (
                <>
                  <Icon icon={item.icon} height={18} />
                  <span>{item.listtitle}</span>
                </>
              )}
            </Dropdown.Item>
          ))}
        </Dropdown>
      );
    },
    header: () => <span></span>,
  }),
];

function ReceiptPaginationTable({ tableData }: { tableData: any }) {
  //   const [data] = React.useState(() => [...tableData]);
  const [data, setData] = React.useState(tableData);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const handleDeleteClick = (slug: string) => {
    console.log("working...", slug);
    setSelectedSlug(slug);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (selectedSlug) {
      console.log("Deleting receipt with slug:", selectedSlug);
      // Call your delete API function here
    }
    setIsDeleteModalOpen(false);
  };

  React.useEffect(() => {
    setData(tableData);
  }, [tableData]);

  const [columnFilters, setColumnFilters] = React.useState([]);

  const table = useReactTable({
    data,
    columns: columns(handleDeleteClick),
    filterFns: {},
    state: {
      columnFilters,
    },
    onColumnFiltersChange: (filters: any) => setColumnFilters(filters),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  // const handleDownload = () => {
  //   const headers = ["Name", "Handle", "Users", "Courses"];
  //   const rows = data.map((item: any) => [
  //     item.name,
  //     item.handle,
  //     item.users,
  //     item.courses.map((course: any) => course.status).join(", "),
  //   ]);

  //   const csvContent = [
  //     headers.join(","),
  //     ...rows.map((e: any) => e.join(",")),
  //   ].join("\n");

  //   const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  //   const url = URL.createObjectURL(blob);

  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.setAttribute("download", "table-data.csv");
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <>
      <div>
        <div className="overflow-hidden">
          <div className="overflow-x-auto">
            {table.getRowModel().rows.length === 0 ? (
              <EmptyState text={"No Receipt Yet."} />
            ) : (
              <table className="min-w-full">
                <thead>
                  {table.getHeaderGroups().map((headerGroup: any) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header: any) => (
                        <th
                          key={header.id}
                          className="text-base text-ld font-semibold py-3 text-left border-b border-ld px-4 py-3"
                        >
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="divide-y divide-border dark:divide-darkborder">
                  {table.getRowModel().rows.map((row: any) => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell: any) => (
                        <td
                          key={cell.id}
                          className="whitespace-nowrap py-3 px-4"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <div className="sm:flex  gap-2 p-3 items-center justify-end">
            <div className="sm:flex  items-center gap-2 sm:mt-0 mt-3">
              <div className="sm:flex items-center gap-2">
                <div className="flex ">
                  <h2 className="text-gray-700 pe-1">Page</h2>
                  <h2 className="font-semibold text-gray-900">
                    {table.getState().pagination.pageIndex + 1} of{" "}
                    {table.getPageCount()}
                  </h2>
                </div>
                <div className="flex items-center gap-2 ">
                  | Go to page:
                  <input
                    type="number"
                    min="1"
                    max={table.getPageCount()}
                    defaultValue={table.getState().pagination.pageIndex + 1}
                    onChange={(e) => {
                      const page = e.target.value
                        ? Number(e.target.value) - 1
                        : 0;
                      table.setPageIndex(page);
                    }}
                    className="w-16  form-control-input"
                  />
                </div>
                <div className="select-md sm:mt-0 mt-3">
                  <select
                    value={table.getState().pagination.pageSize}
                    onChange={(e) => {
                      table.setPageSize(Number(e.target.value));
                    }}
                    className="border  w-20"
                  >
                    {[10, 25, 50, 100].map((pageSize) => (
                      <option key={pageSize} value={pageSize}>
                        {pageSize}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-2 sm:mt-0 mt-3">
                  <Button
                    size="small"
                    onClick={() => table.setPageIndex(0)}
                    disabled={!table.getCanPreviousPage()}
                    className="bg-dark hover:bg-lightprimary dark:hover:bg-lightprimary disabled:opacity-50"
                  >
                    <IconChevronsLeft className="text-ld" size={20} />
                  </Button>
                  <Button
                    size="small"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className="bg-dark hover:bg-lightprimary dark:hover:bg-lightprimary disabled:opacity-50"
                  >
                    <IconChevronLeft className="text-ld" size={20} />
                  </Button>
                  <Button
                    size="small"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className="bg-dark hover:bg-lightprimary dark:hover:bg-lightprimary disabled:opacity-50"
                  >
                    <IconChevronRight className="text-ld" size={20} />
                  </Button>
                  <Button
                    size="small"
                    onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                    disabled={!table.getCanNextPage()}
                    className="bg-dark hover:bg-lightprimary dark:hover:bg-lightprimary disabled:opacity-50"
                  >
                    <IconChevronsRight className="text-ld" size={20} />
                  </Button>
                </div>
              </div>
            </div>
            <DeleteModal
              isOpen={isDeleteModalOpen}
              title="Employee"
              onClose={() => setIsDeleteModalOpen(false)}
              onConfirm={confirmDelete}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReceiptPaginationTable;
