"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Layout from "@src/components/Layout/Layout";

import {
    bmtfAim,
    craftiesPoints,
    listItems,
    categoryItems,
} from "@src/utils/verticals/BMTF-crafties";

import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import DescriptionSection from "@src/components/shared/DescriptionSection";
import AimSection from "@src/components/shared/AimSection";
import CategoryOfServices from "@src/components/shared/CategoryOfServices";
import VerticalsListItems from "@src/components/shared/VerticalsListItems";
import Category from "@src/components/shared/Category";
import Safety from "@src/components/shared/Safety";
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
        <Layout pageTitle="BMTF | BMTF Crafties Factory">
            <Scrollbar progress={scrollProgress} />
            <section>
                <CommonHeroSection
                    heading="BMTF Crafties Factory"
                    breadcrumb={pathName}
                    imageSrc="/assets/images/shared/Verticals_hero_image.png"
                />
                <DescriptionSection
                    youtubeUrl="https://www.youtube.com/embed/rrgGX_Hdf7o?si=tf2tO53s2xE0IVdb"
                    descriptionOne={`BMTF Crafties began in 2020 with a commitment to create special designs for military, paramilitary, and various government and non-government groups. We specialize in crafting custom designs for items such as uniform badges, medals, trophies, emblems, souvenirs, and more. We take pride in producing and delivering these products with the utmost quality and adhering to international-level security standards. Additionally, we design promotional items, special emblems, and award jewelry. Our primary goal is to offer unique and top-notch designs for our valued customers.`}
                    
                />
                <AimSection
                    imageSrc="/assets/images/verticals/BMTF-crafties/aim.png"
                    aimItems={bmtfAim}
                />

                {/* <CategoryOfServices
                    imageSrc="/assets/images/verticals/BMTF-crafties/bmtf-category.png"
                    items={craftiesPoints}
                    textOrder="order-2 lg:order-1"
                    imageOrder="order-1 lg:order-2"
                /> */}
                <VerticalsListItems
                    imageSrc="/assets/images/verticals/BMTF-crafties/listItem.png"
                    listHeading="We Ensure"
                    listItems={listItems}
                />
                <Category
                    heading="We Manufacture"
                    subHeading={`We can serve you by offering the following Primary Packaging Stock Keeping Unit (SKU):`}
                    categories={categoryItems}
                />
                <Safety
                    imageSrc="/assets/images/verticals/BMTF-crafties/safety.png"
                    heading="Safety"
                    text={`Safety is a fundamental priority at BMTF and has been integrated into our daily work 
                culture. Our safety program is designed to prevent injuries, promote the safety, security, 
                and health of our employees and the public at large, and minimize the impact on the environment 
                in which we operate.`}
                textOrder="order-2 lg:order-1"
                imageOrder="order-1 lg:order-2"
                />
                <ConnectBMTF />
            </section>
        </Layout>
    );
}
