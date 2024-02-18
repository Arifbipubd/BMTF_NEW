"use client";
import React from "react";
import { FaMapPin } from "react-icons/fa6";
import { HiPhone } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";

import { contactCard } from "@src/utils/constants";

type Props = {};

export default function Card({}: Props) {
    return (
        <div className="bg-white py-20 md:py-24 lg:py-[116px]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
                {contactCard.map((item) => (
                    <div key={item.id} className="">
                        <div
                            className={`bg-primary px-8 md:px-9 lg:px-[41px] py-9 md:py-10 lg:py-[46px] 
                             rounded-t-[10px]  mb-1.5 md:min-h-[400px]`}
                        >
                            <div className="flex flex-col gap-5 md:gap-6 lg:gap-[26px] h-full">
                                <div className="">
                                    {/* eslint-disable-next-line @next/next/no-img-element*/}
                                    <img src={item.imageSrc} alt="" />
                                </div>
                                <div>
                                    <p className="text-secondary text-lg 2xl:text-xl font-semibold leading-[27px]">
                                        {item.title}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <div className="">
                                        <i className="text-secondary text-base">
                                            <FaMapPin />
                                        </i>
                                    </div>
                                    <div>
                                        <p className="text-white text-sm 2xl:text-base leading-[21px]">
                                            {item.address}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <div className="">
                                        <i className="text-secondary text-base">
                                            <HiPhone />
                                        </i>
                                    </div>
                                    <div>
                                        <a href={`tel:${item.tel}`}>
                                            <p className="text-white text-sm 2xl:text-base leading-[21px]">
                                                {item.tel}
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <div className="">
                                        <i className="text-secondary text-base">
                                            <MdOutlineEmail />
                                        </i>
                                    </div>
                                    <div>
                                        <a href={`mailto:${item.email}`}>
                                            <p className="text-white text-sm 2xl:text-base leading-[21px]">
                                                {item.email}
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <iframe
                                src={item.iframeSrc}
                                width={"100%"}
                                height={"250"}
                                style={{
                                    border: 0,
                                    borderRadius: "0px 0px 6px 6px",
                                }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
