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
                className={`container mx-auto grid  xl:grid-cols-5 place-content-center ${
                    textOrder !== null ? textOrder : ""
                }`}
            >
                <div className={`py-16 lg:py-[54px] xl:col-span-4 ${textOrder === 'order-2'? 'px-0' : 'px-6 lg:px-8'}`}>
                    <div className="mb-5 md:mb-6 lg:mb-[30px]">
                        <h2 className="text-headline text-lg sm:text-xl font-semibold">
                            {listHeading}
                        </h2>
                        {description && (
                            <p className="mb-5 md:mb-6 lg:mb-[30px] text-black text-sm text-justify ">
                                {description}
                            </p>
                        )}
                    </div>
                    <div className=" grid grid-cols-1 gap-3 md:gap-4">
                        {listItems.map((item) => (
                            <div key={item.id} className={`flex items-center`}>
                                <div className="bg-primary p-2 rounded-full mr-2.5">
                                    <i className="text-yellow text-sm font-medium">
                                        <FiCheck />
                                    </i>
                                </div>
                                <div>
                                    <p className="text-tertiary font-sm">
                                        {item.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div
                className={`w-full h-full ${
                    imageOrder !== null ? imageOrder : ""
                }`}
            >
                <img src={imageSrc} alt="aim" className="w-full h-full" />
            </div>
        </div>
    );
}
