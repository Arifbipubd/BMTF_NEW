"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { electronicAim, electricPoints } from "@src/utils/verticals/electronic-assembly";

import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import DescriptionSection from "@src/components/shared/DescriptionSection";
import AimSection from "@src/components/shared/AimSection";
import CategoryOfServices from "@src/components/shared/CategoryOfServices";
import ConnectBMTF from "@src/components/shared/ConnectBMTF";

type Props = {};

export default function page({}: Props) {
    const pathname = usePathname();
    const [loading, setLoading] = useState<boolean>(true);
    const [pathName, setPathName] = useState<Array<string>>([]);
    const [heading, setHeading] = useState<string>("");

    useEffect(() => {
        setLoading(true);
        let path = pathname.split("/");
        path[0] = "/";
        setHeading(path[-1]);
        setPathName(path);
        setLoading(false);
    }, [pathname]);

    return (
        <section>
            <CommonHeroSection
                heading="Vehicle Assembly"
                breadcrumb={pathName}
                imageSrc="/assets/images/shared/Verticals_hero_image.png"
            />
            <DescriptionSection
                youtubeUrl="https://www.youtube.com/embed/lotbMoeqOOo?si=cxvRpwKkBQ69sSUD"
                descriptionOne={`The BMTF Furniture Factory is renowned for its distinctive style and high-quality 
                furniture. Utilizing cutting-edge technology and machinery, we offer an extensive range of furniture 
                and home decor that mirrors your personal taste and lifestyle. Our team of designers and carpenters 
                collaborate to cater to our clients' aesthetic preferences. Our furniture is characterized by its 
                simple yet elegant design, and a commitment to using honest, quality materials. We are dedicated to 
                crafting beautiful and flawless pieces, ensuring our products are both comfortable and elegant.`}
            />
            <AimSection
                imageSrc="/assets/images/verticals/electronic-assembly/aim.png"
                aimItems={electronicAim}
            />
            <CategoryOfServices
                imageSrc="/assets/images/verticals/steel_structure/category_of_service.png"
                items={electricPoints}
            />
            <ConnectBMTF />
        </section>
    );
}
