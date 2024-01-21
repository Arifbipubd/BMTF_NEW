"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import DescriptionSection from "@src/components/shared/DescriptionSection";
import AimSection from "@src/components/shared/AimSection";
import ConnectBMTF from "@src/components/shared/ConnectBMTF";

const patternAim: Array<any> = [
    {
        id: 1,
        heading: "Our Aim",
        text: `The aim of the Galvanizing Shop is to enhance the factory's reputation 
        by providing modern galvanizing work using quality raw materials.`,
    },
];

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
                heading="Pattern Shop"
                breadcrumb={pathName}
                imageSrc="/assets/images/shared/Verticals_hero_image.png"
            />
            <DescriptionSection
                youtubeUrl="https://www.youtube.com/embed/lotbMoeqOOo?si=cxvRpwKkBQ69sSUD"
                descriptionOne={`The BMTF Pattern Shop specializes in crafting a diverse range of patterns 
                to accommodate various molding techniques. Operating in tandem with the Pattern and Foundry 
                Shop, we prioritize precision and cost-effectiveness for the production of high-quality 
                castings. Our use of top-tier materials, including high-quality timber, aluminum, and 
                araldite, ensures the creation of accurate patterns. In addition, we employ metallic die 
                molds and leverage advanced technologies such as pattern milling, drilling, lathing, wood 
                jointing, planing, and various power saw machines to produce dynamic patterns. Collaborating 
                with expert designers and CNC technicians, our Pattern Shop provides invaluable services, 
                delivering tailor-made patterns to meet our customers' specific needs.
                `}
            />
            <AimSection
                imageSrc="/assets/images/verticals/machine-shop/machine-shop-aim.png"
                aimItems={patternAim}
            />
            <ConnectBMTF />
        </section>
    );
}
