import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import logo from "../src/images/logorev.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
const Layout = () => {
  return (
    <>
      <Navbar 
        className="navbar"
        style={{ backgroundColor: "rgb(241, 231, 231)" , fontWeight:"bold" }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="Logo"
              style={{ width: "50px", height: "50px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navtoggle"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav">
              <Nav.Link as={Link} to="home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="menu">
                Menu
              </Nav.Link>
              <Nav.Link as={Link} to="productdisplay">
                ProductDisplay
              </Nav.Link>
              <Nav.Link as={Link} to="searchproduct">
                SearchProduct
              </Nav.Link>
              <Nav.Link as={Link} to="cartproduct">
                cartproduct
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Nav.Link href="#deets">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <FaCartShopping/>
              </Form.Group>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             <FaSearch/>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main">
        <Outlet />
      </div>
      <div className="footer"></div>
    </>
  );
};
export default Layout;
