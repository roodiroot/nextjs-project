import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Input from "../inputs/Input";
import Button from "../navbar/Button";

const FormBl = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      phone: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    const phone = "+7" + data.phone.replace(/[( | ) | -]/g, "").slice(1);

    const message = `${phone}`;
    axios
      .post("https://api-shop.kondish.su/message", {
        message,
      })
      .then(() => {
        toast.success("Ожидайте звонка");
        // @ts-ignore
        window.ym(93762617, "reachGoal", "target3");
        reset();
      })
      .catch(() => toast.error("Ошибка отправки формы!"))
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form onClick={(e) => e.preventDefault()} className='mt-4 sm:mt-6 sm:flex'>
      <Input
        id='phone'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type='number'
      />
      <div className='mt-3 sm:ml-4 sm:mt-0 sm:shrink-0'>
        <Button onClick={handleSubmit(onSubmit)} label='Отпрвавить' />
      </div>
    </form>
  );
};

export default FormBl;
