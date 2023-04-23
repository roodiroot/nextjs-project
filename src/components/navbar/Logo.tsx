import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href={"/"}
      className="sm:block text-[19px] sm:text-[28px]  uppercase text-orange-500 font-bold cursor-pointer"
    >
      Kondish
    </Link>
  );
};

export default Logo;
