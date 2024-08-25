import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { addtocart } from "./CartSlice";
import { useNavigate } from "react-router-dom";
const Breakfast = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadData = () => {
    let api = `http://localhost:3000/Item/?category=Breakfast`;
    axios.get(api).then((res) => {
      setMydata(res.data);
    });

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
          qnty:1,
          price: price,
        })
      );
    };
    const dataSendCart = (key) => {
        navigate("/productdisplay", { state: key });  
    };

    const ans = mydata.map((key) => {
      return (
        <div className="din">
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
          <div className="price">
            ................................${key.price}
          </div>
          <Button variant="primary" 
          onClick={()=>{DataCart(key.id, key.name, key.images, key.description, key.price)}}>
            Add to Cart</Button>
        </div>
      );
    });
    return (
      <>
        <h1> BreakFast Item</h1>
        <div id="cartdata">{ans}</div>
      </>
    );
  };
};
export default Breakfast;