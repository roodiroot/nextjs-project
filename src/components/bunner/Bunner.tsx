import Image from "next/image";
import clima from "../../../public/image/clima.png";

const Bunner = () => {
  return (
    <div
      className={`w-full bg-gradient-to-r from-sky-500 to-indigo-500  rounded-lg p-4`}
    >
      <Image src={clima} width={252} height={54} alt="logo" />
    </div>
  );
};

export default Bunner;
