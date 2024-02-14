import React from "react";
import { FiCheck } from "react-icons/fi";

type Props = {
    imageSrc: string;
    listHeading: string;
    listItems: Array<any>;
    backroundColor: string;
    imageOrder?: string;
    textOrder?: string;
    description?: string;
};

export default function SingleColumnGridList({
    imageSrc,
    listHeading,
    listItems,
    backroundColor = "bg-white",
    imageOrder,
    textOrder,
    description,
}: Props) {
    return (
        <div
            className={`grid grid-cols-1 lg:grid-cols-2 lg:place-items-center ${backroundColor}`}
        >
            <div
                className={`container mx-auto  ${
                    textOrder !== null ? textOrder : "order-2 lg:order-1"
                }`}
            >
                <div
                    className={`py-16 lg:py-[54px] ${
                        textOrder === "order-2 lg:order-1"
                            ? "lg:pr-2.5 lg:pl-10 xl:pr-1.5 xl:pl-[101px]"
                            : "lg:pl-2.5 xl:pl-1.5 lg:pr-10 xl:pr-[109px]"
                    }`}
                >
                    <div className="mb-5 md:mb-6 lg:mb-[30px]">
                        <h2 className="text-headline text-lg sm:text-xl md:text-2xl lg:text-[32px] font-semibold lg:leading-[150%]">
                            {listHeading}
                        </h2>
                        {description && (
                            <p className="mb-5 md:mb-6 lg:mb-[30px] text-black 2xl:text-lg text-justify ">
                                {description}
                            </p>
                        )}
                    </div>
                    <div className=" grid grid-cols-1 gap-3 md:gap-4">
                        {listItems.map((item) => (
                            <div key={item.id} className={`flex items-center`}>
                                <div className="bg-primary p-2 rounded-full mr-2.5">
                                    <i className="text-yellow text-sm 2xl:text-base font-medium">
                                        <FiCheck />
                                    </i>
                                </div>
                                <div>
                                    <p className="text-black text-sm 2xl:text-base">
                                        {item.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div
                className={`w-full h-full flex items-center ${
                    imageOrder !== null ? imageOrder : ""
                }`}
            >
                {/*eslint-disable-next-line @next/next/no-img-element*/}
                <img src={imageSrc} alt="aim" className="w-full xl:h-full" />
            </div>
        </div>
    );
}
