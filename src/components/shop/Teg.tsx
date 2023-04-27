interface TegProps {
  label: string;
  className?: string;
  nw?: boolean;
  hit?: boolean;
  yellow?: boolean;
  green?: boolean;
  classic?: boolean;
}
const Teg: React.FC<TegProps> = ({
  label,
  className,
  nw,
  hit,
  yellow,
  green,
  classic,
}) => {
  return (
    <div
      className={`
        ${className ? className : ""} 
        whitespace-nowrap
        py-1 
        px-2 
        rounded-sm 
        border-2 
        font-bold 
        text-sm 
        inline-block
        ${green ? "border-green-500 text-white bg-green-500" : ""}
        ${nw ? "border-sky-700 text-sky-600 bg-sky-300" : ""}
        ${hit ? "border-red-700 text-red-600 bg-red-300" : ""}
        ${yellow ? "border-yellow-700 text-yellow-600 bg-yellow-300" : ""}
        ${classic ? " border-slate-900 text-slate-900 bg-slate-900/20" : ""}
       `}
    >
      {label}
    </div>
  );
};

export default Teg;
