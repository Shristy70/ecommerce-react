
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

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
