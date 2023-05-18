import useShowMobilMenu from "@/hooks/useShowMobilMenu";
import Button from "./Button";
import MenuItem from "./MenuItem";
import useSubmitOrder from "@/hooks/useSubmitOrder";

const MobilMemu: React.FC = () => {
  const showMenu = useShowMobilMenu();
  const modal = useSubmitOrder();

  const closeAndModalShow = () => {
    showMenu.onClose();
    modal.onOpen();
  };
  return (
    <div
      className={`
            transition
            fixed 
            inset-0 
            bg-white
            z-50 
            md:hidden
            pt-12
            ${showMenu.isOpen ? "translate-x-0" : "translate-x-[-100%]"}
    `}
    >
      <div className="w-full h-full py-4 flex flex-col px-2 sm:px-4">
        <MenuItem close={showMenu.onClose} mobil to="/" label="Главная" />
        <MenuItem close={showMenu.onClose} mobil to="/services" label="Цены" />
        <MenuItem close={showMenu.onClose} mobil to="/shop" label="Магазин" />
        <MenuItem
          close={showMenu.onClose}
          mobil
          to="/contacts"
          label="Контакты"
        />
        <MenuItem close={showMenu.onClose} mobil to="/about" label="О нас" />
        <div className="mt-auto flex flex-col">
          <div className="py-2 mb-2 flex flex-col items-center">
            <Button onClick={closeAndModalShow} label="Заявка на установку" />
          </div>
          <div className="py-2 mb-2 flex flex-col items-center">
            <a className="text-lg font-semibold" href="tel:89153294209">
              8 915 329-42-09
            </a>
          </div>
        </div>
      </div>
      {/* <div className="md:hidden mt-auto border-t pt-2 text-slate-300 text-sm">
        Copyright © Kondish.su 2022 - 2023
      </div> */}
    </div>
  );
};

export default MobilMemu;
