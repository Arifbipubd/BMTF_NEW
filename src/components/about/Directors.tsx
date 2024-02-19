import React from "react";

type Props = {};

export default function Directors({}: Props) {
    return (
        <div id="organogram" className="bg-primary py-10 md:py-16 lg:py-[96px]">
            <div className="container mx-auto grid grid-cols-1 place-items-center place-content-center">
                <div>
                    <div className=" mb-16 md:mb-28">
                        <h2 className="text-2xl md:text-3xl lg:text-[34px] text-white font-semibold text-center">
                            Board of Directors
                        </h2>
                    </div>
                    <div>
                        <div
                            className={`relative flex justify-center mb-24 after:content-[''] after:absolute after:top-[100%]
                            after:left-[50%] after:-translate-x-1/2 after:w-1 after:h-[180px] sm:after:h-[170px] after:bg-white`}
                        >
                            <div className="py-[45px] px-[35px] bg-yellow flex flex-col items-center text-center w-fit">
                                <div className="-mt-20 sm:-mt-28 mb-3">
                                    {/* eslint-disable-next-line @next/next/no-img-element*/}
                                    <img
                                        src="/assets/images/about/Ellipse_1.png"
                                        alt=""
                                    />
                                </div>
                                <div className="">
                                    <p className="text-white text-sm 2xl:text-base">
                                        Chief of Army Stuff
                                    </p>
                                    <p className="text-white text-sm 2xl:text-base">
                                        Chairman
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between gap-16 lg:gap-56 xl:gap-[280px]">
                        <div className={`py-[45px] h-fit px-[35px] bg-yellow flex 
                        flex-col items-center text-center relative  justify-center  
                        after:content-[''] after:absolute after:left-[100%]
                        after:top-[50%] after:-translate-y-1/2 after:w-16 lg:after:w-56 
                         xl:after:w-[280px] after:h-1 after:bg-white 
                        `}>
                            <div className="-mt-20 sm:-mt-28 mb-3">
                                {/* eslint-disable-next-line @next/next/no-img-element*/}
                                <img
                                    src="/assets/images/about/Ellipse_2.png"
                                    alt=""
                                />
                            </div>
                            <div className="">
                                <p className="text-white text-sm 2xl:text-base">
                                    Chief of Army Stuff
                                </p>
                                <p className="text-white text-sm 2xl:text-base">Chairman</p>
                            </div>
                        </div>
                        <div className="py-[45px] px-[35px] bg-yellow flex flex-col items-center text-center h-fit">
                            <div className="-mt-20 sm:-mt-28 mb-3">
                                {/* eslint-disable-next-line @next/next/no-img-element*/}
                                <img
                                    src="/assets/images/about/Ellipse_3.png"
                                    alt=""
                                />
                            </div>
                            <div className="">
                                <p className="text-white text-sm 2xl:text-base">
                                    Chief of Army Stuff
                                </p>
                                <p className="text-white text-sm 2xl:text-base">Chairman</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
