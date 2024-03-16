/** @format */

"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Layout from "@src/components/Layout/Layout";

import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import DescriptionSection from "@src/components/shared/DescriptionSection";
import AssemblyProcess from "@src/components/shared/AssemblyProcess";
import ConnectBMTF from "@src/components/shared/ConnectBMTF";
import { useScroll } from "framer-motion";
import Scrollbar from "@src/components/shared/Scrollbar";
import Category from "@src/components/shared/Category";

const assemblyProcess: Array<any> = [
  {
    id: 1,
    heading: "Assembly Process",
    textItems: [
      {
        id: 1,
        text: `Our assembly lines are organized into three main categories: single model, 
                mixed model, and multi-model assembly lines.`,
      },
      {
        id: 2,
        text: `In the single model assembly line, we focus on assembling a single product 
                without any variants. All operations at the stations along the line are standardized, 
                resulting in identical products upon completion.`,
      },
      {
        id: 3,
        text: `The mixed-model assembly line handles the assembly of variants of a single product 
                with varying operation times for different models. This line allows for model sequencing 
                without resource constraints, enabling the processing of different models without the need 
                for modifications.`,
      },
      {
        id: 4,
        text: `The multi-model assembly line represents the most complex method in terms of operational
                 requirements. Here, we carry out the assembly of different products that require distinct 
                 assembly processes.`,
      },
    ],
  },
];

const categoryItems: Array<any> = [
  {
    id: 1,
    label: "Truck",
    categoryImg:
      "/assets/images/single-verticals-Icons/Vehicle Assembly shop/truck.png",
  },
  {
    id: 2,
    label: "Pickup",
    categoryImg:
      "/assets/images/single-verticals-Icons/Vehicle Assembly shop/pickup.png",
  },
  {
    id: 3,
    label: "Jeep",
    categoryImg:
      "/assets/images/single-verticals-Icons/Vehicle Assembly shop/jeep.png",
  },
  {
    id: 4,
    label: "Fuel Trailer",
    categoryImg:
      "/assets/images/single-verticals-Icons/Vehicle Assembly shop/fuel-trailer.png",
  },
  {
    id: 5,
    label: "Ambulance",
    categoryImg:
      "/assets/images/single-verticals-Icons/Vehicle Assembly shop/emergency-ambulance.png",
  },
  {
    id: 6,
    label: "Lorry",
    categoryImg:
      "/assets/images/single-verticals-Icons/Vehicle Assembly shop/lorry.png",
  },
  {
    id: 1,
    label: "Agriculture",
    categoryImg:
      "/assets/images/single-verticals-Icons/Vehicle Assembly shop/agricultaral.png",
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
    <Layout pageTitle='BMTF | Vehicle Assembly Shop'>
      <Scrollbar progress={scrollProgress} />
      <section>
        <CommonHeroSection
          heading='Vehicle Assembly Shop'
          breadcrumb={pathName}
          imageSrc='/assets/images/shared/hero_image.png'
        />
        <DescriptionSection
          youtubeUrl='https://www.youtube.com/embed/lotbMoeqOOo?si=cxvRpwKkBQ69sSUD'
          descriptionOne={`In 2001, the Bangladesh Machine Tools Factory (BMTF) established a 
                state-of-the-art Vehicle Assembly Shop, equipped with cutting-edge machinery and tools, 
                to uphold the highest quality standards in vehicle assembly. This facility boasts high-speed 
                production lines dedicated to activities such as spot welding, painting, and rigorous vehicle 
                testing, enabling an annual production capacity of 3,000 motorcycles and 1,500 wagons. Over 
                the past two decades, we have successfully assembled a diverse range of vehicles including 
                trucks, pickups, buses, jeeps, and more.`}
          descriptionTwo={`
                Currently, we are actively engaged in international collaborations with top automobile 
                companies, with a focus on expanding our business beyond borders. Furthermore, we have 
                undertaken a new venture to assemble advanced armored tanks and combat vehicles. Our 
                continuous exploration in the automobile sector has had a positive impact on our country's 
                economy and its citizens. With our strategic location, well-developed logistics, skilled workforce, 
                robust infrastructure, and our status as a state-owned enterprise, we stand as one of the leading 
                automobile assembly industries in our nation.
                `}
        />
        <AssemblyProcess
          imageSrc='/assets/images/verticals/assembly_process.png'
          items={assemblyProcess}
        />

        <Category
          heading='Product Categories'
          subHeading={`We can serve you by offering the following product categories`}
          categories={categoryItems}
        />

        <ConnectBMTF
          imageSrc='/assets/images/allVerticals/vehicle-assembly.jpg'
          contactFirst='Deputy General Manager, Vehicle Assembly Shop'
          contactSecond='Bangladesh Machine Tools Factory Ltd, Gazipur-1700'
          phone='+8801769041086'
          email='bmtfassy@gmail.com'
        />
      </section>
    </Layout>
  );
}
