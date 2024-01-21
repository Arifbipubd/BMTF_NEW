"use client";

import React from "react";

type Props = {
    imageSrc: string;
    items: Array<any>;
};

export default function AssemblyProcess({ imageSrc, items }: Props) {
    console.log(items.length);
    return (
        <div className="bg-skyLight py-16 sm:py-20 md:py-28 lg:py-[125px]">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[30px] place-items-center">
                <div className="">
                    <img src={imageSrc} alt="" className="w-full" />
                </div>
                <div className="py-10 lg:py-0">
                    {items.map((item, _, array) => (
                        <div
                            key={item.id}
                            className={`${
                                array.length > 1
                                    ? "mb-5 md:mb-6 lg:mb-[30px]"
                                    : ""
                            } flex flex-col gap-6 lg:gap-[30px]`}
                        >
                            <h2 className="text-headline text-xl md:text-[22px] lg:text-2xl font-semibold">
                                {item.heading}
                            </h2>
                            {item.textItems.map((textItem: any) => (
                                <p
                                    className="text-tertiary text-sm text-justify"
                                    key={textItem.id}
                                >
                                    {textItem.text}
                                </p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}