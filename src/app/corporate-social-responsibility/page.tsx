"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import ConnectBMTF from "@src/components/shared/ConnectBMTF";
import HeroSection from "@src/components/corporate/HeroSection";
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
        <Layout pageTitle="BMTF | Corporate Social Responsibility">
            <section>
                <CommonHeroSection
                    heading="Corporate Social Responsibility"
                    breadcrumb={pathName}
                    imageSrc="/assets/images/shared/noc-and-notice.png"
                />
                <HeroSection />
                <ConnectBMTF />
            </section>
        </Layout>
    );
}
