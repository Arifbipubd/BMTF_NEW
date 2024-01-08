/** @format */

import Herosection from "@src/components/Home/Herosection";
import GoalCard from "@src/components/Home/GoalCard";
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

export default function Home() {
    return (
        <>
            <Herosection />
            <GoalCard />
            <Review
                heading="Our Timelines"
                description={`Founded over 150 years ago, the history of Tata group embodies, in many ways, 
                the history of entrepreneurship, philanthropy and compassionate capitalism in India, 
                and increasingly, the world. Explore its vibrant history through a set of timelines that 
                briefly highlight major milestones in its growth.`}
                imageUrl="/assets/images/shared/Packaging_01.png"
                link="/"
            />
            <AboutBMTF />
            <Slider />
            <Experience />
            <Responsibility />
            <Certifications/>
            <Sustainability />
            <Projects />
            <Feedback />
            <News />
        </>
    );
}
