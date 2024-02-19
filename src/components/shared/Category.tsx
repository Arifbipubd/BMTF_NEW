"use client";

import React from "react";

type Props = {
    heading: string;
    subHeading: string;
    categories: Array<any>;
};

export default function Category({ heading, subHeading, categories }: Props) {
    return (
        <div className="bg-white py-10 md:py-20 lg:py-[106px]">
            <div className="container mx-auto">
                <div className="mb-10 md:mb-[46px] lg:mb-[50px]">
                    <h2 className="text-headline text-2xl md:text-3xl lg:text-[34px] font-semibold text-center mb-6 lg:mb-[30px]">
                        {heading}
                    </h2>
                    <p className="text-black text-center">{subHeading}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-[30px]">
                    {categories.map((item) => (
                        <div
                            key={item.id}
                            className={`relative bg-primary rounded-[10px] py-7 md:py-8 lg:py-9 border-[1px] 
                            border-transparent transition-all duration-300 ease-in-out  
                            hover:bg-white hover:border-[1px] hover:border-primary`}
                        >
                            <div className="flex justify-center w-full mb-4 sm:mb-5">
                                <div className="bg-white p-5 md:p-[22px] rounded-full stroke-[1px] stroke-primary">
                                    {/*eslint-disable-next-line @next/next/no-img-element*/}
                                    <img
                                        src="/assets/images/shared/brainstrom.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-yellow md:text-lg 2xl:text-xl font-semibold text-center">
                                    {item.label}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
