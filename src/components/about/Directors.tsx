/** @format */

import React from "react";

type Props = {};

export default function Directors({}: Props) {
  return (
    <div id='organogram' className='bg-primary py-10 md:py-16 lg:py-[96px]'>
      <div className='container mx-auto grid grid-cols-1 place-items-center place-content-center'>
        <div>
          <div className=' mb-16 md:mb-28'>
            <h2 className='text-2xl md:text-3xl lg:text-[34px] text-white font-semibold text-center'>
              Board of Directors
            </h2>
          </div>
          <div>
            <div
              className={`relative sm:flex justify-center mb-24 sm:after:content-[''] sm:after:absolute sm:after:top-[100%]
                           sm:after:left-[52%] md:after:left-[53%] lg:after:left-[50%] sm:after:-translate-x-1/2 sm:after:w-1  sm:after:h-[190px] md:after:h-[180px] lg:after:h-[180px] xl:after:h-[180px] 2xl:after:h-[190px] sm:after:bg-white`}
            >
              <div className='py-[45px] px-[35px] bg-yellow flex flex-col items-center text-center sm:w-fit'>
                <div className='-mt-20 sm:-mt-28 mb-3'>
                  {/* eslint-disable-next-line @next/next/no-img-element*/}
                  <img src='/assets/images/about/chairman2024.png' alt='' />
                </div>
                <div className=''>
                  <p className='text-white text-sm 2xl:text-base font-bold'>
                    Chairman
                  </p>
                  <p className='text-white text-sm 2xl:text-base'>
                  General Waker-Uz-Zaman <br /> OSP, SGP, psc <br /> Chief of Army Staff
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='sm:flex justify-between gap-16 lg:gap-56 xl:gap-[280px]'>
            <div
              className={`mb-24 sm:my-0 py-[45px] px-[35px] bg-yellow flex 
                        flex-col items-center text-center relative  justify-center  
                        sm:after:content-[''] sm:after:absolute sm:after:left-[100%]
                        after:top-[40%] sm:after:-translate-y-1/2 sm:after:w-16 lg:after:w-56 
                         xl:after:w-[280px] sm:after:h-1 sm:after:bg-white 
                        `}
            >
              <div className='-mt-20 sm:-mt-28 mb-3'>
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img src='/assets/images/home/md.png' alt='' />
              </div>
              <div className=''>
                <p className='text-white text-sm 2xl:text-base font-bold'>
                  {" "}
                  Vice Chairman
                </p>
                <p className='text-white text-sm 2xl:text-base'>
                Lt Gen Mohammad Faizur Rahman <br /> SGP, BSP, ndc, afwc, psc<br />
                  Quarter Master General , <br /> Bangladesh Army
                </p>
              </div>
            </div>
            <div className='py-[45px] px-[35px] bg-yellow flex flex-col items-center text-center h-fit'>
              <div className='-mt-20 sm:-mt-28 mb-3'>
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img src='/assets/images/home/mdnew.png' alt='' />
              </div>
              <div className=''>
                <p className='text-white text-sm 2xl:text-base font-bold'>
                  Member
                </p>
                <p className='text-white text-sm 2xl:text-base'>
                Major General Md Naheed Asgar <br />BSP, ndc, afwc, psc<br />
                  Managing Director BMTF
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
