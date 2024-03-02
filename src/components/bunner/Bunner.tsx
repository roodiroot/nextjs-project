import Image from "next/image";
import clima from "../../../public/image/clima.png";
import bg from "../../../public/image/baners/bg.jpeg";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";

interface BunnerProps {
  className?: string;
}
const Bunner: React.FC<BunnerProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "relative w-full rounded-xl overflow-hidden bg-[#4F46E5]",
        className
      )}
    >
      {/* <Image
        src={bg}
        width={1000}
        height={100}
        alt="bg"
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      /> */}
      <div className="w-full h-full p-2 relative z-20 flex gap-6">
        <div className="flex-1 w-full max-w-[250px] flex items-center">
          <Icons.homeExpert className="ml-4 w-16 h-auto fill-white" />
          {/* <Image
            src={clima}
            width={252}
            height={54}
            alt='logo'
            className='w-full object-contain'
          /> */}
        </div>
        <div className="flex-1  font-bold uppercase text-white text-sm sm:text-xl md:text-2xl flex justify-center">
          <div className="inline-block">
            <div className="whitespace-nowrap">
              Отделка и ремонт{" "}
              <span className="hidden sm:inline-block"> помещений</span>
            </div>
            <div className="whitespace-nowrap">в Москве и области</div>
          </div>
        </div>
        <a className="absolute z-10 inset-0" href="https://home-expert.su"></a>
      </div>
    </div>
  );
};

export default Bunner;
