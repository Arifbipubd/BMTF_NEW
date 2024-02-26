"use client";

import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {};

const boxVariant = {
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay: 0.2 },
    },
    hidden: {
        opacity: 0,
        scale: 0.85,
    },
};
const boxVariant2 = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: {
        opacity: 0,
        y: -500,
    },
};
const boxVariant3 = {
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    hidden: {
        opacity: 0,
        y: 500,
    },
};

export default function GoalCard({}: Props) {
    const control = useAnimation();
    const [ref, inView] = useInView();
    const { ref: ref1, inView: inView1 } = useInView();
    const { ref: ref2, inView: inView2 } = useInView();

    useEffect(() => {
        if (inView || inView1 || inView2) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView, inView1, inView2]);
    return (
        <div className="bg-[#EEF3F6] py-10 md:py-20 lg:py-24 xl:py-[134px] flex w-full overflow-hidden">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                <div className="flex flex-col">
                    <motion.div
                        className="mt-4 md:mt-0 md:mb-[25px] order-2 md:order-1"
                        initial={{ y: -300, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element*/}
                        <img
                            src="/assets/images/mission_vission/Machine_shop_06.png"
                            alt=""
                            className="w-full rounded-[10px] h-full"
                        />
                    </motion.div>
                    <motion.div
                        className="px-[35px] py-11 text-center bg-white rounded-[10px] order-1 md:order-2"
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element*/}
                            <img
                                src="/assets/images/mission_vission/Group_1.png"
                                alt=""
                            />
                        </div>
                        <div className="my-3 md:my-5">
                            <h3 className="text-headline text-xl 2xl:text-[22px] capitalize font-semibold">
                                our Mission
                            </h3>
                        </div>
                        <div>
                            <p className="text-sm 2xl:text-base text-tertiary text-justify">
                                Enhancing in-house production capacity through
                                innovation, diversification and excellence in
                                transforming Bangladesh Machine Tools Factory
                                (BMTF) Limited as mother and defense industry.
                            </p>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    className=""
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <div className="px-[35px] py-11 text-center bg-white rounded-[10px] h-full flex flex-col justify-center items-center">
                        <div className="flex justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element*/}
                            <img
                                src="/assets/images/mission_vission/Group_2.png"
                                alt=""
                            />
                        </div>
                        <div className="my-3 md:my-5">
                            <h3 className="text-headline text-xl 2xl:text-[22px] capitalize font-semibold">
                                our Core Values
                            </h3>
                        </div>
                        <div>
                            <p className="text-sm 2xl:text-base text-tertiary text-justify">
                                BMTF is unwavering in its commitment to align
                                its core values with the high standards of its
                                clients. We place a premium on innovation,
                                community engagement, and sustainable practices,
                                all aimed at delivering customer satisfaction
                                through customized solutions.
                            </p>
                        </div>
                    </div>
                </motion.div>
                <div className="flex flex-col">
                    <motion.div
                        className="px-[35px] py-11 text-center bg-white rounded-[10px] order-2 md:order-1"
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                    >
                        <div className="flex justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element*/}
                            <img
                                src="/assets/images/mission_vission/Group_1.png"
                                alt=""
                            />
                        </div>
                        <div className="my-3 md:my-5">
                            <h3 className="text-headline text-xl 2xl:text-[22px] capitalize font-semibold">
                                our vission
                            </h3>
                        </div>
                        <div>
                            <p className="text-sm 2xl:text-base text-tertiary text-justify">
                                Make Bangladesh Machine Tools Factory (BMTF)
                                Limited a lead commercially viable organization
                                to contribute in the national economy.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="mb-4 md:mb-0 md:mt-[25px] order-1 md:order-2 h-full"
                        initial={{ y: 300, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 , delay: 1 }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element*/}
                        <img
                            src="/assets/images/mission_vission/Machine_shop_04.png"
                            alt=""
                            className="w-full rounded-[10px] h-full"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
