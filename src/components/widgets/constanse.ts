export type SOCIALType = {
  icon: "vk" | "ws" | "tg";
  bg: string;
  link: string | undefined;
  ym: () => void;
};
export const link_list: SOCIALType[] = [
  {
    icon: "ws",
    bg: "#25D366",
    link: process.env.NEXT_PUBLIC_WHATSAPP_LINK,
    ym: () => {
      //@ts-ignore
      window.ym(93762617, "reachGoal", "wa");
      // console.log("WA");
    },
  },
  {
    icon: "tg",
    bg: "#0088cc",
    link: process.env.NEXT_PUBLIC_TG_LINK,
    //@ts-ignore
    ym: () => window.ym(93762617, "reachGoal", "tg"),
  },
  {
    icon: "vk",
    bg: "#0077FF",
    link: process.env.NEXT_PUBLIC_VK_LINK,
    //@ts-ignore
    ym: () => window.ym(93762617, "reachGoal", "vk"),
  },
];
