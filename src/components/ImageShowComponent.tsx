import useShowImage from "@/hooks/useShowImage";
import ImageShow from "./gallery/ImageShow";

const ImageShowComponent = () => {
  const showImage = useShowImage();
  return (
    <>
      <ImageShow
        isOpen={showImage.isOpen}
        onClose={showImage.onClose}
        src={showImage.src}
      />
    </>
  );
};

export default ImageShowComponent;
