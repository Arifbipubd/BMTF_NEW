"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { foundryAim, cardItems, listItems } from "@src/utils/verticals/foundry-shop";

import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import DescriptionSection from "@src/components/shared/DescriptionSection";
import AimSection from "@src/components/shared/AimSection";
import ConnectBMTF from "@src/components/shared/ConnectBMTF";
import ProcessCard from "@src/components/shared/ProcessCard";
import VerticalsListItems from "@src/components/shared/VerticalsListItems";

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
        <section>
            <CommonHeroSection
                heading="Foundry Shop"
                breadcrumb={pathName}
                imageSrc="/assets/images/shared/Verticals_hero_image.png"
            />
            <DescriptionSection
                youtubeUrl="https://www.youtube.com/embed/lotbMoeqOOo?si=cxvRpwKkBQ69sSUD"
                descriptionOne={`The Foundry Shop, established in 1967, has been providing clients with a 
                diverse range of casting solutions ever since. It stands as one of the most versatile shops 
                of its kind in Bangladesh, offering a variety of services in conjunction with its sister shops. 
                We manufacture different products using both Ferrous and Non-Ferrous metals, each with various 
                chemical compositions.`}
                descriptionTwo={`
                In alignment with BMTF's vision and values, the Foundry Shop is committed to meeting new 
                challenges to ensure the highest customer satisfaction. Our team of engineers, tooling 
                specialists, and dedicated manufacturing staff leverage the latest technologies to create 
                innovative and cost-effective, long-lasting products.
                `}
            />
            <AimSection
                imageSrc="/assets/images/verticals/foundry-aim.png"
                aimItems={foundryAim}
            />
            <ProcessCard
                heading="Our Manufacturing Process"
                cardItems={cardItems}
            />
            <VerticalsListItems
                imageSrc="/assets/images/verticals/foundry-list-image.png"
                listHeading="Our Promises Are"
                listItems={listItems}
            />
            <ConnectBMTF />
        </section>
    );
}
