"use client";

import { Fragment, useEffect, useState } from "react";
import { sliderSection } from "@src/utils/constants";
import Link from "next/link";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Props = {};

export default function Slider({}: Props) {
    const [currentSlide, setCurrentSlide] = useState(1);
    const [visibleImages, setVisibleImages] = useState<Array<any>>(
        sliderSection.slice(0, 3)
    );

    const goToSlide = (slideIndex: any) => {
        console.log(slideIndex);
        setCurrentSlide(slideIndex);
    };

    const handlePrev = () => {
        if (currentSlide <= 3) {
            setCurrentSlide(currentSlide - 1);
            setVisibleImages(sliderSection.slice(0, 3));
        } else if (currentSlide < sliderSection.length - 3) {
            setCurrentSlide(currentSlide - 1);
            setVisibleImages(
                sliderSection.slice(currentSlide - 1, currentSlide + 2)
            );
        } else if (currentSlide <= sliderSection.length) {
            setCurrentSlide(currentSlide - 1);
            setVisibleImages(
                sliderSection.slice(currentSlide - 3, currentSlide )
            );
        } else {
            setCurrentSlide(1);
            setVisibleImages(sliderSection.slice(0, 3));
        }
    };

    const handleNext = () => {
        // Shift the array to show the next three images
        if (currentSlide < 2) {
            setCurrentSlide(currentSlide + 1);
            setVisibleImages(
                sliderSection.slice(currentSlide - 1, currentSlide + 2)
            );
        } else if (currentSlide < sliderSection.length - 1) {
            setCurrentSlide(currentSlide + 1);
            setVisibleImages(
                sliderSection.slice(currentSlide - 2, currentSlide + 1)
            );
        } else if (currentSlide < sliderSection.length) {
            setCurrentSlide(currentSlide + 1);
            setVisibleImages(
                sliderSection.slice(currentSlide - 2, currentSlide + 1)
            );
        } else {
            setCurrentSlide(1);
            setVisibleImages(sliderSection.slice(0, 3));
        }
    };

    return (
        <Fragment>
            <div className="relative grid">
                <div className="h-[60vh] lg:h-[80vh] overflow-hidden">
                    {sliderSection.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute top-0 left-0 w-full -z-20 ${
                                slide.id === currentSlide
                                    ? "block opacity-100"
                                    : "hidden opacity-0"
                            } transition-opacity duration-500 ${
                                slide.id === currentSlide ? "" : ""
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
                                                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text[52px] 
                                         text-white font-extrabold lg:leading-[56px] capitalize
                                         mb-5 md:mb-7 lg:mb-[34px]`}
                                            >
                                                {slide.heading}
                                            </h1>
                                            <p className="text-white text-lg mb-5 md:mb-7 lg:mb-[34px]">
                                                {slide.description}
                                            </p>
                                            <div>
                                                <Link href={slide.link}>
                                                    <button className="p-[18px] rounded-[3px] bg-secondary">
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
                <div className="absolute -bottom-4 sm:-bottom-10 md:-bottom-4 lg:-bottom-10 left-5 right-5 md:right-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center space-x-4 z-10">
                    <div>
                        <button
                            className={`${
                                currentSlide === 1 ? "bg-white/30" : "bg-yellow"
                            }
                                    flex items-center p-2 md:p-2.5 lg:p-[14px] rounded-[3px]
                                    transition-all duration-150 ease-linear
                                `}
                            onClick={handlePrev}
                            disabled={currentSlide === 1}
                        >
                            <i className="text-white text-lg font-medium">
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
                                } h-full`}
                            >
                                {/* eslint-disable-next-line @next/next/no-img-element*/}
                                <img
                                    src={item.imageUrl}
                                    alt={item.imageUrl}
                                    className="h-full"
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
                            <i className="text-white text-lg font-medium">
                                <FiChevronRight />
                            </i>
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
