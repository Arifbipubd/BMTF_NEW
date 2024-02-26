"use client";

import React, { Fragment, useEffect } from "react";
import { capabilities, extended } from "@src/utils/constants";
import Listitems from "../shared/Listitems";
import { useAnimation, motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {};

const boxVariant = {
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5 },
    },
    hidden: {
        opacity: 0,
        x: -1000,
    },
};
const boxVariant2 = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: {
        opacity: 0,
        y: -200,
    },
};
const boxVariant3 = {
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: {
        opacity: 0,
        y: 200,
    },
};
const boxVariant4 = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: {
        opacity: 0,
        x: 300,
    },
};

export default function Capabilities({}: Props) {
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
        <Fragment>
            <div className="bg-skyLight py-16 lg:py-24 overflow-hidden">
                <div
                    className={`container mx-auto grid grid-cols-1 lg:grid-cols-2 
                        gap-6 lg:gap-[30px] h-full place-content-center place-items-center`}
                >
                    <div className="flex gap-6 lg:gap-[30px]">
                        <AnimatePresence>
                            <div className="-mt-10">
                                {/* eslint-disable-next-line @next/next/no-img-element*/}
                                <motion.img
                                    src="/assets/images/home/Foundry_shop_01.png"
                                    alt=""
                                    className="rounded-[10px]"
                                    ref={ref}
                                    initial="hidden"
                                    variants={boxVariant}
                                    animate={control}
                                />
                            </div>
                            <div className="">
                                <div className="mb-5">
                                    {/* eslint-disable-next-line @next/next/no-img-element*/}
                                    <motion.img
                                        src="/assets/images/home/CTD_01.png"
                                        alt=""
                                        className="rounded-[10px]"
                                        ref={ref1}
                                        initial="hidden"
                                        variants={boxVariant2}
                                        animate={control}
                                    />
                                </div>
                                <div>
                                    {/* eslint-disable-next-line @next/next/no-img-element*/}
                                    <motion.img
                                        src="/assets/images/home/CTD_02.png"
                                        alt=""
                                        className="rounded-[10px]"
                                        ref={ref2}
                                        initial="hidden"
                                        variants={boxVariant3}
                                        animate={control}
                                    />
                                </div>
                            </div>
                        </AnimatePresence>
                    </div>
                    <div>
                        <div className="mb-7 md:mb-8 lg:mb-10">
                            <h2 className="text-headline text-2xl md:text-3xl lg:text-[34px] font-semibold">
                                Our Capabilities
                            </h2>
                        </div>
                        <div>
                            <Listitems items={capabilities} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-16 lg:py-24 overflow-hidden">
                <div
                    className={`container mx-auto grid grid-cols-1 lg:grid-cols-2 
                        gap-6 lg:gap-[30px] h-full place-content-center place-items-center`}
                >
                    <div className="order-2 lg:order-1">
                        <Listitems items={extended} />
                    </div>
                    <div className="flex gap-6 lg:gap-[30px] order-1 lg:order-2">
                        <AnimatePresence>
                            <div className="w-full">
                                {/* eslint-disable-next-line @next/next/no-img-element*/}
                                <motion.img
                                    src="/assets/images/about/Foundry_shop_01.png"
                                    alt=""
                                    className="rounded-[10px]"
                                    initial={{ opacity: 0, y: -200 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                />
                            </div>
                            <motion.div
                                className="w-full"
                                initial={{ opacity: 0, x: 200 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                }}
                            >
                                <div className="mb-5">
                                    {/* eslint-disable-next-line @next/next/no-img-element*/}
                                    <img
                                        src="/assets/images/about/CTD_02.png"
                                        alt=""
                                        className="rounded-[10px]"
                                    />
                                </div>
                                <div>
                                    {/* eslint-disable-next-line @next/next/no-img-element*/}
                                    <img
                                        src="/assets/images/about/Furniture_04.png"
                                        alt=""
                                        className="rounded-[10px]"
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
