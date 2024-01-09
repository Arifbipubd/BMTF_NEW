import React from "react";

type Props = {};

export default function Sustainability({}: Props) {
    return (
        <div className="bg-white grid grid-cols-1 md:grid-cols-2 place-items-center gap-[30px] py-10 lg:py-0">
            <div className="w-full">
                <img
                    src="/assets/images/home/Packaging_02_1.png"
                    alt=""
                    className="md:rounded-tr-[30px] w-full"
                />
            </div>
            <div className="container mx-auto grid grid-cols-4">
                <div className="col-span-4 md:col-span-3">
                    <div className="mb-5 md:mb-6 lg:mb-[30px]">
                        <h1 className="text-headline text-3xl md:text-4xl lg:text-[2.5rem] font-bold">
                            Sustainability
                        </h1>
                    </div>
                    <div className="mb-5 md:mb-6 lg:mb-[30px]">
                        <h3 className="text-primary font-semibold md:text-lg mb-3 md:mb-4 lg:mb-5">
                            Energy Efficiency:
                        </h3>
                        <p className="text-tertiary text-sm text-justify">
                            We prioritize energy-efficient practices throughout
                            our manufacturing processes. By investing in modern
                            technology and optimizing our machinery, we aim to
                            reduce energy consumption and lower our carbon
                            footprint significantly.
                        </p>
                    </div>
                    <div className="mb-5 md:mb-6 lg:mb-[30px]">
                        <h3 className="text-primary font-semibold md:text-lg mb-3 md:mb-4 lg:mb-5">
                            Resource Conservation:
                        </h3>
                        <p className="text-tertiary text-sm text-justify">
                            We understand the importance of preserving natural
                            resources. Our factory implements strategies to
                            minimize waste generation and maximize resource
                            efficiency. From raw material procurement to waste
                            management, we strive to minimize our environmental
                            impact.
                        </p>
                    </div>
                    <div className="mb-5 md:mb-6 lg:mb-[30px]">
                        <h3 className="text-primary font-semibold md:text-lg mb-3 md:mb-4 lg:mb-5">
                            Green Initiatives:
                        </h3>
                        <p className="text-tertiary text-sm text-justify">
                            We actively participate in green initiatives and use
                            environmentally friendly materials wherever
                            possible. From eco-friendly packaging solutions to
                            utilizing sustainable materials in our tools'
                            production, we continually seek ways to reduce our
                            environmental impact.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
