/** @format */

"use client";

import { Fragment, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sliderSection } from "@src/utils/constants";
import Link from "next/link";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.5,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.5,
    };
  },
};

type Props = {};

export default function Slider({}: Props) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [visibleImages, setVisibleImages] = useState<Array<any>>(
    sliderSection.slice(0, 3)
  );

  const [[page, direction], setPage] = useState([0, 0]);

  const goToSlide = (slideIndex: any) => {
    setCurrentSlide(slideIndex);
    if (currentSlide > slideIndex) {
      paginate(1);
    } else {
      paginate(-1);
    }
  };

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const handlePrev = () => {
    if (currentSlide <= 3) {
      setCurrentSlide(currentSlide - 1);
      setVisibleImages(sliderSection.slice(0, 3));
    } else if (currentSlide < sliderSection.length - 3) {
      setCurrentSlide(currentSlide - 1);
      setVisibleImages(sliderSection.slice(currentSlide - 2, currentSlide + 1));
    } else if (currentSlide <= sliderSection.length) {
      setCurrentSlide(currentSlide - 1);
      setVisibleImages(sliderSection.slice(currentSlide - 3, currentSlide));
    } else {
      setCurrentSlide(1);
      setVisibleImages(sliderSection.slice(0, 3));
    }
    paginate(-1);
  };

  const handleNext = () => {
    // Shift the array to show the next three images
    if (currentSlide < 2) {
      setCurrentSlide(currentSlide + 1);
      setVisibleImages(sliderSection.slice(currentSlide - 1, currentSlide + 2));
    } else if (currentSlide < sliderSection.length - 1) {
      setCurrentSlide(currentSlide + 1);
      setVisibleImages(sliderSection.slice(currentSlide - 2, currentSlide + 1));
    } else if (currentSlide < sliderSection.length) {
      setCurrentSlide(currentSlide + 1);
      setVisibleImages(sliderSection.slice(currentSlide - 2, currentSlide + 1));
    } else {
      setCurrentSlide(1);
      setVisibleImages(sliderSection.slice(0, 3));
    }
    paginate(1);
  };

  return (
    <Fragment>
      <div className='relative grid'>
        <div className='relative overflow-hidden bg-black/90'>
          <div className='h-[60vh] lg:h-[80vh] overflow-hidden'>
            {sliderSection.map((slide, index) => (
              <Fragment key={slide.id}>
                <AnimatePresence custom={direction}>
                  {slide.id === currentSlide && (
                    <motion.div
                      className={`absolute top-0 left-0 w-full h-full`}
                      custom={direction}
                      variants={variants}
                      initial='enter'
                      animate='center'
                      exit='exit'
                      transition={{
                        x: {
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        },
                        opacity: { duration: 0.2 },
                      }}
                    >
                      <div className='absolute inset-0 w-full h-full -z-20'>
                        {/*eslint-disable-next-line @next/next/no-img-element*/}
                        <img
                          src={slide.imageUrl}
                          alt=''
                          className='h-full w-full object-cover'
                        />
                      </div>
                      <div className='bg-[rgba(16,25,48,0.70)] absolute left-0 w-full h-full -z-10' />
                      <div className='flex justify-center h-full'>
                        <div className='container mx-auto z-20'>
                          <motion.div
                            className='max-w-[500px] flex flex-col justify-center h-full'
                            initial={{
                              x: -100,
                              opacity: 0,
                            }}
                            animate={{
                              x: 0,
                              opacity: 1,
                            }}
                            exit={{
                              x: 100,
                              opacity: 0,
                            }}
                            transition={{
                              duration: 0.2,
                              delay: 0.5,
                            }}
                          >
                            <div>
                              <div className='bg-black px-[11px] py-1.5 w-fit mb-4 lg:mb-5'>
                                <p className='text-white font-medium capitalize'>
                                  Industries
                                </p>
                              </div>
                              <motion.h1
                                initial={{
                                  x: -100,
                                  opacity: 0,
                                }}
                                animate={{
                                  x: 0,
                                  opacity: 1,
                                }}
                                transition={{
                                  duration: 0.2,
                                  delay: 1,
                                }}
                                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] 
                                                                  text-white font-extrabold lg:leading-[56px] capitalize
                                                                  mb-5 md:mb-7 lg:mb-[34px]`}
                              >
                                {slide.heading}
                              </motion.h1>
                              <motion.p
                                className='text-white text-sm md:text-base text-justify 2xl:text-lg mb-5 md:mb-7 lg:mb-[34px]'
                                initial={{
                                  x: -100,
                                  opacity: 0,
                                }}
                                animate={{
                                  x: 0,
                                  opacity: 1,
                                }}
                                transition={{
                                  duration: 0.2,
                                  delay: 1.5,
                                }}
                              >
                                {slide.description}
                              </motion.p>
                              <motion.div
                                initial={{
                                  x: -100,
                                  opacity: 0,
                                }}
                                animate={{
                                  x: 0,
                                  opacity: 1,
                                }}
                                transition={{
                                  duration: 0.2,
                                  delay: 2,
                                }}
                              >
                                <Link href={slide.link}>
                                  <button className='p-[18px] rounded-[3px] bg-secondary'>
                                    <p className='font-semibold text-black font-nunito'>
                                      View Details
                                    </p>
                                  </button>
                                </Link>
                              </motion.div>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Fragment>
            ))}
          </div>
        </div>
        <div className='absolute -bottom-4 sm:-bottom-10 md:-bottom-4 lg:-bottom-10 left-5 right-5 md:right-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center space-x-4 z-10'>
          <div>
            <button
              className={`${currentSlide === 1 ? "bg-white/30" : "bg-yellow"}
                                    flex items-center p-2 md:p-2.5 lg:p-[14px] rounded-[3px]
                                    transition-all duration-150 ease-linear
                                `}
              onClick={handlePrev}
              disabled={currentSlide === 1}
            >
              <i className='text-white text-lg font-medium'>
                <FiChevronLeft />
              </i>
            </button>
          </div>
          {visibleImages.map((item, index) => (
            <Fragment key={item.id}>
              <div
                onClick={() => goToSlide(item.id)}
                className={`cursor-pointer ${
                  item.id === currentSlide
                    ? "border-4 border-secondary"
                    : "border-4 border-white"
                } max-h-[141px] overflow-hidden`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img
                  src={item.imageUrl}
                  alt={item.imageUrl}
                  className='h-full object-cover'
                />
              </div>
            </Fragment>
          ))}
          <div>
            <button
              className={`${
                currentSlide === sliderSection.length
                  ? "bg-white/30"
                  : "bg-yellow"
              }
                                    flex items-center p-2 md:p-2.5 lg:p-[14px] rounded-[3px]
                                    transition-all duration-150 ease-linear
                                `}
              onClick={handleNext}
              disabled={currentSlide === sliderSection.length}
            >
              <i className='text-white text-lg font-medium'>
                <FiChevronRight />
              </i>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
