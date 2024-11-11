import { GrLanguage } from "react-icons/gr";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
      const [navToggle, setNavToggle] = useState(false);

      return (
            <div>
                  {/* Product update marquee nav-1 */}
                  <div className="flex">
                        <div className="bg-red-800 w-44 xl:w-40 text-white px-2 xl:px-3 z-10">
                              <h4 className="text-xs xl:text-[14px] py-1 ">Update Product</h4>
                        </div>
                        <div className="bg-red-600 flex items-center w-full">
                              <marquee direction="">
                                    <p className="text-xs xl:text-[14px] text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea praesentium laboriosam reprehenderit ut, consequatur non.</p>
                              </marquee>
                        </div>
                  </div>

                  {/* Product update marquee nav-2 */}
                  <div className="bg-[#F2F2F7]">
                        <div className="flex justify-between text-sm py-1 w-11/12 m-auto items-center">
                              <div className="flex items-center xl:gap-1">
                                    <GrLanguage />
                                    <h4 className="text-xs xl:text-sm">Language</h4>
                                    <FaAngleDown />
                              </div>
                              <div className="flex gap-3 xl:gap-5">
                                    <div className="flex items-center">
                                          <CiUser />
                                          <h3 className="text-xs xl:text-sm">Log in</h3>
                                    </div>
                                    <div className="flex items-center">
                                          <IoIosHelpCircleOutline />
                                          <h3 className="text-xs xl:text-sm">Help <span className="hidden md:inline-block xl:inline-block">Center</span></h3>
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* Navbar */}
                  <div className="border relative shadow-md xl:border-none">
                        <div className="flex w-11/12 m-auto py-2 items-center justify-between">
                              {/* <i className="font-bold xl:text-xl"><span className="text-red-600">P</span>EKHAM<span className="text-red-600">C</span>OLLECTION</i> */}
                              <Link to={'/'} className="text-2xl font-semibold">Aram<span className="text-secondary-bgc">F</span>ashion</Link>
                              
                              <ul className={`absolute md:static xl:static xl:flex md:flex bg-black md:bg-white xl:bg-white md:text-black xl:text-black md:py-2 py-5 xl:py-2 md:items-center  top-10 xl:top-0 text-white xl:gap-8  text-xs space-y-5 md:space-y-0 xl:space-y-0  px-3 xl:px-0  xl:text-sm  transition-transform duration-300 ease-in-out ${navToggle ? "translate-x-0 -left-1" : "-translate-x-full md:translate-x-0 xl:translate-x-0 -left-4"}`}>
                                    <Link to={'/'} className="hover:bg-red-600 xl:hover:bg-white xl:hover:text-red-600 md:hover:bg-white md:hover:text-red-600 transition duration-300  flex items-center px-3 xl:px-0 rounded h-6 xl:h-0 w-full xl:w-auto cursor-pointer">HOME</Link>
                                    <li className="hover:bg-red-600 xl:hover:bg-white xl:hover:text-red-600 md:hover:bg-white md:hover:text-red-600 transition duration-300 flex items-center px-3 xl:px-0 rounded h-6 xl:h-auto w-full xl:w-auto cursor-pointer">SHOP</li>
                                    <li className="hover:bg-red-600 xl:hover:bg-white xl:hover:text-red-600 md:hover:bg-white md:hover:text-red-600 transition duration-300 flex items-center px-3 xl:px-0 rounded h-6 xl:h-auto w-full xl:w-auto cursor-pointer">BLOG</li>
                                    <li className="hover:bg-red-600 xl:hover:bg-white xl:hover:text-red-600 md:hover:bg-white md:hover:text-red-600 transition duration-300 flex items-center px-3 xl:px-0 rounded h-6 xl:h-auto w-full xl:w-auto cursor-pointer">CONTACT</li>
                                    <div className="text-[18px] absolute xl:hidden md:hidden -top-5 right-1" onClick={() => setNavToggle(!navToggle)}>
                                          <RxCross1 />
                                    </div>
                              </ul>

                              <div className="flex gap-3 xl:gap-5">
                                    <div className="xl:text-xl">
                                          <MdFavoriteBorder />
                                    </div>
                                    <div className="xl:text-xl">
                                          <AiOutlineShoppingCart />
                                    </div>
                                    <div onClick={() => setNavToggle(!navToggle)} className="xl:hidden md:hidden">
                                          <FaBars />
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Navbar;
