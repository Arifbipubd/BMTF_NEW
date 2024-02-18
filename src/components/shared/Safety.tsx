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
        <div className="bg-white grid grid-cols-1 lg:grid-cols-2 lg:place-items-center gap-6 lg:gap-0">
            <div
                className={`container mx-auto lg:pl-[30px] ${
                    textOrder ? textOrder : "order-2 lg:order-1"
                } `}
            >
                <div
                    className={`pb-6 lg:pb-0 lg:py-20  ${
                        textOrder === "order-2 lg:order-1"
                            ? "lg:pr-2 lg:pl-10 xl:pl-16 2xl:pl-[95px]"
                            : "lg:pr-6 xl:pr-16 2xl:pr-[95px]"
                    }`}
                >
                    <div className={`flex flex-col gap-6 lg:gap-[30px]`}>
                        <h3 className="text-headline text-xl md:text-[22px] lg:text-2xl 2xl:text-[26px] font-semibold">
                            {heading}
                        </h3>
                        <p className="text-tertiary text-sm 2xl:text-base text-justify">
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
                {/*eslint-disable-next-line @next/next/no-img-element*/}
                <img
                    src={imageSrc}
                    alt="services"
                    className="w-full lg:h-full"
                />
            </div>
        </div>
    );
}
