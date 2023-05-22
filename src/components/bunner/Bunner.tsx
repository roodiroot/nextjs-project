import Image from "next/image";
import clima from "../../../public/image/clima.png";
import bg from "../../../public/image/baners/bg.jpeg";

interface BunnerProps {
  className?: string;
}
const Bunner: React.FC<BunnerProps> = ({ className }) => {
  return (
    <div className={`relative w-full rounded-lg overflow-hidden ${className}`}>
      <Image
        src={bg}
        width={1000}
        height={100}
        alt="bg"
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      />
      <div className="w-full h-full p-2 relative z-20 flex gap-6">
        <div className="flex-1 w-full max-w-[250px] flex items-center">
          <Image
            src={clima}
            width={252}
            height={54}
            alt="logo"
            className="w-full object-contain"
          />
        </div>
        <div className="flex-1  font-bold uppercase text-white text-lg sm:text-xl md:text-2xl flex justify-center">
          <div className="inline-block">
            <div className="whitespace-nowrap">
              Королевский <span className="text-rose-700">комфорт</span>
            </div>
            <div className="whitespace-nowrap">
              доступен каж<span className="text-rose-700">дому</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bunner;
