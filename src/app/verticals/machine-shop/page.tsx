/** @format */

"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Layout from "@src/components/Layout/Layout";

import {
  machineShopAim,
  machineShopPoints,
  listItems,
} from "@src/utils/verticals/machine-shop";

import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import DescriptionSection from "@src/components/shared/DescriptionSection";
import AimSection from "@src/components/shared/AimSection";
import CategoryOfServices from "@src/components/shared/CategoryOfServices";
import ConnectBMTF from "@src/components/shared/ConnectBMTF";
import SingleColumnGridList from "@src/components/shared/SingleColumnGridList";
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
    <Layout pageTitle='BMTF | Machine Shop'>
      <Scrollbar progress={scrollProgress} />
      <section>
        <CommonHeroSection
          heading='Machine Shop'
          breadcrumb={pathName}
          imageSrc='/assets/images/shared/hero_image.png'
        />
        <DescriptionSection
          youtubeUrl='https://www.youtube.com/embed/L3Klto1zKDw?si=DdCuFCOqAlQun2bT'
          descriptionOne={`The Machine Shop stands as the principal manufacturing unit within Bangladesh 
                Machine Tools Factory (BMTF) Limited, under the direct supervision of the Bangladesh Army. It 
                serves as the primary hub for industrial tools and spare parts production in Bangladesh. Since 
                the inception of BMTF, we have remained committed to expanding and refining our expertise in 
                machining.`}
          descriptionTwo={`Within the Machine Shop, we produce a diverse range of products, including load bodies for heavy vehicles, mobile workshops, electrical line hardware, various types of gears, and spare parts. These items are crafted through a variety of machining processes such as cutting, bending, drilling, milling, turning, and cold forging. The shop boasts an expansive area of 216,000 square feet, housing a total of 228 machines.`}
          descriptionThree={`Our most prized assets are our skilled and diligent staff, upon whom our 
                clients rely day in and day out. We maintain a dedicated team of professionals who labor 
                tirelessly to cultivate a positive work environment, placing strong emphasis on teamwork, 
                ethical conduct, and unwavering integrity in all our endeavors. The shop is outfitted with 
                state-of-the-art machinery, including shearing machines, bending machines, drilling machines, 
                turning centers, and machining centers, all capable of producing top-quality products.`}
        />
        <AimSection
          imageSrc='/assets/images/allVerticals/Machine-shop.jpg'
          aimItems={machineShopAim}
        />

        {/* <CategoryOfServices
                    imageSrc="/assets/images/verticals/machine-shop/machine-shop-category-image.png"
                    items={machineShopPoints}
                    textOrder="order-2 lg:order-1"
                    imageOrder="order-1 lg:order-2"
                /> */}
        <SingleColumnGridList
          imageSrc='/assets/images/verticals/Machine_shop.png'
          listHeading='Our Aim'
          backroundColor='bg-skyLight'
          listItems={listItems}
          imageOrder='order-1 lg:order-2'
          textOrder='order-2 lg:order-1'
          description={`The primary goal of this shop is to manufacture and deliver top-notch 
                products to customers within the shortest possible time, while upholding the esteemed 
                reputation of BMTF.`}
        />
        <ConnectBMTF
          imageSrc='/assets/images/allVerticals/Machine-shop.jpg'
          contactFirst='Deputy General Manager, Machine Shop'
          contactSecond='Bangladesh Machine Tools Factory Ltd, Gazipur'
          phone='+880 1769-041085'
          email='bmtfmachineshop@gmail.com'
        />
      </section>
    </Layout>
  );
}
