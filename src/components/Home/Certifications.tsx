import React from "react";

type Props = {};

export default function Certifications({}: Props) {
    return (
        <div className="py-10 md:py-16 lg:py-[70px] relative bg-white z-0 overflow-hidden">
            <div className="absolute -z-10 left-0 bottom-16">
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img src="/assets/images/shape/shape15_1.svg" alt="" />
            </div>
            <div className="absolute right-0 top-[50%] -translate-y-1/2 -my-1/2 -z-20">
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img src="/assets/images/shape/shape15_2.svg" alt="" />
            </div>
            <div
                className={`container mx-auto 
                grid grid-cols-1 md:grid-cols-2 
                place-content-center lg:place-content-start place-items-center
                relative gap-[30px]`}
            >
                <div className="absolute left-[5%] bottom-[100%]">
                    {/* eslint-disable-next-line @next/next/no-img-element*/}
                    <img src="/assets/images/shape/Frame_1.png" alt="" />
                </div>
                <div className="text-center lg:text-start">
                    <h2 className="text-headling text-2xl md:text-3xl lg:text-[2.5rem] mb-5 md:mb-6 lg:mb-[30px] md:leading-[46px]">
                        Certifications
                    </h2>
                    <p className="text-tertiary text-sm 2xl:text-base lg:w-3/4 leading-[150%]">
                        At BMTF, we stand as a beacon of excellence in the
                        machinery and tools industry. Our unwavering commitment
                        to quality, innovation, and customer satisfaction sets
                        us apart.
                    </p>
                </div>
                <div className="flex gap-[30px]">
                    <div>
                        {/* eslint-disable-next-line @next/next/no-img-element*/}
                        <img src="/assets/images/home/iso1.png" alt="" />
                    </div>
                    <div>
                        {/* eslint-disable-next-line @next/next/no-img-element*/}
                        <img src="/assets/images/home/iso2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
