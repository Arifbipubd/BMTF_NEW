"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import OurClient from "@src/components/our-client/OurClient";
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
        <Layout pageTitle="Our Client">
            <section className="">
                <CommonHeroSection
                    heading="Our Client"
                    breadcrumb={pathName}
                    imageSrc="/assets/images/shared/hero_image.png"
                />
                <div>
                    <OurClient />
                </div>
            </section>
        </Layout>
    );
}
