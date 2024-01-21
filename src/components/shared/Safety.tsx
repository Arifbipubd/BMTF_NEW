"use client";

import React from "react";

type Props = {
    imageSrc: string;
    heading: string;
    text: string;
    imageOrder?: string;
    textOrder?: string;
};

export default function Safety({
    imageSrc,
    heading,
    text,
    imageOrder,
    textOrder,
}: Props) {
    return (
        <div className="bg-white grid grid-cols-1 lg:grid-cols-2 lg:place-items-center">
            <div
                className={`container mx-auto grid  md:grid-cols-4 ${
                    textOrder ? textOrder : "order-2 lg:order-1"
                } `}
            >
                <div className="py-16 lg:py-20 md:px-4  md:col-span-3 ">
                    <div className={`flex flex-col gap-6 lg:gap-[30px]`}>
                        <h2 className="text-headline text-xl md:text-[22px] lg:text-2xl font-semibold">
                            {heading}
                        </h2>
                        <p className="text-tertiary text-sm text-justify">
                            {text}
                        </p>
                    </div>
                </div>
            </div>
            <div
                className={`w-full lg:h-full ${
                    imageOrder ? imageOrder : "order-1 lg:order-2"
                } `}
            >
                <img
                    src={imageSrc}
                    alt="services"
                    className="w-full lg:h-full"
                />
            </div>
        </div>
    );
}
