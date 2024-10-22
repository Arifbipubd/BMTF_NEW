/** @format */

"use client";

import { useState, Fragment, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { CgClose, CgMenuRight } from "react-icons/cg";
import { PiPhoneThin } from "react-icons/pi";
import { HiOutlineInbox } from "react-icons/hi";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
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
  const [fixedDivPostion, setFixedDivPosition] =
    useState<string>("top-[5.6rem]");
  const [submenuShow, setSubmenuShow] = useState<boolean>(true);
  const [navTop, setNavTop] = useState<string>("top-0");
  const [children, setChildren] = useState<Array<any> | null>(null);
  const [dropdownHeight, setDropdownHeight] = useState<number>(0);
  const [isNavHoverd, setIsNavHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(false);
  const [fixedDivMouseHover, setFixedDivMouseHover] = useState<boolean>(false);
  const [navHoverd, setNavHovered] = useState<boolean>(false);
  useState<boolean>(false);
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 1.2,
        delay: 0.5,
      },
    },
  };
  const changeOnScroll = () => {
    if (window.scrollY > 10) {
      setBackgroundColor("bg-black/80");
      setNavPosition("fixed");
      setNavTop("top-1");
      setSubmenuShow(false);
      setFixedDivPosition("top-14");
    } else {
      setBackgroundColor("bg-transparent");
      setNavPosition("absolute");
      setNavTop("top-0");
      setSubmenuShow(true);
      setFixedDivPosition("top-[5.6rem]");
    }
  };

  const childrenOpenHandler = (itemId: number) => {
    if (window.innerWidth < 1280) {
      if (openSubmenuId === itemId) {
        setOpenSubmenuId(null);
      } else {
        setOpenSubmenuId(itemId);
      }
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
    const resizer = window.addEventListener("resize", () => {
      if (window.innerWidth > 1270) {
        setIsOpen(false);
        setOpenSubmenuId(null);
      }
    });
  }, []);
  useEffect(() => {
    const eventFired: any = window.addEventListener("scroll", changeOnScroll);
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
      } left-0 w-full z-20 transition-all duration-500 ease-in-out  
        shadow-[0_6px_32px_0px_rgba(0,0,0,0.03)]`}
    >
      <div
        className={` ${submenuShow ? "block" : "hidden"}
            border-b-[1px] border-solid border-b-white/10 `}
      >
        <div className='container mx-auto'>
          <div className='flex flex-row  justify-between sm:items-center py-[11px]'>
            <div className='block md:flex items-center'>
              <div className='mr-[25px] mb-3 md:mb-0 flex items-center'>
                <div className='mr-[13px]'>
                  <i className='text-yellow text-lg 2xl:text-xl'>
                    <PiPhoneThin />
                  </i>
                </div>
                <div className='text-white text-sm 2xl:text-base'>
                  <span className='mr-[7px]'>Call Us</span>
                </div>
                <a
                  href={`tel:+8801769044261`}
                  className='text-white text-sm 2xl:text-base'
                >
                  <span>+8801769044261</span>
                </a>
              </div>
              <div className='flex items-center'>
                <div className='mr-[10px]'>
                  <i className='text-yellow text-lg 2xl:text-xl'>
                    <HiOutlineInbox />
                  </i>
                </div>
                <div className='text-white text-sm 2xl:text-base'>
                  <span className='mr-2'>Email Us</span>
                </div>
                <a
                  href={`mailto:Marketing@bmtf.com.bd`}
                  className=' text-white text-sm 2xl:text-base'
                >
                  <span>Marketing@bmtf.com.bd</span>
                </a>
              </div>
            </div>
            <div className='flex mb-3 sm:mb-0 gap-1 sm:gap-3 social-icon-right'>
              <div className='text-end'>
                <Link
                  href='https://spc-pile.bmtf.com.bd/'
                  target='_blank'
                  className=' text-sm 2xl:text-base text-white capitalize leading-[150%] text-center'
                >
                  SPC Pile
                </Link>
              </div>
              <div className=' flex '>
                <div className='mx-1'>
                  <a
                    href='https://www.facebook.com/BMTF.Bangladesh/'
                    target='_blank'
                  >
                    <i className='text-white text-[22px] 2xl:text-2xl hover:text-yellow'>
                      <CiFacebook />
                    </i>
                  </a>
                </div>
                <div className='mx-1'>
                  <a
                    href='https://www.instagram.com/bmtf.bangladesh/'
                    target='_blank'
                  >
                    <i className='text-white text-[22px] 2xl:text-2xl hover:text-yellow'>
                      <FaInstagram />
                    </i>
                  </a>
                </div>
                <div className='mx-1'>
                  <a
                    href='https://www.youtube.com/@BMTFofficial'
                    target='_blank'
                  >
                    <i className='text-white text-[22px] 2xl:text-2xl hover:text-yellow'>
                      <PiYoutubeLogo />
                    </i>
                  </a>
                </div>
                <div>
                  <a
                    href='https://www.linkedin.com/company/98842722/'
                    target='_blank'
                  >
                    <i className='text-white text-[22px] 2xl:text-2xl hover:text-yellow'>
                      <PiLinkedinLogo />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className='container mx-auto relative'>
        <div className='block xl:flex justify-between py-1 relative'>
          <div className='flex items-center text-white'>
            <Link href={"/"} className=''>
              {/* eslint-disable-next-line @next/next/no-img-element*/}
              <img
                src='/assets/images/header/bmtf-logo.svg'
                className='lg:w-full h-12 mr-2 relative'
                alt='Logo'
              />
            </Link>
          </div>
          <div className='block xl:hidden'>
            <div className='absolute right-0 top-2'>
              <button
                onClick={handleCloseIcon}
                className='flex items-center py-2 rounded '
              >
                <i className={`text-2xl text-white`}>
                  <CgMenuRight />
                </i>
              </button>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.ul
                  className={` block xl:flex xl:items-center xl:gap-[22px] z-50 w-screen fixed top-0 left-0 overflow-y-scroll bg-black/90 text-center`}
                  variants={item}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "100vh", opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  exit='exit'
                >
                  <div className='container mx-auto'>
                    <li className='flex justify-end py-7 mt-10 md:mt-6'>
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className='flex items-center rounded '
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
                    {navItems.map((item, index) => (
                      <Fragment key={item.id}>
                        <motion.li
                          className={`group  py-2.5 xl:py-0 text-center
                                        cursor-pointer px-12 sm:px-16 md:px-24 h-fit`}
                          onClick={() => childrenOpenHandler(item.id)}
                          initial={{
                            y: 80,
                            opacity: 0,
                          }}
                          animate={{
                            y: 0,
                            opacity: 1,
                          }}
                          transition={{
                            delay: 0.8 - 0.1 * index,
                          }}
                          exit={{
                            opacity: 0,
                            y: 90,
                            transition: {
                              ease: "easeInOut",
                              delay: 1 - 0.2 * index,
                            },
                          }}
                        >
                          <div
                            className={`flex items-center justify-center group-hover:relative group-hover:after:content-['']
                                                grop-hover after:absolute group-hover:after:h-[3px]
                                            group-hover:after:bg-secondary group-hover:after:-bottom-3 
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
                              <span className='mr-1.5 h-full'>
                                {item.label}
                              </span>
                              <div
                                className={`${
                                  item.children && item.children?.length > 0
                                    ? "block"
                                    : "hidden"
                                }`}
                              >
                                {openSubmenuId === item.id ? (
                                  <i className='text-xs'>
                                    <BsChevronUp />
                                  </i>
                                ) : (
                                  <i className='text-xs'>
                                    <BsChevronDown />
                                  </i>
                                )}
                              </div>
                            </div>
                          </div>
                          <div
                            className={`${
                              openSubmenuId === item.id ? "block " : "hidden"
                            } flex justify-end w-fit mx-auto`}
                          >
                            <ul className=' '>
                              {item.children?.map((children) => (
                                <li
                                  key={children.id}
                                  className='text-white text-center text-xl md:text-2xl mt-5 mb-3 md:mt-6 md:mb-4'
                                >
                                  {children.label}
                                  <hr className='w-3/4 h-0.5 border-t border-t-secondary my-2.5 mx-auto' />
                                  <ul className=' mt-3'>
                                    {children.menuItems.map((menu: any) => (
                                      <li
                                        key={menu.id}
                                        className='text-base my-3 md:my-4'
                                      >
                                        <Link
                                          href={menu.link}
                                          className='text-white'
                                          onClick={handleCloseIcon}
                                        >
                                          {menu.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.li>
                      </Fragment>
                    ))}

                    <motion.div
                      className='flex items-center justify-center w-full my-4'
                      onMouseLeave={hoverMouseLeave}
                      initial={{ y: 80, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{
                        opacity: 0,
                        y: 90,
                        transition: {
                          ease: "easeInOut",
                        },
                      }}
                    >
                      <Link
                        href='https://bmtf-ecommerce.vercel.app/'
                        target='_blank'
                        className=''
                      >
                        <button className='flex items-center bg-primary border-0 py-3 md:py-4 px-4 md:px-[22px] text-yellow'>
                          <span>
                            <i className='text-yellow text-2xl'>
                              <RiShoppingBag2Line />
                            </i>
                          </span>
                          <span>BMTF value shop</span>
                        </button>
                      </Link>
                    </motion.div>
                  </div>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          <div className='hidden xl:block'>
            <ul className={` flex items-center gap-[22px]`}>
              {navItems.map((item) => (
                <Fragment key={item.id}>
                  <li
                    className={`group text-center cursor-pointer h-fit`}
                    onMouseEnter={() => handleMouseEnter(item.children)}
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
                        <span className='mr-1.5 h-full'>{item.label}</span>
                        <div
                          className={`${
                            item.children && item.children?.length > 0
                              ? "block xl:hidden"
                              : "hidden"
                          }`}
                        >
                          {openSubmenuId === item.id ? (
                            <i className='text-xs'>
                              <BsChevronUp />
                            </i>
                          ) : (
                            <i className='text-xs'>
                              <BsChevronDown />
                            </i>
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                </Fragment>
              ))}

              <div className='h-full block w-fit '>
                <Link
                  href='https://bmtf-ecommerce.vercel.app/'
                  target='_blank'
                  className=''
                >
                  <button className='flex items-center bg-primary border-0 px-[22px] py-[16px] text-yellow'>
                    <span>
                      <i className='text-yellow text-2xl'>
                        <RiShoppingBag2Line />
                      </i>
                    </span>
                    <span>BMTF value shop</span>
                  </button>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {isNavHoverd && (
        <Fragment>
          <AnimatePresence>
            <motion.div
              className={`hidden fixed left-0 z-10 w-full h-auto  xl:flex  justify-center px-2 py-16 transition-all duration-200 ease-linear
                         ${fixedDivPostion}
                        `}
              ref={navRef}
              onMouseEnter={fixedDivMouseEnter}
              onMouseLeave={mouseLeaveHandler}
              variants={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
              }}
            >
              <div className='w-1/2 mx-auto h-full'>
                {children &&
                  children.map((item, index) => (
                    <motion.div
                      key={item.id}
                      className='mb-4'
                      initial={{
                        y: 60,
                        opacity: 0,
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      transition={{
                        delay: 0.3,
                      }}
                      exit={{
                        opacity: 0,
                        y: 60,
                        transition: {
                          ease: "easeInOut",
                          delay: 0.8 - 0.2 * index,
                        },
                      }}
                    >
                      <h3 className='text-white leading-[2.8rem] font-semibold text-3xl'>
                        {item.label}
                      </h3>
                      <hr className='w-full h-0.5 border-t border-t-secondary my-2.5' />
                      <div className='xl:grid xl:grid-cols-3 xl:gap-7'>
                        {item.menuItems &&
                          item.menuItems.map((menu: any) => (
                            <Link
                              href={menu.link}
                              className='text-white hover:text-secondary w-fit'
                              key={menu.id}
                              onClick={mouseLeaveHandler}
                            >
                              {menu.label}
                            </Link>
                          ))}
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </Fragment>
      )}
      {children && children?.length > 0 && (
        <div
          className={`fixed top-0 left-0 w-screen -z-20 bg-black/90 overflow-hidden`}
          style={{
            height: `${dropdownHeight > 0 ? dropdownHeight + 100 : 0}px`,
            transition: "all 0.5s ease-in-out",
          }}
        ></div>
      )}
    </header>
  );
}
