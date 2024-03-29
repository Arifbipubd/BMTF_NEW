/** @format */

"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Layout from "@src/components/Layout/Layout";

import { heatAim, listItems } from "@src/utils/verticals/heat-and-surface";

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
    <Layout pageTitle='BMTF | Heat And Surface Treatment Shop'>
      <Scrollbar progress={scrollProgress} />
      <section>
        <CommonHeroSection
          heading='Heat And Surface Treatment Shop'
          breadcrumb={pathName}
          imageSrc='/assets/images/shared/hero_image.png'
        />
        <DescriptionSection
          youtubeUrl='https://www.youtube.com/embed/6bGN5Y0pk-M?si=08BuWQN-oMKPitHD'
          descriptionOne={`Since 1980, the BMTF Heat and Surface Treatment Plant has been offering 
                a comprehensive range of thermal processing services. We have a strong track record of 
                producing high-quality products and have earned an ISO Certificate in recognition of our 
                stringent quality standards. Our facilities are equipped to handle a wide variety of 
                components, consistently delivering dependable results. Experienced engineers and technicians 
                oversee our heat treatment processes, ensuring they are aligned with the specific needs of our 
                customers.`}
          descriptionTwo={`In addition to heat treatment, our plant provides automatic production systems, 
                along with standard services such as anodizing, electroplating, phosphate cleaning, and etching. 
                We also offer manual and semi-automatic processes for immersing various products in chemical solutions`}
        />
        <AimSection
          imageSrc='/assets/images/verticals/heat-and-surface-aim.png'
          aimItems={heatAim}
        />
        <VerticalsListItems
          imageSrc='/assets/images/verticals/Heat_and_surface.png'
          listHeading='Our Promises Are'
          listItems={listItems}
          imageOrder='order-1 lg:order-2'
          textOrder='order-2 lg:order-1'
          description={`The BMTF H&ST Shop integrates the latest available technologies into our array of 
                manual and semi-automatic process lines. We prioritize treatments designed for the 21st century. 
                Our equipment is robust, and, significantly, we place a strong emphasis on the aesthetics of our 
                products.`}
        />
        <ConnectBMTF
          imageSrc='/assets/images/allVerticals/heat-n-surface.jpg'
          contactFirst='Deputy General Manager'
          contactSecond='Bangladesh Machine Tools Factory Ltd, Gazipur'
          phone='+880 1769-041093'
          email='bmtf.galvanizingshop@gmail.com'
        />
      </section>
    </Layout>
  );
}
