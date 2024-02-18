"use client";

import React from "react";
import VerticalNavigation from "./VerticalNavigation";

type Props = {
    youtubeUrl: string;
    descriptionOne: string;
    descriptionTwo?: string;
    descriptionThree?: string;
    descriptionFour?: string;
};

export default function DescriptionSection({
    youtubeUrl,
    descriptionOne,
    descriptionTwo,
    descriptionThree,
    descriptionFour,
}: Props) {
    return (
        <div className="py-16 md:py-20 lg:py-[87px] relative bg-white z-0">
            <div className="container mx-auto z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-[30px] mb-10 md:mb-16 lg:mb-[77px] ">
                    <div className="lg:col-span-2 order-2 lg:order-1">
                        <iframe
                            className="w-full h-full rounded-[10px]"
                            src={youtubeUrl}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="order-1 lg:order-2">
                        <VerticalNavigation />
                    </div>
                </div>
                <div className="flex flex-col items-center w-full">
                    <div className="lg:w-3/4">
                        <div className="mb-5 md:mb-6 lg:mb-[30px] ">
                            <p className="text-tertiary text-sm 2xl:text-base text-center">
                                {descriptionOne}
                            </p>
                        </div>
                        {descriptionTwo && (
                            <div
                                className={`${
                                    descriptionThree
                                        ? "mb-5 md:mb-6 lg:mb-[30px]"
                                        : ""
                                }`}
                            >
                                <p className="text-tertiary text-sm 2xl:text-base text-center">
                                    {descriptionTwo}
                                </p>
                            </div>
                        )}
                        {descriptionThree && (
                            <div
                                className={`${
                                    descriptionFour
                                        ? "mb-5 md:mb-6 lg:mb-[30px]"
                                        : ""
                                }`}
                            >
                                <p className="text-tertiary text-sm 2xl:text-base text-center">
                                    {descriptionThree}
                                </p>
                            </div>
                        )}
                        {descriptionFour && (
                            <div className={``}>
                                <p className="text-tertiary text-sm 2xl:text-base text-center">
                                    {descriptionFour}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="custom-clip-bg absolute top-0 left-0 right-0 w-full h-3/4 bg-yellow -z-10"></div>
        </div>
    );
}
