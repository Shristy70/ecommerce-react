import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addtocart } from "./CartSlice";
import { useNavigate } from "react-router-dom";
import desert from "../images/deset.webp"
import { Footer } from "antd/es/layout/layout";

const Desert = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadData = () => {
    const api = `http://localhost:3000/Item/?category=Desert`;
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  const DataCart = (pid, nm, img, desc, price) => {
    dispatch(
      addtocart({
        id: pid,
        name: nm,
        images: img,
        description: desc,
        qnty: 1,
        price: price,
      })
    );
  };

  const dataSendCart = (key) => {
    navigate("/productdisplay", { state: key });
  };

  const ans = mydata.map((key) => (
    <div className="din" key={key.id}>
      <div className="imag">
        <img
          src={"../images/" + key.images}
          alt="image"
          style={{ width: "50px", height: "50px" }}
          onClick={() => {
            dataSendCart(key);
          }}
        />
      </div>
      <div className="disc">
        <div className="name">{key.name}</div>
        <div className="dis">{key.description}</div>
      </div>
      <div className="price">................................${key.price}</div>
      <Button
       variant="outline-danger"
       size="sm"
       style={{
        width: "100px",
         height: "30px",
         fontSize: "15px",
         marginLeft: "10px",
       }}
        onClick={() => {
          DataCart(key.id, key.name, key.images, key.description, key.price);
        }}
      >
        Add to Cart
      </Button>
    </div>
  ));

  return (
    <>
      <h1 style={{backgroundColor:"lightgray" , color:"maroon" , marginBottom:"20px" , padding:"10px"}}>Desert Items</h1>
      <div className="con" style={{display:"flex"}}>
      <div id="cartdata">{ans}</div>

      <div className="img" >
          <img
            src={desert}
            style={{ width: "340px", height: "300px" , border:"2px solid grey",marginLeft:"10px",marginTop:"1px"}}
            alt=""
          />
        </div></div>
        <Footer/>
    </>
  );
};

export default Desert;