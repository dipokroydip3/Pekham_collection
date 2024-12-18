import { useParams } from "react-router-dom";
import { PekhamContext } from "../AuthProvider";
import { useContext, useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { GoShareAndroid } from "react-icons/go";
import '../../app.css';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const Product_details = () => {

      const { allData } = useContext(PekhamContext);
      const { id } = useParams();

      

      const matched = allData.find(singleData => singleData.id == id);
      const { title, images, product_name, price, size_variants } = matched;

      const convertPrice = price;
      const [selectedSize, setSelectedSize] = useState(size_variants[0]?.size);
      const [plusQuantity, setPlusQuantity] = useState(1);
      const [multiplePrice, setMultiplyPrice] = useState(convertPrice);

      const selectedSizeQuantity = size_variants.find(size => size.size === selectedSize)?.quantity;

      const [visibleImages, setVisibleImages] = useState(images.slice(0, 3));
      const [currentIndex, setCurrentIndex] = useState(0);
      const [mainImage, setMainImage] = useState(images[0]);

      const increaseQuantity = () => {
            if (plusQuantity < 10) {
                  setPlusQuantity(plusQuantity + 1);
                  setMultiplyPrice(multiplePrice + convertPrice);
            }
      };

      const decreaseQuantity = () => {
            if (plusQuantity > 1) {
                  setPlusQuantity(plusQuantity - 1);
                  setMultiplyPrice(multiplePrice - convertPrice);
            }
      };

      const slideLeft = () => {
            const newIndex = Math.max(currentIndex - 1, 0);
            setCurrentIndex(newIndex);
            setVisibleImages(images.slice(newIndex, newIndex + 3));
      };

      const slideRight = () => {
            const newIndex = Math.min(currentIndex + 1, images.length - 3);
            setCurrentIndex(newIndex);
            setVisibleImages(images.slice(newIndex, newIndex + 3));
      };

      // Animation effect on "ADD TO CART" button
      useEffect(() => {
            const interval = setInterval(() => {
                  document.getElementById("add-to-cart-button").classList.add("shake");
                  setTimeout(() => {
                        document.getElementById("add-to-cart-button").classList.remove("shake");
                  }, 500);
            }, 4000);

            return () => clearInterval(interval);
      }, []);

      

      return (
            <div className="grid grid-cols-12 my-10 w-11/12 m-auto gap-10">
                  <div className="col-span-7 h-[90vh] overflow-y-scroll scrollbar-hide  ">
                        <div className="bg-primary-bgc group">
                              <div className="h-[550px] flex">
                                    <img className=" py-10 block transition duration-300 ease-in-out group-hover:scale-125 m-auto" src={mainImage} alt="" />
                              </div>
                        </div>
                        <div className="flex items-center relative">
                              <button onClick={slideLeft} className="absolute left-0"><MdOutlineKeyboardArrowLeft className="text-4xl" /></button>
                              <div className="flex  px-10 py-5 gap-3">
                                    {
                                          visibleImages.map(singleImg => (
                                                <div className="h-64 w-full bg-primary-bgc px-4 py-6 cursor-pointer" key={singleImg} onClick={() => setMainImage(singleImg)}>
                                                      <img className="w-full h-full" src={singleImg} alt="" />
                                                </div>
                                          ))
                                    }
                              </div>
                              <button onClick={slideRight} className="absolute right-0"><MdOutlineKeyboardArrowRight className="text-4xl" /></button>
                        </div>
                  </div>
                  <div className="col-span-5">
                        <div className="flex text-lg font-semibold">
                              <span>{product_name}: </span>
                              <h1>{title}</h1>
                        </div>
                        <h1 className="font-semibold pt-3">TK: {price}</h1>
                        <h1 className="mt-4 pt-3 text-sm">{selectedSizeQuantity} In Stock</h1>
                        <h1 className="pt-8 text-xs pb-2">Size: {selectedSize}</h1>

                        <div className="flex gap-2">
                              {size_variants.map(singleSize => (
                                    <div key={singleSize.size} onClick={() => setSelectedSize(singleSize.size)}>
                                          <div className={`border cursor-pointer text-sm w-10 h-10 flex justify-center items-center ${selectedSize === singleSize.size ? 'bg-primary-bgc' : ''}`}>
                                                {singleSize.size}
                                          </div>
                                    </div>
                              ))}
                        </div>
                        <h1 className="pt-10">Subtotal: Tk {multiplePrice}</h1>
                        <h1 className="text-sm pt-5">Quantity :</h1>
                        <div className="flex justify-between gap-5 items-center">
                              <div className="inline-flex items-center py-1 px-1 border gap-3">
                                    <div onClick={decreaseQuantity} className="text-4xl cursor-pointer">-</div>
                                    <div className="text-sm w-8 px-2 flex text-center">{plusQuantity}</div>
                                    <div onClick={increaseQuantity} className="text-3xl cursor-pointer">+</div>
                              </div>
                              <button id="add-to-cart-button" className="border py-3 hover:bg-white transition duration-300 bg-black font-  text-white hover:text-black w-full px-10">
                                    ADD TO CART TO THIS ATTAPT 
                              </button>
                              <div className="flex gap-4">
                                    <div className="border p-2 cursor-pointer rounded-full"><CiHeart className="text-3xl" /></div>
                                    <div className="border p-2 cursor-pointer rounded-full"><GoShareAndroid className="text-3xl" /></div>
                              </div>
                        </div>
                        <button className="w-full py-3 border mt-5 hover:bg-black hover:text-white transition duration-300 text-md font-semibold">BUY IT NOW</button>
                  </div>
            </div>
      );
};

export default Product_details;
