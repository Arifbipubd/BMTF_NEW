"use client";

import React from "react";
import Link from "next/link";

// import { newsAndTender } from "@src/utils/news-and-tender";

type Props = {
  newsAndTender: Array<any>;
};

export default function AllNews({ newsAndTender }: Props) {
  return (
    <div className="bg-white py-10 md:py-16 lg:py-[72px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-[30px] mb-10 md:mb-12 lg:mb-[51px]">
          {newsAndTender.length > 0 && (
            <Link href={`/news-and-tenders/${newsAndTender[0].id}`}>
              <div className="bg-skyLight rounded-b-[10px] h-full">
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img
                  src={`${process.env.BASE_URL}${newsAndTender[0].feature_image}`}
                  alt=""
                  className="w-full rounded-t-[10px]"
                />
                <div className=" px-[18px] py-9">
                  <h1 className="text-headline font-medium text-lg 2xl:text-xl mb-4">
                    {newsAndTender[0].title}
                  </h1>
                  <p className="text-sm 2xl:text-base md:w-2/3 text-black/70">
                    {newsAndTender[0].short_intro}
                  </p>
                </div>
              </div>
            </Link>
          )}
          {newsAndTender.length > 3 && (
            <div className="flex flex-col sm:flex-row lg:flex-col h-full gap-5 ">
              <div className="grid lg:grid-cols-2 lg:place-items-center gap-2.5 h-full sm:w-1/2 lg:w-full">
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img
                  src={`${process.env.BASE_URL}${newsAndTender[0].feature_image}`}
                  alt=""
                  className="rounded-[10px] w-full"
                />
                <div className="">
                  <Link href={`news-and-tenders/${newsAndTender[1].id}`}>
                    <h1 className="text-headline font-semibold text-lg 2xl:text-xl mb-4">
                      {newsAndTender[1].title}
                    </h1>
                  </Link>
                  <p className="text-xs 2xl:text-sm  text-headline">
                    {newsAndTender[1].short_intro}
                  </p>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 lg:place-items-center gap-2.5 h-full sm:w-1/2 lg:w-full">
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img
                  src={`${process.env.BASE_URL}${newsAndTender[0].feature_image}`}
                  alt=""
                  className="rounded-[10px] w-full"
                />
                <div className="">
                  <Link href={`news-and-tenders/${newsAndTender[2].id}`}>
                    <h1 className="text-headline font-semibold text-lg 2xl:text-xl mb-4">
                      {newsAndTender[2].title}
                    </h1>
                  </Link>
                  <p className="text-xs 2xl:text-sm  text-headline">
                    {newsAndTender[2].short_intro}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        {newsAndTender.length >= 4 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[30px]">
            {newsAndTender.slice(3).map((news) => (
              <div key={news.id}>
                {/* eslint-disable-next-line @next/next/no-img-element*/}
                <img
                  src={`${process.env.BASE_URL}${news.feature_image}`}
                  alt=""
                  className="rounded-[10px] mb-5 w-full"
                />
                <div className="">
                  <Link href={`news-and-tenders/${news.id}`}>
                    <h1 className="text-headline font-semibold text-lg 2xl:text-xl mb-4">
                      {news.title}
                    </h1>
                  </Link>
                  <p className="text-xs 2xl:text-sm  text-headline">
                    {news.short_intro}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
