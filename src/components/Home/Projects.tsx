import Link from "next/link";
import React from "react";

type Props = {};

export default function Projects({}: Props) {
    return (
        <div className="py-10 md:py-20 lg:py-[130px] bg-[#EEF3F6]">
            <div className="container mx-auto">
                <div className="mb-5 md:mb-6 lg:mb-[30px]">
                    <h2 className="text-headling text-2xl md:text-3xl lg:text-[34px] font-bold">
                        Our latest projects.
                    </h2>
                </div>
                <div className="mb-5 md:mb-6 lg:mb-[30px]">
                    <p className="text-sm 2xl:text-base text-tertiary text-justify">
                        BMTF has embarked on several projects and remains
                        dedicated to consistently advancing its initiatives.
                        With a commitment to fostering self-sufficiency and
                        supporting local industries, BMTF’s projects reflect its
                        ongoing efforts to contribute to the economic
                        development of Bangladesh.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-[30px]">
                    <div className="md:col-span-2">
                        <div className="">
                            <div className="px-9 py-[27px] bg-white">
                                <div className="mb-4 md:mb-5 lg:mb-[22px]">
                                    <p className="text-sm 2xl:text-base text-tertiary text-justify">
                                        These endeavors aim to address the
                                        evolving needs of various sectors,
                                        including agriculture, construction, and
                                        manufacturing, by producing high-quality
                                        machinery and tools to bolster the
                                        nation&quot;s self-reliance and
                                        progress. BMTF&quot;s dedication to
                                        these projects underscores its role as a
                                        pivotal player in advancing industrial
                                        and agricultural sectors in Bangladesh.
                                    </p>
                                </div>
                                <div>
                                    <Link href={"/"}>
                                        <button className="p-[18px] rounded-[3px] bg-yellow">
                                            <p className="font-extrabold text-white font-nunito">
                                                View all projects
                                            </p>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-5 md:mt-6 lg:mt-[30px] ">
                                {/* eslint-disable-next-line @next/next/no-img-element*/}
                                <img
                                    src="/assets/images/home/CTD_03.png"
                                    alt=""
                                    className="w-full rounded-[10px]"
                                />
                            </div>
                        </div>
                    </div>
                    <div className=" bg-primary flex flex-col justify-between">
                        <div className=" px-[17px] py-[30px] pb-1">
                            <h1 className="text-white 2xl:text-lg font-semibold mb-4 md:mb-5 leading-[20px]">
                                Smart Manufacturing Integration
                            </h1>
                            <p className="text-white text-xs 2xl:text-sm  leading-[20px] text-justify">
                                Implementing Internet of Things (IoT) technology
                                into machinery to enable real-time monitoring,
                                predictive maintenance, and data-driven
                                decision-making. This project could involve
                                developing sensors and connectivity solutions
                                for a more.
                            </p>
                        </div>
                        <div className="relative">
                            {/* eslint-disable-next-line @next/next/no-img-element*/}
                            <img
                                src="/assets/images/home/Pattern_shop_02_1.png"
                                alt=""
                                className="w-full"
                            />
                            <div className="w-7 h-5 bg-primary clip-path absolute top-0 left-10" />
                        </div>
                    </div>
                    <div className="bg-secondary flex flex-col justify-between">
                        <div className="relative">
                            {/* eslint-disable-next-line @next/next/no-img-element*/}
                            <img
                                src="/assets/images/home/Furniture_05.png"
                                alt=""
                                className="w-full"
                            />
                            <div className="w-7 h-5 bg-secondary clip-path-2 absolute bottom-0 left-10" />
                        </div>
                        <div className="px-[17px] py-[30px]">
                            <h1 className="text-headline 2xl:text-lg font-semibold mb-4 md:mb-5 leading-[20px]">
                                Smart Manufacturing Integration
                            </h1>
                            <p className="text-headline text-xs 2xl:text-sm leading-[20px] text-justify">
                                Implementing Internet of Things (IoT) technology
                                into machinery to enable real-time monitoring,
                                predictive maintenance, and data-driven
                                decision-making. This project could involve
                                developing sensors and connectivity solutions
                                for a more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
