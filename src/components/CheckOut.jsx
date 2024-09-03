import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import React from "react";
import Footer from "./Footer";

const CheckOut = () => {
  const mycart = useSelector((state) => state.mycart.cart);
  const navigate = useNavigate();
  let totalAmount =0;
  mycart.map((key) => {
    totalAmount += key.price * key.qnty;
  });
  const payComplete = () => {
    navigate("/paycomp");
  };

  const btnFocus = () => {
    document.getElementById("mybtn").focus();
  };
  return (
    <>
    <h1>CheckOut</h1>
    <div id="headercheck">
      <div id="checkout">
        <h4>shoping address</h4>
        <Form style={{width:"50%"}} id="formcheck">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Name :</Form.Label>
            <Form.Control type="text" placeholder="Enter name " />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Address :</Form.Label>
            <Form.Control type="text" placeholder="Enter address" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter mobile</Form.Label>
            <Form.Control type="text" placeholder="enter mobile no" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter city</Form.Label>
            <Form.Control type="text" placeholder="enter mobile no" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Email</Form.Label>
            <Form.Control
              type="email"
              id="usremail"
              onBlur={btnFocus}
              placeholder="enter mobile no"
            />
          </Form.Group>
        </Form>
      </div>
      <div>
        <h5 style={{color:"red"}}>Total Amount : {totalAmount}</h5>
        <h5 style={{color:"red"}}>Shopping Charge : 100</h5>
        <h5 style={{color:"red"}}>Total Payble Amount :{totalAmount + 100}</h5>
        <h4>Select payment methd :</h4>
        <input type="radio" name="r1" /> cash on Delivery <br />
        br
        <input type="radio" name="r1" />
        UPI <br />
        <br />
        <input type="radio" name="r1" />
        credit / debit card <br />
        <br />
        <input type="radio" name="r1" />
        Internet Banking <br />
        <br />
        <Button
          variant="primary"
          type="submit"
          id="mybtn"
          onClick={payComplete}
        >
          Submit
        </Button>
      </div>
      </div>
      <Footer/>
   
    </>
  );
};

export default CheckOut;
