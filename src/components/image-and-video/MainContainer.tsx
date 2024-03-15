/** @format */

"use client";

import React, { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import ImageGallery from "./ImageGallery";
import VideoGallery from "./VideoGallery";
import ConnectBMTF from "../shared/ConnectBMTF";

type Props = {};

export default function MainContainer({}: Props) {
  const [activeGallery, setActiveGallery] = useState<number>(1);

  const handleButtonClick = (type: string) => {
    // Construct the new URL with the query parameter
    const url = `${window.location.pathname}?type=${type}`;
    // Push the new URL to the browser history
    window.history.pushState({ path: url }, "", url);
    // Update the state to reflect the active gallery
    setActiveGallery(type === "1" ? 1 : 2);
  };

  return (
    <Fragment>
      <div className='bg-white py-16 md:py-20 lg:py-[92px] min-h-[60vh]'>
        <div className='container mx-auto'>
          <div className='flex flex-row justify-center mb-7 md:mb-10'>
            <button
              className={`${
                activeGallery === 1
                  ? "bg-primary text-secondary"
                  : "bg-white text-primary"
              } py-[18px] px-6 rounded-[5px]
                       font-bold leading-[24px] hover:text-secondary`}
              onClick={() => handleButtonClick("1")}
            >
              Image Gallery
            </button>
            <button
              className={`${
                activeGallery === 2
                  ? "bg-primary text-secondary"
                  : "bg-white text-primary"
              } p-[18px] md:p-6 rounded-[5px]
                       font-bold leading-[24px] hover:text-secondary`}
              onClick={() => handleButtonClick("2")}
            >
              Video Gallery
            </button>
          </div>
          <AnimatePresence mode='wait'>
            {activeGallery === 1 ? (
              <motion.div
                key='image'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <ImageGallery />
              </motion.div>
            ) : (
              <motion.div
                key='video'
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <VideoGallery />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {/* <ConnectBMTF /> */}
    </Fragment>
  );
}
