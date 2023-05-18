interface AdvatagItemProps {
  title: string;
  description: string;
  Icon: any;
}
const AdvatagItem: React.FC<AdvatagItemProps> = ({
  title,
  description,
  Icon,
}) => {
  return (
    <div
      className="
        w-full
        mx-auto
        max-w-[300px]
        sm:max-w-none
        p-4
        rounded-md
        bg-slate-100
        flex
        flex-col
        sm:flex-row
        gap-3
        items-center
        shadow-sm
        "
    >
      <div className="relative min-w-[80px] max-w-[80px] h-[80px] bg-white rounded-md items-center">
        <Icon
          size={40}
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-orange-500"
        />
      </div>
      <div className="w-full text-center sm:text-left flex flex-col justify-center">
        <div className="text-lg font-semibold text-slate-900">{title}</div>
        <div className="text-sm text-slate-400">{description}</div>
      </div>
    </div>
  );
};

export default AdvatagItem;
