import { Icons } from "@/components/icons";

const RenovationLink = () => {
  return (
    <a
      target="_blank"
      href={"https://home-expert.su/"}
      className="relative pb-10 flex h-full w-full select-none flex-col justify-end rounded-md bg-[#4F46E5] p-6 no-underline outline-none focus:shadow-md"
    >
      <Icons.homeExpert className="w-24 h-auto top-1/2 -translate-y-1/2 fill-white absolute right-6" />
      <div className="max-w-[250px]">
        <div className="text-lg font-medium text-white">
          Строительство и отделка
        </div>
        <div className="text-sm text-white/70">
          Ремонт помещений в Москве и области.
        </div>
      </div>
    </a>
  );
};

export default RenovationLink;
