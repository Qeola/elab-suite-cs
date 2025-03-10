import React from "react";

interface CurrencyFormatterProps {
  amount: number;
  currency?: string;
  locale?: string;
}

const CurrencyFormatter: React.FC<CurrencyFormatterProps> = ({
  amount,
  currency = "NGN",
  locale = "en-NG",
}) => {
  return (
    <span>
      {new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        minimumFractionDigits: 2,
      }).format(amount)}
    </span>
  );
};

export default CurrencyFormatter;
