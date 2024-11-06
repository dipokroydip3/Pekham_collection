import { PekhamContext } from "../AuthProvider";

const Product_details = () => {

      const { allData } = useContext(PekhamContext)

      return (
            <div>
                  This is product details page
            </div>
      );
};

export default Product_details;