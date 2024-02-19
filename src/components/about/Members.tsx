import React from "react";
import { membersOne } from "@src/utils/constants";

type Props = {};

export default function Members({}: Props) {
    return (
        <div className="bg-headline py-10 md:py-16 lg:py-[96px]">
            <div className="container mx-auto grid grid-cols-1 place-items-center">
                <div className="mb-8 md:mb-14 lg:mb-[51px]">
                    <h2 className="text-yellow text-2xl md:text-3xl lg:text-[34px] font-medium text-center">
                        Members
                    </h2>
                </div>
                <div>
                    {/* eslint-disable-next-line @next/next/no-img-element*/}
                    <img src="/assets/images/about/Members.svg" alt="" />
                </div>
            </div>
        </div>
    );
}
