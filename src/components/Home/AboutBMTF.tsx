/** @format */

"use client";

import React, { useEffect } from "react";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
  hidden: {
    opacity: 0,
    x: -1000,
  },
};
const boxVariant2 = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  hidden: {
    opacity: 0,
    y: -200,
  },
};
const boxVariant3 = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  hidden: {
    opacity: 0,
    y: 200,
  },
};

type Props = {};

function AboutBMTF({}: Props) {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const { ref: ref1, inView: inView1 } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();

  useEffect(() => {
    if (inView || inView1 || inView2) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView, inView1, inView2]);
  return (
    <div className='grid grid-cols-1 md:grid-cols-7 overflow-hidden'>
      <div className='bg-primary py-10 md:py-20 lg:py-[154px] md:col-span-3'>
        <div className='container mx-auto flex lg:-mr-24 xl:-mr-[170px] gap-10 justify-end '>
          <AnimatePresence>
            <div className='relative'>
              {/*eslint-disable-next-line @next/next/no-img-element*/}
              <motion.img
                src='/assets/images/home/Foundry_shop_05.png'
                alt=''
                className='rounded-[10px]'
                ref={ref}
                initial='hidden'
                variants={boxVariant}
                animate={control}
              />
              <div
                className={`absolute -right-28 top-[50%] -translate-y-1/2 -my-1/2 
                                        bg-primary p-4 xl:p-[30px] rounded-full
                                        border-4 border-white z-10 flex justify-center
                                `}
              >
                {/*eslint-disable-next-line @next/next/no-img-element*/}
                <img
                  src='assets/images/home/Vector.svg'
                  alt=''
                  className='w-fit'
                />
              </div>
            </div>
            <div className='realtive z-0'>
              <div className='mb-5'>
                <motion.img
                  src='/assets/images/home/CTD_01.png'
                  alt=''
                  className='rounded-[10px]'
                  ref={ref1}
                  initial='hidden'
                  variants={boxVariant2}
                  animate={control}
                />
              </div>
              <div>
                <motion.img
                  src='/assets/images/home/CTD_02.png'
                  alt=''
                  className='rounded-[10px]'
                  ref={ref2}
                  initial='hidden'
                  variants={boxVariant3}
                  animate={control}
                />
              </div>
            </div>
          </AnimatePresence>
        </div>
      </div>
      <div
        className={`bg-[url('/assets/images/home/shape30.png')] bg-cover bg-center bg-no-repeat
         flex items-center h-full md:col-span-4  py-8 lg:py-0 -z-10`}
      >
        <div className='md:pl-12 md:pr-12 lg:pl-[80px] lg:pr-[56px] xl:pl-[150px] xl:pr-[136px]'>
          <div className='container mx-auto'>
            <h2 className='text-headline text-2xl md:text-3xl lg:text-[34px] font-bold mb-5 md:mb-[30px]'>
              About <span className='text-yellow'>BMTF</span>
            </h2>
            <p className='text-sm 2xl:text-base text-tertiary text-justify mb-3 md:mb-5 leading-[150%]'>
              Bangladesh Machine Tools Factory Limited (BMTF) is one of the
              leading state-owned commercial entities operating under the
              management of the Bangladesh Army. Spanning 156.47 acres of land
              at Shimultoli, Gazipur, BMTF comprises 19 dynamic factories. Led
              by the Chief of Army Staff as the Board Chairman and with a
              Managing Director, BMTF is incessantly diversifying its
              enterprises to bolster the national economy and attain acclaim as
              a renowned conglomerate on a global scale.
            </p>
            <p className='text-sm 2xl:text-base text-tertiary text-justify leading-[150%]'>
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
    </div>
  );
}

export default AboutBMTF;
