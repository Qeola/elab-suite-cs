import React from "react";
import { parse, format } from "date-fns";

interface FormatDateProps {
  date: string;
}

// const FormatDate: React.FC<FormatDateProps> = ({ date }) => {
//   try {
//     const parsedDate = parse(date, "dd-MM-yyyy", new Date());
//     const formattedDate = format(parsedDate, "do MMM., yyyy");
//     return <span>{formattedDate}</span>;
//   } catch (error) {
//     console.error("Invalid date format:", date);
//     return <span>Invalid date</span>;
//   }
// };

const FormatDate: React.FC<FormatDateProps> = ({ date }) => {
  const possibleFormats = ["d-M-yyyy", "dd-MM-yyyy", "d-MM-yyyy", "dd-M-yyyy"];

  let parsedDate;
  for (const fmt of possibleFormats) {
    parsedDate = parse(date, fmt, new Date());
    if (!isNaN(parsedDate.getTime())) break;
  }

  if (!parsedDate || isNaN(parsedDate.getTime())) {
    console.error("Invalid date format:", date);
    return <span>Invalid date</span>;
  }

  return <span>{format(parsedDate, "do MMM., yyyy")}</span>;
};

export default FormatDate;
