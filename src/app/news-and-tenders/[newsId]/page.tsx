/** @format */

"use client";

import React, { useState, useEffect, useMemo } from "react";

import CommonHeroSection from "@src/components/shared/CommonHeroSection";
import SingleNews from "@src/components/shared/SingleNews";
import Layout from "@src/components/Layout/Layout";
import { useScroll } from "framer-motion";
import Scrollbar from "@src/components/shared/Scrollbar";
import useNewsData from "@src/utils/useNewsData";

export default function Page({ params }: { params: { newsId: string } }) {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);
  const news = useNewsData()

  // Extract the id first
  const id = parseInt(params.newsId);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (x) =>
      setScrollProgress(x)
    );
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Use useMemo to find the newsItem based on the id
  const newsItem = useMemo(() => {
    if (!news) return null; // If news is not loaded yet
    return news.find((item) => item.id === id) || null; // Handle case when not found
  }, [news, id]);

  // Check if the id or newsItem is valid
  if (!id || !newsItem) {
    return (
      <div className="bg-primary text-center text-3xl min-h-[80vh] flex justify-center items-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  return (
    <Layout pageTitle={`BMTF | ${newsItem.title?.toUpperCase()}`}>
      <Scrollbar progress={scrollProgress} />
      <section>
        <CommonHeroSection
          heading={newsItem.title}
          breadcrumb={["/", "news-and-tenders"]}
          imageSrc="/assets/images/shared/noc-and-notice.png"
        />
        <SingleNews news={newsItem} newsId={id} />
        {/* <ConnectBMTF /> */}
      </section>
    </Layout>
  );
}
