"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import AllNews from "@src/components/shared/AllNews";
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
        <Layout pageTitle="BMTF | News and Tenders">
            <section>
                <CommonHeroSection
                    heading="News and Tenders"
                    breadcrumb={pathName}
                    imageSrc="/assets/images/shared/noc-and-notice.png"
                />
                <AllNews />
                <ConnectBMTF />
            </section>
        </Layout>
    );
}
