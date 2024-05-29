/** @format */

"use client";

import Link from "next/link";
import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <footer>
      <div className='py-20 lg:py-28 bg-[#0A192F] overflow-hidden'>
        <div className='relative container mx-auto'>
          <div className='absolute z-10 -top-20 md:-top-24 left-14 md:left-16 lg:left-20'>
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img src='/assets/images/footer/Frame.svg' alt='' />
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-14 lg:gap-[70px] h-full xl:place-items-center'>
            <div className='col-span-2'>
              <div className='mb-10 md:mb-14 lg:mb-[62px]'>
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img
                  src='/assets/images/header/bmtf-logo.png'
                  alt='footer logo'
                />
              </div>
              <div>
                <p className='text-white capitalize text-sm 2xl:text-base leading-[150%]'>
                  We are focused on user-driven outcomes, we strive to create
                  meaningful connections for users through Sustainable Business
                  strategy and innovation.
                </p>
              </div>
            </div>
            <div className='col-span-2'>
              <div className='mb-3 md:mb-5'>
                <h3 className='text-white 2xl:text-lg font-semibold capitalize leading-[150%]'>
                  business hours
                </h3>
              </div>
              <div className='flex lg:justify-between items-center w-full gap-6'>
                <div>
                  <p className='text-white text-sm 2xl:text-base leading-[150%]'>
                    Saturday- Thursday :
                  </p>
                  <p className='text-white text-sm 2xl:text-base my-3 md:my-5 leading-[150%]'>
                    Friday :
                  </p>
                  {/* <p className='text-white text-sm 2xl:text-base leading-[150%]'>
                    Saturday:
                  </p> */}
                </div>
                <div className='text-end'>
                  <p className='text-white text-sm 2xl:text-base leading-[150%]'>
                    7:30-3:30 PM
                  </p>
                  <p className='text-white text-sm 2xl:text-base my-3 md:my-5 leading-[150%]'>
                    Closed
                  </p>
                  {/* <p className='text-white text-sm 2xl:text-base leading-[150%]'>
                    Closed
                  </p> */}
                </div>
              </div>
            </div>
            <div className='md:col-span-2 xl:col-span-1'>
              <div className='mb-3 md:mb-5'>
                <h3 className='text-white 2xl:text-lg font-semibold capitalize leading-[150%]'>
                  Helpful Links
                </h3>
              </div>
              <div className=''>
                <div className='mb-3 md:mb-5'>
                  <Link
                    href={"/about"}
                    className=' text-sm 2xl:text-base text-white capitalize leading-[150%]'
                  >
                    about us
                  </Link>
                </div>
                <div className='mb-3 md:mb-5'>
                  <Link
                    href={"/about#organogram"}
                    className=' text-sm 2xl:text-base text-white capitalize leading-[150%]'
                  >
                    Organogram
                  </Link>
                </div>
                <div className='mb-3 md:mb-5'>
                  <Link
                    href={"/our-history"}
                    className=' text-sm 2xl:text-base text-white capitalize leading-[150%]'
                  >
                    our history
                  </Link>
                </div>
                <div className='mb-3 md:mb-5'>
                  <Link
                    href='https://www.bmtf.com.bd/'
                    target='_blank'
                    className=' text-sm 2xl:text-base text-white capitalize leading-[150%]'
                  >
                    Old Website
                  </Link>
                </div>
              </div>
            </div>
            <div className='md:col-span-2 xl:col-span-1'>
              <div className='mb-3 md:mb-5'>
                <h3 className='text-white 2xl:text-lg font-semibold capitalize leading-[150%]'>
                  Pages
                </h3>
              </div>
              <div className=''>
                <div className='mb-3 md:mb-5'>
                  <Link
                    href={"/verticals"}
                    className=' text-sm 2xl:text-base text-white capitalize leading-[150%]'
                  >
                    Verticals
                  </Link>
                </div>
                <div className='mb-3 md:mb-5'>
                  <Link
                    href={"/contact"}
                    className=' text-sm 2xl:text-base text-white capitalize leading-[150%]'
                  >
                    Contacts
                  </Link>
                </div>
                <div className='mb-3 md:mb-5'>
                  <Link
                    href={"/privacy-policy"}
                    className=' text-sm 2xl:text-base text-white capitalize leading-[150%]'
                  >
                    Privacy & Policy
                  </Link>
                </div>
                <div>
                  <Link
                    href={"/career"}
                    className=' text-sm 2xl:text-base text-white capitalize leading-[150%]'
                  >
                    Career
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-4 md:py-[25px] text-center bg-[#172A46]'>
        <p className='text-sm 2xl:text-base text-copyright leading-[150%]'>
          © 2023-24 Bangladesh Machine Tools Factory Ltd. All rights reserved.
          Crafted by
          <a
            href='https://thebridgeinteractive.com/'
            target='_blank'
            rel='noopener noreferrer'
            className=' ms-1 '
          >
            The Bridge Interactive Ltd.
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
