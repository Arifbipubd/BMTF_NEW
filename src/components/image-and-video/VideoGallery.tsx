"use client";

import React, { useState, useEffect, Fragment } from "react";
import { FaPlay } from "react-icons/fa";
import FsLightbox from "fslightbox-react";

// import { videos } from "@src/utils/imageAndVideoGallery";

// import Lightbox, { Slide } from "yet-another-react-lightbox";
// import Video from "yet-another-react-lightbox/plugins/video";

import { getData } from "@src/utils/api/getData";

type Props = {};
type LightboxController = {
  toggler: boolean;
  sourceIndex: number;
};

export default function VideoGallery({}: Props) {
  const [lightboxController, setLightboxController] =
    useState<LightboxController>({
      toggler: false,
      sourceIndex: 0,
    });
  const [loading, setLoading] = useState<boolean>(false);
  const [videosItems, setVideosItems] = useState<Array<any>>([]);
  const [errorLog, setErrorLog] = useState<string | null>(null);

  const openLightboxOnSource = (index: number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      sourceIndex: index,
    });
  };

  const videos = videosItems.map((item) => ({
    type: "video" as const,
    width: 1280,
    height: 720,
    title: "BMTF Documentary Bangla...",
    poster: "/assets/images/gallery/video/Video_1.png",
    sources: [
      {
        src: item.link,
        type: "video/mp4",
      },
    ],
  }));

  useEffect(() => {
    setLoading(true);
    getData("gallery-video")
      .then((data) => {
        setVideosItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setErrorLog(err);
        setLoading(false);
      });
  }, [setVideosItems]);


  return (
    <Fragment>
      {loading ? (
        <div className="min-h-[50vh] flex items-center justify-center">
          <div>
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img
              src="/assets/images/home/Vector.svg"
              alt=""
              className="animate-spin w-full h-full"
            />
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-[30px]">
            {videosItems.map((item, index) => (
              <div
                key={index}
                className="group relative z-0 transition-all duration-200 ease-linear cursor-pointer"
                onClick={() => openLightboxOnSource(index)}
              >
                {/*eslint-disable-next-line @next/next/no-img-element*/}
                <img
                  className="h-auto max-w-full rounded-lg w-full object-cover"
                  src="/assets/images/home/slider_2.png"
                  alt="/assets/images/home/slider_2.png"
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
          <FsLightbox
            toggler={lightboxController.toggler}
            sourceIndex={lightboxController.sourceIndex}
            sources={videosItems.map((item) => item.link)}
          />
        </>
      )}
    </Fragment>
  );
}
