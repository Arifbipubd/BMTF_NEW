"use client";

import { useState, Fragment, useEffect, useRef } from "react";
import Link from "next/link";

import { CgClose, CgMenuRight } from "react-icons/cg";
import { PiPhoneThin } from "react-icons/pi";
import { HiOutlineInbox } from "react-icons/hi";
import { CiFacebook } from "react-icons/ci";
import { PiYoutubeLogo } from "react-icons/pi";
import { PiLinkedinLogo } from "react-icons/pi";
import {
    BsChevronDown,
    BsChevronRight,
} from "react-icons/bs";
import { RiShoppingBag2Line } from "react-icons/ri";

import { navItems } from "@src/utils/constants";

export default function Navbar() {
    const navRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [openSubmenuId, setOpenSubmenuId] = useState<number | null>(null);
    const [backgroundColor, setBackgroundColor] =
        useState<string>("bg-transparent");
    const [navPosition, setNavPosition] = useState<string>("fixed");
    const [submenuShow, setSubmenuShow] = useState<boolean>(true);
    const [navTop, setNavTop] = useState<string>("top-2.5");
    const [children, setChildren] = useState<Array<any> | null>(null);
    const [dropdownHeight, setDropdownHeight] = useState<number>(0);
    const [isNavHoverd, setIsNavHovered] = useState<boolean>(false);
    const [isVisible, setIsVisible] = useState(false);
    const [fixedDivMouseHover, setFixedDivMouseHover] =
        useState<boolean>(false);
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

    const handleMouseEnter = (item: any) => {
        setChildren(item);
        setIsNavHovered(true);
    };

    const mouseLeaveHandler = () => {
        setChildren(null);
        setIsNavHovered(false);
        setDropdownHeight(0);
        setFixedDivMouseHover(false);
    };

    const fixedDivMouseEnter = () => {
        setFixedDivMouseHover(true);
    };

    const handleCloseIcon = () => {
        setIsOpen(!isOpen);
        setOpenSubmenuId(null);
    };

    const hoverMouseLeave = () => {
        setIsVisible(false);
    };

    useEffect(() => {
        if (navRef.current !== null) {
            setDropdownHeight(navRef.current?.offsetHeight);
        }
        setIsVisible(true);
    }, [children, isVisible, isNavHoverd, dropdownHeight, fixedDivMouseHover]);

    useEffect(() => {
        const eventFired = window.addEventListener("scroll", changeOnScroll);
        return () => {
            eventFired;
        };
    });
    useEffect(()=> {
        window.addEventListener('resize', ()=> {
            console.log(window.innerHeight, window.innerWidth)
        })
     }, [])
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
                            {/* eslint-disable-next-line @next/next/no-img-element*/}
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
                    <ul
                        className={` block xl:flex xl:items-center xl:gap-[22px]    ${
                            isOpen
                                ? "block open  w-full xl:w-fit menu h-screen overflow-y-scroll bg-black/80 text-center xl:bg-inherit"
                                : "hidden bg-inherit"
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
                                    className={`group  py-2.5 lg:py-[17px]
                                        cursor-pointer px-12 sm:px-16 md:px-24 xl:px-0`}
                                    onClick={() => childrenOpenHandler(item.id)}
                                    onMouseEnter={() =>
                                        handleMouseEnter(item.children)
                                    }
                                    onMouseLeave={hoverMouseLeave}
                                >
                                    <div
                                        className={`flex items-center group-hover:relative group-hover:after:content-['']
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
                                            } text-lg font-medium capitalize flex items-center`}
                                        >
                                            <span className="mr-1.5">
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
                                                        <BsChevronDown />
                                                    </i>
                                                ) : (
                                                    <i className="text-xs">
                                                        <BsChevronRight />
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
                                        }  xl:pt-10`}
                                    >
                                        <ul className="ml-4 md:ml-6">
                                            {item.children?.map((children) => (
                                                <li
                                                    key={children.id}
                                                    className="text-white text-start text-xl md:text-2xl my-5 md:my-6"
                                                >
                                                    {children.label}
                                                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-2 gap-5 md:gap-6 text-start mt-3 ml-3">
                                                        {children.menuItems.map(
                                                            (menu: any) => (
                                                                <li
                                                                    key={
                                                                        menu.id
                                                                    }
                                                                 className="text-base"
                                                                >
                                                                    <Link
                                                                        href={
                                                                            menu.link
                                                                        }
                                                                        className="text-white"
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
                    </ul>
                </div>
            </nav>
            {isNavHoverd && (
                <Fragment>
                    <div
                        className={`hidden absolute top-24 left-0  w-full -z-10 h-auto  xl:flex  justify-center px-2 py-16
                        ${isVisible ? "fade-in" : ""}
                        `}
                        ref={navRef}
                        onMouseEnter={fixedDivMouseEnter}
                        onMouseLeave={mouseLeaveHandler}
                    >
                        <div className="w-1/2 mx-auto">
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
                className={`fixed top-0 left-0 w-screen -z-20 bg-black/80`}
                style={{
                    height: `${dropdownHeight > 0 ? dropdownHeight + 80 : 0}px`,
                    transition: "all 0.5s ease-in-out",
                }}
            ></div>
        </header>
    );
}

// {
//     navItems.map((item) => (
//         <Fragment key={item.id}>
//             <li
//                 className={`md:flex md:flex-col xl:flex-row md:items-center justify-center relative group xl:mr-[22px] py-2.5 lg:py-[17px]
//             cursor-pointer px-24 md:px-0 after:block after:content-[''] after:absolute after:h-[3px]
//              after:bg-secondary after:bottom-2 xl:after:w-full
//              after:scale-x-0 after:hover:scale-x-100 after:transition
//              after:duration-300 after:origin-left`}
//                 onClick={() => childrenOpenHandler(item.id)}
//             >
//                 <div className="text-white text-lg font-medium capitalize flex items-center">
//                     <span className="mr-1.5">{item.label}</span>
//                     <div
//                         className={`${
//                             item.children && item.children?.length > 0
//                                 ? "block"
//                                 : "hidden"
//                         }`}
//                     >
//                         <i className="text-xs text-white">
//                             <BsChevronDown />
//                         </i>
//                     </div>
//                 </div>
//                 <div
//                     className={`bg-black/90 fixed top-0 left-0 w-full
//                     h-0 group-hover:h-1/2 -z-10 group-hover:transition-all group-hover:duration-300
//                     group-hover:ease-linear hidden xl:group-hover:block`}
//                 />
//                 <div>
//                     <div
//                         className={`${
//                             openSubmenuId === item.id
//                                 ? "block xl:hidden relative xl:absolute ml-6 md:ml-8 xl:ml-0 mt-5 xl:mt-2"
//                                 : "hidden"
//                         }
//                         xl:absolute xl:top-14 xl:left-0 xl:w-[40vw] bg-inherit
//                         xl:group-hover:flex group-hover:flex-col xl:hidden xl:mt-2`}
//                     >
//                         {item.children &&
//                             item.children.map((children) => (
//                                 <div key={children.id} className="mb-2">
//                                     <Link
//                                         href={children.link}
//                                         className="text-lg text-white font-medium relative"
//                                     >
//                                         {children.label}
//                                     </Link>
//                                 </div>
//                             ))}
//                     </div>
//                 </div>
//             </li>
//         </Fragment>
//     ));
// }
