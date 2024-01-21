import React from "react";
import Link from "next/link";
import { verticals } from "@src/utils/constants";

type Props = {};

export default function AllVerticals({}: Props) {
    return (
        <div className="bg-skyLight py-20 md:py-24 lg:py-[117px]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-[30px]">
                {verticals.map((item) => (
                    <div
                        className="group relative transition-all duration-150 ease-linear custom-shadow"
                        key={item.id}
                    >
                        <div className="custom-background absolute z-10 bottom-0 h-2/3 left-0 right-0 rounded-b-[10px]" />
                        <div>
                            <img
                                src={item.imageSrc}
                                alt=""
                                className="w-full h-full rounded-[10px]"
                            />
                        </div>
                        <div className="absolute bottom-0 px-6 md:px-7 py-7 md:py-8 z-10">
                            <div className="mb-3">
                                <h2 className="text-white font-bold leading-[22px]">
                                    {item.title}
                                </h2>
                            </div>
                            <div className="hidden group-hover:block">
                                <Link href={item.link}>
                                    <button className="bg-primary px-[18px] py-[13px] flex items-center rounded">
                                        <p className="text-secondary text-sm font-bold leading-[22px] capitalize">
                                            Read More
                                        </p>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
