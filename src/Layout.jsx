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
import Topmenu from "./components/Topmenu";
const Layout = () => {
  return (
    <>
      <Topmenu/>
      <div className="main">
        <Outlet />
      </div>
      <div className="footer"></div>
    </>
  );
};
export default Layout;
