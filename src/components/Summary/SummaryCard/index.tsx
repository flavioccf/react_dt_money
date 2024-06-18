interface SummaryCardProps {
  icon: JSX.Element;
  title: string;
  value: string;
  bgColor?: string;
}

export function SummaryCard({ icon, title, value, bgColor }: SummaryCardProps) {
  const bkgColor = bgColor || "bg-gray-600";
  return (
    <div className={`${bkgColor} rounded-md p-8`}>
      <header className="flex items-center justify-between text-gray-300">
        <span>{title}</span>
        {icon}
      </header>
      <strong className="block mt-4 text-3xl">{value}</strong>
    </div>
  );
}
