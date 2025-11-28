import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

interface SendMessagePayload {
  name: string;
  phone: string;
}

export const useSendMessage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async ({ name, phone }: SendMessagePayload) => {
    setIsLoading(true);

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI}/api/feedback`, {
        username: name,
        email: "OLD@PROGEKT.SU",
        phone: phone,
      });
      toast.success("Ожидайте звонка");

      return { success: true };
    } catch (error) {
      toast.error("Ошибка отправки формы");
      return { success: false, error };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendMessage,
    isLoading,
  };
};
