import useSubmitOrder from "@/hooks/useSubmitOrder";
import Modal from "./Modal";
import { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import axios from "axios";
import Heading from "../Heading";
import InputClient from "../inputs/InputClient";
import { toast } from "react-hot-toast";
import CheckSlider from "../utils-component/CheckSlider";
import { useSendMessage } from "@/hooks/sendMessage/useSendMessage";

interface DataMessage {
  message: string;
}

const SubmitOrderModel = () => {
  const submitOrder = useSubmitOrder();
  const [policy, setPolicy] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { sendMessage } = useSendMessage();

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

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    const phone = "+7" + data.phone.replace(/[( | ) | -]/g, "").slice(1);

    if (!policy) {
      toast.error("Согласитесь на обработку персональных данных");
      setIsLoading(false);
      return;
    }

    const { success } = await sendMessage({ name: data.name, phone });

    if (success) {
      // @ts-ignore
      window.ym(93762617, "reachGoal", "target1");
      submitOrder.onClose();
      reset();
    }
    setIsLoading(false);
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
      <div className="flex items-center gap-2">
        <CheckSlider value={policy} setvalue={setPolicy} />{" "}
        <span>
          Согласие на обработку{" "}
          <a className="text-orange-500" target="_blank" href="/doc/pd-consent">
            персональных данных
          </a>
        </span>
        .
      </div>
    </div>
  );

  const footerContent = (
    <div className="text-sm text-slate-500 font-light">
      Мы гарантируем что ваши данные будут использоваться только нами!!! И не
      будут передоваться третьим лицам
    </div>
  );

  return (
    <div>
      <Modal
        disabled={isLoading}
        isOpen={submitOrder.isOpen}
        onClose={submitOrder.onClose}
        title="Форма отправки"
        actionLabel="Отправить"
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
      />
    </div>
  );
};

export default SubmitOrderModel;
