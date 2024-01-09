"use client";

import { Fragment, useEffect, useState } from "react";
import { sliderSection } from "@src/utils/constants";
import Link from "next/link";

type Props = {};

export default function Slider({}: Props) {
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
        }, 5000);
    }, []);
    return (
        <Fragment>
            {/* <div className="max-h-[60vh] lg:max-h-[90vh] overflow-hidden grid z-0">
                {sliderSection && sliderSection.map((item) => (
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
                <div className="h-[60vh] lg:h-[80vh] overflow-hidden">
                    {sliderSection.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute top-0 left-0 w-full -z-20 ${
                                index === currentSlide
                                    ? "block opacity-100"
                                    : "hidden opacity-0"
                            } transition-opacity duration-500 ${
                                index === currentSlide ? "" : ""
                            } h-[60vh] lg:h-[80vh]`}
                            style={{
                                backgroundImage: `url(${slide.imageUrl})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <div className="bg-[rgba(16,25,48,0.70)] absolute left-0 w-full h-full -z-10" />
                            <div className="flex justify-center h-full">
                                <div className="container mx-auto z-20">
                                    <div className="max-w-[500px] flex flex-col justify-center h-full">
                                        <div>
                                            <div className="bg-black px-[11px] py-1.5 w-fit mb-4 lg:mb-5">
                                                <p className="text-white font-medium capitalize">
                                                    Industries
                                                </p>
                                            </div>
                                            <h1
                                                className={`text-4xl md:text-5xl lg:text[60px]
                                         text-white font-bold lg:leading-[56px] capitalize 
                                         mb-5 md:mb-7 lg:mb-[34px]`}
                                            >
                                                {slide.heading}
                                            </h1>
                                            <p className="text-white text-justify mb-5 md:mb-7 lg:mb-[34px]">
                                                {slide.description}
                                            </p>
                                            <div>
                                                <Link href={slide.link}>
                                                    <button className="p-[18px] rounded-[3px] bg-yellow">
                                                        <p className="font-semibold text-black font-nunito">
                                                        View Details
                                                        </p>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute -bottom-4 md:-bottom-8 lg:-bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
                    {sliderSection.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`cursor-pointer ${
                                index === currentSlide
                                    ? "border-4 border-secondary"
                                    : "border-4 border-white"
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
