"use client";

import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { imageGallery } from "@src/utils/imageAndVideoGallery";
import { RiSearchLine } from "react-icons/ri";

type Props = {};

export default function ImageGallery({}: Props) {
    const [index, setIndex] = useState<number>(-1);

    const slides = imageGallery.map((photo) => {
        const width = 1080 * 4;
        const height = 1000 * 4;
        return {
            src: photo,
            width,
            height,
        };
    });
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-[30px]">
                {imageGallery.map((item, index) => (
                    <div
                        key={index}
                        className="group relative z-0 transition-all duration-200 ease-linear cursor-pointer"
                        onClick={() => setIndex(index)}
                    >
                        {/*eslint-disable-next-line @next/next/no-img-element*/}
                        <img
                            className="h-full max-w-full rounded-lg w-full"
                            src={item}
                            alt={item}
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
                             -translate-y-1/2`}
                        >
                            <i className="text-3xl lg:text-[32px] text-secondary ">
                                <RiSearchLine />
                            </i>
                        </div>
                    </div>
                ))}
            </div>
            <Lightbox
                index={index}
                slides={slides}
                open={index >= 0}
                close={() => setIndex(-1)}
            />
        </>
    );
}
