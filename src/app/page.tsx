"use client";

import { useState, useEffect, useRef } from "react";
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
import Pointer from "@src/components/shared/Pointer";

export default function Home() {
    const { scrollYProgress } = useScroll();
    const [scrollProgress, setScrollProgress] = useState(0);
    const bodyRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        bodyRef.current = document.body;
      }, []);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change',(x) =>
            setScrollProgress(x)
        );
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <Layout pageTitle="BMTF | HOME">
            <Scrollbar progress={scrollProgress} />
            <section ref={bodyRef}>
                <Herosection />
                <GoalCard />
                <Review
                    heading="Our Timelines"
                    descriptionOne={`Founded over 150 years ago, the history of Tata group embodies, in many ways, 
                the history of entrepreneurship, philanthropy and compassionate capitalism in India, 
                and increasingly, the world. Explore its vibrant history through a set of timelines that 
                briefly highlight major milestones in its growth.`}
                    descriptionTwo=""
                    divVisible={false}
                    imageUrl="/assets/images/shared/Packaging_01.png"
                    link="/"
                />
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
            {/* <Pointer bodyRef={bodyRef}/> */}
        </Layout>
    );
}
