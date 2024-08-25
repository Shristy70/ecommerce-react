import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "./CartSlice";
const ProductDisplay = () => {
  const dispatch = useDispatch();
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
      id:location.state.id,
      name:location.state.name,
      description:location.state.description,
      images:location.state.images,
      price:location.state.price,
    });
  }, []);

  const DataCart = (pid, nm, img, desc, price) => {
    dispatch(
      addtocart({
        id: pid,
        name: nm,
        images: img,
        description: desc,
        qnty:1,
        price: price,
      })
    );
  };

  return (
    <>
      <div id="productdata">
        <div>
          <img src={`../images/+${mypro.images}`} style={{ height: "500px" }} />
        </div>
        <div>
          <h1>product name: {mypro.name}</h1>
          <h3>Description : {mypro.description}</h3>
          <h2>Price : {mypro.price}</h2><br /><br />
          <button onClick={()=>{DataCart(mypro.id , mypro.name , mypro.images,mypro.description , mypro.price)}}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};
export default ProductDisplay;
