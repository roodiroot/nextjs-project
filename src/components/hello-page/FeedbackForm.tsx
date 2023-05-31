import { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";
import Button from "../navbar/Button";
import Input from "../inputs/Input";

interface FeedbackFormProps {
  className?: string;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ className = "" }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    const message = `${data.name} тел: ${data.phone}`;
    axios
      .post("https://api.kondish.su/api/send-message", {
        message,
      })
      .then(() => {
        toast.success("Ожидайте звонка");
        // @ts-ignore
        window.ym(93762617, "reachGoal", "target");
        reset();
      })
      .catch((error) => toast.error("Ошибка отправки формы!"))
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div
      className={`
      ${className}
        w-full 
      bg-slate-100 
        rounded-md 
        md:py-8  
        md:px-10 
        lg:px-16 
        sm:py-4 
        sm:px-8 
        py-2 
        px-4
        mb-10
      `}
    >
      <h3
        className="
      text-2xl 
      text-slate-900 
      font-medium 
      mb-6 
      text-center 
      md:text-left"
      >
        Отправьте заявку сейчас и мы{" "}
        <span
          className="
        text-orange-500
        "
        >
          сделаем бесплатную доставку!
        </span>
      </h3>
      <div
        className="
      flex 
      gap-6 
      md:flex-row 
      flex-col 
      md:items-end 
      mb-6"
      >
        <div className="flex-1">
          <Input
            id="name"
            label="Имя"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          />
        </div>
        <div className="flex-1">
          <Input
            id="phone"
            label="Номер телефона"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            type="number"
          />
        </div>
        <div className="flex-none">
          <Button onClick={handleSubmit(onSubmit)} label="Отпрвавить заявку" />
        </div>
      </div>
      <div
        className="
      text-sm 
      font-light 
      text-slate-400 
      text-center 
      md:text-left"
      >
        *Нажимая кнопку “Отправить заявку”, Вы соглашаетесь с правилами
        обработки персональных данных
      </div>
    </div>
  );
};

export default FeedbackForm;
