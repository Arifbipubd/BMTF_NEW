"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import Table from "@src/components/shared/Table";
import ConnectBMTF from "@src/components/shared/ConnectBMTF";
import Layout from "@src/components/Layout/Layout";
import { useScroll } from "framer-motion";
import Scrollbar from "@src/components/shared/Scrollbar";
type Props = {};

export default function Page({}: Props) {
    const pathname = usePathname();

    const [pathName, setPathName] = useState<Array<string>>([]);

    const { scrollYProgress } = useScroll();
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (x) =>
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
        <Layout pageTitle="BMTF | NOC & Notice">
            <Scrollbar progress={scrollProgress} />
            <section>
                <CommonHeroSection
                    heading="NOC & Notice"
                    breadcrumb={pathName}
                    imageSrc="/assets/images/shared/noc-and-notice.png"
                />
                <Table />
                <ConnectBMTF />
            </section>
        </Layout>
    );
}
