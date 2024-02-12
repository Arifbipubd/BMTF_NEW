import React from "react";

type Props = {};

export default function Organogram({}: Props) {
    return (
        <div className="bg-white py-16 md:py-20 lg:py-[101px]">
            <div className="container mx-auto grid grid-cols-1 place-items-center">
                <div className="mb-14 md:mb-20 lg:mb-[51px]">
                    <p className="text-black  text-2xl font-medium text-center">
                    Organogram
                    </p>
                </div>
                
                <div>
                    {/* eslint-disable-next-line @next/next/no-img-element*/}
                    <img src="/assets/images/about/Organogram.svg" alt="" />
                </div>
            </div>
        </div>
    );
}
