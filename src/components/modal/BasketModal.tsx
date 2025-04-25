import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Modal from "./Modal";
import Heading from "../Heading";
import InputClient from "../inputs/InputClient";
import useBasketOrder from "@/hooks/useBasketOrder";
import useBasketStore from "@/hooks/useBasketStore";

import { INSTALLATION } from "@/constans";
import CheckSlider from "../utils-component/CheckSlider";

const BasketModal = () => {
  const { isOpen, onClose, total, prod } = useBasketOrder();
  const basket = useBasketStore();
  const [policy, setPolicy] = useState(false);
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
    if (!policy) {
      toast.error("Согласитесь на обработку персональных данных");
      setIsLoading(false);
      return;
    }

    if (total.totalPrice) {
      setIsLoading(true);
      const message = `
        заказ: 
        ${prod.map((l: any) => `${l.name} по цене ${l.price}`)}
        ${
          total.distance
            ? `Доставка за МКАД ${total.distance} км`
            : "Без доставки"
        }
        ${
          total.installation
            ? `Установка: ${INSTALLATION} руб.`
            : "Без установки"
        }
        ИТОГО ${total.totalPrice} руб.
        ${data.name}
        ${data.phone}
        `;
      axios
        .post("https://api-shop.kondish.su/message", {
          message: message,
        })
        .then(() => {
          toast.success("Ожидайте звонка");
          // @ts-ignore
          window.ym(93762617, "reachGoal", "target2");
          onClose();
          basket.reset();
          reset();
        })
        .catch((error) => toast.success("ошибка отправки формы"))
        .finally(() => {
          setIsLoading(false);
        });
      return;
    }
    toast("Ваша корзина пуста", { icon: "🤷‍♂️" });
  };

  const header = (
    <div className="sm:text-lg">
      В заказе:
      {prod.map((l: any) => (
        <div key={l.name}>
          <span className="font-bold">{l.name}</span>{" "}
          <span>Цена: {l.price} руб.</span>
        </div>
      ))}
      <div>
        {total.distance
          ? `Доставка за МКАД ${total.distance} км`
          : "Без доставки"}
      </div>
      <div>
        {total.installation
          ? `Установка: ${INSTALLATION} руб.`
          : "Без установки"}
      </div>
      <div>
        Итого: <span className="font-bold">{total.totalPrice} руб.</span>
      </div>
    </div>
  );

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading className="pb-0" title="Оформление заказа" />
      {header}
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
      После подтверждения заказа ожидайте звонка специалиста, для согласования
      деталей заказа
    </div>
  );
  return (
    <div>
      <Modal
        actionLabel="Подтвердит заказ"
        isOpen={isOpen}
        onClose={onClose}
        disabled={isLoading}
        body={bodyContent}
        onSubmit={handleSubmit(onSubmit)}
        footer={footerContent}
      />
    </div>
  );
};

export default BasketModal;
