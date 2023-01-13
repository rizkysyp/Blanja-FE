import { useState, useEffect } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import RegisterSeller from "./pages/register/Seller";
import MyProduct from "./pages/product/My-Product";
import Profile from "./pages/profile";
import DetailOrder from "./pages/Detail Orders";
import MyOrderCustomer from "./pages/MyOrder/Customer/customer";
import MyOrderSeller from "./pages/MyOrder/Seller/seller";
import Product from "./pages/product-sales/";
import RegisterCust from "./pages/register/customer";
import EditProduct from "./pages/product/Edit";
import ProductDetail from "./pages/product-detail";
import MyBag from "./pages/Bag/bag";
import Auth from "./pages/login/auth";
import Checkout from "./pages/Checkout/";
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
          {/* <Link to="/my-bag"> My Bag</Link> */}
          <Link to="/profile"> Profile</Link>
          <Link to="/auth"> Auath</Link>
          <Link to="/checkout/:id"> Checkout</Link>
          <Link to="/myorder/seller"> Checkpit</Link>
          <Link to="/detailorder/:id"> DetailOrder</Link>
        </nav>
        <Routes>
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/insert-product" element={<Product />} />
          <Route path="/my-product/:id" element={<EditProduct />} />
          <Route path="/my-product" element={<MyProduct />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/checkout/:id" element={<Checkout />}></Route>
          <Route path="/detailorder/:id" element={<DetailOrder />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/myorder/seller" element={<MyOrderSeller />}></Route>
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
          <Link to="/checkout/:id"> checkout</Link>
          <Link to="/myorder"> Checkpit</Link>
          <Link to="/detailorder/:id"> Detail Order</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/my-bag" element={<MyBag />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/checkout/:id" element={<Checkout />}></Route>
          <Route path="/myorder" element={<MyOrderCustomer />}></Route>
          <Route path="/detailorder/:id" element={<DetailOrder />}></Route>
        </Routes>
      </BrowserRouter>
    );
  } else if (whoLogin === "guest") {
    return (
      <BrowserRouter>
        <nav>
          <Link to="/myorder"> Checkpit</Link>
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
          <Link to="/checkout/:id"> Checkout</Link>
          <Link to="/myorder/customer"> My Order Seller</Link>
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
          <Route path="/my-bag" element={<MyBag />} />
          <Route path="/checkout/:id" element={<Checkout />}></Route>
          <Route path="/myorder" element={<MyOrderCustomer />}></Route>
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
