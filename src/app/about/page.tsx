/** @format */

import Layout from "@src/components/Layout/Layout";
import BMTF from "@src/components/about/BMTF";
import Capabilities from "@src/components/about/Capabilities";
import Directors from "@src/components/about/Directors";
import GoalCard from "@src/components/shared/GoalCard";
import Review from "@src/components/shared/Review";
import Members from "@src/components/about/Members";
import Organogram from "@src/components/about/Organogram";
import AboutHeroSection from "@src/components/about/aboutHeroSection";

export default function Home() {
    return (
        <Layout pageTitle="BMTF | About Us">
            <section>
                <AboutHeroSection
                    heading="Empowering Innovation, Precision, and Excellence"
                    imageSrc="/assets/images/about/Electronic_Assembly_04.png"
                />
                <BMTF />
                <GoalCard />
                <Review
                    heading="Business Strategy"
                    descriptionOne={`Our strategic focus is on expanding our scope in manufacturing, 
                assembly, and fabrication across a wide spectrum of products. This includes military and 
                commercial vehicles, electrical line hardware, machine tools & spares, concrete poles & piles, 
                footwear and leather products, wooden and metal furniture, steel structures, CFL & LED bulbs, 
                solar street lights, electronic items and gadgets, healthcare & hygiene products, badges & metal 
                crafts, and products under e-Governance initiatives. Our goal is twofold: to bolster the economic 
                viability and operational dynamism of our factory while also contributing to reducing Bangladesh's 
                import reliance on these goods.`}
                    descriptionTwo={`Moreover, we aim to actively engage in government projects, spanning construction, 
                simulation, security, transportation, energy, agriculture, and other viable sectors. Through 
                manufacturing, assembly, trading, and supply, our objective is to foster sustainable growth 
                within the industry, effectively meeting the demands of evolving scenarios and contributing 
                significantly to our nation's progress.`}
                    imageUrl="/assets/images/about/Pattern_shop_01.png"
                    link=""
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
