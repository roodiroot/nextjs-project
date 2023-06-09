import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import { BiRuble } from "react-icons/bi";
import InputMask from "react-input-mask";

interface InputClientProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}
const InputClient: React.FC<InputClientProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  const styleInput = `
  peer
  w-full
  p-4
  pt-6
  font-light
  bg-white
  border-2
  rounded-md
  outline-none
  transition
  disabled:opacity-70
  disabled:cursor-not-allowed
  ${formatPrice ? "pl-9" : "pl-4"}
  ${errors[id] ? "border-rose-500" : "border-slate-300"}
  ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
`;
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiRuble size={24} className="text-slate-800 absolute top-5 left-2" />
      )}
      {type === "number" ? (
        <InputMask
          id={id}
          disabled={disabled}
          mask="8 (999) 999-99-99"
          maskChar={null}
          {...register(id, { required })}
          placeholder=" "
          className={styleInput}
        />
      ) : (
        <input
          id={id}
          disabled={disabled}
          {...register(id, { required })}
          placeholder=" "
          type={type}
          className={styleInput}
        />
      )}
      <label
        className={`
          absolute
          duration-150
          transform
          -translate-y-3
          top-5
          z-10
          origin-[0]
          ${formatPrice ? "left-9" : "left-4"}
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-75
          peer-focus:-translate-y-4
          ${errors[id] ? "text-rose-500" : "text-zinc-400"}
          `}
      >
        {label}
      </label>
    </div>
  );
};

export default InputClient;
