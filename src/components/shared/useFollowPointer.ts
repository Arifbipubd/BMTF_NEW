import { useState, RefObject, useEffect } from "react";

export function useFollowPointer(ref: RefObject<HTMLElement>, sectionRefs: RefObject<HTMLElement>[]) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;
      
      // Calculate x coordinate to position the bubble
      const x = clientX - element.offsetWidth / 2;
      
      // Calculate y coordinate to position the bubble below the cursor
      const y = clientY + 20; // Adjust this value to control the distance between the cursor and the bubble
      
      setPoint({ x, y });
      
      // Check if the mouse is over any section
      const isMouseOverSection = sectionRefs.some(sectionRef => {
        const rect = sectionRef.current?.getBoundingClientRect();
        return rect && clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
      });
      
      // Update z-index based on mouse position
      if (isMouseOverSection) {
        element.style.zIndex = "9999";
      } else {
        element.style.zIndex = "0"; // or any other suitable value
      }
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [ref, sectionRefs]);

  return point;
}
