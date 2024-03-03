/** @format */

"use client";

import React from "react";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-7'>
      <div className='bg-primary py-10 sm:py-16 md:py-28 lg:py-[154px] md:col-span-3 relative z-10'>
        <div className='container mx-auto lg:-mr-[100px] xl:-mr-[160px] 2xl:-mr-56'>
          {/*eslint-disable-next-line @next/next/no-img-element*/}
          <img
            src='/assets/images/about/corporate_social.png'
            alt=''
            className='rounded-[10px]'
          />
        </div>
        <div className='absolute top-4 right-2 -z-10'>
          {/*eslint-disable-next-line @next/next/no-img-element*/}
          <img src='/assets/images/shared/Frame.png' alt='' />
        </div>
      </div>
      <div
        className={`bg-[url('/assets/images/home/shape30.png')] bg-cover bg-center bg-no-repeat
         flex justify-center items-center h-full md:col-span-4  py-8 sm:py-10 md:py-14 lg:py-0 -z-10`}
      >
        <div className='md:pl-1.5 md:pr-7 lg:pl-[90px] lg:pr-[90px] xl:pl-[140px] 2xl:pl-[180px] 2xl:pr-[150px]'>
          <div className='container mx-auto '>
            <h2 className='text-headline text-2xl md:text-3xl lg:text-[34px] font-bold mb-5 md:mb-[30px]'>
              CSR Activities of <span className='text-yellow'>BMTF</span>
            </h2>
            <p className='text-sm text-tertiary text-justify mb-3 md:mb-5 leading-[150%]'>
              Being a state-owned entity we are obliged to play a central role
              in society and feel responsible to keep up this special way of
              working. We make business decisions linked to ethical values,
              compliance with legal requirements and respect for people, country
              and the environment. BMTF has established a high school inside its
              premises to help improve educational status of the children of the
              employees. For children of low scale workers, BMTF CSR department
              exempt their tuition fees. Apart from all these BMTF patronize
              different initiatives for overall wellbeing of its employees. It
              has an enormous picnic spot for recreation of the employees and
              their family members.
            </p>
            <p className='text-sm text-tertiary text-justify leading-[150%]'>
              Besides, we believe in religious and cultural harmony. A beautiful
              mosque is there inside the vast area. During Covid-19 pandemic
              BMTF has played a very pivotal role. It has maintained salaries
              and wages of its employees and workers on a regular basis. During
              the early phase, BMTF handed down ventilators to Combined Military
              Hospital-CMH to meet the growing demand. Also it has aided Kuwait
              Armed Forces with Health Sanitizing Products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
