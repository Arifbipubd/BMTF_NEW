/** @format */

"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Layout from "@src/components/Layout/Layout";

import {
  galvanizationAim,
  listItems,
} from "@src/utils/verticals/galvanizing-plant";

import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import DescriptionSection from "@src/components/shared/DescriptionSection";
import AimSection from "@src/components/shared/AimSection";
import ConnectBMTF from "@src/components/shared/ConnectBMTF";
import VerticalsListItems from "@src/components/shared/VerticalsListItems";
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
    <Layout pageTitle='BMTF | Galvanizing Plant'>
      <Scrollbar progress={scrollProgress} />
      <section>
        <CommonHeroSection
          heading='Galvanizing Plant'
          breadcrumb={pathName}
          imageSrc='/assets/images/shared/hero_image.png'
        />
        <DescriptionSection
          youtubeUrl='https://www.youtube.com/embed/u0KskWFBjkk?si=5Rj29z5s7QXsmxai'
          descriptionOne={`The BMTF Galvanizing Shop is committed to strengthening and enhancing the 
                durability of steel. Established in 2018, it holds special certification for its work. The shop 
                boasts a spacious area of approximately 12,000 square feet and is staffed by highly skilled workers. 
                They utilize three advanced machines to reinforce steel and maintain a dedicated cleaning area. 
                Furthermore, they demonstrate environmental responsibility through the operation of a specialized 
                plant. By employing cutting-edge technology, they consistently deliver exceptional results to their 
                customers. The shop upholds a safe, clean environment with excellent lighting and fresh air, 
                contributing to the well-being and motivation of their`}
        />
        <AimSection
          imageSrc='/assets/images/verticals/galvanizing-aim.png'
          aimItems={galvanizationAim}
        />
        <VerticalsListItems
          imageSrc='/assets/images/verticals/galvanizing-list-image.png'
          listHeading='Our Promises Are'
          listItems={listItems}
          imageOrder='order-1 lg:order-2'
          textOrder='order-2 lg:order-1'
        />
        <ConnectBMTF
          imageSrc='/assets/images/allVerticals/galvanizing-shop.jpg'
          contactFirst='Deputy General Manager'
          contactSecond='Bangladesh Machine Tools Factory Ltd, Gazipur'
          phone='+880 1769-041093'
          email='bmtf.galvanizingshop@gmail.com'
        />
      </section>
    </Layout>
  );
}
