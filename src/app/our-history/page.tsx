"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import Timeline from "@src/components/our-history/Timeline";
import Memory from "@src/components/our-history/Memory";
import ConnectBMTF from "@src/components/shared/ConnectBMTF";
import Layout from "@src/components/Layout/Layout";

type Props = {};

export default function Page({}: Props) {
    const pathname = usePathname();

    const [pathName, setPathName] = useState<Array<string>>([]);

    useEffect(() => {
        let path = pathname.split("/");
        path[0] = "/";
        setPathName(path);
    }, [pathname]);

    return (
        <Layout pageTitle="BMTF | Our History">
            <section>
                <CommonHeroSection
                    heading="our history"
                    breadcrumb={pathName}
                    imageSrc="/assets/images/history/history_hero_image.png"
                />
                <Timeline />
                <Memory />
                <ConnectBMTF />
            </section>
        </Layout>
    );
}
