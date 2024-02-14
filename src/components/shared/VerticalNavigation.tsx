"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { allIndustries } from "@src/utils/constants";

type Props = {};

export default function VerticalNavigation({}: Props) {
    const pathName = usePathname();
    return (
        <div className="bg-primary rounded-[10px] navigation">
            <div className="py-4 md:py-5 lg:py-[22px] px-[23px] bg-white/15 mb-2 md:mb-6">
                <p className="text-white text-sm 2xl:text-base font-medium">
                    ALL INDUSTRIES OF BMTF
                </p>
            </div>
            <div className="flex flex-col gap-3 md:gap-[22px] px-[23px] py-4 md:py-8 max-h-[450px] overflow-y-auto">
                {allIndustries.map((item) => (
                    <div key={item.id}>
                        <Link
                            href={item.link}
                            className={`${
                                pathName === item.link
                                    ? "text-yellow font-semibold"
                                    : "text-white"
                            } text-sm 2xl:text-base  hover:text-yellow`}
                        >
                            {item.label}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
