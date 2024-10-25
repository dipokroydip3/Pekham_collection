// import React from 'react';
import { GrLanguage } from "react-icons/gr";
import { FaAngleDown } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";


const Navbar = () => {
      return (
            <div>
                  <div >
                        {/* ---------------Product update marquee nav-1 ----------------- */}

                        <div className=" flex">
                              <div className="bg-red-800 w-40 text-white px-2 z-10"><h4 className="top-0 bottom-0">Update Product</h4></div>
                              <div className=" bg-red-600 w-full ">
                                    <marquee direction=""><p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea praesentium laboriosam reprehenderit ut, consequatur non.</p></marquee>
                              </div>
                        </div>

                  </div>

                  {/* ---------------Product update marquee nav-2 ----------------- */}

                  <div className="bg-[#F2F2F7]">
                        <div className="flex justify-between text-sm py-1 w-11/12 m-auto  items-center">
                              <div className="flex items-center gap-2">
                                    <GrLanguage />
                                    <h4>Language</h4>
                                    <FaAngleDown />
                              </div>
                              <div className="flex gap-5">
                                    <div className="flex items-center">
                                          <CiUser />
                                          Log in
                                    </div>
                                    <div className="flex items-center">
                                          <IoIosHelpCircleOutline />
                                          Help Center
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* ---------------Product update marquee nav-3 ----------------- */}

                  <div>
                        <div className="flex w-11/12 m-auto py-2 items-center justify-between">
                              <div className="font-bold text-xl"><i className="text-red-600">PEk</i>HAMCOLLECTION</div>
                              <ul className="flex text-sm font-s gap-10">
                                    <li>HOME</li>
                                    <li>SHOP</li>
                                    <li>BLOG</li>
                                    <li>CONTACT</li>
                              </ul>
                              <div className="flex gap-5"> 
                                    <div className="text-xl">
                                          <MdFavoriteBorder />
                                    </div>
                                    <div className="text-xl">
                                          < AiOutlineShoppingCart />
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Navbar;