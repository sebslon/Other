import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function getWindowWidth() {
    return window.innerWidth;
  }

  useEffect(() => {
    function updateWidth() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return windowWidth;
};
