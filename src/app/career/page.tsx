"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import CareerTable from "@src/components/shared/CareerTable";

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
        <Layout pageTitle="BMTF | Career Oppurtunities">
            <section>
                <CommonHeroSection
                    heading="Career Oppurtunities"
                    breadcrumb={pathName}
                    imageSrc="/assets/images/shared/noc-and-notice.png"
                />
                <CareerTable />
            </section>
        </Layout>
    );
}
