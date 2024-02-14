"use client";

import React, { Fragment } from "react";

type Props = {
    heading: string;
    imageSrc: string;
};

export default function AboutHeroSection({ heading, imageSrc }: Props) {
    return (
        <Fragment>
            <div
                className="relative z-0 min-h-[60vh] overflow-hidden w-full grid place-items-center"
                style={{
                    backgroundImage: `url(${imageSrc})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}
            >
                <div className="bg-[rgba(16,25,48,0.70)] absolute left-0 w-full h-full -z-10" />
                <div className="container mx-auto grid lg:grid-cols-3 xl:grid-cols-2 gap-4 place-content-center place-items-center h-full">
                    <div className="lg:col-span-2 xl:col-span-1">
                        <div className="bg-[rgba(211,170,20,0.20)] px-1.5 lg:px-2.5 py-3 lg:py-[15px] w-fit rounded-[100px] mb-3 lg:mb-4">
                            <p className="text-secondary  font-semibold capitalize">
                                About us
                            </p>
                        </div>
                        <h1
                            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text[52px]
                                         text-white font-extrabold lg:leading-[56px] capitalize 
                                         mb-5 md:mb-7 lg:mb-[30px]`}
                        >
                            {heading}
                        </h1>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
