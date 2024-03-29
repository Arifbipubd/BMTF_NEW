"use client";

import React from "react";
import { FiCheck } from "react-icons/fi";

type Props = {
    imageSrc: string;
    listHeading: string;
    listItems: Array<any>;
    imageOrder?: string;
    textOrder?: string;
    description?: string;
};

export default function VerticalsListItems({
    imageSrc,
    listHeading,
    listItems,
    imageOrder,
    textOrder,
    description,
}: Props) {
    return (
        <div className="bg-white grid grid-cols-1 lg:grid-cols-2 lg:place-items-center gap-6 lg:gap-0">
            <div
                className={`w-full h-full flex items-center ${
                    imageOrder ? imageOrder : ""
                }`}
            >
                {/*eslint-disable-next-line @next/next/no-img-element*/}
                <img src={imageSrc} alt="aim" className="w-full xl:h-full" />
            </div>
            <div
                className={`container mx-auto lg:pl-[30px] ${textOrder ? textOrder : ""}
            `}
            >
                <div
                    className={`pb-10 lg:pt-10 xl:py-[54px]  ${
                        textOrder === "order-2 lg:order-1"
                            ? "lg:pr-2 lg:pl-10 xl:pl-16 2xl:pl-[95px]"
                            : "lg:pr-6 xl:pr-16 2xl:pr-[95px]"
                    }`}
                >
                    <div className="mb-5 md:mb-6 lg:mb-[30px]">
                        <h3 className="text-headline text-xl md:text-[22px] lg:text-2xl 2xl:text-[26px] font-semibold">
                            {listHeading}
                        </h3>
                    </div>
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
                        {listItems.map((item) => (
                            <div key={item.id} className={`flex items-center`}>
                                <div className="bg-primary p-2 rounded-full mr-2.5">
                                    <i className="text-yellow text-sm 2xl:text-base font-medium">
                                        <FiCheck />
                                    </i>
                                </div>
                                <div>
                                    <p className="text-black font-sm 2xl:text-base">
                                        {item.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {description && (
                        <p className="mt-5 md:mt-6 lg:mt-[30px] text-black text-sm 2xl:text-base text-justify">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
