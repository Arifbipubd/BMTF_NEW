import React from "react";
import { latestNews } from "@src/utils/constants";

type Props = {};

export default function News({}: Props) {
    return (
        <div className="bg-[#EEF3F6] py-20 md:py-24 lg:py-28">
            <div className="container mx-auto">
                <div className="mb-5 md:mb-6 lg:mb-[30px]">
                    <p
                        className={`text-center text-black text-2xl 
                        md:text-3xl lg:text-[32px] font-bold capitalize`}
                    >
                        latest news
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                    {latestNews.map((item) => (
                        <div
                            className="bg-white border-[1px] border-[#D9D9D9] rounded-[10px]"
                            key={item.id}
                        >
                            <div>
                                <img
                                    src={item.imgSrc}
                                    alt=""
                                    className="w-full rounded-tl-[10px] rounded-tr-[10px]"
                                />
                            </div>
                            <div className="px-5 md:px-[27px] py-8 md:py-[38px]">
                                <div className="pb-6 border-b-[1px] border-b-[#D9D9D9]">
                                    <p className="text-cardText text-sm font-semibold">
                                        {item.title}
                                    </p>
                                </div>
                                <div className="pt-6">
                                    <p className="text-black text-sm font-light">
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
