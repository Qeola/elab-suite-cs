const handleCSVDownload = ({
  rows,
  headers,
}: {
  rows: any[];
  headers: string[];
}) => {
  // const headers = ["Name", "Handle", "Users", "Courses"];
  // const rows = data.map((item: any) => [
  //   item.name,
  //   item.handle,
  //   item.users,
  //   item.courses.map((course: any) => course.status).join(", "),
  // ]);

  const csvContent = [
    headers.join(","),
    ...rows.map((e: any) => e.join(",")),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "table-data.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
