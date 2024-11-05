import React from 'react';
import '../../app.css';

const Hero = () => {
      return (
            <div className="bg-primary-bgc">
                  <div className="flex-col-reverse xl:flex-row flex xl:flex w-11/12 m-auto py-10 xl:py-20 justify-between items-center">
                        <div className='pt-5 text-center md:text-left xl:text-left'>
                              <h6 className='font-light'>50% SALE <span className='text-secondary-bgc'>OFF</span></h6>
                              <h1 className=' xl:text-5xl font-light py-2  '>NEW FASHION COLLECTION</h1>
                              <button className="animated-border bg-black border-none text-white hover:bg-secondary-bgc hover:text-white border text-sm  rounded-tr-2xl rounded-bl-2xl shadow-md  py-3 px-6 mt-5">
                                    SHOP NOW
                              </button>
                        </div>
                        <div className="basis-7/12">
                              <img
                                    className="xl:h-96"
                                    src="https://i.ibb.co.com/9TB4sy0/332124681-946143453413364-5227095957934643429-n.png"
                                    alt=""
                              />
                        </div>
                  </div>
            </div>
      );
};

export default Hero;
