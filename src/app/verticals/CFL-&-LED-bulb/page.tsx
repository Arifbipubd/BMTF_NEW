"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { aim, listItems, points } from "@src/utils/verticals/cfl-and-led-bulb";

import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import DescriptionSection from "@src/components/shared/DescriptionSection";
import AimSection from "@src/components/shared/AimSection";
import ConnectBMTF from "@src/components/shared/ConnectBMTF";
import CategoryOfServices from "@src/components/shared/CategoryOfServices";
import VerticalsListItems from "@src/components/shared/VerticalsListItems";
import CflBannerSection from "@src/components/verticals/CflBannerSection";


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
                heading="CFL & LED Bulb"
                breadcrumb={pathName}
                imageSrc="/assets/images/shared/Verticals_hero_image.png"
            />
            <DescriptionSection
                youtubeUrl="https://www.youtube.com/embed/lotbMoeqOOo?si=cxvRpwKkBQ69sSUD"
                descriptionOne={`The BMTF CFL & LED bulb factory is a leading manufacturer and 
                exporter in the country, specializing in an impressive range of innovative, diverse, 
                user-friendly, and high-quality Light Emitting Diode-LED and Compact Fluorescent Lamps-CFL 
                tubes and bulbs. Under the guidance of the Honorable Chief of Army Staff and Chairman of 
                Bangladesh Machines and Tools Factory-BMTF Limited, production of CFL and LED bulbs commenced 
                on October 1, 2011. Our state-of-the-art facilities, along with an excellent logistics and 
                supply management network, have enabled us to reach even the most remote areas of the country. 
                With a dedicated workforce of approximately 50 employees, we continuously work towards the 
                improvement of our project. Moreover, we maintain a research and quality control department 
                that diligently monitors the products at every stage to meet the standards of the International 
                Organization for Standardization. Our products have garnered national acclaim for their longevity, 
                energy efficiency, low maintenance, and remarkable energy-efficient features.
                `}
            />
            <AimSection
                imageSrc="/assets/images/verticals/machine-shop/machine-shop-aim.png"
                aimItems={aim}
            />
            <CategoryOfServices
                imageSrc="/assets/images/verticals/cfl-category-image.png"
                items={points}
            />
            <CflBannerSection />
            <VerticalsListItems
                imageSrc="/assets/images/verticals/cfl-list-image.png"
                listHeading="Our Promises Are"
                listItems={listItems}
            />
            <ConnectBMTF />
        </section>
    );
}
