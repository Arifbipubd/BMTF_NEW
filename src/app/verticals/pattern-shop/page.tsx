"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Layout from "@src/components/Layout/Layout";

import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import DescriptionSection from "@src/components/shared/DescriptionSection";
import AimSection from "@src/components/shared/AimSection";
import ConnectBMTF from "@src/components/shared/ConnectBMTF";
import { useScroll } from "framer-motion";
import Scrollbar from "@src/components/shared/Scrollbar";

const patternAim: Array<any> = [
    {
        id: 1,
        heading: "Our Aim",
        text: [{
            id: 11,
            innerText: `Aim of Pattern Shop is to manufacture engineering-oriented eco-friendly products for various industrial sectors involving casting, machining and fabrication.`
        }]
    },
];


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
        <Layout pageTitle="BMTF | Pattern Shop">
            <Scrollbar progress={scrollProgress} />
            <section>
                <CommonHeroSection
                    heading="Pattern Shop"
                    breadcrumb={pathName}
                    imageSrc="/assets/images/shared/Verticals_hero_image.png"
                />
                <DescriptionSection
                    youtubeUrl="https://www.youtube.com/embed/6gAQhiQGRwA?si=yPinW2-ZmLPDDaDs"
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
                    imageSrc="/assets/images/verticals/Pattern_shop.png"
                    aimItems={patternAim}
                />
                <ConnectBMTF />
            </section>
        </Layout>
    );
}
