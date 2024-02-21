"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Layout from "@src/components/Layout/Layout";

import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import DescriptionSection from "@src/components/shared/DescriptionSection";
import AimSection from "@src/components/shared/AimSection";
import Category from "@src/components/shared/Category";
import {
    aim,
    categoryItems,
    listItems,
    cardItems,
} from "@src/utils/verticals/footwear";
import VerticalsListItems from "@src/components/shared/VerticalsListItems";
import ProcessCard from "@src/components/shared/ProcessCard";
import ConnectBMTF from "@src/components/shared/ConnectBMTF";
import { useScroll } from "framer-motion";
import Scrollbar from "@src/components/shared/Scrollbar";

type Props = {};

export default function Page({}: Props) {
    const pathname = usePathname();
    const [loading, setLoading] = useState<boolean>(true);
    const [pathName, setPathName] = useState<Array<string>>([]);
    const [heading, setHeading] = useState<string>("");

    const { scrollYProgress } = useScroll();
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (x) =>
            setScrollProgress(x)
        );
        return () => unsubscribe();
    }, [scrollYProgress]);

    useEffect(() => {
        setLoading(true);
        let path = pathname.split("/");
        path[0] = "/";
        setHeading(path[-1]);
        setPathName(path);
        setLoading(false);
    }, [pathname]);

    return (
        <Layout pageTitle="BMTF | Footwear & Leather">
            <Scrollbar progress={scrollProgress} />
            <section>
                <CommonHeroSection
                    heading="Footwear & Leather"
                    breadcrumb={pathName}
                    imageSrc="/assets/images/shared/Verticals_hero_image.png"
                />
                <DescriptionSection
                    youtubeUrl="https://www.youtube.com/embed/lotbMoeqOOo?si=cxvRpwKkBQ69sSUD"
                    descriptionOne={`The BMTF Footwear & Leather Factory stands as one of the largest military 
                shoe manufacturing shops in Bangladesh. They introduced their brand 'Signature' 
                in 2007 and have been proudly serving many prestigious customers ever since. The factory is 
                equipped with modern machinery capable of producing millions of pairs of shoes and leather 
                products annually. Their dedicated team employs special artisanal techniques to ensure high-quality 
                shoes at every stage of production.`}
                    descriptionTwo={`
                Approximately 1,000 skilled workers operate in shifts to craft up to 4,000 pairs of shoes daily,
                 amounting to around 100,000 pairs per month. These craftsmen meticulously handle the leather, 
                 paying close attention to every detail to guarantee top-notch quality. They hold quality in the 
                 highest regard and never compromise on it. 'Signature' is renowned for its distinctive designs, 
                 competitive prices, excellent quality, punctual delivery, and efficient service.
                `}
                />
                <AimSection
                    imageSrc="/assets/images/verticals/footwear/aim.png"
                    aimItems={aim}
                />
                <Category
                    heading="Product Categories"
                    subHeading={`We can serve you by offering the following Primary Packaging Stock Keeping Unit (SKU):`}
                    categories={categoryItems}
                />
                <VerticalsListItems
                    imageSrc="/assets/images/verticals/footwear/list.png"
                    listHeading="Our Promises Are"
                    listItems={listItems}
                />
                <ProcessCard
                    heading="Our Manufacturing Process"
                    cardItems={cardItems}
                />
                <ConnectBMTF imageSrc="/assets/images/verticals/footwear/connect.png" />
            </section>
        </Layout>
    );
}
