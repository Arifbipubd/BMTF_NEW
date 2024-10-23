/** @format */

"use client";

import React, { Fragment, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import useNewsData from "@src/utils/useNewsData";


export default function News() {
  const news = useNewsData()
  const filteredNews = useMemo(() =>{
    return news?.filter(item => item.is_featured === 1).slice(0, 3)
  }, [news])

  return (
    <div className='bg-[#EEF3F6] py-10 md:py-24 lg:py-[110px] overflow-hidden'>
      <div className='container mx-auto'>
        <div className='mb-5 md:mb-6 lg:mb-[30px]'>
          <h2
            className={`text-center text-black text-2xl md:text-3xl lg:text-[34px]
                         font-bold capitalize`}
          >
            latest news
          </h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[30px]'>
          {filteredNews && filteredNews.map((item, index) => (
            <Fragment key={item.id}>
              <Link href={`/news-and-tenders/${item.id}`}>
                <AnimatePresence>
                  <motion.div
                    className='bg-white border-[1px] border-[#D9D9D9] rounded-[10px]'
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 * (0.5 * index),
                    }}
                  >
                    <div>
                      {/* eslint-disable-next-line @next/next/no-img-element*/}
                      <img
                        src={`${process.env.BASE_URL}${item.feature_image}`}
                        alt=''
                        className='w-full rounded-tl-[10px] rounded-tr-[10px]'
                      />
                    </div>
                    <div className='px-5 py-7'>
                      <div className='pb-6 border-b-[1px] border-b-[#D9D9D9]'>
                        <p className='text-cardText text-sm 2xl:text-base font-semibold leading-[20px]'>
                          {item.title}
                        </p>
                      </div>
                      <div className='pt-6'>
                        <p className='text-black text-sm 2xl:text-base font-light'>
                          {item.date}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </Link>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
