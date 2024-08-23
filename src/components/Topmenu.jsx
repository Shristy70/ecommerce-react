import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoimg from "../images/logo2.jpeg";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Topmenu = () => {
  const mycart = useSelector((state) => state.mycart.cart);
  const dataLength = mycart.length;
  const navigate = useNavigate();
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logoimg} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Products</Nav.Link>
            </Nav>
            <Nav.Link href="#deets">
              <FaShoppingCart
                onClick={() => {
                  navigate("/cartproduct");
                }}
              />
              {dataLength >= 1 ? <span id="tokri"> {dataLength} </span> : ""}
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <FaSearch />
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Topmenu;
