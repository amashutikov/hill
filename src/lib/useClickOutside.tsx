import { RefObject, useEffect, useRef } from "react";

function useClickOutside<T extends HTMLElement>(
  handler: () => void
): RefObject<T> {
  const domNode = useRef<T>(null);

  useEffect(() => {
    const maybeHandler = (event: Event) => {
      const target = event.target as Node;
      if (domNode.current && !domNode.current.contains(target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  }, [handler]);

  return domNode;
}

export default useClickOutside;
