/** @format */

"use client";

import React, { Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
type Props = {
  heading: string;
  subHeading: string;
  categories: Array<any>;
};

export default function Category({ heading, subHeading, categories }: Props) {
  return (
    <div className='bg-white py-10 md:py-20 lg:py-[106px]'>
      <div className='container mx-auto'>
        <div className='mb-10 md:mb-[46px] lg:mb-[50px]'>
          <h2 className='text-headline text-2xl md:text-3xl lg:text-[34px] font-semibold text-center mb-6 lg:mb-[30px]'>
            {heading}
          </h2>
          <p className='text-black text-center'>{subHeading}</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-[30px]'>
          {categories.map((item, index) => (
            <Fragment key={item.id}>
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 * (0.1 * index),
                  }}
                >
                  <div
                    className={`relative bg-primary rounded-[10px] py-7 px-2 md:py-8 lg:py-9 border-[1px] 
                            border-transparent transition-all duration-300 ease-in-out  
                            hover:bg-white hover:border-[1px] hover:border-primary`}
                  >
                    <div className='flex justify-center w-full mb-4 sm:mb-5'>
                      <div className='bg-white p-5 md:p-[22px] rounded-full stroke-[1px] stroke-primary flex justify-center items-center'>
                        {/*eslint-disable-next-line @next/next/no-img-element*/}
                        <img
                          className=' h-12 '
                          src={item.categoryImg}
                          alt={item.label}
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className='text-yellow md:text-lg 2xl:text-xl font-semibold text-center'>
                        {item.label}
                      </h4>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
