import React from "react";
import { memoryOne, memoryTwo, memoryThree } from "@src/utils/constants";
import { RiSearchLine } from "react-icons/ri";

type Props = {};

export default function Memory({}: Props) {
    return (
        <div className="bg-white py-20 md:py-24 lg:py-[109px]">
            <div className="container mx-auto">
                <div className="mb-12 md:mb-14 lg:mb-[66px]">
                    <p className="text-2xl md:text-3xl lg:text-[2rem] text-black font-semibold leading-[48px]">
                        Memory Snap
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="grid gap-4">
                        {memoryOne.map((item) => (
                            <div
                                key={item.id}
                                className="group relative z-0 transition-all duration-200 ease-linear"
                            >
                                <img
                                    className="h-auto max-w-full rounded-lg w-full"
                                    src={item.imgSrc}
                                    alt=""
                                />
                                <div
                                    className={`bg-[rgba(46,46,54,0.60)] rounded-[10px] 
                             hidden group-hover:block group-hover:absolute group-hover:z-10 
                            group-hover:left-0 group-hover:top-0 group-hover:bottom-0 group-hover:right-0
                             group-hover:w-full 
                            group-hover:h-full`}
                                />
                                <div
                                    className={` 
                             hidden group-hover:block group-hover:absolute group-hover:z-20 
                            group-hover:left-[50%] group-hover:top-[50%] group-hover:-translate-x-1/2 
                             -translate-y-1/2`}
                                >
                                    <a href="#" className="">
                                        <i className="text-3xl lg:text-[32px] text-secondary ">
                                            <RiSearchLine />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid gap-4">
                        {memoryTwo.map((item) => (
                            <div
                                key={item.id}
                                className="group relative z-0 transition-all duration-200 ease-linear"
                            >
                                <img
                                    className="h-auto max-w-full rounded-lg w-full"
                                    src={item.imgSrc}
                                    alt=""
                                />
                                <div
                                    className={`bg-[rgba(46,46,54,0.60)] rounded-[10px] 
                                 hidden group-hover:block group-hover:absolute group-hover:z-10 
                                group-hover:left-0 group-hover:top-0 group-hover:bottom-0 group-hover:right-0
                                 group-hover:w-full 
                                group-hover:h-full`}
                                />
                                <div
                                    className={` 
                                 hidden group-hover:block group-hover:absolute group-hover:z-20 
                                group-hover:left-[50%] group-hover:top-[50%] group-hover:-translate-x-1/2 
                                 -translate-y-1/2`}
                                >
                                    <a href="#" className="">
                                        <i className="text-3xl lg:text-[32px] text-secondary ">
                                            <RiSearchLine />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-2 col-span-2 md:grid-cols-1 md:col-span-1 gap-4">
                        {memoryThree.map((item) => (
                            <div
                                key={item.id}
                                className="group relative z-0 transition-all duration-200 ease-linear"
                            >
                                <img
                                    className="h-auto max-w-full rounded-lg w-full"
                                    src={item.imgSrc}
                                    alt=""
                                />
                                <div
                                    className={`bg-[rgba(46,46,54,0.60)] rounded-[10px] 
                             hidden group-hover:block group-hover:absolute group-hover:z-10 
                            group-hover:left-0 group-hover:top-0 group-hover:bottom-0 group-hover:right-0
                             group-hover:w-full 
                            group-hover:h-full`}
                                />
                                <div
                                    className={` 
                             hidden group-hover:block group-hover:absolute group-hover:z-20 
                            group-hover:left-[50%] group-hover:top-[50%] group-hover:-translate-x-1/2 
                             -translate-y-1/2`}
                                >
                                    <a href="#" className="">
                                        <i className="text-3xl lg:text-[32px] text-secondary ">
                                            <RiSearchLine />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
