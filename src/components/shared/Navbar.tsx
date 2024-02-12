"use client";

import { useState, Fragment, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { CgClose, CgMenuRight } from "react-icons/cg";
import { PiPhoneThin } from "react-icons/pi";
import { HiOutlineInbox } from "react-icons/hi";
import { CiFacebook } from "react-icons/ci";
import { PiYoutubeLogo } from "react-icons/pi";
import { PiLinkedinLogo } from "react-icons/pi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { RiShoppingBag2Line } from "react-icons/ri";

import { navItems } from "@src/utils/constants";

export default function Navbar() {
    const pathName = usePathname();
    const navRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [openSubmenuId, setOpenSubmenuId] = useState<number | null>(null);
    const [backgroundColor, setBackgroundColor] =
        useState<string>("bg-transparent");
    const [navPosition, setNavPosition] = useState<string>("fixed");
    const [fixedDivPostion, setFixedDivPosition] = useState<string>("top-24");
    const [submenuShow, setSubmenuShow] = useState<boolean>(true);
    const [navTop, setNavTop] = useState<string>("top-2.5");
    const [children, setChildren] = useState<Array<any> | null>(null);
    const [dropdownHeight, setDropdownHeight] = useState<number>(0);
    const [isNavHoverd, setIsNavHovered] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState(false);
    const [fixedDivMouseHover, setFixedDivMouseHover] =
        useState<boolean>(false);
    const [navHoverd, setNavHovered] = useState<boolean>(false);
    useState<boolean>(false);
    const changeOnScroll = () => {
        if (window.scrollY > 10) {
            setBackgroundColor("bg-black/80");
            setNavPosition("fixed");
            setNavTop("top-0");
            setSubmenuShow(false);
            setFixedDivPosition("top-14");
        } else {
            setBackgroundColor("bg-transparent");
            setNavPosition("absolute");
            setNavTop("top-2.5");
            setSubmenuShow(true);
            setFixedDivPosition("top-24");
        }
    };

    const childrenOpenHandler = (itemId: number) => {
        if (openSubmenuId === itemId) {
            setOpenSubmenuId(null);
        } else {
            setOpenSubmenuId(itemId);
        }
    };

    const handleMouseEnter = (item: any) => {
        // setIsVisible(true);
        setIsNavHovered(true);
        setNavHovered(true);
        setChildren(item);
    };

    const mouseLeaveHandler = () => {
        setChildren(null);
        setIsNavHovered(false);
        setDropdownHeight(0);
        setFixedDivMouseHover(false);
        setIsVisible(false);
    };

    const fixedDivMouseEnter = () => {
        if (isNavHoverd) {
            setFixedDivMouseHover(true);
        }
    };

    const handleCloseIcon = () => {
        setIsOpen(!isOpen);
        setOpenSubmenuId(null);
    };

    const hoverMouseLeave = () => {
        setNavHovered(false);
    };

    useEffect(() => {
        if (navRef.current !== null) {
            setDropdownHeight(navRef.current?.offsetHeight);
        }
    }, [children, isVisible]);

    useEffect(() => {
        const eventFired: any = window.addEventListener(
            "scroll",
            changeOnScroll
        );
        return () => {
            eventFired;
        };
    });

    useEffect(() => {
        if (navHoverd) {
            setIsVisible(true);
        }
        if (!navHoverd && !fixedDivMouseHover) {
            setChildren(null);
            setIsNavHovered(false);
            setDropdownHeight(0);
            setFixedDivMouseHover(false);
            setIsVisible(false);
        }
    }, [navHoverd, fixedDivMouseHover, isNavHoverd]);
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
                    <div className="flex flex-row justify-between sm:items-center py-[11px]">
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
                        <div className="flex mb-3 sm:mb-0">
                            <div>
                                <a href="/">
                                    <i className="text-white text-[22px] hover:text-yellow">
                                        <CiFacebook />
                                    </i>
                                </a>
                            </div>
                            <div className="mx-3 sm:mx-[26px]">
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
                            {/* eslint-disable-next-line @next/next/no-img-element*/}
                            <img
                                src="/assets/images/header/logo.png"
                                className="lg:w-full h-12 mr-2 relative"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="block xl:hidden absolute right-0 top-2">
                        <button
                            onClick={handleCloseIcon}
                            className="flex items-center py-2 rounded "
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
                    <ul
                        className={` block xl:flex xl:items-center xl:gap-[22px]    ${
                            isOpen
                                ? "block open  w-full xl:w-fit menu h-screen xl:h-fit overflow-y-scroll bg-black/80 text-center xl:bg-inherit"
                                : "hidden bg-inherit w-fit"
                        }`}
                    >
                        <li className="flex justify-end py-7 px-3 md:px-7 lg:px-10 xl:hidden">
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
                        </li>
                        {navItems.map((item) => (
                            <Fragment key={item.id}>
                                <li
                                    className={`group  py-2.5 xl:py-0 text-center
                                        cursor-pointer px-12 sm:px-16 md:px-24 xl:px-0 h-fit`}
                                    onClick={() => childrenOpenHandler(item.id)}
                                    onMouseEnter={() =>
                                        handleMouseEnter(item.children)
                                    }
                                    onMouseLeave={hoverMouseLeave}
                                >
                                    <div
                                        className={`flex items-center justify-center group-hover:relative group-hover:after:content-['']
                                                grop-hover after:absolute group-hover:after:h-[3px]
                                            group-hover:after:bg-secondary group-hover:after:-bottom-3 xl:group-hover:after:w-full
                                            group-hover:after:scale-x-100 after:hover:scale-x-0 group-hover:after:transition
                                            group-hover:after:duration-300 group-hover:after:origin-left`}
                                    >
                                        <div
                                            className={`${
                                                openSubmenuId === item.id
                                                    ? "text-secondary"
                                                    : "text-white"
                                            } text-lg font-medium capitalize flex items-center h-full`}
                                        >
                                            <span className="mr-1.5 h-full">
                                                {item.label}
                                            </span>
                                            <div
                                                className={`${
                                                    item.children &&
                                                    item.children?.length > 0
                                                        ? "block xl:hidden"
                                                        : "hidden"
                                                }`}
                                            >
                                                {openSubmenuId === item.id ? (
                                                    <i className="text-xs">
                                                        <BsChevronUp />
                                                    </i>
                                                ) : (
                                                    <i className="text-xs">
                                                        <BsChevronDown />
                                                    </i>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={`${
                                            openSubmenuId === item.id
                                                ? "block xl:hidden"
                                                : "hidden"
                                        } flex justify-end w-fit mx-auto xl:pt-10`}
                                    >
                                        <ul className=" ">
                                            {item.children?.map((children) => (
                                                <li
                                                    key={children.id}
                                                    className="text-white text-center text-xl md:text-2xl mt-5 mb-3 md:mt-6 md:mb-4 xl:h-full"
                                                >
                                                    {children.label}
                                                    <hr className="w-3/4 h-0.5 border-t border-t-secondary my-2.5 mx-auto" />
                                                    <ul className=" mt-3">
                                                        {children.menuItems.map(
                                                            (menu: any) => (
                                                                <li
                                                                    key={
                                                                        menu.id
                                                                    }
                                                                    className="text-base my-3 md:my-4"
                                                                >
                                                                    <Link
                                                                        href={
                                                                            menu.link
                                                                        }
                                                                        className="text-white"
                                                                        onClick={handleCloseIcon}
                                                                    >
                                                                        {
                                                                            menu.label
                                                                        }
                                                                    </Link>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            </Fragment>
                        ))}

                        <div className="xl:h-full  flex items-center justify-center xl:block w-full xl:w-fit mt-4 xl:mt-0">
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
                    </ul>
                </div>
            </nav>
            {isNavHoverd && (
                <Fragment>
                    <div
                        className={`hidden fixed left-0 z-10 w-full h-auto  xl:flex  justify-center px-2 py-16 transition-all duration-200 ease-linear
                        ${isVisible ? "fade-in" : ""} ${fixedDivPostion}
                        `}
                        ref={navRef}
                        onMouseEnter={fixedDivMouseEnter}
                        onMouseLeave={mouseLeaveHandler}
                    >
                        <div className="w-1/2 mx-auto h-full">
                            {children &&
                                children.map((item) => (
                                    <div key={item.id} className="mb-4">
                                        <h3 className="text-white leading-[2.8rem] font-semibold text-3xl">
                                            {item.label}
                                        </h3>
                                        <hr className="w-full h-0.5 border-t border-t-secondary my-2.5" />
                                        <div className="xl:grid xl:grid-cols-3 xl:gap-7">
                                            {item.menuItems &&
                                                item.menuItems.map(
                                                    (menu: any) => (
                                                        <Link
                                                            href={menu.link}
                                                            className="text-white"
                                                            key={menu.id}
                                                            onClick={mouseLeaveHandler}
                                                        >
                                                            {menu.label}
                                                        </Link>
                                                    )
                                                )}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </Fragment>
            )}
            <div
                className={`fixed top-0 left-0 w-screen -z-20 bg-black/80 overflow-hidden`}
                style={{
                    height: `${
                        dropdownHeight > 0 ? dropdownHeight + 100 : 0
                    }px`,
                    transition: "all 0.5s ease-in-out",
                }}
            ></div>
        </header>
    );
}
