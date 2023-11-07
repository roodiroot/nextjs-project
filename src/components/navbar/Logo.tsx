import Link from "next/link";
import LogoSvg from "./logo-svg";

const Logo = () => {
  return (
    <Link href={"/"} className='sm:block cursor-pointer'>
      <LogoSvg className='w-28 md:w-32' />
    </Link>
  );
};

export default Logo;
