import React from "react";
import NewsSideNavigation from "./NewsSideNavigation";

type Props = {
    news: any;
    newsId: number;
};

export default function SingleNews({ news, newsId }: Props) {
    return (
        <div className="py-10 md:py-16 lg:py-[70px] bg-white">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-[30px]">
                    <div className="order-2 lg:order-1 lg:col-span-3">
                        <div className="mb-6 lg:mb-[30px]">
                            {/*eslint-disable-next-line @next/next/no-img-element*/}
                            <img
                                src={news.imageSrc}
                                alt=""
                                className="w-full"
                            />
                        </div>
                        <div className="flex flex-col gap-5">
                            {news.description.map((item: any, index: any) => (
                                <p
                                    key={index}
                                    className="text-whiteBg text-sm 2xl:text-base text-justify"
                                >
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 lg:col-span-1">
                        <NewsSideNavigation newsId={newsId} />
                    </div>
                </div>
            </div>
        </div>
    );
}
