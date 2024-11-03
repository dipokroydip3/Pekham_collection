import { useContext } from 'react';
import { PekhamContext } from '../AuthProvider';
import { Link } from 'react-router-dom';

const All_product = () => {

      const {allData} = useContext(PekhamContext)
      const {id, img, title, price} = allData;
      return (
            <div>
                  <div className='py-5'>
                        <h3>Choice your specific products</h3>
                        <p>Explore your range fan-favorite</p>
                        <div className='flex'>
                              <Link>All</Link>
                              <select className='' >
                                    <option value="default" >default</option>
                                    <option value="jents">jents</option>
                                    <option value="child">child</option>
                              </select>
                        </div>
                  </div>
                  <div>
                        {
                              allData.map(data => <div key={data.id}>
                                    <div>

                                          {/* <h2>{data.title}</h2> */}
                                    </div>
                              </div>)
                        }
                  </div>
            </div>
      );
};

export default All_product;