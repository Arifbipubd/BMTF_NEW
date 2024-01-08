import React from "react";

type Props = {};

export default function Feedback({}: Props) {
    return (
        <div className="bg-headline py-12 md:py-16 lg:py-[70px]">
            <div className="container mx-auto flex flex-col justify-center items-center">
                <div className="flex justify-center mb-5 md:mb-[30px]">
                    <img
                        src="/assets/images/home/Director.png"
                        alt=""
                        className="rounded-full"
                    />
                </div>
                <div className="mb-10 md:mb-12 lg:mb-[52px] lg:max-w-[862px]">
                    <p className="text-white text-sm text-center">
                        Under the banner of Bangladesh Machine Tools Factory
                        Limited (BMTF), we stand at the forefront of innovation
                        and industrial excellence. Spanning across 260 acres in
                        Gazipur, BMTF is more than an industrial conglomerate;
                        it's a testament to our commitment to Bangladesh's
                        economic ascent. Guided by the visionary leadership of
                        the Chief of Army Staff as the Board Chairman and
                        supported by a skilled team, we've earned global
                        recognition through our relentless pursuit of
                        excellence.
                    </p>
                </div>
                <div className="mb-3 md:mb-[18px]">
                    <p className="text-white text-sm text-center">
                        Major General Sultanuzzaman Md Saleh Uddin, OSP, SGP,
                        ndc
                    </p>
                </div>
                <div>
                    <p className="text-yellow text-sm font-medium">
                        Managing Director, BMTF Ltd
                    </p>
                </div>
            </div>
        </div>
    );
}
