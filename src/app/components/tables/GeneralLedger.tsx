"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  createColumnHelper,
} from "@tanstack/react-table";
import { Button } from "flowbite-react";
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
} from "@tabler/icons-react";
import { Icon } from "@iconify/react";
import EmptyState from "../resuable/EmptyState";
import CurrencyFormatter from "@/utils/helpers/CurrencyFormatter";

const columnHelper = createColumnHelper<any>();

const columns = () => [
  columnHelper.accessor("account_type", {
    cell: (info: any) => (
      <p className="text-darklink dark:text-bodytext text-sm">
        {info.getValue()}
      </p>
    ),
    header: () => <span>Account Type</span>,
  }),
  columnHelper.accessor("account_code", {
    cell: (info: any) => (
      <p className="text-darklink dark:text-bodytext text-sm">
        {info.getValue()}
      </p>
    ),
    header: () => <span className="text-nowrap">Account Code</span>,
  }),
  columnHelper.accessor("debit", {
    cell: (info: any) => (
      <p className="text-darklink dark:text-bodytext text-sm">
        {info.getValue() ? <CurrencyFormatter amount={info.getValue()} /> : "-"}
      </p>
    ),
    header: () => <span className="text-nowrap">Debit</span>,
  }),
  columnHelper.accessor("credit", {
    cell: (info: any) => (
      <p className="text-darklink dark:text-bodytext text-sm">
        {info.getValue() ? <CurrencyFormatter amount={info.getValue()} /> : "-"}
      </p>
    ),
    header: () => <span className="text-nowrap">Credit</span>,
  }),
  columnHelper.accessor("balance", {
    cell: (info: any) => (
      <p className="text-darklink dark:text-bodytext text-sm">
        {info.getValue() ? <CurrencyFormatter amount={info.getValue()} /> : "-"}
      </p>
    ),
    header: () => <span className="text-nowrap">Balance</span>,
  }),
  columnHelper.accessor("actions", {
    cell: (info: any) => {
      const rowData = info.row.original;
      const slug = rowData.slug;

      return (
        <a
          href={`/dashboard/account/reports/general-ledger/${slug}`}
          className="flex gap-3 items-center w-full"
        >
          <Icon icon={"solar:eye-outline"} height={18} />
          <span>View</span>
        </a>
      );
    },
    header: () => <span></span>,
  }),
];

function GeneralLedger({ tableData }: { tableData: any }) {
  // const [data] = React.useState(() => [...tableData]);
  const [data, setData] = React.useState(tableData);

  React.useEffect(() => {
    setData(tableData);
  }, [tableData]);

  const [columnFilters, setColumnFilters] = React.useState([]);

  const table = useReactTable({
    data,
    columns: columns(),
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

  //   const handleDownload = () => {
  //     const headers = ["Name", "Handle", "Users", "Courses"];
  //     const rows = data.map((item: any) => [
  //       item.name,
  //       item.handle,
  //       item.users,
  //       item.courses.map((course: any) => course.status).join(", "),
  //     ]);

  //     const csvContent = [
  //       headers.join(","),
  //       ...rows.map((e: any) => e.join(",")),
  //     ].join("\n");

  //     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  //     const url = URL.createObjectURL(blob);

  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.setAttribute("download", "table-data.csv");
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   };

  return (
    <>
      <div>
        <div className="rounded-md overflow-hidden">
          <div className="overflow-x-auto">
            {table.getRowModel().rows.length === 0 ? (
              <EmptyState text={"No Employee Yet."} />
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
                    <tr
                      key={row.id}
                      className="hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {row.getVisibleCells().map((cell: any) => (
                        <td
                          key={cell.id}
                          className="whitespace-nowrap py-5 px-4"
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
          </div>
        </div>
      </div>
    </>
  );
}

export default GeneralLedger;
