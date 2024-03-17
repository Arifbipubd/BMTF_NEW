'use client'

import React from "react";
import Link from "next/link";
// import Sidebar from "./Sidebar";

type Props = {};

export default function SideNavigation({}: Props) {
    
    return (
        <div className={`side-navigation`}>
            {/* Main Sidebar: Right  */}
            <div className="industify_fn_rightsidebar">
                {/* Service List  */}
                <div className="service_list_as_function">
                    <div className="title">
                        <h3>All Industries of BMTF</h3>
                    </div>
                    <div className="list_holder">
                        <ul>
                            <li>
                                <Link href="/verticals/footwear-&-leather">
                                    Footwear & Leather Factory
                                </Link>
                            </li>
                            <li>
                                <Link href="/verticals/furniture">Furniture Factory</Link>
                            </li>
                            <li>
                                <Link href="/verticals/pole-&-pile">Pole & Pile Factory</Link>
                            </li>
                            <li>
                                <Link href="/verticals/vehicle-assembly">
                                    Vehicle Assembly Shop
                                </Link>
                            </li>
                            <li>
                                <Link href="/verticals/steel-structure-manufacturing">
                                    Steel Structure Manufacturing Shop
                                </Link>
                            </li>
                            <li>
                                <Link href="/verticals/electronic-assembly">
                                    Electronic Assembly Shop
                                </Link>
                            </li>
                            <li>
                                <Link href="/verticals/BMTF-crafties">BMTF Crafties Factory</Link>
                            </li>
                            <li>
                                <Link href="/verticals/CFL-&-LED-bulb">CFL & LED Bulb Factory</Link>
                            </li>
                            <li>
                                <Link href="/verticals/central-tooling-department">
                                    Central Tooling Department (CTD Shop)
                                </Link>
                            </li>
                            <li>
                                <Link href="/verticals/forge-shop">Forge Shop</Link>
                            </li>
                            <li>
                                <Link href="/verticals/foundry-shop">Foundry Shop</Link>
                            </li>
                            <li>
                                <Link href="/verticals/galvanizing-plant">
                                    Galvanizing Plant
                                </Link>
                            </li>
                            <li>
                                <Link href="/verticals/heat-and-surface-treatment">
                                    Heat and Surface Treatment Shop
                                </Link>
                            </li>
                            <li>
                                <Link href="/verticals/machine-shop">Machine Shop</Link>
                            </li>
                            <li>
                                <Link href="/verticals/army-pharma">Army Pharma</Link>
                            </li>
                            <li>
                                <Link href="/verticals/packaging-unit">
                                    Packaging Unit (BMTF-2)
                                </Link>
                            </li>
                            <li>
                                <Link href="/verticals/pattern-shop">Pattern Shop</Link>
                            </li>
                            <li>
                                <Link href="/verticals/bmtf-apparels">BMTF Apparels</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* /Service List  */}

                {/* Get Sidebar  */}
                {/* <Sidebar /> */}
                {/* /Get Sidebar  */}
            </div>
            {/* Main Sidebar: Right  */}
        </div>
    );
}
