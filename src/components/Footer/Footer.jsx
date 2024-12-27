// import React from 'react';
"use client";



const Footer = () => {
      return (
            <div>
                  <footer className="bg-black text-white mt-20 py-8 px-4 border-t border-l border-gray-300">
                        <div className="max-w-7xl mx-auto flex flex-wrap gap-6 justify-between">
                              {/* Logo and About Section */}
                              <div className="w-full sm:w-1/2 lg:w-1/4">
                                    <div className="text-2xl font-bold text-gray-800 mb-4">AramFashion</div>
                                    <p className="text-sm">
                                          AramFashion is your ultimate online clothing store. Shop for a wide
                                          variety of clothing products, including sarees, pants, shoes, and
                                          outfits for men, women, and kids. Enjoy home delivery with options
                                          for cash on delivery or online payment.
                                    </p>
                              </div>

                              {/* Contact Section */}
                              <div className="w-full sm:w-1/2 lg:w-1/4">
                                    <h3 className="text-lg font-semibold border-b border-gray-400 pb-2 mb-4">
                                          Contact Us
                                    </h3>
                                    <ul className="text-sm">
                                          <li>Email: support@aramfashion.com</li>
                                          <li>Phone: +880 1763 111 668</li>
                                          <li>Address: 5100 Bus Stand, Thakurgaon Sadar, Thakurgaon</li>
                                    </ul>
                              </div>

                              {/* Products Section */}
                              <div className="w-full sm:w-1/2 lg:w-1/4">
                                    <h3 className="text-lg font-semibold border-b border-gray-400 pb-2 mb-4">
                                          Products
                                    </h3>
                                    <ul className="text-sm space-y-2">
                                          <li>Mens Wear</li>
                                          <li>Womens Wear</li>
                                          <li>Kids Wear</li>
                                          <li>Shoes</li>
                                          <li>Pants</li>
                                          <li>Sarees</li>
                                    </ul>
                              </div>

                              {/* Follow Us Section */} 
                              <div className="w-full sm:w-1/2 lg:w-1/4">
                                    <h3 className="text-lg font-semibold border-b border-gray-400 pb-2 mb-4">
                                          Follow Us
                                    </h3>
                                    <div className="flex space-x-4">
                                          <a
                                                href="#"
                                                className="text-gray-600 hover:text-gray-800 text-lg"
                                                aria-label="Facebook"
                                          >
                                                <i className="fab fa-facebook-f"></i> Facebook
                                          </a>
                                          <a
                                                href="#"
                                                className="text-gray-600 hover:text-gray-800 text-lg"
                                                aria-label="Twitter"
                                          >
                                                <i className="fab fa-twitter"></i> Twitter
                                          </a>
                                          <a
                                                href="#"
                                                className="text-gray-600 hover:text-gray-800 text-lg"
                                                aria-label="Instagram"
                                          >
                                                <i className="fab fa-instagram"></i> Instagram
                                          </a>
                                          <a
                                                href="#"
                                                className="text-gray-600 hover:text-gray-800 text-lg"
                                                aria-label="LinkedIn"
                                          >
                                                <i className="fab fa-linkedin-in"></i> LinkedIn
                                          </a>
                                    </div>
                              </div>
                        </div>
                  </footer>
            </div>
      );
};

export default Footer;