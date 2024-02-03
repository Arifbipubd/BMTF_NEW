"use client";

import React, { useState } from "react";

import { singleNews } from "@src/utils/news-and-tender";

import CommonHeroSection from "@src/components/shared/CommonHeroSection";

import ConnectBMTF from "@src/components/shared/ConnectBMTF";
import SingleNews from "@src/components/shared/SingleNews";

export default function Page({ params }: { params: { newsId: string } }) {
    const id = parseInt(params.newsId);

    if (!id) {
        return (
            <div className="text-headline text-center text-3xl">Loading...</div>
        );
    }

    const newsItem = singleNews[id];

    return (
        <section>
            <CommonHeroSection
                heading={newsItem.title}
                breadcrumb={["/", "news-and-tenders"]}
                imageSrc="/assets/images/shared/noc-and-notice.png"
            />
            <SingleNews news={newsItem} newsId={id}/>
            <ConnectBMTF />
        </section>
    );
}
