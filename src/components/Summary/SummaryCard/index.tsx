interface SummaryCardProps {
  icon: JSX.Element;
  title: string;
  value: string;
  bgColor: string;
}

export function SummaryCard({ ...props }: SummaryCardProps) {
  return (
    <div className={`${props.bgColor} rounded-md p-8`}>
      <header className="flex items-center justify-between text-gray-300">
        <span>{props.title}</span>
        {props.icon}
      </header>
      <strong className="block mt-4 text-3xl">{props.value}</strong>
    </div>
  );
}
