/** @format */

import React from "react";

type Props = {};

export default function CflBannerSection({}: Props) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 '>
      <div className='bg-primary flex flex-col items-center lg:col-span-2 py-16 md:py-20 lg:py-24'>
        <div className='container mx-auto flex flex-col items-center'>
          <div>
            <p className='text-3xl md:text-4xl text-white font-extrabold capitalize mb-2.5'>
              Our Motto
            </p>
            <hr className='w-20 md:w-[91px] h-1 border-t-4 border-t-secondary' />
          </div>
        </div>
      </div>
      <div
        className={`relative bg-[url('/assets/images/verticals/cfl-banner.png')] bg-no-repeat bg-cover bg-center
            flex items-center justify-center lg:col-span-3 z-0 px-6 py-6 lg:py-0
        `}
      >
        <div
          className={`bg-[url('/assets/images/verticals/Rectangle.png')] bg-no-repeat bg-cover bg-center 
                    z-20 py-14 md:py-[67px] px-20 md:px-24 lg:px-[107px] border-l-[4px] border-l-secondary border-l-opacity-50`}
        >
          <p className='text-white text-[26px] md:text-3xl lg:text-[33px] font-extrabold'>
            Innovative and Quality life for all.
          </p>
        </div>
        <div className='absolute left-0 top-0 w-full h-full bg-[rgba(46,46,54,0.70)] -z-10' />
      </div>
    </div>
  );
}
