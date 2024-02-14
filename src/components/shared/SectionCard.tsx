"use client";

import React from "react";

type Props = {
    items: Array<any>;
};

export default function SectionCard({ items }: Props) {
    return (
        <div className="bg-white py-16 md:py-20 lg:py-[91px]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                {items.map((item) => (
                    <div className="flex flex-col gap-5 md:gap-6 lg:gap-[30px]" key={item.id}>
                        <div>
                            {/*eslint-disable-next-line @next/next/no-img-element*/}
                            <img src={item.imageSrc} alt={item.heading} className="w-full rounded-t-[10px]"/>
                        </div>
                        <div>
                            <h2 className="text-primary text-lg md:text-xl 2xl:text-[22px] font-semibold">
                                {item.heading}
                            </h2>
                        </div>
                        <div>
                            <p className="text-tertiary">
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
