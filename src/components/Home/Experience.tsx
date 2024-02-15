/** @format */

import React from "react";
import { TfiArrowCircleRight } from "react-icons/tfi";

import { experienceLists } from "@src/utils/constants";

type Props = {};

export default function Experience({}: Props) {
    return (
        <div className="bg-white grid grid-cols-1 place-items-center py-20 md:py-24 lg:py-36 ">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 md:gap-12">
                    <div className="flex items-end gap-4 relative mb-10 lg:mb-0">
                        <div>
                        {/* eslint-disable-next-line @next/next/no-img-element*/}
                            <img
                                src="/assets/images/home/Forge_shop_03.png"
                                alt=""
                            />
                        </div>
                        <div>
                        {/* eslint-disable-next-line @next/next/no-img-element*/}
                            <img
                                src="/assets/images/home/Foundry_shop_01.png"
                                alt=""
                            />
                        </div>
                        <div
                            className={`absolute -bottom-9 lg:-bottom-14 left-[50%] -translate-x-1/2 -mx-1/2 
                            bg-primary border-4 border-white px-[34px] py-3 flex items-center`}
                        >
                            <div className="mr-6">
                                <h1 className="text-yellow text-5xl md:text-7xl lg:text-[80px] font-semibold leading-[36px]">
                                    44
                                </h1>
                            </div>
                            <div>
                                <p className="text-white text-sm font-semibold uppercase leading-[20px]">
                                    Years of Experience
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-5 md:mb-[30px]">
                            <h2 className="text-headline text-2xl md:text-3xl lg:text-[34px] md:leading-[40px] font-extrabold">
                                State Owned Largest Production Facility of
                                Bangladesh
                            </h2>
                        </div>
                        <div className="mb-5 md:mb-[30px] lg:mb-9">
                            <p className="text-sm 2xl:text-base text-tertiary leading-[24px] text-justify">
                                At BMTF, we stand as a beacon of excellence in
                                the machinery and tools industry. Our unwavering
                                commitment to quality, innovation, and customer
                                satisfaction sets us apart. With a rich heritage
                                in precision engineering, cutting-edge
                                technology, and a highly skilled workforce, we
                                offer unparalleled products and services. When
                                you choose BMTF, you&quot;re selecting
                                reliability, durability, and the promise of a
                                brighter industrial future. Join us in shaping
                                tomorrow&quot;s success with the trusted
                                expertise of BMTF by your side.
                            </p>
                        </div>
                        <div>
                            {experienceLists.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center mb-3 md:mb-5"
                                >
                                    <div className="mr-2.5">
                                        <i className="text-primary text-lg 2xl:text-xl">
                                            <TfiArrowCircleRight />
                                        </i>
                                    </div>
                                    <div>
                                        <p className="text-tertiary text-sm 2xl:text-base leading-[150%]">
                                            {item}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
