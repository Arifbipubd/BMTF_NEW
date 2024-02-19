import React from "react";

type Props = {};

export default function Organogram({}: Props) {
    return (
        <div className="bg-white py-10 md:py-16 lg:py-[96px]">
            <div className="container mx-auto grid grid-cols-1 place-items-center">
                <div className="mb-8 md:mb-14 lg:mb-[51px]">
                    <h2 className="text-black  text-2xl md:text-3xl lg:text-[34px] font-medium text-center">
                    Organogram
                    </h2>
                </div>
                
                <div>
                    {/* eslint-disable-next-line @next/next/no-img-element*/}
                    <img src="/assets/images/about/Organogram.svg" alt="" />
                </div>
            </div>
        </div>
    );
}
