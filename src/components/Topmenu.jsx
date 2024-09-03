import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/logorev.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
const Topmenu = () => {
  const mycart = useSelector((state) => state.mycart.cart);
  const dataLength = mycart.length;
  const navigate = useNavigate();
  return (
    <>
      <Navbar 
        className="navbar"
        style={{position:"absolute", zIndex:"1", backgroundColor: ""
           , fontWeight:"bold" , position:"sticky", top:"0", opacity:"1"}}
      >
       
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
              <NavDropdown title="Product Category" id="basic-nav-dropdown">
              <NavDropdown.Item  as={Link}  to="breakfast">Breakfast</NavDropdown.Item>
              <NavDropdown.Item as={Link}  to="lunch">
              Lunch
              </NavDropdown.Item>
              <NavDropdown.Item as={Link}  to="dinner">Dinner</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link}  to="desert">
              Desert
              </NavDropdown.Item>
            </NavDropdown>
            </Nav>
            </Navbar.Collapse>
            
      
          <Nav.Link href="#deets">
          <Nav.Link eventKey={2} href="#memes">
          <FaCartShopping onClick={()=>{navigate("/CartProduct")}} style={{color:"darkred" , fontSize:"20px" ,marginRight:"3px",  backgroundColor:"pink" ,borderRadius:"40%" }}   />
            {dataLength>=1 ? <span id="tokri" style={{color:"darkred"  }}><sup>{dataLength}</sup></span> :""}
            </Nav.Link>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             <FaSearch style={{color:"darkred"}}  />
            </Nav.Link>
      
      </Navbar>
    </>
  );
};
export default Topmenu;
