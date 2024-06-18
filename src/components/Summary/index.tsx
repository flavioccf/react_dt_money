import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard } from "./SummaryCard";

export function Summary() {
  return (
    <section className="w-full max-w-screen-lg px-6 my-0 mx-auto justify-between items-center grid grid-cols-3 gap-8 -mt-20 text-white">
      <SummaryCard
        icon={<ArrowCircleUp size={32} color="#00b37e" />}
        title="Deposits"
        value="$ 17,400.00"
      />
      <SummaryCard
        icon={<ArrowCircleDown size={32} color="#f75a68" />}
        title="Withdraws"
        value="$ 17,400.00"
      />
      <SummaryCard
        icon={<CurrencyDollar size={32} color="#fff" />}
        title="Total"
        bgColor="bg-green-700"
        value="$ 17,400.00"
      />
    </section>
  );
}
