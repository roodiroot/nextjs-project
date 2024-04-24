import Image from "next/image";

const CommandBlock = () => {
  return (
    <div className="hidden lg:block lg:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
      <Image
        src="/image/5.jpg"
        width={1216}
        height={600}
        alt="command"
        className=" aspect-[5/2] w-full object-cover xl:rounded-3xl"
      />
    </div>
  );
};

export default CommandBlock;
