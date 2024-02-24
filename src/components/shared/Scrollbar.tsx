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
  }, [progress]);
  return (
    <>
      <div
        style={{
          position: position,
          top: 0,
          left: 0,
          width: "100%",
          height: "6px",
          backgroundColor: "rgba(0, 0, 0, 0.9)",
          zIndex: 9999,
          display: displayProperty,
          transition: "all 1s ease-in",
        }}
      >
        <motion.div
          style={{
            height: "100%",
            backgroundColor: "var(--color-secondary)",
            width: progress * 100 + "%",
          }}
        />
      </div>
      <div className={`${scrollButtonDisplay}`}>
        <button
          type="button"
          className={`w-14 h-14 flex items-center justify-center rounded-full fixed bottom-5 lg:bottom-10 right-5 lg:right-10 hover:scale-90 transition-all ease-linear duration-200 z-10`}
          onClick={handleScrollToTop}
        >
          <div className="relative">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              className="progress-wheel"
            >
              <circle
                cx="50"
                cy="50"
                r="30"
                pathLength="1"
                className="progress"
                style={{
                  strokeDasharray: `${progress}, 1`,
                }}
              />
            </svg>
            <i className="text-secondary text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <FiChevronUp />
            </i>
          </div>
        </button>
      </div>
    </>
  );
}