/** @format */

"use client";

import { useState, useEffect } from "react";
import { useScroll } from "framer-motion";

import Layout from "@src/components/Layout/Layout";
import BMTF from "@src/components/about/BMTF";
import Capabilities from "@src/components/about/Capabilities";
import Directors from "@src/components/about/Directors";
import GoalCard from "@src/components/shared/GoalCard";
import Review from "@src/components/shared/Review";
import Members from "@src/components/about/Members";
import Organogram from "@src/components/about/Organogram";
import AboutHeroSection from "@src/components/about/aboutHeroSection";
import Scrollbar from "@src/components/shared/Scrollbar";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (x) =>
      setScrollProgress(x)
    );
    return () => unsubscribe();
  }, [scrollYProgress]);
  return (
    <Layout pageTitle='BMTF | About Us'>
      <Scrollbar progress={scrollProgress} />
      <section>
        <AboutHeroSection
          heading='Empowering Innovation, Precision, and Excellence'
          imageSrc='/assets/images/about/Electronic_Assembly_04.png'
        />
        <BMTF />
        <GoalCard />
        <Review
          heading='Business Strategy'
          descriptionOne={`BMTF, operating under the Bangladesh Army's stewardship, aspires to spearhead the nation's industrial advancement towards a Digital Bangladesh and Smart Bangladesh era. Our strategic mission is to leverage our extensive portfolio of 566 products across 19 factory units to drive economic growth, technological innovation, and social prosperity. With a commitment to quality and efficiency, we aim to contribute significantly to reducing Bangladesh's import dependency while aligning with the objectives of the Fourth Industrial Revolution.
`}
          descriptionTwo={`Embracing the principles of a Digital Bangladesh, we prioritize the integration of advanced technologies and digital solutions into our manufacturing processes. This entails harnessing automation, data analytics, and artificial intelligence to optimize production efficiency and product quality. Furthermore, we envision BMTF playing a pivotal role in the realization of Smart Bangladesh initiatives by manufacturing cutting-edge products in sectors such as renewable energy, smart infrastructure, and information technology.
`}
          descriptionThree={`Aligned with the government's vision for a prosperous and technologically advanced Bangladesh, BMTF is poised to lead the charge towards a future-ready industrial sector. Through our relentless pursuit of excellence and innovation, we aim to contribute meaningfully to shaping Bangladesh's economic trajectory and realizing the aspirations of its citizens for a brighter, more prosperous future.
`}
          imageUrl='/assets/images/about/Pattern_shop_01.png'
          link=''
          divVisible
        />
        <Capabilities />
        <Directors />
        <Members />
        <Organogram />
      </section>
    </Layout>
  );
}
