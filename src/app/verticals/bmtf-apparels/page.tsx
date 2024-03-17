/** @format */

"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Layout from "@src/components/Layout/Layout";

import {
  bmtfApparelsAim,
  listItems,
} from "@src/utils/verticals/bmtf-apparels";

import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import DescriptionSection from "@src/components/shared/DescriptionSection";
import AimSection from "@src/components/shared/AimSection";
import ConnectBMTF from "@src/components/shared/ConnectBMTF";
import { useScroll } from "framer-motion";
import Scrollbar from "@src/components/shared/Scrollbar";
import VerticalsListItems from "@src/components/shared/VerticalsListItems";

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
    <Layout pageTitle='BMTF | BMTF Apparels'>
      <Scrollbar progress={scrollProgress} />
      <section>
        <CommonHeroSection
          heading='BMTF Apparels'
          breadcrumb={pathName}
          imageSrc='/assets/images/shared/hero_image.png'
        />
        <DescriptionSection
          youtubeUrl='https://www.youtube.com/embed/yrDpckexiHU?si=zlUm8E_b6DXKnsJn'
          descriptionOne={`BMTF Apparels is all about making top-notch clothes. They plan to achieve this 
          by using the newest equipment and following the best clothing-making methods from around the world. 
          Their goal is to offer skillfully made garments at fair prices, using materials they can be proud of. 
          They're committed to constantly adding new products and becoming more eco-friendly, all while keeping 
          their customers thrilled with on-time deliveries of high-quality clothes at a great value.
          `}/>
        <AimSection
          imageSrc='/assets/images/allVerticals/Packaging.jpg'
          aimItems={bmtfApparelsAim}
        />
         <VerticalsListItems
          imageSrc='/assets/images/verticals/cfl-list-image.png'
          listHeading='Our Promises Are'
          textOrder="order-2 lg:order-1"
          imageOrder="order-1 lg:order-2"
          listItems={listItems}
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
