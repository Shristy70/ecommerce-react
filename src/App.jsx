import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Menu from "./components/Menu";
import CartProduct from "./pages/CartProduct";
import ProductDisplay from "./components/ProductDisplay";
import SearchProduct from "./components/SearchProduct";
import Lunch from "./components/Lunch";
import Dinner from "./components/Diner";
import Breakfast from "./components/Breakfast";
import Desert from "./components/Desert";

const App = () => {
  return (
    <>
<BrowserRouter>
 <Routes>
<Route path="/" element={<Layout/>}>
<Route index element={<Home/>}/>
<Route path="home" element={<Home/>}/>
<Route path="menu" element={<Menu/>}/>
<Route path="/productdisplay" element={<ProductDisplay/>}/>
<Route path="searchproduct" element={<SearchProduct/>}/>
<Route path="cartproduct" element={<CartProduct/>}/>
<Route path="lunch" element={<Lunch/>}/>
<Route path="dinner" element={<Dinner/>}/>
<Route path="breakfast" element={<Breakfast/>}/>
<Route path="desert" element={<Desert/>}/>
</Route>
</Routes>
</BrowserRouter>  
    </>
  );
};
export default App;
