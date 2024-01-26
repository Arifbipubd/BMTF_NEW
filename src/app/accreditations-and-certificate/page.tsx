"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import Accreditations from "@src/components/accreditations/Accreditations";
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
        <section className="">
            <CommonHeroSection
                heading="Accorditations and Certificates"
                breadcrumb={pathName}
                imageSrc="/assets/images/shared/hero_image.png"
            />
            <div>
                <Accreditations />
            </div>
        </section>
    );
}
