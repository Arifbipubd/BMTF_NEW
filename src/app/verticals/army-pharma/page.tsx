"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import {
    armyAim,
    armyPharmaPointsOne,
    armyPharmaPointsTwo,
    categoryItems,
    listItems,
} from "@src/utils/verticals/army-pharma";

import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import DescriptionSection from "@src/components/shared/DescriptionSection";
import AimSection from "@src/components/shared/AimSection";
import CategoryOfServices from "@src/components/shared/CategoryOfServices";
import ConnectBMTF from "@src/components/shared/ConnectBMTF";
import SingleColumnGridList from "@src/components/shared/SingleColumnGridList";
import Category from "@src/components/shared/Category";
import Safety from "@src/components/shared/Safety";

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
                heading="Army Pharma"
                breadcrumb={pathName}
                imageSrc="/assets/images/shared/Verticals_hero_image.png"
            />
            <DescriptionSection
                youtubeUrl="https://www.youtube.com/embed/lotbMoeqOOo?si=cxvRpwKkBQ69sSUD"
                descriptionOne={`Army Pharma Ltd., a state-owned pharmaceutical company, commenced operations 
                in June 2019 under Bangladesh Machine Tools Factory Limited, overseen by the Bangladesh Army. 
                The organization, led by the Chief of Army Staff as Chairman, has three production units focusing 
                on Oral Solid Dosage drugs, parenteral drugs, and a dedicated Cephalosporin unit. The project 
                profile is approved by the Directorate General of Drug Administration, registered with the Registrar 
                of Joint Stock Companies and Firms, and endorsed by the Bangladesh Investment Development Authority. 
                To ensure quality, the company has enlisted the services of Elomatic Consulting & Engineering Ltd, a 
                Finland-based GMP consultant, aiming for cGMP manufacturing licenses and international accreditations.
                `}
            />
            <AimSection
                imageSrc="/assets/images/verticals/machine-shop/machine-shop-aim.png"
                aimItems={armyAim}
            />

            <CategoryOfServices
                imageSrc="/assets/images/verticals/army-pharma/shared-category-image.png"
                items={armyPharmaPointsOne}
            />
            <CategoryOfServices
                imageSrc="/assets/images/verticals/army-pharma/shared-category-image.png"
                items={armyPharmaPointsTwo}
                imageOrder="order-1"
                textOrder="order-2"
            />
            <SingleColumnGridList
                imageSrc="/assets/images/verticals/shared-list-image.png"
                listHeading="Our Aim"
                backroundColor="bg-skyLight"
                listItems={listItems}
            />
            <Category
                heading="Product Categories"
                subHeading={`We can serve you by offering the following Primary Packaging Stock Keeping Unit (SKU):`}
                categories={categoryItems}
            />
            <Safety 
                imageSrc="/assets/images/verticals/army-pharma/safety-section.png"
                heading="Animal Health"
                text={`In January 2023, BMTF Ltd. proudly introduced a line of animal healthcare products, underscoring our 
                commitment to quality and promotion. Sourcing raw materials from validated channels, we adhere to the
                 stringent guidelines of the Directorate General of Drug Administration (DGDA) and have established a 
                 world-class QC lab. With approval from the Directorate of Livestock Services (DLS), our State-of-The-Art
                  production facilities operate under the supervision of a qualified multidisciplinary team comprising 
                  Veterinary Doctors, Pharmacists, Biochemists, Chemists, and Microbiologists. Embracing Current Good
                   Manufacturing Practice (cGMP) standards, including a clean room concept and unidirectional production 
                   lines, we ensure product quality. Each production batch is released only after receiving a finished goods 
                   qualification certificate from our meticulous Quality Assurance (QA) department.`}
                imageOrder="order-1"
                textOrder="order-2"
            />
            <ConnectBMTF />
        </section>
    );
}
