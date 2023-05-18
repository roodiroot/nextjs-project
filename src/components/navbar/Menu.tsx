"use client";

import MenuItem from "./MenuItem";

const Menu: React.FC = () => {
  return (
    <>
      <div
        className="
          hidden 
          md:flex 
          md:flex-row 
          md:gap-6
          md:top-0 
          md:relative 
          md:border-0 
          md:p-0 
          md:translate-x-0 
          md:bg-inherit"
      >
        <MenuItem to="/" label="Главная" />
        <MenuItem to="/services" label="Цены" />
        <MenuItem to="/shop" label="Магазин" />
        <MenuItem to="/contacts" label="Контакты" />
        <MenuItem to="/about" label="О нас" />
      </div>
    </>
  );
};

export default Menu;
