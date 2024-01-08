"use client";

import { Fragment, useEffect, useState } from "react";
import { heroSection } from "@src/utils/constants";

type Props = {};

export default function Slider({}: Props) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToSlide = (slideIndex: any) => {
        console.log(slideIndex)
        setCurrentSlide(slideIndex);
    };

    // useEffect(() => {
    //     let index = 0;
    //     const timeInterval = setInterval(() => {
    //         goToSlide(index);
    //         if (index < 2) {
    //             index += 1;
    //         } else {
    //             index = 0;
    //         }
    //     }, 3000);
    // }, []);
    return (
        <Fragment>
            {/* <div className="max-h-[60vh] lg:max-h-[90vh] overflow-hidden grid z-0">
                {heroSection && heroSection.map((item) => (
                    <div
                        className="w-full min-h-[60vh] lg:min-h-[90vh] relative -z-20"
                        style={{
                            backgroundImage: `url(${item.imageUrl})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className="bg-[rgba(16,25,48,0.70)] absolute left-0 w-full h-full -z-10"/>
                        <div className=" w-full h-full ">
                            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-center h-full z-20">
                                <div className="">
                                    <div>
                                        <h1 className={`text-4xl md:text-5xl lg:text[52px]
                                         text-white font-bold lg:leading-[56px] capitalize 
                                         mb-5 md:mb-7 lg:mb-[30px]`}>
                                            {item.heading}
                                        </h1>
                                        <p className="text-white">{item.description}</p>
                                    </div>
                                </div>
                                <div className="flex justify-end w-full">
                                    <button className="w-1 h-8 rounded-[100px] bg-white/30 cursor-pointer">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}
            <div className="relative grid">
                <div className="min-h-[60vh] lg:min-h-[80vh] overflow-hidden">
                    {heroSection.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute top-0 left-0 w-full -z-20 ${
                                index === currentSlide
                                    ? "opacity-100"
                                    : "opacity-0"
                            } transition-opacity duration-500 ${
                                index === currentSlide
                                    ? "h-[80vh]"
                                    : "h-[60vh] lg:h-[80vh]"
                            }`}
                            style={{
                                backgroundImage: `url(${slide.imageUrl})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <div className="bg-[rgba(16,25,48,0.70)] absolute left-0 w-full h-full -z-10" />
                            <div className=" w-full h-full ">
                                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-center h-full z-20">
                                    <div className="">
                                        <div>
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
                <div className="absolute -bottom-4 md:-bottom-8 lg:-bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
                    {heroSection.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`cursor-pointer ${
                                index === currentSlide ? "border-4 border-secondary" : "border-4 border-white"
                            }`}
                        >
                            <img src={item.imageUrl} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
}
