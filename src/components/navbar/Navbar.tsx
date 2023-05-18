"use client";
import { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import Container from "../Container";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";
import Button from "./Button";
import ElementButton from "./ElementButton";
import useSubmitOrder from "@/hooks/useSubmitOrder";
import { useRouter } from "next/router";
import NotificationProduct from "./NotificationProduct";
import { useWindowScroll } from "@/hooks/useWindowScroll";
import useShowMobilMenu from "@/hooks/useShowMobilMenu";

const Navbar: React.FC = () => {
  const showMenu = useShowMobilMenu();
  const router = useRouter();
  const Y = useWindowScroll();
  const { onOpen } = useSubmitOrder();

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
        ${Y > 50 ? "bg-white/[82%]" : "bg-white"}
        ${Y > 50 && "translate-y-[-10px]"}
        ${Y > 50 && "backdrop-blur-sm"}
    `}
    >
      <div className="py-3 ">
        <Container maxWidth={1440}>
          <div className="h-[10px]"></div>
          <div className="w-full flex flex-row gap-1 sm:gap-4 items-center justify-between">
            <Logo />
            <div className="flex-1 flex items-center justify-between border-x px-4 gap-5">
              <Menu />
              {/* <Search /> */}
            </div>
            <div className="flex gap-4 items-center justify-between">
              <div onClick={(e) => router.push("/basket")} className="relative">
                <ElementButton
                  element={<HiOutlineShoppingCart size={24} color="#3B3E51" />}
                />
                <NotificationProduct />
              </div>
              <div className="hidden sm:block">
                <Button outline onClick={onOpen} label="Обратный звонок" />
              </div>
              <div
                onClick={showMenu.toggle}
                className="md:hidden block relative z-50"
              >
                <ElementButton
                  element={
                    showMenu.isOpen ? (
                      <BiX size={28} color="#3B3E51" />
                    ) : (
                      <BiMenuAltRight size={28} color="#3B3E51" />
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
