import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "./CartSlice";

const ProductDisplay = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [mypro, setMyPro] = useState({
    id: "",
    name: "",
    description: "",
    images: "",
    price: "",
  });

  useEffect(() => {
    if (location.state) {
      setMyPro({
        id: location.state.id,
        name: location.state.name,
        description: location.state.description,
        images: location.state.images,
        price: location.state.price,
      });
    }
  }, [location.state]);

  const addToCartHandler = () => {
    dispatch(
      addtocart({
        ...mypro,
        qnty: 1,
      })
    );
  };

  return (
    <div className="productData">
      <div>
        <img
          src={`/images/${mypro.images}`}
          alt={mypro.name}
          style={{ height: "300px", width: "300px" }}
        />
      </div>
      <div>
        <h2>Product Name: {mypro.name}</h2>
        <h4>Description: {mypro.description}</h4>
        <h3>Price: {mypro.price}</h3>
        <br />
        <br />
        <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDisplay;