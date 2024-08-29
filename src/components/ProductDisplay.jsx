import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "./CartSlice";

import React from "react";

const ProductDisplay = () => {
  const dispatch = useDispatch();
  const [myPro, setMyPro] = useState({
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

  const DataCart =(pid , nm, img, desc,price)=>{
dispatch(addtocart({id: pid , name:nm,images:img,description:desc, qnty:1, price:price}))
  }
  return(
  <>
  <div id="productData">
<div>
<img src={`../images/${myPro.images}`}  style={{height:"300px", width:"300px"}}  alt="" />
</div>
<div>
    <h2>Product Name : {myPro.name}</h2>
    <h2>Description Name : {myPro.description}</h2>
    <h2>Price : {myPro.price}</h2><br /><br />
    <button onClick={()=>{DataCart(myPro.id, myPro.name,myPro.images, myPro.description, myPro.price)}} >add to cart</button>
</div>
  </div> 
  </>
  );
};

export default ProductDisplay;
