'use client'

import React from "react";

type Props = {
    heading: string;
    subHeading: string;
    categories: Array<any>;
};

export default function Category({ heading, subHeading, categories }: Props) {
    return (
        <div className="bg-white py-20 md:py-24 lg:py-[106px]">
            <div className="container mx-auto">
                <div className="mb-10 md:mb-[46px] lg:mb-[50px]">
                    <h2 className="text-headline text-[26px] md:text-[32px] font-semibold text-center mb-5 md:mb-6 lg:mb-[30px]">
                        {heading}
                    </h2>
                    <p className="text-black text-center">{subHeading}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-[30px]">
                    {categories.map((item) => (
                        <div key={item.id} className="relative bg-primary rounded-[10px] py-7 md:py-8 lg:py-9">
                            <div className="flex justify-center w-full mb-4 sm:mb-5">
                                <div className="bg-white p-5 md:p-[22px] rounded-full stroke-[1px] stroke-primary">
                                    <img
                                        src="/assets/images/shared/brainstrom.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div>
                                <p className="text-yellow md:text-lg font-semibold text-center">
                                    {item.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
