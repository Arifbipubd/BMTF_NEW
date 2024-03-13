/** @format */

"use client";

import React, { Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  heading: string;
  cardItems: Array<any>;
};

export default function ProcessCard({ heading, cardItems }: Props) {
  return (
    <div className='bg-white py-10 md:py-20 lg:py-[91px]'>
      <div className='container mx-auto'>
        <div className='mb-[50px] lg:mb-[60px]'>
          <h2 className='text-headline text-2xl md:text-3xl lg:text-[34px] font-semibold text-center'>
            {heading}
          </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-[30px]'>
          {cardItems.map((item, index) => (
            <Fragment key={item.id}>
              <AnimatePresence>
                <motion.div
                  className=''
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 * (0.5 * index),
                  }}
                >
                  <div
                    className={`bg-primary py-16 md:py-20 px-8 lg:py-[90px] 2xl:px-[41px] rounded-[10px] 
                            h-full relative group border-[1px] border-transparent hover:bg-white hover:border-[1px] 
                            hover:border-primary transition-all duration-300 ease-in-out`}
                  >
                    <div className=' absolute left-1/2 -translate-x-1/2 -top-7 flex justify-center w-full'>
                      <div className='bg-white p-5 md:p-[22px] rounded-full border-[1px] border-primary '>
                        {/*eslint-disable-next-line @next/next/no-img-element*/}
                        <img
                          src='/assets/images/shared/brainstrom.png'
                          alt=''
                        />
                      </div>
                    </div>
                    <div className='flex flex-col gap-6 lg:gap-[30px] mt-[13px]'>
                      <h4 className='text-yellow font-semibold text-lg 2xl:text-xl text-center '>
                        {item.heading}
                      </h4>
                      <p className='text-sm 2xl:text-base text-white text-center group-hover:text-yellow'>
                        {item.text}
                      </p>
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
