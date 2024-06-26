import React from "react";
import { FiCheck } from "react-icons/fi";

type Props = {
    items: Array<any>;
};

export default function Listitems({ items }: Props) {
    return (
        <div className="flex flex-col gap-6 md:gap-[30px]">
            {items.map((item) => (
                <div key={item.id} className="flex items-center">
                    <div className="bg-primary p-1 rounded-full mr-[18px]">
                        <i className="text-white text-sm font-medium">
                            <FiCheck />
                        </i>
                    </div>
                    <div>
                        <p className="text-tertiary text-sm 2xl:text-base text-justify">{item.capability}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
