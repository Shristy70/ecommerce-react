import Carousel from "react-bootstrap/Carousel";
import b1 from "../images/bri.jpg";
import b2 from "../images/badha.png";
import b3 from "../images/briy.jpg";
import img1 from "../images/plate.jpg";
import img2 from "../images/pizaa2.jpg";
import chef1 from "../images/chef1.webp";
import chef2 from "../images/chef2.jpg";
import chef3 from "../images/chef3.jpg";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "./CartSlice";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  const [mydata, setMydata] = useState([]);
  const [mydata2, setMydata2] = useState([]);
  const [mydata3, setMydata3] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loadData = () => {
    let api = `http://localhost:3000/Item/?category=Breakfast`;
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
        <div className="price">.............${key.price}</div>
        <Button
          variant="outline-danger"
          size="sm"
          style={{
            width: "84px",
            height: "30px",
            fontSize: "15px",
            marginLeft: "10px",
          }}
          onClick={() => {
            DataCart(key.id, key.name, key.images, key.description, key.price);
          }}
        >
          AddToCart
        </Button>
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
        <Button
          variant="outline-danger"
          size="sm"
          style={{
            width: "84px",
            height: "30px",
            fontSize: "15px",
            marginLeft: "10px",
          }}
          onClick={() => {
            DataCart(key.id, key.name, key.images, key.description, key.price);
          }}
        >
          AddToCart
        </Button>
      </div>
    );
  });

  const loadData3 = () => {
    let api = "http://localhost:3000/Item/?category=Dinner";
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
            price................................${key.price} <br />
          </div>
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => {
              DataCart(
                key.id,
                key.name,
                key.images,
                key.description,

                key.price
              );
            }}
          >
            add To Cart
          </Button>
        </div>
      </div>
    );
  });
  return (
    <>
      <Carousel id="carousel">
        <Carousel.Item>
          <img src={b1} style={{ width: "100%", height: "400px" }} />
          <Carousel.Caption>
            <h3>____________We Are The Best</h3>
            <p>Forget Mediocre Restaurant.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={b2} style={{ width: "100%", height: "400px" }} />
          <Carousel.Caption>
            <h3>Delicious Food</h3>
            <p>
              When, while the lovely valley teems with vapour around me, and the
              meridian sun strikes the upper surface..
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={b3} style={{ width: "100%", height: "400px" }} />
          <Carousel.Caption>
            <h3>Best Qulity Food----------</h3>
            <p>FROM OUR MASTER CHEF</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="second">
        <h1>The Perfect Offer For You</h1>
        <p>FROM OUR MASTER CHEF</p>
        <div className="cart" style={{ display: "flex"}}>
          <div className="div1">
            <div className="img">
              <img src={b3} alt="" />
            </div>
            <div className="contant">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quaerat dignissimos maiores, officia
            </div>
          </div>
          <div className="div1">
            <div className="img">
              <img src={img2} alt="" />
            </div>
            <div className="contant">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quaerat dignissimos maiores, officia
            </div>
          </div>
          <div className="div1">
            <div className="img">
              <img src={b2} alt="" />
            </div>
            <div className="contant">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur quaerat dignissimos maiores, officia
            </div>
          </div>
        </div>
      </div>
      <div className="third">
        <div className="thirdBlog">
          <div className="part1">
            <h1>Our Awesome Restaurant</h1>
            <h5>DISCOVER OUR STORY________</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae at esse quo aliquid sed. Id eius perferendis distinctio
              deserunt, officia consectetur sapiente non voluptas exercitationem
              quis nesciunt maxime earum illoliquid sed. Id eius perferendis
              distinctio deserunt, officia consectetur sapiente non voluptas
              exercitationem quis nesciunt maxime earum illo..
            </p>
            <button>Read More</button>
          </div>
          <div className="part2">
            <div className="images">
              <div className="img1"></div>
              <div className="img2">
                <img src={img1} alt="" style={{ width: "300px" }} />
              </div>
              <div className="img3">
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="forth">
        <div className="manusection">
          <h1>Tasty Menu Today</h1>
          <h5>CHEF SELECTION</h5>
          <div className="box">
            <div className="box1">
              <h2>BreakFast</h2>
              {ans}
            </div>
            <div className="box2">
              <h2>Dinner</h2>
              {ans2}
            </div>
          </div>
          <button id="button">More menu..</button>
        </div>
      </div>
      <div className="fifth">
        <h1>Popular main cource.</h1>
        <h5>CHEF SELECTION</h5>
        {/* <div className="bar">______</div> */}
        <p>
          When, while the lovely valley teems with vapour around me, and the{" "}
          <br />
          meridian sun strikes the upper.
        </p>
        {/* <div className="container"> */}
          <div className="row">
            <div className="boxcon">{ans3}</div>
          </div>
        {/* </div> */}
      </div>
      <div className="sixth">
        <h1>Meet Our Chefs</h1>
        <h6>PROFESSIONAL COOK TEAM</h6>
        <div className="bar">______</div>
        <p>
          When, while the lovely valley teems with vapour around me, and the
          meridian sun <br />
          strikes the upper surface of the impenetrable foliage of my trees.
        </p>
        <div className="chef">
          <div className="chef1">
            <div className="imag">
              <img src={chef1} />
            </div>

            <div className="cont">
              <h5>Dexter Matthew</h5>
              <p>GRILL & NUN CHEF</p>
            </div>
          </div>

          <div className="chef1">
            <div className="imag">
              <img src={chef2} />
            </div>

            <div className="cont">
              <h5>Jimmie Benedict</h5>
              <p>FOOD TEASTER</p>
            </div>
          </div>

          <div className="chef1">
            <div className="imag">
              <img src={chef3} />
            </div>

            <div className="cont">
              <h5>Eanna Philandros</h5>
              <p>HEAD CHEF</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
