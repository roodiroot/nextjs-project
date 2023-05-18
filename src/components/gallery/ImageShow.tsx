import Image from "next/image";
import { TfiClose } from "react-icons/tfi";

interface ImageShowProps {
  onClose: () => void;
  src: string;
  isOpen: boolean;
}

const ImageShow: React.FC<ImageShowProps> = ({ onClose, src, isOpen }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div
      onClick={onClose}
      className="
        fixed 
        z-[52]
        inset-0 
        bg-black/90
        flex
        justify-center
        items-center"
    >
      <div
        className="
            relative
            w-auto 
            h-auto"
      >
        <Image src={src} width={600} height={600} alt="photo" />
        <TfiClose
          size={30}
          className="
            absolute 
            cursor-pointer 
            top-2 
            left-2 
            text-white 
            hover:text-white/60 
            transition"
        />
      </div>
    </div>
  );
};

export default ImageShow;
