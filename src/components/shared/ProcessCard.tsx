"use client";

import React from "react";

type Props = {
    heading: string;
    cardItems: Array<any>;
};

export default function ProcessCard({ heading, cardItems }: Props) {
    return (
        <div className="bg-white py-16 md:py-20 lg:py-[91px]">
            <div className="container mx-auto">
                <div className="mb-10 md:mb-[46px] lg:mb-[50px]">
                    <h2 className="text-headline text-[26px] md:text-[32px] font-semibold text-center mb-5 md:mb-6 lg:mb-[30px]">
                        {heading}
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-10 lg:gap-12">
                    {cardItems.map((item) => (
                        <div className="" key={item.id}>
                            <div className={`bg-primary py-16 md:py-20 lg:py-[90px] px-7 md:px-10 rounded-[10px] 
                            h-full relative group border-[1px] border-transparent hover:bg-white hover:border-[1px] 
                            hover:border-primary transition-all duration-300 ease-in-out`}>
                                <div className=" absolute left-1/2 -translate-x-1/2 -top-7 flex justify-center w-full">
                                    <div className="bg-white p-5 md:p-[22px] rounded-full border-[1px] border-primary ">
                                        {/*eslint-disable-next-line @next/next/no-img-element*/}
                                        <img
                                            src="/assets/images/shared/brainstrom.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-yellow font-semibold text-lg mb-5 md:mb-6 lg:mb-[30px] text-center ">
                                        {item.heading}
                                    </h2>
                                    <p className="text-sm text-white text-center group-hover:text-yellow">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
