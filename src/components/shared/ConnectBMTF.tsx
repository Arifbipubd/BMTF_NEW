/** @format */

import React from "react";
import Link from "next/link";

type Props = {
  imageSrc?: string;
  contactFirst?: string;
  contactSecond?: string;
  phone?: string;
  email?: string;
};

export default function ConnectBMTF({
  imageSrc = "/assets/images/shared/Banner.png",
  contactFirst,
  contactSecond,
  phone,
  email,
}: Props) {
  return (
    <div className='pt-8 md:pt-12 lg:pt-[72px]'>
      <div className='bg-white min-h-[20vh] -mb-64 md:-mb-80 lg:-mb-96 xl:-mb-40'>
        <div className='container mx-auto grid grid-cols-1 xl:grid-cols-2'>
          <div
            className={`py-14 md:py-16 lg:py-[74px] px-10 md:px-11 lg:px-[46px] z-10 bg-skyLight
                        rounded-tr-[30px] rounded-tl-[30px] xl:rounded-tr-none xl:rounded-bl-[30px]
                        `}
          >
            <div className='mb-4 md:mb-5 lg:mb-[30px]'>
              <p className='text-headline font-xl md:text-lg md:leading-[36px] xl:text-justify'>
                {contactFirst}
              </p>
              <p className='text-headline font-xl md:text-lg md:leading-[36px] xl:text-justify'>
                {contactSecond}
              </p>
              <p>
                <a
                  href={`tel:${phone}`}
                  className='text-headline font-xl md:text-lg md:leading-[36px] xl:text-justify'
                >
                  Mobile: {phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${email}`}
                  className='text-headline font-xl md:text-lg md:leading-[36px] xl:text-justify'
                >
                  Email: {email}
                </a>
              </p>
            </div>
            <div>
              <Link href={"/contact"}>
                <button className='p-[18px] bg-primary flex items-center rounded-[3px]'>
                  <p className='text-white font-semibold'>Contact Us</p>
                </button>
              </Link>
            </div>
          </div>
          <div className='relative'>
            {/*eslint-disable-next-line @next/next/no-img-element*/}
            <img
              src={imageSrc}
              alt=''
              className='w-full max-h-96 object-cover rounded-bl-[30px] xl:rounded-bl-none xl:rounded-tr-[30px] rounded-br-[30px]'
            />
            <div
              className={`bg-[rgba(46,46,54,0.60)] rounded-[10px] absolute z-10 
                            left-0 top-0 bottom-0 right-0 
                            rounded-bl-[30px] xl:rounded-bl-none xl:rounded-tr-[30px] rounded-br-[30px]`}
            />
            <div
              className={`absolute left-[50%] top-[50%] -translate-y-1/2 -translate-x-1/2 -m-auto 
                             z-10
                        `}
            >
              {/*eslint-disable-next-line @next/next/no-img-element*/}
              <img
                src='/assets/images/home/Vector.svg'
                alt=''
                className='w-fit'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='min-h-[40vh] md:min-h-[50vh] xl:min-h-[40vh] bg-yellow' />
    </div>
  );
}
