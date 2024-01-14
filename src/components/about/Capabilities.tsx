import React, { Fragment } from "react";
import { capabilities, extended } from "@src/utils/constants";
import Listitems from "../shared/Listitems";

type Props = {};

export default function Capabilities({}: Props) {
    return (
        <Fragment>
            <div className="bg-skyLight py-16 lg:py-24">
                <div className={`container mx-auto grid grid-cols-1 lg:grid-cols-2 
                        gap-8 lg:gap-[30px] h-full place-content-center place-items-center`}>
                    <div className="flex lg:gap-[30px]">
                        <div className="-mt-10">
                            <img
                                src="/assets/images/home/Foundry_shop_01.png"
                                alt=""
                                className="rounded-[10px]"
                            />
                        </div>
                        <div className="">
                            <div className="mb-5">
                                <img
                                    src="/assets/images/home/CTD_01.png"
                                    alt=""
                                    className="rounded-[10px]"
                                />
                            </div>
                            <div>
                                <img
                                    src="/assets/images/home/CTD_02.png"
                                    alt=""
                                    className="rounded-[10px]"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-7 md:mb-8 lg:mb-10">
                            <p className="text-headline text-2xl md:text-[30px] font-semibold">
                                Our Capabilities
                            </p>
                        </div>
                        <div>
                            <Listitems items={capabilities} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-16 lg:py-24">
                <div className={`container mx-auto grid grid-cols-1 lg:grid-cols-2 
                        gap-8 lg:gap-[30px] h-full place-content-center place-items-center`}>
                    <div className="order-2 lg:order-1">
                            <Listitems items={capabilities} />
                    </div>
                    <div className="flex gap-5 md:gap-6 lg:gap-[30px] order-1 lg:order-2">
                        <div className="w-full">
                            <img
                                src="/assets/images/about/Foundry_shop_01.png"
                                alt=""
                                className="rounded-[10px]"
                            />
                        </div>
                        <div className="w-full">
                            <div className="mb-5">
                                <img
                                    src="/assets/images/about/CTD_02.png"
                                    alt=""
                                    className="rounded-[10px]"
                                />
                            </div>
                            <div>
                                <img
                                    src="/assets/images/about/Furniture_04.png"
                                    alt=""
                                    className="rounded-[10px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
