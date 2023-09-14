import Image from "next/image";
import { GaleryList } from "../hello-page/Gallery";

interface GalleryItem {
  element: GaleryList;
  onClick?: () => void;
}
const GalleryItem: React.FC<GalleryItem> = ({ element, onClick }) => {
  return (
    <div
      onClick={onClick}
      className='
        cursor-pointer
        hover:shadow-xl
        transition
        w-full 
        h-60 
        border 
        rounded-3xl
        relative
        overflow-hidden
        flex
        items-end
        shadow'
    >
      <Image
        src={element.imgSrc}
        width={300}
        height={300}
        alt='img'
        className='
            absolute 
            top-0 
            left-0 
            w-full 
            h-full 
            object-cover'
      />
      <div
        className='
            relative 
            z-10 
            w-full 
            h-16 
            backdrop-blur-md 
            bg-black/30
            px-6
            flex
            flex-col
            justify-center'
      >
        <h5
          className='
                font-medium 
                text-white 
                line-clamp-1'
        >
          {element.adress}
        </h5>
        <div
          className='
                text-white 
                text-sm 
                line-clamp-1'
        >
          {element.product}
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
