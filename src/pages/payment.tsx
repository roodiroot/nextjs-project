import Container from "@/components/Container";
import Path from "@/components/utils-component/Path";

const Payment = () => {
  return (
    <Container>
      <Path />
      <div className="w-full h-full">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Условия оплаты
        </h1>
        <div className="w-full flex flex-col sm:flex-row mb-4 gap-6">
          <div className="w-full rounded-md bg-slate-100 p-7">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Безналичный способ
            </h2>
            <div className="text-md md:text-lg">
              После создания заказа мы незамедлительно составим счет на оплату,
              а как только получим деньги или исполненное платежное поручение,
              мы согласуем с Вами день доставки и монтажа. Вы получите
              высококачественный товар и отличный сервис!
            </div>
          </div>
          <div className="w-full rounded-md bg-slate-100 p-7">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Оплата картой{" "}
            </h2>
            <div className="text-md md:text-lg">
              Возможны оплаты Visa/MasterCard/Мир - удобный, быстрый и
              безопасный способ оплатить покупки. Просто вставьте карту в
              терминал, который привезет наш курьер и наслаждайтесь покупками
              без лишних хлопот.
            </div>
          </div>
          <div className="w-full rounded-md bg-slate-100 p-7">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Оплата наличными
            </h2>
            <div className="text-md md:text-lg">
              Удобный способ расчета. Вы можете быстро и легко оплатить товары
              или услуги, не завися от работы банковских систем и не беспокоится
              о комиссиях за транзакции.
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Payment;
