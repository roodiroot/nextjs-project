import useShowMobilMenu from "@/hooks/useShowMobilMenu";
import Button from "./Button";
import MenuItem from "./MenuItem";
import useSubmitOrder from "@/hooks/useSubmitOrder";
import useBanner from "@/hooks/useBanner";
import {
  INSTALLATION_CLIMBER,
  INSTALLATION_PIK,
  SERVICE_PATH,
  SHOP_PATH,
} from "@/constans";

const MobilMemu: React.FC = () => {
  const { isOpen } = useBanner();
  const showMenu = useShowMobilMenu();
  const modal = useSubmitOrder();

  const closeAndModalShow = () => {
    showMenu.onClose();
    modal.onOpen();
  };
  return (
    <div
      className={`
            overflow-hidden
            transition
            fixed 
            inset-0 
            bg-white
            z-50 
            md:hidden
            ${isOpen ? "pt-32" : "pt-16"}
            ${showMenu.isOpen ? "translate-x-0" : "translate-x-[-100%]"}
    `}
    >
      <div className='w-full h-full py-4 flex flex-col px-2 sm:px-4'>
        <MenuItem close={showMenu.onClose} mobil to='/' label='Главная' />
        <MenuItem
          close={showMenu.onClose}
          mobil
          to={SERVICE_PATH}
          label='Цены'
        />
        <MenuItem
          close={showMenu.onClose}
          mobil
          to={INSTALLATION_PIK}
          label='Установка в дома ПИК'
        />
        <MenuItem
          close={showMenu.onClose}
          mobil
          to={INSTALLATION_CLIMBER}
          label='Промышленный альпинизм'
        />
        <MenuItem
          close={showMenu.onClose}
          mobil
          to={SHOP_PATH}
          label='Магазин'
        />
        <MenuItem
          close={showMenu.onClose}
          mobil
          to='/contacts'
          label='Контакты'
        />
        <MenuItem close={showMenu.onClose} mobil to='/about' label='О нас' />
        <div className='mt-auto flex flex-col'>
          <div className='py-2 mb-2 flex flex-col items-center'>
            <Button onClick={closeAndModalShow} label='Заявка на установку' />
          </div>
          <div className='py-2 mb-2 flex flex-col items-center'>
            <a className='text-lg font-semibold' href='tel:84956752699'>
              8 (495) 675-26-99
              <span className='text-sm'> c 9:00 до 21:00</span>
            </a>
            <a className='text-lg font-semibold' href='tel:89153294209'>
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
