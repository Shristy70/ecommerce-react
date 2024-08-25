import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addtocart } from "./CartSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SearchProduct = () => {
  const [val, setVal] = useState("");
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
  const handlechange = (e) => {
    setVal(e.target.value);
    let api = "http://localhost:3000/Item";

    axios.get(api).then((res) => {
      setMydata(res.data);
    });
  };
  const Datacart = (pid, nm, img, desc, price) => {
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

  const ans = mydata.map((key) => {
    let str = key.name;
    let status = str.includes(val);

    if (status == true) {
      return (
        <>
          <Card
            style={{
              width: "250px",
              marginLeft: "10px",
              marginRight: "10px",
              marginBottom: "20px",
              boxShadow: "1px 2px 2px 1px grey",
              backgroundColor:"rgb(243, 241, 241)"
            }}
          >
            <Card.Img
              variant="top"
              src={"../images/" + key.images}
              className="imagesearch"
            />
            <Card.Body>
              <Card.Title className="namesearch">
                {key.name} <br />
                <h5 className="pricesearch">
                  Price ............ $
                  <span className="spanse">{key.price}</span>
                </h5>
              </Card.Title>

              <p className="description">{key.description}</p>

              <Button
                className="buttonsearch"
                variant="danger"
                onClick={() => {
                  Datacart(
                    key.id,
                    key.name,
                    key.images,
                    key.description,
                    key.price
                  );
                }}
              >
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        </>
      );
    }
  });
  return (
    <>
      <h1 style={{ color: "maroon",backgroundColor:"rgb(225, 225, 225)" }}>Search your Product</h1>
      <p style={{ color: "red" , backgroundColor:"rgb(225, 225, 225)" , fontWeight:"bold"}}>Enter your product : </p>
      <input

        type="text"
        value={val}
        onChange={handlechange}
        className="inputsearch"
      />
      <hr />
      <div className="cartdatas">
        <div className="row">{ans}</div>
      </div>
    </>
  );
};

export default SearchProduct;
