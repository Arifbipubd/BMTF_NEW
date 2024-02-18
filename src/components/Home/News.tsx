import React from "react";
import { latestNews } from "@src/utils/constants";

type Props = {};

export default function News({}: Props) {
    return (
        <div className="bg-[#EEF3F6] py-20 md:py-24 lg:py-[110px]">
            <div className="container mx-auto">
                <div className="mb-5 md:mb-6 lg:mb-[30px]">
                    <h2
                        className={`text-center text-black text-2xl md:text-3xl lg:text-[34px]
                         font-bold capitalize`}
                    >
                        latest news
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[30px]">
                    {latestNews.map((item) => (
                        <div
                            className="bg-white border-[1px] border-[#D9D9D9] rounded-[10px]"
                            key={item.id}
                        >
                            <div>
                                {/* eslint-disable-next-line @next/next/no-img-element*/}
                                <img
                                    src={item.imgSrc}
                                    alt=""
                                    className="w-full rounded-tl-[10px] rounded-tr-[10px]"
                                />
                            </div>
                            <div className="px-5 py-7">
                                <div className="pb-6 border-b-[1px] border-b-[#D9D9D9]">
                                    <p className="text-cardText text-sm 2xl:text-base font-semibold leading-[20px]">
                                        {item.title}
                                    </p>
                                </div>
                                <div className="pt-6">
                                    <p className="text-black text-sm 2xl:text-base font-light">
                                        {item.date}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
