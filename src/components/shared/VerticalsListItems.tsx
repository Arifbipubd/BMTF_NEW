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
        <div className="bg-white grid grid-cols-1 lg:grid-cols-2 lg:place-items-center">
            <div className={`w-full h-full ${imageOrder ? imageOrder : ""}`}>
                {/*eslint-disable-next-line @next/next/no-img-element*/}
                <img src={imageSrc} alt="aim" className="w-full h-full" />
            </div>
            <div
                className={`container mx-auto grid  xl:grid-cols-5 place-content-center
                ${textOrder ? textOrder : ""}
            `}
            >
                <div className={`py-16 lg:py-[54px] xl:col-span-4 ${textOrder === 'order-1'?'px-6 ': 'px-0'}`}>
                    <div className="mb-5 md:mb-6 lg:mb-[30px]">
                        <h2 className="text-headline text-lg sm:text-xl font-semibold">
                            {listHeading}
                        </h2>
                    </div>
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        {listItems.map((item) => (
                            <div key={item.id} className={`flex items-center`}>
                                <div className="bg-primary p-2 rounded-full mr-2.5">
                                    <i className="text-yellow text-sm font-medium">
                                        <FiCheck />
                                    </i>
                                </div>
                                <div>
                                    <p className="text-black font-sm">
                                        {item.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {description && (
                        <p className="mt-5 md:mt-6 lg:mt-[30px] text-black text-sm text-justify">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
