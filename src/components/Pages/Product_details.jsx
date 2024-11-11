import { useParams } from "react-router-dom";
import { PekhamContext } from "../AuthProvider";
import { useContext } from "react";

const Product_details = () => {
      const { allData } = useContext(PekhamContext);
      const { id } = useParams(); // Destructure id directly from useParams

      // Convert id to a number if singleData.id is a number
      const matched = allData.find(singleData => singleData.id == id);
      const { title, images, product_name, price, size_variants } = matched;
      console.log(allData);
      console.log(matched);

      return (
            <div className="grid grid-cols-12 gap-10">
                  <div className="col-span-7 overflow-y-scroll">
                        <div className="bg-primary-bgc">
                              <img className="w-[500px] py-10 block m-auto " src={images} alt="" />
                        </div>
                  </div>
                  <div className="col-span-5">
                        <div className="flex text-lg font-semibold">
                              <span className="">{product_name}: </span>
                              <h1 className="">{title}</h1>
                        </div>
                        <h1 className="font-semibold">Price: {price} TK</h1>
                        <div className="flex gap-2">
                              {
                                    size_variants.map(singleSize => <div key={singleSize.id}>
                                          <div className="border w-10 h-10 flex justify-center items-center">
                                                {singleSize.size}
                                          </div>
                                    </div>)
                              }
                        </div>
                  </div>
            </div>
      );
};

export default Product_details;

{/* {
      images.map(singleImg => <div key={singleImg}>
            <div>
                  <img src={singleImg} alt="" />
            </div>
      </div>)
} */}