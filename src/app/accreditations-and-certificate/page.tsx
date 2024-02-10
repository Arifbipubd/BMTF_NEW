"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import Accreditations from "@src/components/accreditations/Accreditations";
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
        <Layout pageTitle="">
            <section className="BMTF | Accorditations and Certificates">
                <CommonHeroSection
                    heading="Accorditations and Certificates"
                    breadcrumb={pathName}
                    imageSrc="/assets/images/shared/hero_image.png"
                />
                <div>
                    <Accreditations />
                </div>
            </section>
        </Layout>
    );
}
