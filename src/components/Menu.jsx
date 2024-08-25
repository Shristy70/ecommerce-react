import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "./CartSlice";
import breakfast from "../images/break.jpg";
import Dinner from "../images/plate.jpg";
import Desert from "../images/deset.webp";
import Button from "react-bootstrap/Button";
import Footer from "./Footer";
const Menu = () => {
   const [mydata, setMydata] = useState([]);
   const [mydata2, setMydata2] = useState([]);
   const [mydata3, setMydata3] = useState([]);
   const [mydata4, setMydata4] = useState([]);
   const loadData4 = () => {
    let api = "http://localhost:3000/Item/?category=Desert";
    axios.get(api).then((res) => {
      setMydata4(res.data);
    });
  };
  useEffect(() => {
    loadData4();
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
    navigate("/productdisplay",{state:key});
  };

  const ans4 = mydata4.map((key) => {
    return (
      <div className="din">
        <div className="imag">
          <img
            src={"../images/" + key.images}
            alt="image"
            style={{ width: "50px", height: "50px" }}
            onClick={()=>{
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
        <Button variant="outline-danger" size="sm" style={{width:"84px" ,height:"30px" , fontSize:"15px" , marginLeft:"10px" }}
        onClick={()=>{DataCart(key.id, key.name, key.images, key.description, key.price)}}>
          AddToCart</Button>
      
      </div>
    );
  });

  const dispatch = useDispatch();
  const loadData = () => {
    let api = "http://localhost:3000/Item/?category=Dinner";
    axios.get(api).then((res) => {
      setMydata(res.data);
    });
  };
  useEffect(() => {
    loadData();
  }, []);

 

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
        <Button variant="outline-danger" size="sm" style={{width:"84px" ,height:"30px" , fontSize:"15px" , marginLeft:"10px" }}
        onClick={()=>{DataCart(key.id, key.name, key.images, key.description, key.price)}}>
          AddToCart</Button>
      </div>
    );
  });
  const loadData2 = () => {
    let api = "http://localhost:3000/Item/?category=Lunch";
    axios.get(api).then((res) => {
      setMydata2(res.data);
    });
  };
  useEffect(() => {
    loadData2();
  }, []);


  const ans2 = mydata2.map((key) => {
    return (
      <div className="din">
        <div className="imag">
          <img
            src={"../images/" + key.images}
            alt="image"
            style={{ width: "60px", height: "50px" }}
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
        <Button variant="outline-danger"size="sm"style={{width:"84px" ,height:"30px" , fontSize:"15px" , marginLeft:"10px" }}
        onClick={()=>{DataCart(key.id, key.name, key.images, key.description, key.price)}}>
          AddToCart</Button>

      </div>
    );
  });

  const loadData3 = () => {
    let api = "http://localhost:3000/Item/?category=Breakfast";
    axios.get(api).then((res) => {
      setMydata3(res.data);
    });
  };
  useEffect(() => {
    loadData3();
  }, []);
  const ans3 = mydata3.map((key) => {
    return (
      <div className="row1">
        <div className="cont">
          <div className="imag">
            <img
              src={"../images/" + key.images}
              alt="image"
              style={{ width: "200px", height: "150px" }}
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
            price................................${key.price}
          </div>
          <Button variant="outline-danger"size="sm"style={{width:"84px" ,height:"30px" , fontSize:"15px" , marginLeft:"10px" }}
        onClick={()=>{DataCart(key.id, key.name, key.images, key.description, key.price)}}>
          AddToCart</Button>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="maun1">
        <div className="manu">
          <div className="imgg">
            <img src="../images/bri.jpg" alt="" />
            <div className="bar"></div>
            <h5>
              MAN <span>U</span>
            </h5>
          </div>
        </div>
      </div>
      <div className="todaymenu">
        <h4>Tasty Menu Today-</h4>
        <h5>CHEF SELECTION</h5>
        <p>
          When, while the lovely valley teems with vapour around me, and the
          meridian <br />sun strikes the upper surface of the impenetrable foliage of
          my trees
        </p>
      </div>
      <div className="breakTop">
        <div className="leftbreak">
          <h1>Breakfast-</h1>
          {ans}
        </div>
        <div className="rightbreak">
          <img src={breakfast} alt="lolo" />
        </div>
      </div>
      <div className="DinnerTop">
        <div className="leftDinner">
          <img src={Dinner} alt="lolo" />
        </div>
        <div className="rightDinner">
          <h1>Dinner-</h1>
          {ans}
        </div>
      </div>
      <div className="desert">
        <div className="leftdesert">
          <h1>Desert-</h1>
          {ans4}
        </div>
        <div className="rightDesert">
          <img src={Desert} alt="lolo" />
        </div>
      </div>
      <div className="footermenu">
      <Footer  /></div>
    </>
  );
};
export default Menu;
