import React from "react";
import Link from "next/link";

import { HiOutlineArrowLongRight } from "react-icons/hi2";

type Props = {
    heading: string;
    description: string;
    link: string;
    imageUrl: string;
};

export default function Review({
    heading,
    description,
    link,
    imageUrl,
}: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-7">
            <div className="md:col-span-4">
                <div className="h-full">
                    <img src={imageUrl} alt={imageUrl} className="w-full h-full" />
                </div>
            </div>
            <div className="relative md:col-span-3 bg-primary py-10 lg:py-0">
                <div className="container mx-auto h-full grid lg:grid-cols-4">
                    <div className="absolute top-4 left-2 md:top-1 md:left-1">
                        <img src="/assets/images/shared/Frame.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-center h-full mx-[70px] lg:col-span-3">
                        <div className="mb-3 lg:mb-5">
                            <h1 className="text-secondary text-2xl md:text-3xl lg:text-[34px] font-semibold ">
                                {heading}
                            </h1>
                        </div>
                        <div className="mb-5 md:mb-8 lg:mb-10">
                            <p className="text-white text-sm">{description}</p>
                        </div>
                        <div>
                            <Link href={link} className="flex items-center text-base capitalize text-secondary font-semibold">
                                    <span className="mr-2.5">
                                        view all
                                    </span>
                                    <span>
                                        <i className="">
                                            <HiOutlineArrowLongRight />
                                        </i>
                                    </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
