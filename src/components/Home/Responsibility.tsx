import Link from "next/link";
import React from "react";

type Props = {};

export default function Responsibility({}: Props) {
    return (
        <div className="bg-headline grid grid-cols-1 place-items-center py-20 md:py-24 lg:py-36 ">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-6 lg:gap-[30px]">
                    <div>
                        <div className="mb-5 md:mb-8">
                            <h1 className="text-white text-2xl md:text-3xl lg:text-[2.5rem] md:leading-[48px] font-bold">
                                Corporate Social Responsibility
                            </h1>
                        </div>
                        <div className="mb-5 md:mb-[30px]">
                            <h4 className="text-white font-medium md:text-lg 2xl:text-xl capitalize">
                                Our Commitment is to make Made in Bangladesh a
                                Global Preferred Choice.
                            </h4>
                        </div>
                        <div className="mb-5 md:mb-[30px]">
                            <p className="text-sm 2xl:text-base text-white text-justify">
                                Being a state-owned entity we are obliged to
                                play a central role in society and feel
                                responsible to keep up this special way of
                                working. We make business decisions linked to
                                ethical values, compliance with legal
                                requirements and respect for people, communities
                                and the environment. BMTF has established a high
                                school inside its premises to help improve
                                educational status of the children of the
                                employees. For children of low scale workers,
                                BMTF CSR department exempt their tuition fees.
                                Apart from all these BMTF patronize different
                                initiatives for overall wellbeing of its
                                employees. It has an enormous picnic spot for
                                recreation of the employees and their family
                                members.
                            </p>
                        </div>
                        <div>
                            <Link href={"/"}>
                                <button className="p-[18px] rounded-[3px] bg-yellow">
                                    <p className="font-extrabold text-white font-nunito">
                                        Our Responsibility
                                    </p>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 md:gap-[30px]">
                        <div className="relative -mb-4 md:-mb-24">
                        {/* eslint-disable-next-line @next/next/no-img-element*/}
                            <img
                                src="/assets/images/home/Packaging_03.png"
                                alt=""
                                className="rounded-[10px]"
                            />
                            <div
                                className={`absolute -right-28 top-[50%] -translate-y-1/2 -my-1/2 
                                        bg-primary p-4 xl:p-[30px] rounded-full
                                        border-4 border-white
                                `}
                            >
                        {/* eslint-disable-next-line @next/next/no-img-element*/}
                                <img
                                    src="assets/images/home/Vector.svg"
                                    alt=""
                                    className="w-fit"
                                />
                            </div>
                        </div>
                        <div className="-mb-32 md:-mt-64">
                        {/* eslint-disable-next-line @next/next/no-img-element*/}
                            <img
                                src="/assets/images/home/Packaging_01.png"
                                alt=""
                                className="rounded-[10px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
