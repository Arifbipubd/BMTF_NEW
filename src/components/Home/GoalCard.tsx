import React from "react";

type Props = {};

export default function GoalCard({}: Props) {
    return (
        <div className="bg-[#EEF3F6] py-10 md:py-20 lg:py-24 xl:py-[134px] flex items-center w-full">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] place-content-center">
                <div className="">
                    <div className="mb-4 md:mb-[25px]">
                        <img
                            src="/assets/images/mission_vission/Machine_shop_06.png"
                            alt=""
                            className="w-full rounded-[10px]"
                        />
                    </div>
                    <div className="px-[35px] py-11 text-center bg-white rounded-[10px]">
                        <div className="flex justify-center">
                            <img
                                src="/assets/images/mission_vission/Group_1.png"
                                alt=""
                            />
                        </div>
                        <div className="my-3 md:my-5">
                            <h3 className="text-headline text-lg md:text-xl capitalize">
                                our Mission
                            </h3>
                        </div>
                        <div>
                            <p className="text-sm text-cardText">
                                Enhancing in-house production capacity through
                                innovation, diversification and excellence in
                                transforming Bangladesh Machine Tools Factory
                                (BMTF) Limited as mother and defense industry.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="px-[35px] py-11 text-center bg-white rounded-[10px] h-full flex flex-col justify-center items-center">
                        <div className="flex justify-center">
                            <img
                                src="/assets/images/mission_vission/Group_2.png"
                                alt=""
                            />
                        </div>
                        <div className="my-3 md:my-5">
                            <h3 className="text-headline text-lg md:text-xl capitalize">
                                our Core Values
                            </h3>
                        </div>
                        <div>
                            <p className="text-sm text-cardText">
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
                <div className="">
                    <div className="px-[35px] py-11 text-center bg-white rounded-[10px]">
                        <div className="flex justify-center">
                            <img
                                src="/assets/images/mission_vission/Group_1.png"
                                alt=""
                            />
                        </div>
                        <div className="my-3 md:my-5">
                            <h3 className="text-headline text-lg md:text-xl capitalize">
                                our Mission
                            </h3>
                        </div>
                        <div>
                            <p className="text-sm text-cardText">
                                Enhancing in-house production capacity through
                                innovation, diversification and excellence in
                                transforming Bangladesh Machine Tools Factory
                                (BMTF) Limited as mother and defense industry.
                            </p>
                        </div>
                    </div>
                    <div className="mt-4 md:mt-[25px]">
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
