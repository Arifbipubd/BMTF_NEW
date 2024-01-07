"use client";

import Link from "next/link";
import React from "react";

type Props = {};

function Footer({}: Props) {
    return (
        <>
            <div className="py-20 lg:py-28 bg-[#0A192F] overflow-hidden">
                <div className="relative container mx-auto">
                    <div className="absolute z-10 -top-20 md:-top-24 left-14 md:left-16 lg:left-20">
                        <img src="/assets/images/footer/Frame.svg" alt="" />
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-[100px] h-full lg:place-items-center">
                        <div className="col-span-2 lg:col-span-1">
                            <div className="mb-10 md:mb-14 lg:mb-[62px]">
                                <img
                                    src="/assets/images/footer/footer_logo.svg"
                                    alt="footer logo"
                                />
                            </div>
                            <div>
                                <p className="text-white capitalize text-sm">
                                    We are focused on user-driven outcomes, we
                                    strive to create meaningful connections for
                                    users through considered strategy and
                                    innovation.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                            <div className="mb-3 md:mb-5">
                                <h3 className="text-white font-semibold capitalize">
                                    business hours
                                </h3>
                            </div>
                            <div className="flex lg:justify-between items-center w-full gap-4">
                                <div>
                                    <p className="text-white text-sm">
                                        Sunday-Thursday:
                                    </p>
                                    <p className="text-white text-sm my-3 md:my-5">
                                        Friday:
                                    </p>
                                    <p className="text-white text-sm">
                                        Saturday:
                                    </p>
                                </div>
                                <div className="text-end">
                                    <p className="text-white text-sm">
                                        8 Am to 2 PM
                                    </p>
                                    <p className="text-white text-sm my-3 md:my-5">
                                        Closed
                                    </p>
                                    <p className="text-white text-sm">Closed</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="mb-3 md:mb-5">
                                <h3 className="text-white font-semibold capitalize">
                                    Helpful Links
                                </h3>
                            </div>
                            <div className="">
                                <div className="mb-3 md:mb-5">
                                    <Link
                                        href={"/"}
                                        className=" text-sm text-white capitalize"
                                    >
                                        about us
                                    </Link>
                                </div>
                                <div className="mb-3 md:mb-5">
                                    <Link
                                        href={"/"}
                                        className=" text-sm text-white capitalize"
                                    >
                                        Organogram
                                    </Link>
                                </div>
                                <div className="mb-3 md:mb-5">
                                    <Link
                                        href={"/"}
                                        className=" text-sm text-white capitalize "
                                    >
                                        Accreditations
                                    </Link>
                                </div>
                                <div className="mb-3 md:mb-5">
                                    <Link
                                        href={"/"}
                                        className=" text-sm text-white capitalize"
                                    >
                                        our history
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        href={"/"}
                                        className=" text-sm text-white capitalize"
                                    >
                                        NOC & Notices
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="mb-3 md:mb-5">
                                <h3 className="text-white font-semibold capitalize">
                                    Pages
                                </h3>
                            </div>
                            <div className="">
                                <div className="mb-3 md:mb-5">
                                    <Link
                                        href={"/"}
                                        className=" text-sm text-white capitalize"
                                    >
                                        Verticals
                                    </Link>
                                </div>
                                <div className="mb-3 md:mb-5">
                                    <Link
                                        href={"/"}
                                        className=" text-sm text-white capitalize"
                                    >
                                        News & Tenders
                                    </Link>
                                </div>
                                <div className="mb-3 md:mb-5">
                                    <Link
                                        href={"/"}
                                        className=" text-sm text-white capitalize "
                                    >
                                        Contacts
                                    </Link>
                                </div>
                                <div className="mb-3 md:mb-5">
                                    <Link
                                        href={"/"}
                                        className=" text-sm text-white capitalize"
                                    >
                                        Privacy & Policy
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        href={"/"}
                                        className=" text-sm text-white capitalize"
                                    >
                                        Career
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4 md:py-[25px] text-center bg-[#172A46]">
                <p className="text-sm text-copyright">
                    © 2023-24 Bangladesh Machine Tools Factory Ltd. All rights
                    reserved.
                </p>
            </div>
        </>
    );
}

export default Footer;
