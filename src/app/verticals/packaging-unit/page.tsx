/** @format */

"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Layout from "@src/components/Layout/Layout";

import {
  packagingAim,
  packagingPoints,
  sectionCard,
  listItems,
} from "@src/utils/verticals/packaging-unit";

import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import DescriptionSection from "@src/components/shared/DescriptionSection";
import AimSection from "@src/components/shared/AimSection";
import CategoryOfServices from "@src/components/shared/CategoryOfServices";
import ConnectBMTF from "@src/components/shared/ConnectBMTF";
import SingleColumnGridList from "@src/components/shared/SingleColumnGridList";
import PackagingSectionCard from "@src/components/shared/PackagingSectionCard";
import { useScroll } from "framer-motion";
import Scrollbar from "@src/components/shared/Scrollbar";

type Props = {};

export default function Page({}: Props) {
  const pathname = usePathname();
  const [loading, setLoading] = useState<boolean>(true);
  const [pathName, setPathName] = useState<Array<string>>([]);
  const [heading, setHeading] = useState<string>("");

  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (x) =>
      setScrollProgress(x)
    );
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    setLoading(true);
    let path = pathname.split("/");
    path[0] = "/";
    setHeading(path[-1]);
    setPathName(path);
    setLoading(false);
  }, [pathname]);

  return (
    <Layout pageTitle='BMTF | Packaging Unit'>
      <Scrollbar progress={scrollProgress} />
      <section>
        <CommonHeroSection
          heading='Packaging Unit'
          breadcrumb={pathName}
          imageSrc='/assets/images/shared/hero_image.png'
        />
        <DescriptionSection
          youtubeUrl='https://www.youtube.com/embed/yrDpckexiHU?si=zlUm8E_b6DXKnsJn'
          descriptionOne={`BMTF Packaging Unit (BMTF-2) stands as a distinguished entity in the 
                manufacturing and export of square bottom brown paper bags. Our commitment revolves around 
                providing clients with a comprehensive range, including versatile white Kraft paper bags, 
                brown Kraft paper grocery bags, brown shopping bags, and special bags. Since our inception, 
                we have steadfastly focused on delivering products that adhere to standardized quality and 
                incorporate technical innovation.
                `}
          descriptionTwo={`Our expansive manufacturing unit is well-appointed with modern amenities 
                and tools, empowering us to meet delivery timelines while ensuring pocket-friendly prices. 
                Client satisfaction stands as our paramount objective, and our diverse product range is 
                entirely environmentally friendly and user-friendly, devoid of any toxic or harmful elements. 
                At BMTF Packaging Unit, we are dedicated to the cause of reducing plastic contamination, 
                working tirelessly to contribute to the creation of a greener future.`}
        />
        <AimSection
          imageSrc='/assets/images/allVerticals/Packaging.jpg'
          aimItems={packagingAim}
        />

        <CategoryOfServices
          imageSrc='/assets/images/verticals/cfl-category-image.png'
          items={packagingPoints}
          imageOrder='order-1 lg:order-2'
          textOrder='order-2 lg:order-1'
        />
        <PackagingSectionCard items={sectionCard} />
        <SingleColumnGridList
          imageSrc='/assets/images/verticals/cfl-list-image.png'
          listHeading='Environmental Benefits of Using Paper Bags'
          backroundColor='bg-white'
          listItems={listItems}
          imageOrder='order-1'
          textOrder='order-2'
        />
        <ConnectBMTF
          imageSrc='/assets/images/allVerticals/Packaging.jpg'
          contactFirst='Kholishajani, Fulbaria, Kaliakoir, Gazipur.'
          phone='+880 1769041206,+880 1769041207'
          email='bmtfpackagingfactory@gmail.com'
        />
      </section>
    </Layout>
  );
}
