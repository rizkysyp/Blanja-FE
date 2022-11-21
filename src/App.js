import { useState, useEffect } from "react";
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
import Auth from "./pages/login/auth";
import { BrowserRouter, Route, Link, Routes, Navigate } from "react-router-dom";
import NotFound from "./Component/404";
import "react-datepicker/dist/react-datepicker.css";
import AuthChecker from "./Component/AuthChecker";
import EmailCheck from "./pages/reset-auth/email-check";

import { useSelector } from "react-redux";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [whoLogin, setWhoIsLogin] = useState("");
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (user.role === "toko") {
      setWhoIsLogin("toko");
    } else if (user.role === "customer") {
      setWhoIsLogin("customer");
    } else {
      setWhoIsLogin("guest");
    }
  });

  console.log(whoLogin);
  const [title, setTitle] = useState("test");
  if (whoLogin === "toko") {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login"> Login</Link>
          <Link to="/my-product"> My Products</Link>
          {/* <Link to="/profile">Profile</Link> */}
          <Link to="/product-detail/:id"> Product Detail</Link>
          <Link to="/insert-product"> Insert Product</Link>
          <Link to="/register-seller"> Register Seller</Link>
          <Link to="/my-bag"> My Bag</Link>
          <Link to="/profile"> Profile</Link>
          <Link to="/auth"> Auth</Link>
        </nav>
        <Routes>
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/insert-product" element={<Product />} />
          <Route path="/my-product/:id" element={<EditProduct />} />
          <Route path="/my-product" element={<MyProduct />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    );
  } else if (whoLogin === "customer") {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login"> Login</Link>
          <Link to="/my-product"> My Products</Link>
          {/* <Link to="/profile">Profile</Link> */}
          <Link to="/product-detail/:id"> Product Detail</Link>
          <Link to="/insert-product"> Insert Product</Link>
          <Link to="/register-seller"> Register Seller</Link>
          <Link to="/my-bag"> My Bag</Link>
          <Link to="/profile"> Profile</Link>
          <Link to="/auth"> Auth</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/my-bag" element={<MyBag />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  } else if (whoLogin === "guest") {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login"> Login</Link>
          <Link to="/my-product"> My Products</Link>
          {/* <Link to="/profile">Profile</Link> */}
          <Link to="/product-detail/:id"> Product Detail</Link>
          <Link to="/insert-product"> Insert Product</Link>
          <Link to="/register-seller"> Register Seller</Link>
          <Link to="/my-bag"> My Bag</Link>
          <Link to="/profile"> Profile</Link>
          <Link to="/auth"> Auth</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register-seller" element={<RegisterSeller />} />
          <Route path="/register-cust" element={<RegisterCust />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/email-checker" element={<EmailCheck />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }

  //   return (
  //     <div className="App">
  //       <header className="App-header">{title}</header>
  //       <BrowserRouter>
  //         <nav>
  //           <Link to="/">Home</Link>
  //           <Link to="/login"> Login</Link>
  //           <Link to="/my-product"> My Products</Link>
  //           {/* <Link to="/profile">Profile</Link> */}
  //           <Link to="/product-detail"> Product Detail</Link>
  //           <Link to="/insert-product"> Insert Product</Link>
  //           <Link to="/register-seller"> Register Seller</Link>
  //           <Link to="/my-bag"> My Bag</Link>
  //           <Link to="/profile"> Profile</Link>
  //           <Link to="/auth"> Profile</Link>
  //         </nav>
  //         <Routes>
  //           {isLogin && (
  //             <Routes>
  //               <Route path="/home" element={<Home />} replace="true" />
  //               <Route path="/insert-product" element={<Product />} />
  //               <Route path="/my-product/:id" element={<EditProduct />} />
  //               <Route path="/my-product" element={<MyProduct />} />
  //             </Routes>
  //           )}

  //           <Route path="/" element={<Navigate to="/login" />} />
  //           <Route path="/home" element={<Home />} replace="true" />
  //           <Route path="/login" element={<Login />} />
  //           <Route path="/register-seller" element={<RegisterSeller />} />

  //           <Route path="/register-cust" element={<RegisterCust />} />
  //           {/* <Route path="/profile" element={<Profile />} /> */}
  //           <Route path="/product-detail/:id" element={<ProductDetail />} />

  //           <Route path="/my-bag" element={<MyBag />} />
  //           <Route path="/profile" element={<Profile />} />
  //           <Route path="/auth" element={<Auth />} />
  //           <Route path="/email-checker" element={<EmailCheck />} />
  //           <Route path="/404" element={<NotFound />} />
  //         </Routes>
  //       </BrowserRouter>
  //     </div>
}

export default App;
