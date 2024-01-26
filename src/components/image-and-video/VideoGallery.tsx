"use client";

import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

import { videos } from "@src/utils/imageAndVideoGallery";

import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";

type Props = {};

export default function VideoGallery({}: Props) {
    const [index, setIndex] = useState<number>(-1);

    const [controls, setControls] = React.useState(true);
    const [playsInline, setPlaysInline] = React.useState(true);
    const [autoPlay, setAutoPlay] = React.useState(false);
    const [loop, setLoop] = React.useState(false);
    const [muted, setMuted] = React.useState(false);
    const [disablePictureInPicture, setDisablePictureInPicture] =
      React.useState(false);
    const [disableRemotePlayback, setDisableRemotePlayback] =
      React.useState(false);
    const [controlsList, setControlsList] = React.useState<
      ("nodownload" | "nofullscreen" | "noremoteplayback")[]
    >([]);
    const [crossOrigin, setCrossOrigin] = React.useState("");
    const [preload, setPreload] = React.useState("");

    
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-[30px]">
                {videos.map((item, index) => (
                    <div
                        key={index}
                        className="group relative z-0 transition-all duration-200 ease-linear cursor-pointer"
                        onClick={() => setIndex(index)}
                    >
                        {/*eslint-disable-next-line @next/next/no-img-element*/}
                        <img
                            className="h-auto max-w-full rounded-lg w-full"
                            src={item.poster}
                            alt={item.poster}
                        />
                        <div
                            className={`bg-[rgba(0,106,77,0.25)] rounded-[10px] 
                             absolute z-10 left-0 top-0 bottom-0 right-0`}
                        />
                        <div
                            className={` 
                            p-4 md:p-5 lg:p-6 rounded-full bg-secondary absolute z-20 
                            left-[50%] top-[50%] -translate-x-1/2 
                             -translate-y-1/2 cursor-pointer`}
                        >
                            <i className="text-xl lg:text-2xl text-primary">
                                <FaPlay />
                            </i>
                        </div>
                        <div className="absolute bottom-0 px-6 md:px-7 py-7 md:py-8 z-10">
                            <div className="mb-3">
                                <h2 className="text-white font-bold leading-[22px]">
                                    {item.title}
                                </h2>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Lightbox
                index={index}
                slides={videos}
                open={index >= 0}
                close={() => setIndex(-1)}
                plugins={[Video]}
                video={{
                  controls,
                  playsInline,
                  autoPlay,
                  loop,
                  muted,
                  disablePictureInPicture,
                  disableRemotePlayback,
                  controlsList: controlsList.join(" "),
                  crossOrigin,
                  preload,
                }}
            />
        </>
    );
}
