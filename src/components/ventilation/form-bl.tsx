import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { useSendMessage } from "@/hooks/sendMessage/useSendMessage";

import Input from "../inputs/Input";
import Button from "../navbar/Button";

const FormBl = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { sendMessage } = useSendMessage();

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

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    const phone = "+7" + data.phone.replace(/[( | ) | -]/g, "").slice(1);

    const { success } = await sendMessage({ name: "VENT_PAGE", phone });

    if (success) {
      // @ts-ignore
      window.ym(93762617, "reachGoal", "target3");
      reset();
    }
    setIsLoading(false);
  };

  return (
    <form onClick={(e) => e.preventDefault()} className="mt-4 sm:mt-6 sm:flex">
      <Input
        id="phone"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="number"
      />
      <div className="mt-3 sm:ml-4 sm:mt-0 sm:shrink-0">
        <Button onClick={handleSubmit(onSubmit)} label="Отпрвавить" />
      </div>
    </form>
  );
};

export default FormBl;
