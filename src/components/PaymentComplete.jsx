import { useState } from "react";
import Loader from "./Loader";
import React from "react";
import Footer from "./Footer";

const PaymentComplete = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);
  return (
    <>
      {isLoading ? (
        <div style={{ width: "100px", margin: "auto" }}>
          <Loader />
        </div>
      ) : (
        <h3 style={{backgroundColor:"whitesmoke" , color:"red" , margin:"auto"}}>Your Payment Successfully completeed!!</h3>
      )}
      
      <Footer/>
    </>
  );
};

export default PaymentComplete;
