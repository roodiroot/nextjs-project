import { IconType } from "react-icons";
interface ElementButtonProps {
  element: any;
}
const ElementButton: React.FC<ElementButtonProps> = ({ element }) => {
  return (
    <div className='min-w-[30px] min-h-[30px] transition cursor-pointer relative'>
      <span className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        {element}
      </span>
    </div>
  );
};

export default ElementButton;
