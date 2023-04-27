interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}
const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  center,
  className,
}) => {
  return (
    <div className={`${className} ${center ? "text-center" : "text-left"}`}>
      <div className="text-2xl font-bold text-slate-800">{title}</div>
      <div className="font-light text-slate-500 mt-2">{subtitle}</div>
    </div>
  );
};

export default Heading;
