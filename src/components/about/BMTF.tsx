/** @format */

import React from "react";

type Props = {};

export default function BMTF({}: Props) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-7 relative'>
      <div className='lg:col-span-3 order-2 lg:order-1'>
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          src='/assets/images/about/Steel_structure_05.png'
          alt=''
          className='h-full w-full'
        />
      </div>
      <div
        className={`bg-headline flex justify-center items-center h-full 
                    order-1 lg:order-2 md:col-span-4 py-10 lg:py-16 xl:py-0`}
      >
        <div className='lg:pl-[32px] lg:pr-[56px] xl:pl-[30px] xl:pr-[101px]'>
          <div className='container mx-auto'>
            <h2 className='text-white text-2xl md:text-3xl lg:text-[34px] font-bold mb-5 md:mb-[30px]'>
              About <span className='text-yellow'>BMTF</span>
            </h2>
            <p className='text-sm 2xl:text-base text-textDark leading-[150%] text-justify mb-3 md:mb-5'>
              Bangladesh Machine Tools Factory Limited (BMTF) is one of the
              leading state-owned commercial entities operating under the
              management of the Bangladesh Army. Spanning 156.47 acres of land
              at Shimultoli, Gazipur, BMTF comprises 19 dynamic factories. Led
              by the Chief of Army Staff as the Board Chairman and with a
              Managing Director, BMTF is incessantly diversifying its
              enterprises to bolster the national economy and attain acclaim as
              a renowned conglomerate on a global scale.
            </p>
            <p className='text-sm 2xl:text-base text-textDark text-justify leading-[150%]'>
              With a blend of military and civilian officers and a dedicated
              workforce, BMTF is committed to contributing to Bangladesh&apos;s
              journey towards becoming the strongest economy, aligning with the
              &apos;Delta Plan 2100&apos;. Its consistent revenue generation
              plays a pivotal role in shaping the nation&apos;s progress by
              fostering substantial employment prospects and catalyzing
              industrial growth.
            </p>
          </div>
        </div>
      </div>
      <div className='absolute right-1 z-10 bottom-0 hidden lg:block'>
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img src='/assets/images/about/Frame_6.svg' alt='' />
      </div>
    </div>
  );
}
