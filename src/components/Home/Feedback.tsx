/** @format */

import React from "react";

type Props = {};

export default function Feedback({}: Props) {
  return (
    <div className="bg-headline py-12 md:py-16 lg:py-[70px]">
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="flex justify-center mb-5 md:mb-[30px] w-[141px] h-[141px]">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            src="/assets/images/home/md.png"
            alt=""
            className="rounded-full w-full"
          />
        </div>
        <div className="mb-10 md:mb-12 lg:mb-[54px] lg:max-w-[862px]">
          <p className="text-white text-sm 2xl:text-base text-center">
            {/* Under the banner of Bangladesh Machine Tools Factory Limited (BMTF),
            we stand at the forefront of innovation and industrial excellence.
            Spanning across 260 acres in Gazipur, BMTF is more than an
            industrial conglomerate; it&apos;s a testament to our commitment to
            Bangladesh&apos;s economic ascent. Guided by the visionary
            leadership of the Chief of Army Staff as the Board Chairman and
            supported by a skilled team, we&apos;ve earned global recognition
            through our relentless pursuit of excellence.
             */}
            I am humbled by the opportunity bestowed upon me by the grace of
            Allah to serve an institution of this magnitude. BMTF Limited is
            dedicated to fostering an economically prosperous Bangladesh, free
            from poverty and unemployment, through dynamic industrialization.
            Guided by the visionary leadership of the Chief of Army Staff as the
            Board Chairman we navigate the path towards progress and expansion
            remaining resolute in our pursuit of excellence. I seek guidance and
            blessings from Allah as we strive to achieve our aim to be the
            largest contributor in the national economy. <br /> Ameen.
          </p>
        </div>
        <div className="mb-3 md:mb-[18px]">
          <p className="text-white text-sm 2xl:text-base text-center">
          Major General Hamidul Haque, OSP, nswc, PSC
          </p>
        </div>
        <div>
          <p className="text-yellow text-sm 2xl:text-base font-medium">
            Managing Director, BMTF Ltd
          </p>
        </div>
      </div>
    </div>
  );
}
