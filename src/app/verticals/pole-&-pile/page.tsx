"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Layout from "@src/components/Layout/Layout";

import {
    poleAim,
    polePoints,
    cardItems,
} from "@src/utils/verticals/pole-and-pile";

import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import DescriptionSection from "@src/components/shared/DescriptionSection";
import AimSection from "@src/components/shared/AimSection";
import CategoryOfServices from "@src/components/shared/CategoryOfServices";
import ProcessCard from "@src/components/shared/ProcessCard";
import ConnectBMTF from "@src/components/shared/ConnectBMTF";

type Props = {};

export default function Page({}: Props) {
    const pathname = usePathname();
    const [loading, setLoading] = useState<boolean>(true);
    const [pathName, setPathName] = useState<Array<string>>([]);
    const [heading, setHeading] = useState<string>("");

    useEffect(() => {
        setLoading(true);
        let path = pathname.split("/");
        path[0] = "/";
        setHeading(path[-1]);
        setPathName(path);
        setLoading(false);
    }, [pathname]);
    return (
        <Layout pageTitle="BMTF | Pole & Pile">
            <section>
                <CommonHeroSection
                    heading="Pole & Pile"
                    breadcrumb={pathName}
                    imageSrc="/assets/images/shared/Verticals_hero_image.png"
                />
                <DescriptionSection
                    youtubeUrl="https://www.youtube.com/embed/lotbMoeqOOo?si=cxvRpwKkBQ69sSUD"
                    descriptionOne={`The Pole and Pile Factory is a prominent division of the state-owned BMTF, 
                one of the largest manufacturing entities. In April 2016, the Chief of Army Staff, who also 
                serves as the Chairman of the BMTF Board of Directors, approved the establishment of this factory. 
                On February 14, 2017, the BMTF Pole Factory commenced operations with a 
                mission to support the government's 'Vision 2041' by providing quality lighting 
                solutions for every home.`}
                    descriptionTwo={`
                Since its inception, the factory has been producing a wide range of durable Concrete Electric
                 Poles. It has the capacity to manufacture over 1,400 poles daily, thanks to the 
                 dedicated efforts of a large team of officers, employees, and workers. These poles 
                 are renowned for their strength and resistance to corrosion. In addition to standard 
                 products, our experts specialize in designing poles capable of withstanding extreme 
                 heat and natural disasters. We also offer Earthing Electrodes with excellent electrical 
                 conductivity, thermal stability, low maintenance requirements, and a long working life.
                `}
                    descriptionThree={`
                Our infrastructure includes a warehouse and an R&D unit alongside the main production facility. 
                We leverage the latest manufacturing techniques developed by our research department to create 
                our product range. We maintain a rigorous quality control process, adhering to ISO standards, to 
                ensure that our products meet stringent quality criteria at every stage.
                `}
                    descriptionFour={`
                To meet the high demand of our satisfied customers, we have expanded our production capacity 
                by establishing additional units equipped with advanced machinery. We also manufacture SPC piles 
                for building construction to the highest standards.
                `}
                />
                <AimSection
                    imageSrc="/assets/images/verticals/pole-and-pile/aim.png"
                    aimItems={poleAim}
                />
                <CategoryOfServices
                    imageSrc="/assets/images/verticals/pole-and-pile/category_of_service.png"
                    items={polePoints}
                    textOrder="order-2 lg:order-1"
                    imageOrder="order-1 lg:order-2"
                />
                <ProcessCard
                    heading="Our Manufacturing Process"
                    cardItems={cardItems}
                />
                <ConnectBMTF />
            </section>
        </Layout>
    );
}
