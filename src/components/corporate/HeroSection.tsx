"use client";

import React from "react";

type Props = {};

export default function HeroSection({}: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-7">
            <div className="bg-primary py-10 sm:py-16 md:py-28 lg:py-[154px] md:col-span-3 relative z-10">
                <div className="container mx-auto lg:-mr-[100px] xl:-mr-[160px] 2xl:-mr-56">
                    {/*eslint-disable-next-line @next/next/no-img-element*/}
                    <img
                        src="/assets/images/about/corporate_social.png"
                        alt=""
                        className="rounded-[10px]"
                    />
                </div>
                <div className="absolute top-4 right-2 -z-10">
                    {/*eslint-disable-next-line @next/next/no-img-element*/}
                    <img src="/assets/images/shared/Frame.png" alt="" />
                </div>
            </div>
            <div
                className={`bg-[url('/assets/images/home/shape30.png')] bg-cover bg-center bg-no-repeat
         flex justify-center items-center h-full md:col-span-4  py-8 sm:py-10 md:py-14 lg:py-0 -z-10`}
            >
                <div className="md:pl-1.5 md:pr-7 lg:pl-[90px] lg:pr-[90px] xl:pl-[140px] 2xl:pl-[180px] 2xl:pr-[150px]">
                    <div className="container mx-auto ">
                        <h2 className="text-headline text-2xl md:text-3xl lg:text-[34px] font-bold mb-5 md:mb-[30px]">
                            About <span className="text-yellow">BMTF</span>
                        </h2>
                        <p className="text-sm text-tertiary text-justify mb-3 md:mb-5 leading-[150%]">
                            Bangladesh Machine Tools Factory Limited (BMTF) is a
                            prominent state-owned entity operating under the
                            Bangladesh Army&quot;s supervision. BMTF located in
                            Gazipur, spans 260 acres and serves as a leading
                            industrial conglomerate. BMTF, led by the Chief of
                            Army Staff as the Board Chairman and a capable
                            Managing Director, boasts a strong leadership that
                            has propelled it to global recognition.
                        </p>
                        <p className="text-sm text-tertiary text-justify leading-[150%]">
                            With a blend of military and civilian officers and a
                            dedicated workforce, BMTF is committed to
                            contributing to Bangladesh&quot;s economic
                            transformation, aligning with the &quot;Delta Plan
                            2100.&quot; Its consistent revenue generation plays
                            a pivotal role in shaping the nation&quot;s progress
                            and development.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
