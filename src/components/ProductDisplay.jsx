import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const ProductDisplay = () => {
  const [mypro, setMyPro] = useState({
    id: "",
    name: "",
    description: "",
    images: "",
    price: "",
  });
  const location = useLocation();
  useEffect(() => {
    setMyPro({
      id: location.state.id,
      name: location.state.name,
      description: location.state.description,
      images: location.state.images,
      price: location.state.price,
    });
  }, []);
  return (
    <>
      <div id="productdata">
        <div>
          <img src={`../images/+${mypro.images}`} style={{ height: "500px" }} />
        </div>
        <div>
          <h1>product name: {mypro.name}</h1>
          <h3>Description : {mypro.description}</h3>
          <h2>Price : {mypro.price}</h2>
          <button>Add to Cart</button>
        </div>
      </div>
    </>
  );
};
export default ProductDisplay;
