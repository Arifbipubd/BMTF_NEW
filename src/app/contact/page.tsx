"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import Card from "@src/components/contact/Card";
import Contact from "@src/components/contact/Contact";
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
        <Layout pageTitle="BMTF | Contact Us">
            <section>
                <CommonHeroSection
                    heading="Contact Us"
                    breadcrumb={pathName}
                    imageSrc="/assets/images/shared/hero_image.png"
                />
                <Card />
                <Contact />
            </section>
        </Layout>
    );
}
