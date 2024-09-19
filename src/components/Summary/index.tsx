import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard } from "./SummaryCard";
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {
  const summary = useSummary();

  return (
    <section className="w-full max-w-screen-lg px-6 my-0 mx-auto justify-between items-center grid grid-cols-3 gap-8 -mt-20">
      <SummaryCard
        icon={<ArrowCircleUp size={32} color="#00b37e" />}
        title="Income"
        value={priceFormatter.format(summary.income)}
      />
      <SummaryCard
        icon={<ArrowCircleDown size={32} color="#f75a68" />}
        title="Outcome"
        value={priceFormatter.format(summary.outcome)}
      />
      <SummaryCard
        icon={<CurrencyDollar size={32} color="#fff" />}
        title="Total"
        bgColor="bg-green-700"
        value={priceFormatter.format(summary.total)}
      />
    </section>
  );
}
