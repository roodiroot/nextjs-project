export type SOCIALType = {
  icon: "vk" | "ws" | "tg" | "max";
  bg: string;
  link: string | undefined;
  ym: () => void;
};
export const link_list: SOCIALType[] = [
  {
    icon: "max",
    bg: "#9833DD",
    link: process.env.NEXT_PUBLIC_MAX_LINK,
    //@ts-ignore
    ym: () => window.ym(93762617, "reachGoal", "max_target"),
  },
  {
    icon: "tg",
    bg: "#0088cc",
    link: process.env.NEXT_PUBLIC_TG_LINK,
    //@ts-ignore
    ym: () => window.ym(93762617, "reachGoal", "telegram_target"),
  },
];
