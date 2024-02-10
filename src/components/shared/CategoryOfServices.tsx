"use client";
import React from "react";

type Props = {
    imageSrc: string;
    items: Array<any>;
    imageOrder?: string;
    textOrder?: string;
};

export default function CategoryOfServices({
    imageSrc,
    items,
    imageOrder,
    textOrder,
}: Props) {
    return (
        <div className="bg-white grid grid-cols-1 lg:grid-cols-2 lg:place-items-center">
            <div
                className={`container mx-auto grid  md:grid-cols-4  ${
                    textOrder !== null ? textOrder : "order-2 lg:order-1"
                }`}
            >
                <div className="py-16 lg:py-20 md:px-4  md:col-span-3 ">
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
            <div
                className={`w-full lg:h-full ${
                    imageOrder !== null ? imageOrder : "order-1 lg:order-2"
                }`}
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
