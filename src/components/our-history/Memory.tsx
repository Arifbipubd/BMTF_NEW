"use client";

import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { historyGallery } from "@src/utils/historyGallery";
import { FaSearchPlus } from "react-icons/fa";

type Props = {};

export default function Memory({}: Props) {
    const [index, setIndex] = useState<number>(-1);

    const slides = historyGallery.map((photo) => {
        const width = 1080 * 4;
        const height = 1000 * 4;
        return {
            src: photo,
            width,
            height,
        };
    });

    return (
        <div className="bg-white py-10 md:py-24 lg:py-[109px]">
            <div className="container mx-auto">
                <div className="mb-8 md:mb-12 lg:mb-[66px]">
                    <h2 className="text-2xl md:text-3xl lg:text-[34px] text-black font-semibold leading-[48px]">
                        Memory Snap
                    </h2>
                </div>
                <div className="columns-1 gap-6 sm:columns-2 lg:gap-[30px]  lg:columns-3 historyImage">
                    {historyGallery.map((item, index) => (
                        <div
                            key={index}
                            className="group relative z-0 transition-all duration-200 ease-in-out mb-6 sm:mb-[30px] last-of-type:mb-0 cursor-pointer"
                            onClick={() => setIndex(index)}
                        >
                            {/*eslint-disable-next-line @next/next/no-img-element*/}
                            <img
                                className="h-auto max-w-full rounded-lg w-full"
                                src={item}
                                alt=""
                            />
                            <div
                                className={`bg-[rgba(46,46,54,0.60)] rounded-[10px]
                             hidden group-hover:block group-hover:absolute group-hover:z-10
                            group-hover:left-0 group-hover:top-0 group-hover:bottom-0 group-hover:right-0
                             group-hover:w-full
                            group-hover:h-full`}
                            />
                            <div
                                className={`
                             hidden group-hover:block group-hover:absolute group-hover:z-20
                            group-hover:left-[50%] group-hover:top-[50%] group-hover:-translate-x-1/2
                             -translate-y-1/2 group-hover:transition-all group-hover:duration-200 group-hover:ease-in-out`}
                            >
                                <i className="text-3xl lg:text-[32px] text-secondary ">
                                    <FaSearchPlus />
                                </i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Lightbox
                index={index}
                slides={slides}
                open={index >= 0}
                close={() => setIndex(-1)}
            />
        </div>
    );
}
