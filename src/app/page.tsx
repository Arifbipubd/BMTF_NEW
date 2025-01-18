/** @format */

"use client";

import { useState, useEffect, useMemo } from "react";
import { useScroll } from "framer-motion";

import Herosection from "@src/components/Home/Herosection";
import GoalCard from "@src/components/shared/GoalCard";
import Review from "@src/components/shared/Review";
import AboutBMTF from "@src/components/Home/AboutBMTF";
import Experience from "@src/components/Home/Experience";
import Responsibility from "@src/components/Home/Responsibility";
import Feedback from "@src/components/Home/Feedback";
import Certifications from "@src/components/Home/Certifications";
import Sustainability from "@src/components/Home/Sustainability";
import Projects from "@src/components/Home/Projects";
import News from "@src/components/Home/News";
import Slider from "@src/components/Home/slider";
import Layout from "@src/components/Layout/Layout";
import Scrollbar from "@src/components/shared/Scrollbar";
import { getData } from "@src/utils/api/getData";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [slides, setSlides] = useState<Array<any>>([]);
  const [errorLog, setErrorLog] = useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(true); 

  const handleCloseModal = () => {
    setIsModalVisible(false); // Close the modal
  };


  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (x) =>
      setScrollProgress(x)
    );
    return () => unsubscribe();
  }, [scrollYProgress]);

  useEffect(() => {
    setLoading(true);
    getData("sliders")
      .then((data) => {
        setSlides(data);
        setLoading(false);
      })
      .catch((err) => {
        setErrorLog(err);
        setLoading(false);
      });
  }, [setSlides]);

  const slideItems = useMemo(() => <Herosection slides={slides} />, [slides]);

  return (
    <Layout pageTitle='BMTF | HOME'>
      <Scrollbar progress={scrollProgress} />
      <section>
      {isModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white p-4 rounded-lg shadow-lg h-[90%] w-[90%] md:w-[70%]">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-black bg-gray-200 hover:bg-gray-300 rounded-full p-2"
              onClick={handleCloseModal}
            >
              ✖
            </button>
            {/* Modal content */}
            <img
              src="/assets/images/Static.jpg"
              alt="Welcome Modal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
        {loading ? (
          <div className='min-h-[100vh] flex items-center justify-center bg-primary'>
            <div>
              {/*eslint-disable-next-line @next/next/no-img-element*/}
              <img
                src='/assets/images/home/Vector.svg'
                alt=''
                className='animate-spin w-full h-full'
              />
            </div>
          </div>
        ) : (
          <div>{slideItems}</div>
        )}
        <GoalCard />
        {/* <Review
          heading="Our Timelines"
          descriptionOne={`Founded over 150 years ago, the history of Tata group embodies, in many ways, 
                the history of entrepreneurship, philanthropy and compassionate capitalism in India, 
                and increasingly, the world. Explore its vibrant history through a set of timelines that 
                briefly highlight major milestones in its growth.`}
          descriptionTwo=""
          divVisible={false}
          imageUrl="/assets/images/shared/Packaging_01.png"
          link="/"
        /> */}
        <AboutBMTF />
        <Slider />
        <Experience />
        <Responsibility />
        <Certifications />
        <Sustainability />
        <Projects />
        <Feedback />
        <News />
      </section>
    </Layout>
  );
}