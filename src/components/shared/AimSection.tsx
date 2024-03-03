"use client";

import React, { Fragment } from "react";

type Props = {
  imageSrc: string;
  aimItems: Array<any>;
};

export default function AimSection({ imageSrc, aimItems }: Props) {
  return (
    <div className="bg-headline grid grid-cols-1 lg:grid-cols-2 lg:place-items-center gap-6 lg:gap-0">
      <div className="w-full xl:h-full">
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img src={imageSrc} alt="aim" className="w-full xl:h-full" />
      </div>
      <div className="container mx-auto grid  lg:grid-cols-5 lg:pl-[30px]">
        <div className="pb-10 lg:pb-0 xl:py-10 lg:col-span-4">
          {aimItems.map((item, _, array) => (
            <div
              key={item.id}
              className={`${array.length > 1 ? "mb-5 md:mb-6" : ""}`}
            >
              <h3 className="text-secondary text-xl md:text-[22px] lg:text-2xl 2xl:text-[26px] font-semibold mb-3 md:mb-4 capitalize">
                {item.heading}
              </h3>
              {item.text.map((list: any, index: any, array:any) => (
                <Fragment key={list.id}>
                  <p className={`text-textDark text-sm 2xl:text-base text-justify ${index === array.length-1 ? "": 'mb-3 lg:mb-5'}`}>
                    {list.innerText}
                  </p>
                </Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
