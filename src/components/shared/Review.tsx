/** @format */

import React from "react";
import Link from "next/link";

import { HiOutlineArrowLongRight } from "react-icons/hi2";

type Props = {
  heading: string;
  descriptionOne: string;
  descriptionTwo: string;
  link: string;
  imageUrl: string;
  divVisible: boolean;
};

export default function Review({
  divVisible = false,
  heading,
  descriptionOne,
  descriptionTwo = "",
  link = "",
  imageUrl,
}: Props) {
  return (
    <div
      className={`${
        divVisible ? "lg:grid-cols-7" : "lg:grid-cols-7"
      } grid grid-cols-1 `}
    >
      <div className='lg:col-span-4 relative overflow-hidden'>
        <div className='h-full'>
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img src={imageUrl} alt={imageUrl} className='w-full h-full' />
        </div>
        <div
          className={`${divVisible ? "block" : "hidden"}
                absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
        >
          <div className='border-[10px] border-white/40 flex flex-col justify-center px-[35px] py-12 md:py-28 xl:py-[180px]'>
            <div className='mb-0.5'>
              <p className='text-yellow font-semibold 2xl:text-lg'>
                STRATEGIC FRAMEWORK FOR BMTF
              </p>
            </div>
            <div>
              <p className='text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-[53px]'>
                NAVIGATING THE &nbsp;
                <span className='text-yellow'>FUTURE</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='relative md:col-span-3 bg-primary py-10 lg:py-12 xl:py-0 z-0'>
        <div className='container mx-auto h-full'>
          <div className='absolute bottom-0 right-2 lg:top-1 lg:left-1 -z-10'>
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img src='/assets/images/shared/Frame.png' alt='' />
          </div>
          <div
            className={`${
              divVisible
                ? "  lg:pl-4 lg:pr-[56px] xl:pl-2 xl:pr-[101px]"
                : "lg:ml-9 lg:mr-9 xl:mr-24  2xl:ml-[30px] 2xl:mr-[136px] xl:col-span-4"
            } 
                    flex flex-col justify-center h-full `}
          >
            <div className='mb-3 lg:mb-5'>
              <h2 className='text-secondary text-2xl md:text-3xl lg:text-[34px] font-semibold '>
                {heading}
              </h2>
            </div>
            {descriptionOne && (
              <div
                className={`${
                  descriptionTwo
                    ? "mb-3 md:mb-4 lg:mb-5"
                    : "mb-5 md:mb-8 lg:mb-10"
                }`}
              >
                <p className='text-white text-sm 2xl:text-base text-justify'>
                  {descriptionOne}
                </p>
              </div>
            )}
            {descriptionTwo && (
              <div className='mb-5 md:mb-8 lg:mb-10'>
                <p className='text-white text-sm 2xl:text-base text-justify'>
                  {descriptionTwo}
                </p>
              </div>
            )}
            {link && (
              <div>
                <Link
                  href={link}
                  className='flex items-center text-base capitalize text-secondary font-semibold'
                >
                  <span className='mr-2.5'>view all</span>
                  <span>
                    <i className=''>
                      <HiOutlineArrowLongRight />
                    </i>
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
