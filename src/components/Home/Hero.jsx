import React from 'react';
import '../../app.css';

const Hero = () => {
      return (
            <div className="bg-primary-bgc">
                  <div className="flex w-11/12 m-auto py-20 justify-between items-center">
                        <div>
                              <h6>50% SALE OFF</h6>
                              <h1 className='text-5xl font-semibold py-2  '>NEW FASHION COLLECTION</h1>
                              <button className="animated-border hover:bg-secondary-bgc hover:text-white border text-sm  rounded-tr-2xl rounded-bl-2xl shadow-md  py-3 px-6 mt-5">
                                    SHOP NOW
                              </button>
                        </div>
                        <div className="basis-7/12">
                              <img
                                    className="h-96"
                                    src="https://i.ibb.co.com/9TB4sy0/332124681-946143453413364-5227095957934643429-n.png"
                                    alt=""
                              />
                        </div>
                  </div>
            </div>
      );
};

export default Hero;
