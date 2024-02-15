"use client";

import { Fragment, useEffect, useState } from "react";
import { heroSection } from "@src/utils/constants";

type Props = {};

export default function Herosection({}: Props) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToSlide = (slideIndex: any) => {
        setCurrentSlide(slideIndex);
    };

    useEffect(() => {
        const timeInterval = setInterval(() => {
            if (currentSlide < heroSection.length - 1) {
                setCurrentSlide(currentSlide + 1);
            } else {
                setCurrentSlide(0);
            }
        }, 5000);

        return () => clearInterval(timeInterval);
    }, [currentSlide]);
    return (
        <Fragment>
            <div className="relative z-0">
                <div className="container mx-auto grid grid-cols-2 gap-4">
                    <div className="min-h-[90vh] md:min-h-screen overflow-hidden">
                        {heroSection.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`absolute top-0 left-0 w-full  ${
                                    index === currentSlide
                                        ? "block opacity-100"
                                        : "hidden opacity-0"
                                } transition-opacity duration-500 ${
                                    index === currentSlide ? "" : ""
                                } h-full`}
                            >
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    className="absolute inset-0 object-cover w-screen h-full -z-20"
                                >
                                    <source
                                        src={slide.videoUrl}
                                        type="video/mp4"
                                    />
                                </video>
                                <div className="bg-[rgba(16,25,48,0.70)] absolute left-0 w-full h-full -z-10" />
                                <div className="flex justify-center h-full">
                                    <div className="container mx-auto flex flex-col justify-center h-full z-20">
                                        <div className="w-[80%] xl:w-[60%]">
                                            <div className="">
                                                <div className="bg-[rgba(211,170,20,0.20)] px-1.5 lg:px-2.5 py-3 lg:py-[15px] w-fit rounded-[100px] mb-3 lg:mb-4">
                                                    <p className="text-secondary text-sm font-semibold">
                                                        BMTF Stories
                                                    </p>
                                                </div>
                                                <h1
                                                    className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text[52px]
                                         text-white font-extrabold lg:leading-[56px] capitalize 
                                         mb-5 md:mb-7 lg:mb-[30px]`}
                                                >
                                                    {slide.heading}
                                                </h1>
                                                <p className="text-white text-sm md:text-base 2xl:text-lg text-justify">
                                                    {slide.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
