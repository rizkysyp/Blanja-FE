import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/login/Login";
import RegisterSeller from "./pages/register/Seller";
import MyProduct from "./pages/product/My-Product";
import Profile from "./pages/profile";
import Product from "./pages/product-sales/";
import RegisterCust from "./pages/register/customer";
import EditProduct from "./pages/product/Edit";
import ProductDetail from "./pages/product-detail";
import MyBag from "./pages/Bag/";
import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import AuthChecker from "./Component/AuthChecker";
function App() {
  const [title, setTitle] = useState("test");
  return (
    <div className="App">
      <header className="App-header">{title}</header>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login"> Login</Link>
          <Link to="/my-product"> My Products</Link>
          {/* <Link to="/profile">Profile</Link> */}
          <Link to="/product-detail"> Product Detail</Link>
          <Link to="/insert-product"> Insert Product</Link>
          <Link to="/register-seller"> Register Seller</Link>
          <Link to="/my-bag"> My Bag</Link>
          <Link to="/profile"> Profile</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/home" element={<Home />} replace="true" />
          <Route path="/login" element={<Login />} />
          <Route path="/register-seller" element={<RegisterSeller />} />
          <Route path="/my-product" element={<MyProduct />} />
          <Route path="/insert-product" element={<Product />} />
          <Route path="/register-cust" element={<RegisterCust />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/my-product/:id" element={<EditProduct />} />
          <Route path="/my-bag" element={<MyBag />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
