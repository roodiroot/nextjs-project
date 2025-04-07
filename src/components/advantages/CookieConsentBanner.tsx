import Link from "next/link";
import CookieConsent from "react-cookie-consent";

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Принять"
      declineButtonText="Отклонить"
      style={{
        background: "#F3F4F6", // Светло-серый фон
        color: "#1F2937", // Темно-серый текст
        padding: "15px",
        fontSize: "14px",
        borderRadius: "12px",
      }}
      buttonStyle={{
        background: "#FB923C", // Светлый оранжевый
        color: "#ffffff",
        fontSize: "14px",
        padding: "10px 20px",
        borderRadius: "8px",
      }}
      declineButtonStyle={{
        background: "#D1D5DB", // Светло-серый для "Отклонить"
        color: "#374151",
        padding: "10px 20px",
        borderRadius: "8px",
      }}
      //   containerClasses="fixed bottom-4 left-4 right-4 bg-gray-900 text-white p-4 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-3"
      //   buttonClasses="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md font-medium transition"
      //   declineButtonClasses="bg-gray-600 hover:bg-gray-700 text-white px-5 py-2 rounded-xl font-medium transition"
    >
      🍪 Мы используем файлы cookie для улучшения работы сайта.{" "}
      <Link href="/privacy-policy" className="text-orange-400 underline">
        Подробнее
      </Link>
    </CookieConsent>
  );
}
