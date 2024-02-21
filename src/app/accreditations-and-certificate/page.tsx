"use client";

import React, { useState, useEffect } from "react";
import { useScroll } from "framer-motion";

import { usePathname } from "next/navigation";
import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import Accreditations from "@src/components/accreditations/Accreditations";
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
        <Layout pageTitle="BMTF | Accorditations and Certificates">
            <Scrollbar progress={scrollProgress} />
            <section>
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
