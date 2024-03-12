/** @format */

"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Layout from "@src/components/Layout/Layout";

import { aim, listItems, points } from "@src/utils/verticals/cfl-and-led-bulb";

import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import DescriptionSection from "@src/components/shared/DescriptionSection";
import AimSection from "@src/components/shared/AimSection";
import ConnectBMTF from "@src/components/shared/ConnectBMTF";
import CategoryOfServices from "@src/components/shared/CategoryOfServices";
import VerticalsListItems from "@src/components/shared/VerticalsListItems";
import CflBannerSection from "@src/components/verticals/CflBannerSection";
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
    <Layout pageTitle='BMTF | CFL & LED Bulb'>
      <Scrollbar progress={scrollProgress} />
      <section>
        <CommonHeroSection
          heading='CFL & LED Bulb'
          breadcrumb={pathName}
          imageSrc='/assets/images/shared/hero_image.png'
        />
        <DescriptionSection
          youtubeUrl='https://www.youtube.com/embed/2dBaoLQC-wE?si=KLoBgLgPtnbQhKPL'
          descriptionOne={`The BMTF CFL & LED bulb factory is a leading manufacturer and 
                exporter in the country, specializing in an impressive range of innovative, diverse, 
                user-friendly, and high-quality Light Emitting Diode-LED and Compact Fluorescent Lamps-CFL 
                tubes and bulbs. Under the guidance of the Honorable Chief of Army Staff and Chairman of 
                Bangladesh Machines and Tools Factory-BMTF Limited, production of CFL and LED bulbs commenced 
                on October 1, 2011. Our state-of-the-art facilities, along with an excellent logistics and 
                supply management network, have enabled us to reach even the most remote areas of the country. 
                With a dedicated workforce of approximately 50 employees, we continuously work towards the 
                improvement of our project. Moreover, we maintain a research and quality control department 
                that diligently monitors the products at every stage to meet the standards of the International 
                Organization for Standardization. Our products have garnered national acclaim for their longevity, 
                energy efficiency, low maintenance, and remarkable energy-efficient features.
                `}
        />
        <AimSection
          imageSrc='/assets/images/verticals/machine-shop/machine-shop-aim.png'
          aimItems={aim}
        />
        <CategoryOfServices
          imageSrc='/assets/images/verticals/CFL.png'
          items={points}
          textOrder='order-2 lg:order-1'
          imageOrder='order-1 lg:order-2'
        />
        <CflBannerSection />
        <VerticalsListItems
          imageSrc='/assets/images/verticals/cfl-list-image.png'
          listHeading='Our Promises Are'
          listItems={listItems}
        />
        <ConnectBMTF
          imageSrc='/assets/images/allVerticals/CFL-and-LED.jpg'
          contactFirst='Asst Manager, CFL and LED Bulb Factory'
          contactSecond='Bangladesh Machine Tools Factory Ltd, Gazipur'
          phone='+880 1769-041184'
          email='bmtf.bd.cfl.led@gmail.com'
        />
      </section>
    </Layout>
  );
}
