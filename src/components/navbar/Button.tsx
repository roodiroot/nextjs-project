import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  Icon?: IconType;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  Icon,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        whitespace-nowrap
        ${outline ? "bg-white" : "bg-orange-500"}
        ${outline ? "border-orange-500" : "border-orange-500"}
        ${outline ? "text-orange-500" : "text-white"}
        ${small ? "py-1 px-4" : "py-2 px-4"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "font-light" : "font-semibold"}
        ${small ? "border-[1px]" : "border-2"}
        ${className ? className : ""}
  `}
    >
      {Icon && <Icon size={24} className='absolute left-4 top-2' />}
      {label}
    </button>
  );
};

export default Button;
