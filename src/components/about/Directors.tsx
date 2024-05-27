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
                           sm:after:left-[52%] md:after:left-[53%] lg:after:left-[50%] sm:after:-translate-x-1/2 sm:after:w-1  sm:after:h-[230px] md:after:h-[200px] lg:after:h-[200px] xl:after:h-[200px] 2xl:after:h-[210px] sm:after:bg-white`}
            >
              <div className='py-[45px] px-[35px] bg-yellow flex flex-col items-center text-center sm:w-fit'>
                <div className='-mt-20 sm:-mt-28 mb-3'>
                  {/* eslint-disable-next-line @next/next/no-img-element*/}
                  <img src='/assets/images/about/Ellipse_1.png' alt='' />
                </div>
                <div className=''>
                  <p className='text-white text-sm 2xl:text-base font-bold'>
                    Chairman
                  </p>
                  <p className='text-white text-sm 2xl:text-base'>
                    General S M Shafiuddin Ahmed <br /> SBP(BAR), OSP, ndu, psc,
                    PhD <br /> Chief of Army Staff
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
                        after:top-[50%] sm:after:-translate-y-1/2 sm:after:w-16 lg:after:w-56 
                         xl:after:w-[280px] sm:after:h-1 sm:after:bg-white 
                        `}
            >
              <div className='-mt-20 sm:-mt-28 mb-3'>
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img src='/assets/images/about/qmg.png' alt='' />
              </div>
              <div className=''>
                <p className='text-white text-sm 2xl:text-base font-bold'>
                  {" "}
                  Vice Chairman
                </p>
                <p className='text-white text-sm 2xl:text-base'>
                  Lt Gen Md Majibur Rahman <br /> SBP, OSP, PBGMS, PPMS, ndc,
                  psc, M Phil QMG <br /> Quater Master General , Bangladesh Army
                </p>
              </div>
            </div>
            <div className='py-[45px] px-[35px] bg-yellow flex flex-col items-center text-center h-fit'>
              <div className='-mt-20 sm:-mt-28 mb-3'>
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img src='/assets/images/home/md.png' alt='' />
              </div>
              <div className=''>
                <p className='text-white text-sm 2xl:text-base font-bold'>
                  Member
                </p>
                <p className='text-white text-sm 2xl:text-base'>
                  Major General Mohammad Asadullah Minhazul Alam <br /> ndu,
                  psc, PhD <br /> Managing Director BMTF
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
