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
                className={`container mx-auto   ${
                    textOrder !== null ? textOrder : "order-2 lg:order-1"
                }`}
            >
                <div
                    className={`py-16 lg:py-20  ${
                        textOrder === "order-2 lg:order-1"
                            ? "lg:pr-2 lg:pl-10 xl:pl-[101px]"
                            : "lg:pl-3 lg:pr-16 xl:pl-4 xl:pr-[109px]"
                    }`}
                >
                    {items.map((item, _, array) => (
                        <div
                            key={item.id}
                            className={`${
                                array.length > 1
                                    ? "mb-5 md:mb-6 lg:mb-[30px]"
                                    : ""
                            } flex flex-col gap-6 lg:gap-[30px]`}
                        >
                            <h2 className="text-headline text-xl md:text-[22px] lg:text-2xl 2xl:text-[26px] font-semibold">
                                {item.heading}
                            </h2>
                            {item.textItems.map((textItem: any) => (
                                <p
                                    className="text-tertiary text-sm 2xl:text-base text-justify"
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
                className={`w-full flex items-center xl:h-full ${
                    imageOrder !== null ? imageOrder : "order-1 lg:order-2"
                }`}
            >
                {/*eslint-disable-next-line @next/next/no-img-element*/}
                <img
                    src={imageSrc}
                    alt="services"
                    className="w-full xl:h-full"
                />
            </div>
        </div>
    );
}
