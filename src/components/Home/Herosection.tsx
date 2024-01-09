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
        let index = 0;
        const timeInterval = setInterval(() => {
            goToSlide(index);
            if (index < 2) {
                index += 1;
            } else {
                index = 0;
            }
        }, 6000);
    }, []);
    return (
        <Fragment>
            <div className="relative z-0">
                <div className="container mx-auto grid grid-cols-2 gap-4">
                    <div className="h-[90vh] overflow-hidden">
                        {heroSection.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`absolute top-0 left-0 w-full -z-20 ${
                                    index === currentSlide
                                        ? "block opacity-100"
                                        : "hidden opacity-0"
                                } transition-opacity duration-500 ${
                                    index === currentSlide ? "" : ""
                                } h-[90vh]`}
                                style={{
                                    backgroundImage: `url(${slide.imageUrl})`,
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                                <div className="bg-[rgba(16,25,48,0.70)] absolute left-0 w-full h-full -z-10" />
                                <div className="flex justify-center h-full">
                                    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-center h-full z-20">
                                        <div className="w-[80%] lg:w-full">
                                            <div className="">
                                                <div className="bg-[rgba(211,170,20,0.20)] px-1.5 lg:px-2.5 py-3 lg:py-[15px] w-fit rounded-[100px] mb-3 lg:mb-4">
                                                    <p className="text-secondary text-sm font-semibold">
                                                        BMTF Stories
                                                    </p>
                                                </div>
                                                <h1
                                                    className={`text-4xl md:text-5xl lg:text[52px]
                                         text-white font-bold lg:leading-[56px] capitalize 
                                         mb-5 md:mb-7 lg:mb-[30px]`}
                                                >
                                                    {slide.heading}
                                                </h1>
                                                <p className="text-white">
                                                    {slide.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col h-full justify-center">
                        <div className="flex justify-end">
                            <div className="">
                                <div>
                                    {heroSection.map((_, index) => (
                                        <div
                                            key={index}
                                            onClick={() => goToSlide(index)}
                                            className={`w-1 h-8 mb-2 rounded-full cursor-pointer ${
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
