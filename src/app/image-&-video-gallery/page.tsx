"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import MainContainer from "@src/components/image-and-video/MainContainer";
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
        <Layout pageTitle="BMTF | Image & video Gallery">
            <section className="">
                <CommonHeroSection
                    heading="Image & video Gallery"
                    breadcrumb={pathName}
                    imageSrc="/assets/images/shared/hero_image.png"
                />
                <div>
                    <MainContainer />
                </div>
            </section>
        </Layout>
    );
}
