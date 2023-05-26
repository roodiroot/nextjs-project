import VKIcon from "@/components/utils-component/VKIcon";
import { TbBrandTelegram, TbBrandWhatsapp } from "react-icons/tb";
import { FaViber } from "react-icons/fa";
import { useRouter } from "next/router";
import { useCallback } from "react";

interface SocIconsProps {
  dark?: boolean;
}
const SocialIcons: React.FC<SocIconsProps> = ({ dark }) => {
  const router = useRouter();
  const route = useCallback((path: string | undefined) => {
    if (path) {
      router.push(path);
    }
  }, []);
  return (
    <div className="flex flex-row gap-2">
      <div
        onClick={() => route(process.env.NEXT_PUBLIC_TG_LINK)}
        className={`
        ${dark ? "text-slate-900" : "text-slate-300 "}
        ${dark ? "border-slate-900 " : "border-slate-300 "}
        relative 
        w-8 
        h-8
        rounded-full 
        border-2 
        cursor-pointer 
        transition 
        hover:bg-blue-700/60
        hover:scale-[1.1]                   
        `}
      >
        <TbBrandTelegram
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          size={20}
        />
      </div>
      <div
        onClick={() => route(process.env.NEXT_PUBLIC_WHATSAPP_LINK)}
        className={`
        ${dark ? "text-slate-900" : "text-slate-300 "}
        ${dark ? "border-slate-900 " : "border-slate-300 "}
        relative 
        w-8 
        h-8
        rounded-full 
        border-2 
        cursor-pointer 
        transition 
        hover:bg-green-500/70
        hover:scale-[1.1]                            
        `}
      >
        <TbBrandWhatsapp
          size={20}
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
      <div
        onClick={() => route(process.env.NEXT_PUBLIC_VIBER_LINK)}
        className={`
        ${dark ? "text-slate-900" : "text-slate-300 "}
        ${dark ? "border-slate-900 " : "border-slate-300 "}
        relative 
        w-8 
        h-8
        rounded-full 
        border-2 
        cursor-pointer 
        transition 
        hover:bg-indigo-600/60 
        hover:scale-[1.1]                     
        `}
      >
        <FaViber
          size={19}
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
      <div
        onClick={() => route(process.env.NEXT_PUBLIC_VK_LINK)}
        className={`
        ${dark ? "text-slate-900" : "text-slate-300 "}
        ${dark ? "border-slate-900 " : "border-slate-300 "}
        relative 
        w-8 
        h-8
        rounded-full 
        border-2 
        cursor-pointer 
        transition 
        hover:bg-sky-600/60 
        hover:scale-[1.1]           
        `}
      >
        <VKIcon
          size={24}
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
          color={`
          ${dark ? "rgb(15 23 42)" : "rgb(203 213 225)"}
          `}
        />
      </div>
    </div>
  );
};

export default SocialIcons;
