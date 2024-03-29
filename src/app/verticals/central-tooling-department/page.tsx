/** @format */

"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Layout from "@src/components/Layout/Layout";

import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import DescriptionSection from "@src/components/shared/DescriptionSection";
import AimSection from "@src/components/shared/AimSection";
import ConnectBMTF from "@src/components/shared/ConnectBMTF";
import { useScroll } from "framer-motion";
import Scrollbar from "@src/components/shared/Scrollbar";

const centralToolingAim: Array<any> = [
  {
    id: 1,
    heading: "quality assurance",
    text: [
      {
        id: 11,
        innerText: `To ensure and maintain quality, we have a comprehensive set of advanced 
        quality control equipment provided by the Bangladesh University of Engineering 
        and Technology (BUET).`,
      },
    ],
  },
];

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
    <Layout pageTitle='BMTF | Central Tooling Department (CTD Shop)'>
      <Scrollbar progress={scrollProgress} />
      <section>
        <CommonHeroSection
          heading='Central Tooling Department (CTD Shop)'
          breadcrumb={pathName}
          imageSrc='/assets/images/shared/hero_image.png'
        />
        <DescriptionSection
          youtubeUrl='https://www.youtube.com/embed/WiKM8ZKZspw?si=LYzseGfudJ68mFg0'
          descriptionOne={`The Central Tooling Department (CTD) is a vital component of the Machine 
                Shop at BMTF. This department is equipped with a range of specialized tools, including three 
                high-precision Jig Boring Machines, seven Lathe Machines, three Milling Machines, five 
                Grinding Machines, and fourteen Tool Sharpening Machines. Presently, we are successfully 
                producing items such as Dies, Jigs, Fixtures, Gear Boxes, Gears, and other critical machinery 
                components with a very precise tolerance of 0.001 millimeters.`}
        />
        <AimSection
          imageSrc='/assets/images/verticals/central-tooling-aim.png'
          aimItems={centralToolingAim}
        />
        <ConnectBMTF
          imageSrc='/assets/images/allVerticals/CTD.jpg'
          contactFirst='Deputy General Manager, Machine Shop'
          contactSecond='Bangladesh Machine Tools Factory Ltd, Gazipur'
          phone='+880 1769-041085'
          email='bmtfmachineshop@gmail.com'
        />
      </section>
    </Layout>
  );
}
