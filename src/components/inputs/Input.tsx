import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

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
        <input
          id={id}
          disabled={disabled}
          {...register(id, { required })}
          placeholder=" "
          type={type}
          className={`
          w-full 
          px-4 
          py-2 
          rounded-lg 
          text-md 
          outline-none
          border-2
          ${errors[id] ? "border-rose-500" : "border-slate-300"}
          ${errors[id] ? "focus:border-rose-500" : "focus:border-slate-800"}
          `}
        />
      </div>
    </div>
  );
};

export default Input;
