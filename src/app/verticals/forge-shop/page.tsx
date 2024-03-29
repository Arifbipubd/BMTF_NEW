/** @format */

"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Layout from "@src/components/Layout/Layout";

import { forgeAim, cardItems } from "@src/utils/verticals/froge-shop";

import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import DescriptionSection from "@src/components/shared/DescriptionSection";
import AimSection from "@src/components/shared/AimSection";
import ConnectBMTF from "@src/components/shared/ConnectBMTF";
import ProcessCard from "@src/components/shared/ProcessCard";
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
    <Layout pageTitle='BMTF | Forge Shop'>
      <Scrollbar progress={scrollProgress} />
      <section>
        <CommonHeroSection
          heading='Forge Shop'
          breadcrumb={pathName}
          imageSrc='/assets/images/shared/hero_image.png'
        />
        <DescriptionSection
          youtubeUrl='https://www.youtube.com/embed/6bGN5Y0pk-M?si=08BuWQN-oMKPitHD'
          descriptionOne={`BMTF Forge Shop is a renowned brand in the country's forging industry. 
                Since 1980, the shop has been consistently producing high-quality products for the nation. 
                We specialize in the manufacturing and marketing of die, cold and open die, rolled ring forged, 
                and machined components. Our daily production capacity stands at approximately 10 tons. Over 
                the years, we have experienced exponential growth, representing values of quality, dedication, 
                and innovation. Our forging process ensures parts possess appropriate mechanical properties, 
                and we maintain stringent quality control at every step. We are committed to continuous and 
                systematic development of our skills, processes, and services, ensuring long-term sustainability 
                and customer satisfaction. Our production quality has been ISO 9001:2015 certified.`}
        />
        <AimSection
          imageSrc='/assets/images/verticals/Forge_shop.png'
          aimItems={forgeAim}
        />
        <ProcessCard
          heading='Our Manufacturing Process'
          cardItems={cardItems}
        />
        <ConnectBMTF
          imageSrc='/assets/images/verticals/forge_shop/forge_2.png'
          contactFirst='Deputy General Manager, Forge Shop'
          contactSecond='Bangladesh Machine Tools Factory Ltd, Gazipur'
          phone='+880 1769-041093'
          email='forgeshopbmtf@gmail.com'
        />
      </section>
    </Layout>
  );
}
