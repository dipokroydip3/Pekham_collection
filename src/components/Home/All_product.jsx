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
            <div className='grid w-11/12 m-auto gap-5 grid-cols-12 pt-10'>
                  <div className='py-5 col-span-3'>
                        <h3 className='text-2xl '>Choice your specific products</h3>
                        <p>Explore your range fan-favorite</p>
                        <div className=' px-3 py-1 items-center gap-3 rounded-full border inline-flex'>
                              <Link>All</Link>
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
                              <div className='border p-2 w-full h-full cursor-pointer rounded-full'>
                                    <  IoSearchOutline className='text-xl w-full h-full' />
                              </div>
                        </div>
                  </div>
                  <div className='col-span-9'>
                        <div className='grid gap-7 grid-cols-3'>
                              {
                                    allData.map(data => <div key={data.id}>
                                          <div>

                                                <div className='bg-primary-bgc relative'>
                                                      <img className='w-full h-80 p-5' src={data.images} alt="" />
                                                      <div className='bg-secondary-bgc absolute right-0 top-0 inline-block text-white px-3'>
                                                            <h1 className='text-sm'>{data.discount}%</h1>
                                                      </div>
                                                      <div className='text-2xl space-y-5 absolute right-0 bottom-0 py-5 px-2 text-white bg-opacity-40 bg-black'>
                                                            <div className='bg-black'><MdOutlineAddShoppingCart /></div>
                                                            <div><CiHeart /></div>
                                                            <div><CiZoomIn /></div>
                                                      </div>
                                                </div>
                                                <div className='text-center pt-2'>
                                                      <h2>{data.title}</h2>
                                                      <h2 className='font-semibold'>Tk: {data.price}</h2>
                                                </div>

                                          </div>
                                    </div>)
                              }
                        </div>
                  </div>
            </div>
      );
};

export default All_product;