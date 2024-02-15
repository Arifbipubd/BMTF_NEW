"use client";

import React from "react";

type Props = {
    imageSrc: string;
    aimItems: Array<any>;
};

export default function AimSection({ imageSrc, aimItems }: Props) {
    return (
        <div className="bg-headline grid grid-cols-1 lg:grid-cols-2 lg:place-items-center">
            <div className="w-full">
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img src={imageSrc} alt="aim" className="w-full" />
            </div>
            <div className="container mx-auto grid  lg:grid-cols-5">
                <div className="py-16 xl:py-0 lg:col-span-4">
                    {aimItems.map((item, _, array) => (
                        <div
                            key={item.id}
                            className={`${
                                array.length > 1 ? "mb-5 md:mb-6" : ""
                            }`}
                        >
                            <h3 className="text-secondary text-xl md:text-[22px] lg:text-2xl 2xl:text-[26px] font-semibold mb-3 md:mb-4 capitalize">
                                {item.heading}
                            </h3>
                            <p className="text-textDark text-sm 2xl:text-base text-justify">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
