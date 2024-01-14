"use client";

import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { CgChevronRight } from "react-icons/cg";

type Props = {
    heading: string;
    imageSrc: string;
    breadcrumb: Array<any>;
};

export default function CommonHeroSection({
    heading,
    imageSrc,
    breadcrumb,
}: Props) {
    return (
        <Fragment>
            <div
                className="relative z-0 min-h-[70vh] md:min-h-[60vh] overflow-hidden w-full grid place-items-center"
                style={{
                    backgroundImage: `url(${imageSrc})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <div className="bg-[rgba(16,25,48,0.70)] absolute left-0 w-full h-full -z-10" />
                {breadcrumb.length > 0 ? (
                    <>
                        <div className="contatner mx-auto grid grid-cols-1 place-items-center place-content-center">
                            <div className="text-center">
                                <div className="mb-5 md:mb-6 lg:mb-[30px]">
                                    <p
                                        className={`text-white text-4xl md:text-5xl lg:text-[52px] 
                                    leading-[56px] font-extrabold capitalize
                                    `}
                                    >
                                        {heading}
                                    </p>
                                </div>
                                <div className="flex justify-center items-center">
                                    {breadcrumb.map((item, index, array) => (
                                        <Fragment key={index}>
                                            <Link
                                                href={
                                                    item === "/"
                                                        ? "/"
                                                        : `/${item}`
                                                }
                                                className={`${
                                                    index === array.length - 1
                                                        ? "text-yellow"
                                                        : "text-white"
                                                } capitalize
                                                `}
                                            >
                                                {item === "/"
                                                    ? "Home"
                                                    : `${item
                                                          .split("-")
                                                          .join(" ")}`}
                                            </Link>
                                            <div
                                                className={`mx-4 md:mx-5 ${
                                                    index === array.length - 1
                                                        ? "hidden"
                                                        : "block"
                                                }`}
                                            >
                                                <i className="text-white font-medium">
                                                    <CgChevronRight />
                                                </i>
                                            </div>
                                        </Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="container mx-auto grid lg:grid-cols-2 gap-4 place-content-center place-items-center px-6 lg:px-0 h-full">
                            <div className="">
                                <div className="bg-[rgba(211,170,20,0.20)] px-1.5 lg:px-2.5 py-3 lg:py-[15px] w-fit rounded-[100px] mb-3 lg:mb-4">
                                    <p className="text-secondary text-sm font-semibold capitalize">
                                        About us
                                    </p>
                                </div>
                                <h1
                                    className={`text-4xl md:text-5xl lg:text[52px]
                                         text-white font-bold lg:leading-[56px] capitalize 
                                         mb-5 md:mb-7 lg:mb-[30px]`}
                                >
                                    {heading}
                                </h1>
                            </div>
                        </div>
                    </>
                )}
                {/* {items.map((slide, index) => (
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
                                    <div className="container mx-auto grid grid-cols-1 xl:grid-cols-2 place-items-start place-content-center h-full z-20">
                                        <div className="w-3/4 xl:w-full">
                                            <div className="">
                                                <div className="bg-[rgba(211,170,20,0.20)] px-1.5 lg:px-2.5 py-3 lg:py-[15px] w-fit rounded-[100px] mb-3 lg:mb-4">
                                                    <p className="text-secondary text-sm font-semibold capitalize">
                                                        About us
                                                    </p>
                                                </div>
                                                <h1
                                                    className={`text-4xl md:text-5xl lg:text[52px]
                                         text-white font-bold lg:leading-[56px] capitalize 
                                         mb-5 md:mb-7 lg:mb-[30px]`}
                                                >
                                                    {slide.heading}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))} */}
            </div>
        </Fragment>
    );
}
