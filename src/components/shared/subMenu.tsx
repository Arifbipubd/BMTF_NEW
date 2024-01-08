import React from "react";
import { BsTelephone } from "react-icons/bs";

export default function subMenu() {
    return (
        <div className="bg-white">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <a
                            href={`tel:+88028871150`}
                            className="flex items-center"
                        >
                            <div>
                                <i className="text-yellow text-lg">
                                    <BsTelephone />
                                </i>
                            </div>
                            <div className="text-white text-sm">
                                <span>Call Us</span>
                                <span>+880-2-8871150</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
