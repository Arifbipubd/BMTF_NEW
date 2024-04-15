/** @format */

"use client";

import React, { useState, useEffect } from "react";

import { singleNews } from "@src/utils/news-and-tender";

import CommonHeroSection from "@src/components/shared/CommonHeroSection";

import ConnectBMTF from "@src/components/shared/ConnectBMTF";
import SingleNews from "@src/components/shared/SingleNews";
import Layout from "@src/components/Layout/Layout";
import { useScroll } from "framer-motion";
import Scrollbar from "@src/components/shared/Scrollbar";

export default function Page({ params }: { params: { newsId: string } }) {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (x) =>
      setScrollProgress(x)
    );
    return () => unsubscribe();
  }, [scrollYProgress]);

  const id = parseInt(params.newsId);

  if (!id) {
    return <div className='text-headline text-center text-3xl'>Loading...</div>;
  }

  const newsItem = singleNews[id];

  return (
    <Layout pageTitle={`BMTF | ${newsItem.title.toUpperCase()}`}>
      <Scrollbar progress={scrollProgress} />
      <section>
        <CommonHeroSection
          heading={newsItem.title}
          breadcrumb={["/", "news-and-tenders"]}
          imageSrc='/assets/images/shared/noc-and-notice.png'
        />
        <SingleNews news={newsItem} newsId={id} />
        {/* <ConnectBMTF /> */}
      </section>
    </Layout>
  );
}
