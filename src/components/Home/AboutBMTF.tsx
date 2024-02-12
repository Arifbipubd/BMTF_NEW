/** @format */

import React from "react";

type Props = {};

function AboutBMTF({}: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-7">
            <div className="bg-primary py-20 md:py-32 lg:py-[154px] md:col-span-3">
                <div className="container mx-auto flex lg:-mr-24 xl:-mr-[170px] gap-10 justify-end">
                    <div className="relative">
                        {/*eslint-disable-next-line @next/next/no-img-element*/}
                        <img
                            src="/assets/images/home/Foundry_shop_05.png"
                            alt=""
                            className="rounded-[10px]"
                        />
                        <div
                            className={`absolute -right-28 top-[50%] -translate-y-1/2 -my-1/2 
                                        bg-primary p-4 xl:p-[30px] rounded-full
                                        border-4 border-white z-10 flex justify-center
                                `}
                        >
                            {/*eslint-disable-next-line @next/next/no-img-element*/}
                            <img
                                src="assets/images/home/Vector.svg"
                                alt=""
                                className="w-fit"
                            />
                        </div>
                    </div>
                    <div className="z-0">
                        <div className="mb-5">
                            {/*eslint-disable-next-line @next/next/no-img-element*/}
                            <img
                                src="/assets/images/home/CTD_01.png"
                                alt=""
                                className="rounded-[10px]"
                            />
                        </div>
                        <div>
                            {/*eslint-disable-next-line @next/next/no-img-element*/}
                            <img
                                src="/assets/images/home/CTD_02.png"
                                alt=""
                                className="rounded-[10px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`bg-[url('/assets/images/home/shape30.png')] bg-cover bg-center bg-no-repeat
         flex items-center h-full md:col-span-4  py-10 lg:py-0 -z-10`}
            >
                <div className="pl-12 pr-12 lg:pl-[80px] lg:pr-[56px] xl:pl-[150px]">
                    <div className="container mx-auto">
                        <h2 className="text-headline text-2xl md:text-3xl lg:text-[32px] font-bold mb-5 md:mb-[30px]">
                            About <span className="text-yellow">BMTF</span>
                        </h2>
                        <p className="text-sm text-tertiary text-justify mb-3 md:mb-5">
                            Bangladesh Machine Tools Factory Limited (BMTF) is a
                            prominent state-owned entity operating under the
                            Bangladesh Army&quot;s supervision. BMTF located in
                            Gazipur, spans 260 acres and serves as a leading
                            industrial conglomerate. BMTF, led by the Chief of
                            Army Staff as the Board Chairman and a capable
                            Managing Director, boasts a strong leadership that
                            has propelled it to global recognition.
                        </p>
                        <p className="text-sm text-tertiary text-justify">
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

export default AboutBMTF;
