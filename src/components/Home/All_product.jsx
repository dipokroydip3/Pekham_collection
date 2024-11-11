import { useContext } from 'react';
import { PekhamContext } from '../AuthProvider';
import { Link } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';
import { MdOutlineAddShoppingCart } from 'react-icons/md';
import { CiHeart, CiZoomIn } from 'react-icons/ci';

const All_product = () => {

      const { allData } = useContext(PekhamContext)
      const { id, img, title, price } = allData;
      return (
            <div className='grid w-11/12 m-auto gap-5 grid-cols-1 md:grid-cols-3 xl:grid-cols-12 pt-20'>
                  <div className='py-5 col-span-1 md:col-span-1 xl:col-span-3'>
                        <h3 className='text-2xl '>Choice your specific products</h3>
                        <p className='py-3 text-gray-400'>Explore your range fan-favorite</p>
                        <div className=' px-3 py-1 w-full md:w-auto xl:w-auto items-center justify-between md:justify-start xl:justify-start xl:gap-3 rounded-full border inline-flex'>
                              <Link className='pr-2'>All</Link>
                              <select className='gap-2' >
                                    <option value="default" >default</option>
                                    <option value="jents">jents</option>
                                    <option value="ladies">ladies</option>
                                    <option value="child">kids</option>
                              </select>
                              <select className='' > 
                                    <option value="default" >default</option>
                                    <option value="jents">jents</option>
                                    <option value="child">kids</option>
                              </select>
                              <div className='border p-2 xl:w-full h-full cursor-pointer rounded-full'>
                                    <  IoSearchOutline className='text-xl w-full h-full' />
                              </div>
                        </div>
                  </div>
                  <div className='col-span-1 md:col-span-2 xl:col-span-9'>
                        <div className='grid gap-7 md:grid-cols-2 xl:grid-cols-3'>
                              {
                                    allData.map(data => <div key={data.id}>
                                          <Link to={`/details/${data.id}`} className="group">
                                                <div className="bg-primary-bgc cursor-pointer relative overflow-hidden">
                                                      <img className="w-full h-80 md:h-72 xl:h-80 px-8 py-5 transition duration-300 ease-in-out group-hover:scale-125" src={data.images} alt="" />
                                                      <div className="bg-secondary-bgc absolute right-0 top-0 inline-block text-white px-3">
                                                            <h1 className="text-sm">{data.discount}%</h1>
                                                      </div>

                                                      {/* <!-- Icon Container with Smooth Slide Animation --> */}
                                                      <div className="text-2xl -right-16 space-y-5 absolute bottom-0 px-1 py-3 text-white bg-opacity-10 bg-black transition-all duration-300 ease-in-out group-hover:right-0">
                                                            <div className="p-1 bg-white rounded-full text-black cursor-pointer hover:text-white hover:bg-secondary-bgc transform hover:scale-110 transition duration-200 ease-in-out">
                                                                  <MdOutlineAddShoppingCart />
                                                            </div>
                                                            <div className="p-1 bg-white rounded-full text-black cursor-pointer hover:text-white hover:bg-secondary-bgc transform hover:scale-110 transition duration-200 ease-in-out">
                                                                  <CiHeart />
                                                            </div>
                                                            <div className="p-1 bg-white rounded-full text-black cursor-pointer hover:text-white hover:bg-secondary-bgc transform hover:scale-110 transition duration-200 ease-in-out">
                                                                  <CiZoomIn />
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="text-center pt-2">
                                                      <h2>{data.title}</h2>
                                                      <h2 className="font-semibold">Tk: {data.price}</h2>
                                                </div>
                                          </Link>

                                    </div>)
                              }
                        </div>
                  </div>
            </div>
      );
};

export default All_product;