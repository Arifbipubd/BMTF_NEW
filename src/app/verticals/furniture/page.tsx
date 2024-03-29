/** @format */

"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Layout from "@src/components/Layout/Layout";

import {
  furnitureAim,
  categoryItems,
  points,
  furnitureListItems,
  sectionCard,
} from "@src/utils/verticals/furniture";

import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import DescriptionSection from "@src/components/shared/DescriptionSection";
import AimSection from "@src/components/shared/AimSection";
import VerticalsListItems from "@src/components/shared/VerticalsListItems";
import ConnectBMTF from "@src/components/shared/ConnectBMTF";
import CategoryOfServices from "@src/components/shared/CategoryOfServices";
import SectionCard from "@src/components/shared/SectionCard";
import { useScroll } from "framer-motion";
import Scrollbar from "@src/components/shared/Scrollbar";
import Category from "@src/components/shared/Category";

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
    <Layout pageTitle='BMTF | Furniture Factory'>
      <Scrollbar progress={scrollProgress} />
      <section>
        <CommonHeroSection
          heading='Furniture Factory'
          breadcrumb={pathName}
          imageSrc='/assets/images/shared/hero_image.png'
        />
        <DescriptionSection
          youtubeUrl='https://www.youtube.com/embed/Sf1SDoOmfwc?si=mI9BGkbNBmKV-8aG'
          descriptionOne={`The BMTF Furniture Factory is renowned for its distinctive style and high-quality 
                    furniture. Utilizing cutting-edge technology and machinery, we offer an extensive range of furniture
                     and home decor that mirrors your personal taste and lifestyle. Our team of designers and carpenters 
                     collaborate to cater to our clients' aesthetic preferences. Our furniture is characterized by its
                      simple yet elegant design, and a commitment to using honest, quality materials. We are dedicated 
                      to crafting beautiful and flawless pieces, ensuring our products are both comfortable and elegant.`}
          descriptionTwo={`
                As the newest flagship of Bangladesh Machine Tools Factory Limited, the BMTF Furniture Factory 
                commenced operations in September 2018 with a 90,000 square foot area. It now operates in a 150,000 
                square foot space, establishing itself as a leader in furniture manufacturing in the country. We source
                 and prepare wood from our own sawmill, guaranteeing it is properly seasoned and treated under the 
                 supervision of specialists.
                `}
        />
        <AimSection
          imageSrc='/assets/images/verticals/furniture/aim.png'
          aimItems={furnitureAim}
        />
        <CategoryOfServices
          imageSrc='/assets/images/verticals/furniture/category_of_service_1.png'
          items={points}
          textOrder='order-2 lg:order-1'
          imageOrder='order-1 lg:order-2'
        />
        <Category
          heading='Product Categories'
          subHeading={`We can serve you by offering the following product categories`}
          categories={categoryItems}
        />
        <SectionCard items={sectionCard} />
        <VerticalsListItems
          imageSrc='/assets/images/verticals/furniture/ourPromises.png'
          listHeading='Our Promises Are'
          listItems={furnitureListItems}
        />
        <ConnectBMTF
          imageSrc='/assets/images/allVerticals/Furniture.jpg'
          contactFirst='Sales Executive, Furniture Factory'
          phone='01769-044276'
          email='furniture.bmtf@gmail.com'
        />
      </section>
    </Layout>
  );
}
