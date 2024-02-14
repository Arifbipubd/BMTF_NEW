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
                className="relative z-0 min-h-[60vh] overflow-hidden w-full grid place-items-center"
                style={{
                    backgroundImage: `url(${imageSrc})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <div className="bg-[rgba(16,25,48,0.70)] absolute left-0 w-full h-full -z-10" />
                {breadcrumb.length > 0 && (
                    <>
                        <div className="container mx-auto grid grid-cols-1 place-items-center place-content-center">
                            <div className="text-center">
                                <div className="mb-5 md:mb-6 lg:mb-[30px] mx-auto">
                                    <p
                                        className={`text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text[52px]  
                                    lg:leading-[64px] font-extrabold capitalize
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
                                                } capitalize text-sm sm:text-base 
                                                `}
                                            >
                                                {item === "/"
                                                    ? "Home"
                                                    : `${item
                                                          .split("-")
                                                          .join(" ")}`}
                                            </Link>
                                            <div
                                                className={`mx-2 sm:mx-4 md:mx-5 ${
                                                    index === array.length - 1
                                                        ? "hidden"
                                                        : "block"
                                                }`}
                                            >
                                                <i className="text-white font-medium text-sm sm:text-base">
                                                    <CgChevronRight />
                                                </i>
                                            </div>
                                        </Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </Fragment>
    );
}
