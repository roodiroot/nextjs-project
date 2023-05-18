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
    <div
      className={`${className} ${center ? "text-center" : "text-left"} pb-6`}
    >
      <div className="sm:text-3xl text-2xl font-bold text-slate-900">
        {title}
      </div>
      <div className="text-slate-900 mt-2">{subtitle}</div>
    </div>
  );
};

export default Heading;
