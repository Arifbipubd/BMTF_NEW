"use client";

import React from "react";
import Link from "next/link";
import { newsAndTender } from "@src/utils/news-and-tender";

type Props = {
    newsId: number
}

export default function NewsSideNavigation({
    newsId
}: Props) {
    return (
        <div className="bg-primary rounded-[10px] navigation">
            <div className="py-4 md:py-5 lg:py-[22px] px-[23px] bg-white/15 mb-2 md:mb-6">
                <p className="text-white text-sm font-medium">
                    ALL NEWS OF BMTF
                </p>
            </div>
            <div className="flex flex-col gap-3 md:gap-[22px] px-[23px] py-4 md:py-8 max-h-[450px] overflow-y-auto">
                {newsAndTender.map((item) => (
                    <div key={item.id}>
                        <Link
                            href={`/news-and-tenders/${item.id}`}
                            className={`${
                                newsId === item.id
                                    ? "text-yellow"
                                    : "text-white"
                            } text-sm font-semibold hover:text-yellow`}
                        >
                            {item.title}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
