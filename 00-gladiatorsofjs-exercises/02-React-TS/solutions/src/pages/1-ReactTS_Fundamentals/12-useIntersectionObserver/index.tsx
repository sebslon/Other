import { useRef } from "react";

import { threshold } from "./threshold";
import { FullHeightContainer, SecondFullHeightContainer } from "./styles";

import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

export const IntersectionObserverPresentation = () => {
  const ref = useRef<Element>(null);
  const { isIntersecting } = useIntersectionObserver(
    ref,
    {
      root: null,
      threshold: threshold,
    },
    true,
    onIntersectionRatioChange
  );

  function onIntersectionRatioChange(entry: IntersectionObserverEntry) {
    if (ref.current) {
      const element = ref.current as HTMLDivElement;
      const color = `#${entry.intersectionRatio.toString().slice(-6)}`;

      element.style.background = color;
    }
  }

  return (
    <>
      <FullHeightContainer>Scroll Down</FullHeightContainer>
      <SecondFullHeightContainer ref={ref}></SecondFullHeightContainer>
    </>
  );
};
