interface ContainerProps {
  maxWidth?: number;
  children?: React.ReactNode;
  className?: string;
}
const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = 1400,
  className,
}) => {
  return (
    <div
      style={{ maxWidth: maxWidth }}
      className={`
      w-full
      mx-auto 
      xl:px-20 
      md:px-10 
      sm:px-4 
      px-2
      ${className}
    `}
    >
      {children}
    </div>
  );
};

export default Container;
