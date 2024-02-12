"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Layout from "@src/components/Layout/Layout";

import {
    structureAim,
    structurPoints,
    structreListItems,
} from "@src/utils/verticals/steel-structure";

import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import DescriptionSection from "@src/components/shared/DescriptionSection";
import AimSection from "@src/components/shared/AimSection";
import CategoryOfServices from "@src/components/shared/CategoryOfServices";
import VerticalsListItems from "@src/components/shared/VerticalsListItems";
import Safety from "@src/components/shared/Safety";
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
        <Layout pageTitle="BMTF | Steel Structure Manufacturing">
            <section>
                <CommonHeroSection
                    heading="Steel Structure Manufacturing"
                    breadcrumb={pathName}
                    imageSrc="/assets/images/shared/Verticals_hero_image.png"
                />
                <DescriptionSection
                    youtubeUrl="https://www.youtube.com/embed/lotbMoeqOOo?si=cxvRpwKkBQ69sSUD"
                    descriptionOne={`The Steel Structure Manufacturing Shop at BMTF has transformed from a 
                vision in the year 2000 to a reality that is shaping the future infrastructural development 
                of the country. We specialize in industrial construction projects involving the creation 
                and installation of structural steel. Our diverse range of construction solutions includes 
                Pre-Engineered Steel Buildings, Bailey Bridges, Overhead Cranes, Overhead Gantry Cranes, 
                Curing Chamber Covers, Lamp Posts, Shelves, and H/I Beams.`}
                    descriptionTwo={`The steel we work with possesses unique qualities that combine structural 
                support and visual appeal, making it ideal for some of the country's most iconic structures. 
                Over the years, we have assembled a team of experienced professionals skilled in designing, 
                engineering, fabrication, and construction to ensure top-notch quality. BMTF's Steel Structure 
                Manufacturing Shop is now a proud member of the Steel Building Manufacturer Association of Bangladesh 
                (SBMA) and is highly regarded both nationally and internationally for its expertise in fabricating steel 
                structures.
                `}
                />
                <AimSection
                    imageSrc="/assets/images/verticals/steel_structure/aim.png"
                    aimItems={structureAim}
                />
                <CategoryOfServices
                    imageSrc="/assets/images/verticals/steel_structure/category_of_service.png"
                    items={structurPoints}
                    textOrder="order-2 lg:order-1"
                    imageOrder="order-1 lg:order-2"
                />
                <VerticalsListItems
                    imageSrc="/assets/images/verticals/steel_structure/listImage.png"
                    listHeading="Our Competitive Advantages"
                    listItems={structreListItems}
                />
                <Safety
                    imageSrc="/assets/images/verticals/steel_structure/safety.png"
                    heading="Safety"
                    text={`
                    Safety is a fundamental priority at BMTF and has been integrated into our daily work culture. 
                    Our safety program is designed to prevent injuries, promote the safety, security, and health 
                    of our employees and the public at large, and minimize the impact on the environment in which 
                    we operate.
                `}
                />
                <ConnectBMTF />
            </section>
        </Layout>
    );
}
