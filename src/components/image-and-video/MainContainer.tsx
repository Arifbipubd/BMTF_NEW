"use client";

import React, { Fragment, useState } from "react";
import ImageGallery from "./ImageGallery";
import VideoGallery from "./VideoGallery";
import ConnectBMTF from "../shared/ConnectBMTF";

type Props = {};

export default function MainContainer({}: Props) {
    const [activeGallery, setActiveGallery] = useState<number>(1);

    return (
        <Fragment>
            <div className="bg-white py-16 md:py-20 lg:py-[92px]">
                <div className="container mx-auto">
                    <div className="flex flex-row justify-center mb-7 md:mb-10">
                        <button
                            className={`${
                                activeGallery === 1
                                    ? "bg-primary text-secondary"
                                    : "bg-white text-primary"
                            } py-[18px] px-6 rounded-[5px]
                       font-bold leading-[24px] hover:text-secondary`}
                            onClick={() => setActiveGallery(1)}
                        >
                            Image Gallery
                        </button>
                        <button
                            className={`${
                                activeGallery === 2
                                    ? "bg-primary text-secondary"
                                    : "bg-white text-primary"
                            } p-[18px] md:p-6 rounded-[5px]
                       font-bold leading-[24px] hover:text-secondary`}
                            onClick={() => setActiveGallery(2)}
                        >
                            Video Gallery
                        </button>
                    </div>
                    {activeGallery === 1 ? <ImageGallery /> : <VideoGallery />}
                </div>
            </div>
            <ConnectBMTF />
        </Fragment>
    );
}
