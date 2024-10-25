// import React from 'react';
import { GrLanguage } from "react-icons/gr";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";


const Navbar = () => {
      let [navToggle, setNavToggle] = useState(false)

      

      

      return (
            <div>
                  <div >
                        {/* ---------------Product update marquee nav-1 ----------------- */}

                        <div className=" flex">
                              <div className="bg-red-800 w-44 xl:w-40 text-white px-2 z-10"><h4 className=" text-xs xl:text-md py-1 xl:py-2">Update Product</h4></div>
                              <div className=" bg-red-600 w-full ">
                                    <marquee direction=""><p className="text-xs pt-1 xl:text-sm text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea praesentium laboriosam reprehenderit ut, consequatur non.</p></marquee>
                              </div>
                        </div>

                  </div>

                  {/* ---------------Product update marquee nav-2 ----------------- */}

                  <div className="bg-[#F2F2F7]">
                        <div className="flex justify-between text-sm py-1 w-11/12 m-auto  items-center">
                              <div className="flex items-center  xl:gap-2">
                                    <GrLanguage />
                                    <h4 className="text-xs xl:text-md">Language</h4>
                                    <FaAngleDown />
                              </div>
                              <div className="flex gap-3 xl:gap-5">
                                    <div className="flex items-center">
                                          < CiUser />
                                          <h3 className="text-xs xl:text-sm">Log in</h3>
                                    </div>
                                    <div className="flex items-center">
                                          <IoIosHelpCircleOutline />
                                          <h3 className="text-xs xl:text-sm"> Help <span className="hidden md:inline-block xl:inline-block">Center</span></h3>
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* ---------------Product update marquee nav-3 ----------------- */}

                  <div className="border relative shadow-md xl:border-none">
                        <div className="flex w-11/12 m-auto py-2 items-center justify-between">
                              <i className="font-bold xl:text-xl"><span className="text-red-600">P</span>EKHAM<span className="text-red-600">C</span>OLLECTION</i>
                              <ul className={`absolute md:static md:bg-white md:text-black  md:gap-6 md:py-2 md:items-center xl:static left-0 top-10 bg-black xl:bg-white w-full md:w-auto xl:w-auto   text-white xl:text-black text-xs space-y-5  md:space-y-0 py-5 xl:py-2 px-3 xl:px-0  xl:space-y-0  xl:text-sm  xl:gap-10 ${navToggle ? "hidden" : "md:flex xl:flex" }}`}>
                                    <li className="hover:bg-red-600 flex items-center px-3 rounded h-6 left-0 w-full xl:w-auto \">HOME</li>
                                    <li className="hover:bg-red-600 flex items-center px-3 rounded h-6 left-0 w-full xl:w-auto\">SHOP</li>
                                    <li className="hover:bg-red-600 flex items-center px-3 rounded h-6 left-0 w-full xl:w-auto\">BLOG</li>
                                    <li className="hover:bg-red-600 flex items-center px-3 rounded h-6 left-0 w-full xl:w-auto\">CONTACT</li>
                                    <div className="text-[18px] absolute -top-5 right-1">
                                          <RxCross1 />
                                    </div>
                              </ul>
                              <div className="flex gap-3 xl:gap-5">
                                    <div className="xl:text-xl">
                                          <MdFavoriteBorder />
                                    </div>
                                    <div className="xl:text-xl">
                                          < AiOutlineShoppingCart />
                                    </div>
                                    <div onClick={() => setNavToggle(!navToggle)} className="xl:hidden">
                                          <FaBars />
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Navbar;