"use client";

import classNames from "classnames";
import MenuItem from "./MenuItem";

interface MenuProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({ show, setShow }) => {
  return (
    <div
      className={classNames(
        "flex xl:flex-row xl:gap-8 xl:top-0 xl:relative xl:border-0 xl:p-0 xl:translate-x-0 transition xl:bg-inherit",
        "fixed w-full max-w-sm top-[59px] right-0 bg-slate-100 z-50 h-[calc(100%-59px)] border flex-col gap-2 pt-2 pb-2 pl-5 pr-10 text-center ",
        "sm:pt-2.5 sm:pr-12 ",
        "md:pr-16",
        show ? "translate-x-0" : "translate-x-[100%]"
      )}
    >
      <MenuItem to="/" label="Главная" />
      <MenuItem to="/services" label="Цены" />
      <MenuItem to="/shop" label="Магазин" />
      <MenuItem to="/contacts" label="Контакты" />

      <div className="xl:hidden mt-auto border-t pt-2 text-slate-300 text-sm">
        Copyright © Kondish.su 2022 - 2023
      </div>
    </div>
  );
};

export default Menu;
