"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { galvanizationAim,  listItems } from "@src/utils/verticals/galvanizing-plant";

import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import DescriptionSection from "@src/components/shared/DescriptionSection";
import AimSection from "@src/components/shared/AimSection";
import ConnectBMTF from "@src/components/shared/ConnectBMTF";
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
                heading="Galvanizing Plant"
                breadcrumb={pathName}
                imageSrc="/assets/images/shared/Verticals_hero_image.png"
            />
            <DescriptionSection
                youtubeUrl="https://www.youtube.com/embed/lotbMoeqOOo?si=cxvRpwKkBQ69sSUD"
                descriptionOne={`The BMTF Galvanizing Shop is committed to strengthening and enhancing the 
                durability of steel. Established in 2018, it holds special certification for its work. The shop 
                boasts a spacious area of approximately 12,000 square feet and is staffed by highly skilled workers. 
                They utilize three advanced machines to reinforce steel and maintain a dedicated cleaning area. 
                Furthermore, they demonstrate environmental responsibility through the operation of a specialized 
                plant. By employing cutting-edge technology, they consistently deliver exceptional results to their 
                customers. The shop upholds a safe, clean environment with excellent lighting and fresh air, 
                contributing to the well-being and motivation of their`}
            />
            <AimSection
                imageSrc="/assets/images/verticals/galvanizing-aim.png"
                aimItems={galvanizationAim}
            />
            <VerticalsListItems
                imageSrc="/assets/images/verticals/galvanizing-list-image.png"
                listHeading="Our Promises Are"
                listItems={listItems}
                imageOrder="order-2"
                textOrder="order-1"
            />
            <ConnectBMTF />
        </section>
    );
}
