/** @format */

"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Layout from "@src/components/Layout/Layout";

import {
  foundryAim,
  cardItems,
  listItems,
} from "@src/utils/verticals/foundry-shop";

import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import DescriptionSection from "@src/components/shared/DescriptionSection";
import AimSection from "@src/components/shared/AimSection";
import ConnectBMTF from "@src/components/shared/ConnectBMTF";
import ProcessCard from "@src/components/shared/ProcessCard";
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
    <Layout pageTitle='BMTF | Foundry Shop'>
      <Scrollbar progress={scrollProgress} />
      <section>
        <CommonHeroSection
          heading='Foundry Shop'
          breadcrumb={pathName}
          imageSrc='/assets/images/shared/hero_image.png'
        />
        <DescriptionSection
          youtubeUrl='https://www.youtube.com/embed/6gAQhiQGRwA?si=yPinW2-ZmLPDDaDs'
          descriptionOne={`The Foundry Shop, established in 1967, has been providing clients with a 
                diverse range of casting solutions ever since. It stands as one of the most versatile shops 
                of its kind in Bangladesh, offering a variety of services in conjunction with its sister shops. 
                We manufacture different products using both Ferrous and Non-Ferrous metals, each with various 
                chemical compositions.`}
          descriptionTwo={`
                In alignment with BMTF's vision and values, the Foundry Shop is committed to meeting new 
                challenges to ensure the highest customer satisfaction. Our team of engineers, tooling 
                specialists, and dedicated manufacturing staff leverage the latest technologies to create 
                innovative and cost-effective, long-lasting products.
                `}
        />
        <AimSection
          imageSrc='/assets/images/verticals/foundry-aim.png'
          aimItems={foundryAim}
        />
        <ProcessCard
          heading='Our Manufacturing Process'
          cardItems={cardItems}
        />
        <VerticalsListItems
          imageSrc='/assets/images/verticals/foundry-list-image.png'
          listHeading='Our Promises Are'
          listItems={listItems}
        />
        <ConnectBMTF
          imageSrc='/assets/images/allVerticals/Foundary-shop.png'
          contactFirst='Foreman, Foundry Shop'
          contactSecond='Bangladesh Machine Tools Factory Ltd, Gazipur'
          phone='+880 1769-041096'
          email='foundrybmtf@gmail.com'
        />
      </section>
    </Layout>
  );
}
