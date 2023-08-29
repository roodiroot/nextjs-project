interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
  h1?: boolean;
}
const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  center,
  className,
  h1,
}) => {
  return (
    <div
      className={`${className} ${center ? "text-center" : "text-left"} pb-6`}
    >
      {h1 ? (
        <h1 className='sm:text-4xl text-2xl font-bold text-slate-800'>
          {title}
        </h1>
      ) : (
        <h2 className='sm:text-4xl text-2xl font-bold text-slate-800'>
          {title}
        </h2>
      )}
      <p className='text-slate-800 mt-2 text-lg leading-8'>{subtitle}</p>
    </div>
  );
};

export default Heading;
