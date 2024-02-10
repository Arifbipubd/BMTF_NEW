import React from "react";

type Props = {};

export default function GoalCard({}: Props) {
    return (
        <div className="bg-[#EEF3F6] py-10 md:py-20 lg:py-24 xl:py-[134px] flex items-center w-full">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] place-content-center">
                <div className="flex flex-col order-1">
                    <div className="mt-4 md:mt-0 md:mb-[25px] order-2 md:order-1">
                        {/* eslint-disable-next-line @next/next/no-img-element*/}
                        <img
                            src="/assets/images/mission_vission/Machine_shop_06.png"
                            alt=""
                            className="w-full rounded-[10px]"
                        />
                    </div>
                    <div className="px-[35px] py-11 text-center bg-white rounded-[10px] order-1 md:order-2">
                        <div className="flex justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element*/}
                            <img
                                src="/assets/images/mission_vission/Group_1.png"
                                alt=""
                            />
                        </div>
                        <div className="my-3 md:my-5">
                            <h3 className="text-headline text-lg md:text-xl capitalize font-semibold">
                                our Mission
                            </h3>
                        </div>
                        <div>
                            <p className="text-sm text-tertiary text-justify">
                                Enhancing in-house production capacity through
                                innovation, diversification and excellence in
                                transforming Bangladesh Machine Tools Factory
                                (BMTF) Limited as mother and defense industry.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="md:order-3 lg:order-2">
                    <div className="px-[35px] py-11 text-center bg-white rounded-[10px] h-full flex flex-col justify-center items-center">
                        <div className="flex justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element*/}
                            <img
                                src="/assets/images/mission_vission/Group_2.png"
                                alt=""
                            />
                        </div>
                        <div className="my-3 md:my-5">
                            <h3 className="text-headline text-lg md:text-xl capitalize font-semibold">
                                our Core Values
                            </h3>
                        </div>
                        <div>
                            <p className="text-sm text-tertiary text-justify">
                                BMTF is unwavering in its commitment to align
                                its core values with the high standards of its
                                clients. We place a premium on innovation,
                                community engagement, and sustainable practices,
                                all aimed at delivering customer satisfaction
                                through customized solutions.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:order-2 lg:order-3">
                    <div className="px-[35px] py-11 text-center bg-white rounded-[10px] order-2 md:order-1">
                        <div className="flex justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element*/}
                            <img
                                src="/assets/images/mission_vission/Group_1.png"
                                alt=""
                            />
                        </div>
                        <div className="my-3 md:my-5">
                            <h3 className="text-headline text-lg md:text-xl capitalize font-semibold">
                                our vission
                            </h3>
                        </div>
                        <div>
                            <p className="text-sm text-tertiary text-justify">
                                Make Bangladesh Machine Tools Factory (BMTF)
                                Limited a lead commercially viable organization
                                to contribute in the national economy.
                            </p>
                        </div>
                    </div>
                    <div className="mb-4 md:mb-0 md:mt-[25px] order-1 md:order-2">
                        {/* eslint-disable-next-line @next/next/no-img-element*/}
                        <img
                            src="/assets/images/mission_vission/Machine_shop_04.png"
                            alt=""
                            className="w-full rounded-[10px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
