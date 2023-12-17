"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { useRouter } from "next/router";

import { useWindowScroll } from "@/hooks/useWindowScroll";
import useShowMobilMenu from "@/hooks/useShowMobilMenu";
import useBanner from "@/hooks/useBanner";
import { NEW_YEAR_DISCOUNT } from "@/constans";
import Container from "../Container";
import Logo from "./Logo";
import ElementButton from "./ElementButton";
import NotificationProduct from "./NotificationProduct";
import TopBaner from "../bunner/TopBaner";
import { NavMenu } from "./NavigationMenu";

const Navbar: React.FC = () => {
  const { isOpen, closeBanner, openBanner } = useBanner();
  const showMenu = useShowMobilMenu();
  const router = useRouter();
  const Y = useWindowScroll();

  useEffect(() => {
    if (!Cookies.get("banner")) {
      return openBanner();
    }
    Cookies.set("banner", "ok", { expires: 1 });
  }, []);

  const setCookiesCloseBanner = () => {
    closeBanner();
    Cookies.set("banner", "ok", { expires: 1 });
  };

  return (
    <div
      className={`
        fixed 
        z-50
        top-0
        left-0
        transition
        duration-500
        w-full 
        ${Y > 50 ? "bg-white/[82%]" : "bg-white/0"}
        ${Y > 50 && "translate-y-[-10px]"}
        ${Y > 50 && "backdrop-blur-sm"}
    `}
    >
      {isOpen && (
        <TopBaner
          closeBunner={setCookiesCloseBanner}
          title='В Новый год!!!'
          text='Кондиционеры в&nbsp;Kondish по&nbsp;суперценам&nbsp;'
          button='Узнать подробности'
          onClick={() => router.push(NEW_YEAR_DISCOUNT)}
        />
      )}

      <div className='py-3 '>
        <Container maxWidth={1440}>
          <div className='h-[10px]'></div>
          <div className='w-full flex flex-row gap-1 sm:gap-4 items-center justify-between'>
            <Logo />
            <div className='flex-1 flex items-center justify-between border-l px-4 gap-5'>
              <NavMenu className='hidden md:flex' />
            </div>
            <div className='flex gap-6 items-center justify-between'>
              <div className='hidden sm:block'>
                <a
                  href='tel:89153294209'
                  className='whitespace-nowrap text-md font-semibold text-slate-900 hover:underline'
                >
                  8 (915) 329-42-09
                </a>
              </div>
              <div onClick={(e) => router.push("/basket")} className='relative'>
                <ElementButton
                  element={<HiOutlineShoppingCart size={24} color='#0F172A' />}
                />
                <NotificationProduct />
              </div>
              <div
                onClick={showMenu.toggle}
                className='md:hidden block relative z-50'
              >
                <ElementButton
                  element={
                    showMenu.isOpen ? (
                      <BiX size={28} color='#3B3E51' />
                    ) : (
                      <BiMenuAltRight size={28} color='#3B3E51' />
                    )
                  }
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
