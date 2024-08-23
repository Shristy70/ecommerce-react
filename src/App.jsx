import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Product from "./components/Product";
import Contact from "./components/Contact";
import CartProduct from "./pages/CartProduct";
import ProductDisplay from "./components/ProductDisplay";
import SearchProduct from "./components/SearchProduct";
const App = () => {
  return (
    <>
<BrowserRouter>
 <Routes>
<Route path="/" element={<Layout/>}>
<Route index element={<Home/>}/>
<Route path="home" element={<Home/>}/>
<Route path="menu" element={<Menu/>}/>
<Route path="productdisplay" element={<ProductDisplay/>}/>
<Route path="searchproduct" element={<SearchProduct/>}/>
<Route path="cartproduct" element={<CartProduct/>}/>
</Route>
</Routes>
</BrowserRouter>  
    </>
  );
};
export default App;
