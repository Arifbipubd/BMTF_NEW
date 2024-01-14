import React from "react";
import { timeline } from "@src/utils/constants";

type Props = {};

export default function Timeline({}: Props) {
    return (
        <section className="items-center py-16 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto flex items-center justify-center">
                <div className="">
                    {timeline.map((item, index, array) => (
                        <div
                            className="relative flex justify-center gap-6 lg:gap-[32px]"
                            key={item.id}
                        >
                            <div className="hidden  py-3 md:block md:w-[60%] xl:w-[40%] ">
                                <h2 className="text-primary text-xl font-semibold capitalize leading-[30px] mb-4 lg:mb-[21px] text-end">
                                    {item.dayString}
                                </h2>
                                <h2 className="text-headline text-2xl lg:text-3xl xl:text-4xl font-bold leading-[54px] md:text-end">
                                    {item.year}
                                </h2>
                            </div>
                            <div className="flex flex-col items-center w-10 mr-4 md:w-24">
                                <div>
                                    <div className="flex items-center justify-center p-2.5 border bg-secondary  rounded-full">
                                        <div className="bg-primary w-2.5 h-2.5 rounded-full" />
                                    </div>
                                </div>
                                <div
                                    className={`${
                                        index === array.length - 1
                                            ? "hidden"
                                            : "block"
                                    } w-0.5 h-full bg-textDark
                                                `}
                                ></div>
                            </div>
                            <div className="relative mb-16 col-span-2">
                                <div className=" py-3 left-16 -top-12 md:hidden ">
                                    <h2 className="text-primary text-lg font-semibold capitalize leading-[15px] mb-4">
                                        {item.dayString}
                                    </h2>
                                    <h2 className="text-headline text-2xl font-bold leading-[25px]">
                                        {item.year}
                                    </h2>
                                </div>
                                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-[30px]">
                                    <div>
                                        <img
                                            src={item.imageSrc}
                                            alt=""
                                            className="h-full w-full"
                                        />
                                    </div>
                                    <div className="lg:w-1/3">
                                        <p className="text-black text-sm leading-[21px] text-justify">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}