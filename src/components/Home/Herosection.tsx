"use client";

import { Fragment, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroSection } from "@src/utils/constants";

type Props = {};

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
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
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.5,
        };
    },
};

export default function Herosection({}: Props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [[page, direction], setPage] = useState([0, 0]);

    const goToSlide = (slideIndex: any) => {
        setCurrentSlide(slideIndex);
        if(currentSlide > slideIndex){
            paginate(1)
          }else{
            paginate(-1)
          }
    };

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    useEffect(() => {
        const timeInterval = setInterval(() => {
            if (currentSlide < heroSection.length - 1) {
                setCurrentSlide(currentSlide + 1);
                paginate(-1)
            } else {
                setCurrentSlide(0);
            }
        }, 5000);

        return () => clearInterval(timeInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSlide]);
    return (
        <Fragment>
            <div className="relative z-0 overflow-hidden bg-black/90">
                <div className="container mx-auto grid grid-cols-2 gap-4">
                    <div className="min-h-[90vh] md:min-h-screen overflow-hidden">
                        {heroSection.map((slide, index) => (
                            <Fragment key={slide.id}>
                                <AnimatePresence
                                    custom={direction}
                                    initial={false}
                                >
                                    {currentSlide === index && (
                                        <motion.div
                                            className={`absolute top-0 left-0 w-full h-full`}
                                            custom={direction}
                                            variants={variants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{
                                                x: {
                                                    type: "spring",
                                                    stiffness: 300,
                                                    damping: 30,
                                                },
                                                opacity: { duration: 0.2 },
                                            }}
                                        >
                                            {slide.assetUrl.includes(".mp4") ? (
                                                <video
                                                    autoPlay
                                                    loop
                                                    muted
                                                    className="absolute inset-0 object-cover w-screen h-full -z-20"
                                                >
                                                    <source
                                                        src={slide.assetUrl}
                                                        type="video/mp4"
                                                    />
                                                </video>
                                            ) : (
                                                <div className="absolute inset-0 w-full h-full -z-20">
                                                    {/*eslint-disable-next-line @next/next/no-img-element*/}
                                                    <img
                                                        src={slide.assetUrl}
                                                        alt=""
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                            )}
                                            <div className="bg-[rgba(16,25,48,0.70)] absolute left-0 w-full h-full -z-10" />
                                            <div className="flex justify-center h-full">
                                                <div className="container mx-auto flex flex-col justify-center h-full z-20">
                                                    <div className="w-[80%] xl:w-[60%]">
                                                        <motion.div
                                                            className=""
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
                                                            <div className="bg-[rgba(211,170,20,0.20)] px-1.5 lg:px-2.5 py-3 lg:py-[15px] w-fit rounded-[100px] mb-3 lg:mb-4">
                                                                <p className="text-secondary text-sm font-semibold">
                                                                    BMTF Stories
                                                                </p>
                                                            </div>
                                                            <motion.h1
                                                                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px]
                                         text-white font-extrabold lg:leading-[56px] capitalize 
                                         mb-6 lg:mb-[30px]`}
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
                                                            >
                                                                {slide.heading}
                                                            </motion.h1>
                                                            <motion.p
                                                                className="text-white text-sm md:text-base 2xl:text-lg text-justify lg:leading-[24px]"
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
                                                                {
                                                                    slide.description
                                                                }
                                                            </motion.p>
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </Fragment>
                        ))}
                    </div>
                    <div className="flex flex-col h-full justify-center ">
                        <div className="flex justify-end z-30">
                            <div className="">
                                <div>
                                    {heroSection.map((_, index) => (
                                        <div
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`w-1 h-8 mb-2 rounded-full cursor-pointer z-10 ${
                                                index === currentSlide
                                                    ? "bg-transparent border border-yellow"
                                                    : "bg-white/30"
                                            }`}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
