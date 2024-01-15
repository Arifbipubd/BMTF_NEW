"use client";

import { useState, Fragment, useEffect } from "react";
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
    const [openSubmenuId, setOpenSubmenuId] = useState<number | null>(null);
    const [backgroundColor, setBackgroundColor] =
        useState<string>("bg-transparent");
    const [navPosition, setNavPosition] = useState<string>("fixed");
    const [submenuShow, setSubmenuShow] = useState<boolean>(true);
    const [navTop, setNavTop] = useState<string>("top-2.5");
    const changeOnScroll = () => {
        if (window.scrollY > 10) {
            setBackgroundColor("bg-black/80");
            setNavPosition("fixed");
            setNavTop("top-0");
            setSubmenuShow(false);
        } else {
            setBackgroundColor("bg-transparent");
            setNavPosition("absolute");
            setNavTop("top-2.5");
            setSubmenuShow(true);
        }
    };

    const childrenOpenHandler = (itemId: number) => {
        if (openSubmenuId === itemId) {
            setOpenSubmenuId(null);
        } else {
            setOpenSubmenuId(itemId);
        }
    };


    const handleCloseIcon = () => {
        setIsOpen(!isOpen)
        setOpenSubmenuId(null)
    }
    useEffect(() => {
        const eventFired = window.addEventListener("scroll", changeOnScroll);
        return () => {
            eventFired;
        };
    });
    return (
        <header
            className={`${backgroundColor} ${navPosition} ${navTop} ${
                submenuShow ? "py-0" : "py-3"
            } left-0 w-full z-20 transition-all duration-300 ease-in-out  
        shadow-[0_6px_32px_0px_rgba(0,0,0,0.03)]`}
        >
            <div
                className={` ${submenuShow ? "block" : "hidden"}
            border-b-[1px] border-solid border-b-white/10 `}
            >
                <div className="container mx-auto">
                    <div className="flex justify-between sm:items-center py-[11px]">
                        <div className="block sm:flex items-center">
                            <div className="mr-[25px] mb-3 sm:mb-0 flex items-center">
                                <div className="mr-[13px]">
                                    <i className="text-yellow text-lg ">
                                        <PiPhoneThin />
                                    </i>
                                </div>
                                <div className="text-white text-sm">
                                    <span className="mr-[7px]">Call Us</span>
                                </div>
                                <a
                                    href={`tel:+88028871150`}
                                    className="text-white text-sm"
                                >
                                    <span>+880-2-8871150</span>
                                </a>
                            </div>
                            <div className="flex items-center">
                                <div className="mr-[10px]">
                                    <i className="text-yellow text-lg">
                                        <HiOutlineInbox />
                                    </i>
                                </div>
                                <div className="text-white text-sm">
                                    <span className="mr-2">Email Us</span>
                                </div>
                                <a
                                    href={`mailto:mkt@bmtf.com.bd`}
                                    className=" text-white text-sm"
                                >
                                    <span>mkt@bmtf.com.bd</span>
                                </a>
                            </div>
                        </div>
                        <div className="flex">
                            <div>
                                <a href="/">
                                    <i className="text-white text-[22px] hover:text-yellow">
                                        <CiFacebook />
                                    </i>
                                </a>
                            </div>
                            <div className="mx-[26px]">
                                <a href="/">
                                    <i className="text-white text-[22px] hover:text-yellow">
                                        <PiYoutubeLogo />
                                    </i>
                                </a>
                            </div>
                            <div>
                                <a href="/">
                                    <i className="text-white text-[22px] hover:text-yellow">
                                        <PiLinkedinLogo />
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="container mx-auto relative">
                <div className="block xl:flex justify-between py-1 relative">
                    <div className="flex items-center text-white">
                        <Link href={"/"} className="">
                            <img
                                src="/assets/images/header/logo.png"
                                className="lg:w-full h-12 mr-2 relative"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="block xl:hidden absolute right-5 top-2">
                        <button
                            onClick={handleCloseIcon}
                            className="flex items-center px-3 py-2 rounded "
                        >
                            <i
                                className={`text-2xl text-white ${
                                    isOpen ? "hidden" : "block"
                                }`}
                            >
                                <CgMenuRight />
                            </i>
                        </button>
                    </div>
                    <div
                        className={` block xl:flex   ${
                            isOpen
                                ? "block open  w-full xl:w-fit menu h-full bg-black/80 text-center xl:bg-inherit"
                                : "hidden bg-inherit"
                        }`}
                    >
                        <div className="flex justify-end py-7 px-3 md:px-7 lg:px-10 xl:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center px-3 py-2 rounded "
                            >
                                <i
                                    className={`text-2xl text-white ${
                                        isOpen ? "block" : "hidden"
                                    }`}
                                >
                                    <CgClose />
                                </i>
                            </button>
                        </div>
                        {navItems.map((item) => (
                            <Fragment key={item.id}>
                                <div
                                    className={`md:flex md:flex-col xl:flex-row md:items-center justify-center relative group xl:mr-[22px] py-2.5 lg:py-[17px] 
                                    cursor-pointer px-24 md:px-0 after:block after:content-[''] after:absolute after:h-[3px]
                                     after:bg-secondary after:bottom-2 xl:after:w-full 
                                     after:scale-x-0 after:hover:scale-x-100 after:transition 
                                     after:duration-300 after:origin-left`}
                                    onClick={() => childrenOpenHandler(item.id)}
                                >
                                    <div className="text-white text-lg font-medium capitalize flex items-center">
                                        <span className="mr-1.5">
                                            {item.label}
                                        </span>
                                        <div
                                            className={`${
                                                item.children && item.children?.length > 0
                                                    ? "block"
                                                    : "hidden"
                                            }`}
                                        >
                                            <i className="text-xs text-white">
                                                <BsChevronDown />
                                            </i>
                                        </div>
                                    </div>
                                    <div
                                        className={`bg-black/90 fixed top-0 left-0 w-full 
                                        h-0 group-hover:h-[30vh] -z-30 transition-all duration-300 ease-linear 
                                        hidden xl:block`}
                                    />
                                    <div>
                                        <div
                                            className={`${
                                                openSubmenuId === item.id
                                                    ? "block xl:hidden relative xl:absolute ml-6 md:ml-8 xl:ml-0 mt-5 xl:mt-2"
                                                    : "hidden"
                                            }
                                                xl:absolute xl:top-14 xl:left-0 xl:w-[40vw] bg-inherit 
                                                xl:group-hover:flex group-hover:flex-col xl:hidden xl:mt-2`}
                                        >
                                            {item.children &&
                                                item.children.map(
                                                    (children) => (
                                                        <div
                                                            key={children.id}
                                                            className="mb-2"
                                                        >
                                                            <Link
                                                                href={
                                                                    children.link
                                                                }
                                                                className="text-lg text-white font-medium relative"
                                                            >
                                                                {children.label}
                                                            </Link>
                                                        </div>
                                                    )
                                                )}
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        ))}
                        <div className="xl:h-full px-24 md:px-0 md:flex md:items-center md:justify-center xl:block w-full xl:w-fit">
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
