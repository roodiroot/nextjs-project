import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import InputMask from "react-input-mask";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatPrice,
  required,
  register,
  errors,
}) => {
  const className = `
  w-full 
  px-4 
  py-2 
  rounded-lg 
  text-md 
  outline-none
  border-2
  ${errors[id] ? "border-rose-500" : "border-slate-300"}
  ${errors[id] ? "focus:border-rose-500" : "focus:border-slate-800"}
  `;
  return (
    <div className="">
      {label && (
        <label
          className={`
         font-light text-sm
         ${errors[id] ? "text-rose-500" : "text-zinc-400"}
        `}
        >
          {label}
        </label>
      )}
      <div className="w-full">
        {type === "number" ? (
          <InputMask
            id={id}
            disabled={disabled}
            mask="8 (999) 999-99-99"
            maskChar={null}
            {...register(id, { required })}
            placeholder=" "
            className={className}
          />
        ) : (
          <input
            id={id}
            disabled={disabled}
            {...register(id, { required })}
            placeholder=" "
            type={type}
            className={className}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
