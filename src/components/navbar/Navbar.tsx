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

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { onOpen } = useSubmitOrder();

  return (
    <div className="relative w-full bg-white z-10 ">
      <div className="py-2 ">
        <Container>
          <div className="w-full flex flex-row gap-1 sm:gap-4 items-center justify-between">
            <Logo />
            <div className="flex-1 flex items-center justify-between border-x px-4 gap-5">
              <Menu show={show} setShow={setShow} />
              <Search />
            </div>
            <div className="flex gap-4 items-center justify-between">
              <ElementButton
                element={<HiOutlineShoppingCart size={18} color="#3B3E51" />}
              />
              <div className="hidden sm:block">
                <Button
                  onClick={onOpen}
                  small
                  outline
                  label="Обратный звонок"
                />
              </div>
              <div
                onClick={() => setShow(!show)}
                className="xl:hidden block relative z-50"
              >
                <ElementButton
                  element={
                    show ? (
                      <BiX size={18} color="#3B3E51" />
                    ) : (
                      <BiMenuAltRight size={18} color="#3B3E51" />
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
