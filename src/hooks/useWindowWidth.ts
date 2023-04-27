import { useEffect, useState } from "react";

interface WidthI {
  width: number;
}

const useWindowWidth = (): WidthI => {
  const [windowWidth, setWindowWidth] = useState<WidthI>({ width: 640 });

  useEffect(() => {
    setWindowWidth({ width: window.innerWidth });
    const getWindowWidth = () => ({
      width: window.innerWidth,
    });
    const handle = () => {
      setWindowWidth(getWindowWidth);
    };
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("resize", handle);
    };
  }, []);

  return windowWidth;
};

export default useWindowWidth;
