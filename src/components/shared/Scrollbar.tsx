"use client";

import React, { useEffect, useState, useRef, MutableRefObject } from "react";
import { motion } from "framer-motion";
import { scroll } from "framer-motion/dom";

import { FiChevronUp } from "react-icons/fi";

type Props = {
  progress: number;
};

export default function Scrollbar({ progress }: Props) {
  const [displayProperty, setDisplayProperty] = useState<string>("none");
  const [position, setPosition] = useState<any>("static");
  const [scrollButtonDisplay, setScrollButtonDisplay] =
    useState<string>("hidden");
  const progressWheel = useRef<any>(null);
  const changeOnScroll = () => {
    if (window.scrollY > 10) {
      setDisplayProperty("block");
      setPosition("fixed");
    } else {
      setDisplayProperty("none");
      setPosition("static");
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const eventFired: any = window.addEventListener("scroll", changeOnScroll);
    const scrollToTop = window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setScrollButtonDisplay("block");
      } else {
        setScrollButtonDisplay("hidden");
      }
    });
    return () => {
      eventFired;
      scrollToTop;
    };
  }, []);
  return (
    <>
      <div
        style={{
          position: position,
          top: 0,
          left: 0,
          width: "100%",
          height: "10px",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          zIndex: 9999,
          display: displayProperty,
          transition: "all 1s ease-in",
        }}
      >
        <motion.div
          style={{
            height: "100%",
            backgroundColor: "var(--color-primary)",
            width: progress * 100 + "%",
          }}
        />
      </div>
      <div className={`${scrollButtonDisplay}`}>
        <button
          type="button"
          className={`w-10 h-10 flex items-center justify-center rounded-full fixed bottom-5 lg:bottom-10 right-5 lg:right-10 
          bg-secondary hover:scale-90 hover:bg-primary transition-all ease-linear duration-200 z-30`}
          onClick={handleScrollToTop}
        >
          <i className="text-white text-2xl ">
            <FiChevronUp />
          </i>
        </button>
      </div>
    </>
  );
}
