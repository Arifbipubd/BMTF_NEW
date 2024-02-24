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
                                    Footwear & Leather
                                </Link>
                            </li>
                            <li>
                                <Link href="/verticals/furniture">Furniture</Link>
                            </li>
                            <li>
                                <Link href="/verticals/pole-&-pile">Pole & Pile</Link>
                            </li>
                            <li>
                                <Link href="/verticals/vehicle-assembly">
                                    Vehicle Assembly
                                </Link>
                            </li>
                            <li>
                                <Link href="/verticals/steel-structure-manufacturing">
                                    Steel Structure Manufacturing
                                </Link>
                            </li>
                            <li>
                                <Link href="/verticals/electronic-assembly">
                                    Electronic Assembly
                                </Link>
                            </li>
                            <li>
                                <Link href="/verticals/BMTF-crafties">BMTF Crafties</Link>
                            </li>
                            <li>
                                <Link href="/verticals/CFL-&-LED-bulb">CFL & LED Bulb</Link>
                            </li>
                            <li>
                                <Link href="/verticals/central-tooling-department">
                                    Central Tooling Department
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
                                    Heat and Surface Treatment
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
                                    Packaging Unit
                                </Link>
                            </li>
                            <li>
                                <Link href="/verticals/pattern-shop">Pattern Shop</Link>
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
