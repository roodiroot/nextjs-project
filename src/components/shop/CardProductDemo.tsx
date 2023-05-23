interface CardProdDemoProps {
  search?: boolean
}
const CardProductDemo: React.FC<CardProdDemoProps> = ({search}) => {
  return (
    <div
      className={`
        relative
        w-full
        rounded-md
        flex
        flex-col
        overflow-hidden
        ${search ? "min-h-[404px]" : "min-h-[470.44px]"}
        ${search ? "h-[404px]" : "h-[470.44px]"}
        animate-pulse
      `}
    >
      <div className="absolute inset-0 bg-slate-300"></div>
    </div>
  );
};

export default CardProductDemo;
