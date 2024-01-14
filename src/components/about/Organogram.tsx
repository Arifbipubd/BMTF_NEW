import React from "react";

type Props = {};

export default function Organogram({}: Props) {
    return (
        <div className="bg-white py-16 md:py-20 lg:py-[101px] overflow-x-scroll">
            <div className="container mx-auto grid grid-cols-1 place-items-center">
                <div className="mb-14 md:mb-20 lg:mb-[51px]">
                    <p className="text-black  text-2xl font-medium text-center">
                    Organogram
                    </p>
                </div>
                {/* <div className="flex flex-col items-center">
                    <div className="bg-white h-[3px] w-[882px] mb-[220px]" />
                    <div className="flex gap-[30px]">
                        {membersOne.map((item) => (
                            <div className={``} key={item.id}>
                                <div className="py-6 px-12 bg-white/10 flex flex-col items-center text-center w-fit">
                                    <div
                                        className={`-mt-20 mb-3 relative flex justify-center after:content-[''] 
                                after:absolute after:bottom-[100%] after:left-[50%] after:-translate-x-1/2 
                                after:w-1 after:h-[190px] sm:after:h-[170px] after:bg-white`}
                                    >
                                        <img
                                            src="/assets/images/about/Avater.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="">
                                        <p className="text-white text-sm">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> */}
                <div>
                    <img src="/assets/images/about/Organogram.svg" alt="" />
                </div>
            </div>
        </div>
    );
}
