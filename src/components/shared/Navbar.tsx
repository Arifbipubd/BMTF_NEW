"use client";

import { useState, Fragment } from "react";
import Link from "next/link";

import { CgClose, CgMenuRight } from "react-icons/cg";
import { PiPhoneThin } from "react-icons/pi";
import { HiOutlineInbox } from "react-icons/hi";
import { CiFacebook } from "react-icons/ci";
import { PiYoutubeLogo } from "react-icons/pi";
import { PiLinkedinLogo } from "react-icons/pi";
import { BsChevronDown } from "react-icons/bs";
import { RiShoppingBag2Line } from "react-icons/ri";

import { navItems } from "@src/utils/constants";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isChildrenOpen, setIsChildrenOpen] = useState<boolean>(false);
    return (
        <header className="bg-transparent absolute left-0 top-0 w-full z-30">
            <div className="border-b-[1px] border-solid border-b-white/10">
                <div className="container mx-auto">
                    <div className="flex justify-between sm:items-center py-[11px]">
                        <div className="block sm:flex items-center">
                            <div className="mr-[25px] mb-3 sm:mb-0">
                                <a
                                    href={`tel:+88028871150`}
                                    className="flex items-center"
                                >
                                    <div className="mr-[13px]">
                                        <i className="text-yellow text-lg ">
                                            <PiPhoneThin />
                                        </i>
                                    </div>
                                    <div className="text-white text-sm">
                                        <span className="mr-[7px]">
                                            Call Us
                                        </span>
                                        <span>+880-2-8871150</span>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <a
                                    href={`mailto:mkt@bmtf.com.bd`}
                                    className="flex items-center"
                                >
                                    <div className="mr-[10px]">
                                        <i className="text-yellow text-lg">
                                            <HiOutlineInbox />
                                        </i>
                                    </div>
                                    <div className="text-white text-sm">
                                        <span className="mr-2">Email Us</span>
                                        <span>mkt@bmtf.com.bd</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="flex sm:items-center">
                            <div>
                                <a href="/">
                                    <i className="text-white hover:text-yellow">
                                        <CiFacebook />
                                    </i>
                                </a>
                            </div>
                            <div className="mx-[26px]">
                                <a href="/">
                                    <i className="text-white hover:text-yellow">
                                        <PiYoutubeLogo />
                                    </i>
                                </a>
                            </div>
                            <div>
                                <a href="/">
                                    <i className="text-white hover:text-yellow">
                                        <PiLinkedinLogo />
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="container mx-auto relative">
                <div className="block lg:flex justify-between py-1">
                    <div className="flex items-center text-white">
                        <Link href={"/"}>
                            <img
                                src="/assets/images/header/logo.png"
                                className="lg:w-full h-12 mr-2"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="block lg:hidden absolute right-5 top-2">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                        >
                            <i
                                className={`text-2xl text-white ${
                                    isOpen ? "hidden" : "block"
                                }`}
                            >
                                <CgMenuRight />
                            </i>
                            <i
                                className={`text-2xl text-white ${
                                    isOpen ? "block" : "hidden"
                                }`}
                            >
                                <CgClose />
                            </i>
                        </button>
                    </div>
                    <div
                        className={` block lg:flex ${
                            isOpen ? "block" : "hidden"
                        }`}
                    >
                        {navItems.map((item) => (
                            <Fragment key={item.id}>
                                <div
                                    className="flex items-center relative group mr-[22px] py-2.5 lg:py-[17px] cursor-pointer"
                                    onClick={() =>
                                        setIsChildrenOpen(
                                            (prev) => (prev = !prev)
                                        )
                                    }
                                >
                                    <div className="text-white text-sm font-medium mr-1.5 capitalize">
                                        {item.label}
                                    </div>
                                    <div
                                        className={`${
                                            item.children.length > 0
                                                ? "block"
                                                : "hidden"
                                        }`}
                                    >
                                        <i className="text-xs text-white">
                                            <BsChevronDown />
                                        </i>
                                    </div>
                                    {item.children &&
                                        item.children.map((children) => (
                                            <div
                                                className="absolute top-12 w-36 bg-black hidden lg:group-hover:block z-20"
                                                key={children.id}
                                            >
                                                <Link
                                                    href={children.link}
                                                    className="text-sm text-white font-medium"
                                                >
                                                    {children.label}
                                                </Link>
                                            </div>
                                        ))}
                                </div>
                            </Fragment>
                        ))}
                        <div className="h-full">
                            <Link href={"/"} className="">
                                <button className="flex items-center bg-primary border-0 py-3 md:py-4 px-4 md:px-[22px] text-yellow">
                                    <span>
                                        <i className="text-yellow text-2xl">
                                            <RiShoppingBag2Line />
                                        </i>
                                    </span>
                                    <span>BMTF Shop</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
