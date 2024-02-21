"use client";

import React, { useState, useEffect } from "react";
import { useScroll } from "framer-motion";

import { usePathname } from "next/navigation";
import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import CareerTable from "@src/components/shared/CareerTable";

import Layout from "@src/components/Layout/Layout";
import Scrollbar from "@src/components/shared/Scrollbar";

type Props = {};

export default function Page({}: Props) {
    const pathname = usePathname();

    const [pathName, setPathName] = useState<Array<string>>([]);

    const { scrollYProgress } = useScroll();
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change',(x) =>
            setScrollProgress(x)
        );
        return () => unsubscribe();
    }, [scrollYProgress]);

    useEffect(() => {
        let path = pathname.split("/");
        path[0] = "/";
        setPathName(path);
    }, [pathname]);

    return (
        <Layout pageTitle="BMTF | Career Oppurtunities">
            <Scrollbar progress={scrollProgress} />
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
