import useSubmitOrder from "@/hooks/useSubmitOrder";
import Modal from "./Modal";
import { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import axios from "axios";
import Heading from "../Heading";
import InputClient from "../inputs/InputClient";
import { toast } from "react-hot-toast";

interface DataMessage {
  message: string;
}

const SubmitOrderModel = () => {
  const submitOrder = useSubmitOrder();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("https://api.kondish.su/api/send-message", {
        message: JSON.stringify(data),
      })
      .then(() => {
        toast.success("Ожидайте звонка");
        submitOrder.onClose();
        reset();
      })
      .catch((error) => toast.success("Successfully toasted!"))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Добро пожаловать в KONDISH"
        subtitle="Заполните форму и отправьте заявку"
      />
      <InputClient
        id="name"
        label="Имя"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <InputClient
        id="phone"
        label="Телефон"
        type="number"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="text-sm text-slate-500 font-light">
      Мы обещаем что ваши данные будут использоваться только нами!!! И не будут
      передоваться третьим лицам
    </div>
  );

  return (
    <div>
      <Modal
        disabled={isLoading}
        isOpen={submitOrder.isOpen}
        onClose={submitOrder.onClose}
        title="Форма отправки"
        actionLabel="Отправить заявку"
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
      />
    </div>
  );
};

export default SubmitOrderModel;
