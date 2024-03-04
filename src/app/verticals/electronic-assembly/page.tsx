"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Layout from "@src/components/Layout/Layout";

import {
    electronicAim,
    electricPoints,
} from "@src/utils/verticals/electronic-assembly";

import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import DescriptionSection from "@src/components/shared/DescriptionSection";
import AimSection from "@src/components/shared/AimSection";
import CategoryOfServices from "@src/components/shared/CategoryOfServices";
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
        <Layout pageTitle="BMTF | Electronic Assembly">
            <Scrollbar progress={scrollProgress} />
            <section>
                <CommonHeroSection
                    heading="Electronic Assembly"
                    breadcrumb={pathName}
                    imageSrc="/assets/images/shared/Verticals_hero_image.png"
                />
                <DescriptionSection
                    youtubeUrl="https://www.youtube.com/embed/yXkKfTnGpmI?si=-jzN0--wq56TEtZs"
                    descriptionOne={`The BMTF Electronic Assembly Shop is a hub for high-tech electronics and projects aimed at advancing Bangladesh's digital landscape. It plays a pivotal role in numerous government projects focused on automating both public and private organizations within the country. The team possesses expertise in assembling various electronic devices, including laptops, notebooks, and tablets. Furthermore, they are engaged in specialized projects such as the manufacturing of Electronic Voting Machines (EVMs), National ID Smart Cards, Vehicle Number Plates, and Digital Driver's Licenses vital initiatives for the nation. They are at the forefront of incorporating modern technology and innovating to further develop and expand their operations`}
                />
                <AimSection
                    imageSrc="/assets/images/verticals/electronic-assembly/aim.png"
                    aimItems={electronicAim}
                />
                <CategoryOfServices
                    imageSrc="/assets/images/verticals/steel_structure/category_of_service.png"
                    items={electricPoints}
                    textOrder="order-2 lg:order-1"
                    imageOrder="order-1 lg:order-2"
                />
                <ConnectBMTF />
            </section>
        </Layout>
    );
}
