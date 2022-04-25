import { useEffect, useRef, useState } from "react";

export const useIntersectionObserver = (
  ref: React.MutableRefObject<Element | null>,
  options: IntersectionObserverInit = {},
  forward: boolean = true,
  callback?: (entry: IntersectionObserverEntry) => void
) => {
  const [element, setElement] = useState<Element | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useRef<null | IntersectionObserver>(null);
  const cleanObserver = () => {
    if (observer.current) {
      observer.current.disconnect();
    }
  };

  useEffect(() => {
    setElement(ref.current);
  }, [ref]);

  useEffect(() => {
    if (!element) return;
    cleanObserver();

    const ob = (observer.current = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;

        if (callback) callback(entry);

        if (!forward) {
          setIsIntersecting(isElementIntersecting);
        } else if (forward && !isIntersecting && isElementIntersecting) {
          setIsIntersecting(isElementIntersecting);
          cleanObserver();
        }
      },
      { ...options }
    ));

    ob.observe(element);

    return () => {
      cleanObserver();
    };
  }, [element, options]);

  return { isIntersecting };
};
