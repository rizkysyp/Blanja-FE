import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Product-Sales.module.css";
import NavbarGuest from "../../Component/Header/Navbar";
import Sidebar from "../../Component/Header/Sidebar";
import { useSelector } from "react-redux";
import NotFound from "../../Component/404";
import Swal from "sweetalert2";

export default function Product() {
  const [isLogin, setIsLogin] = useState(false);
  const [data, setData] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [inputData, setInputData] = useState({
    product_name: "",
    stock: "",
    price: "",
    category: "",
  });

  // let users = "http://localhost:3060/products/";
  // useEffect(() => {
  //   axios
  //     .get(users)
  //     .then((res) => {
  //       console.log("get data success");
  //       console.log(res.data.data);
  //       res.data && setData(res.data.data);
  //     })
  //     .catch((err) => {
  //       console.log("get data fail");
  //       console.log(err);
  //     });
  // }, []);
  const postForm = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    const formData = new FormData();
    formData.append("product_name", inputData.product_name);
    formData.append("stock", inputData.stock);
    formData.append("price", inputData.price);
    formData.append("category", inputData.category);
    formData.append("photo", photo);
    console.log(formData);
    axios
      .post(process.env.REACT_APP_BACKEND_API_HOST + "/products", formData, {
        "content-type": "multipart/form-data",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("input data success");
        Swal.fire("Success", "Input Product Success", "success");
      })
      .catch((err) => {
        console.log("input data fail");
        console.log(err);
      });
  };
  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  //Auth

  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    if (user.role === "toko") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  });
  return (
    <div>
      <div>
        <NavbarGuest />
      </div>
      {isLogin && (
        <div className="container mt-3">
          {/* post data */}
          <form
            onSubmit={postForm}
            className="container col-12 row flew-row justfity-content-center"
          >
            <div className="col-4"></div>
            <div className="col-8">
              <div className="card mb-4 " style={{ width: "40rem" }}>
                <div className="card-body">
                  <h3>Inventory</h3>
                  <hr />
                  <p>Name of goods</p>
                  <input
                    type="text"
                    value={inputData.product_name}
                    name="product_name"
                    onChange={handleChange}
                    placeHolder="name Your Products"
                  />
                  <p className="mt-3">Category</p>
                  <input
                    type="text"
                    value={inputData.category}
                    name="category"
                    onChange={handleChange}
                    placeHolder="name Your Products"
                  />
                </div>
              </div>

              <div className="card mb-4 " style={{ width: "40rem" }}>
                <div className="card-body">
                  <h3>Item Details</h3>
                  <hr />
                  <p>Unit Price</p>
                  <input
                    type="number"
                    value={inputData.price}
                    name="price"
                    onChange={handleChange}
                    placeHolder=""
                  />
                  <p>Stock</p>
                  <input
                    type="number"
                    value={inputData.stock}
                    name="stock"
                    onChange={handleChange}
                    placeHolder=""
                  />
                </div>
              </div>

              {/* <div className="card">
   <div className="card-body">
     <h3>Category</h3>
     <hr />
     <p>Insert Category Id</p>
     <input
       type="number"
       value={inputData.category_id}
       name="category"
       onChange={handleChange}
       placeHolder="category"
     />
   </div>
 </div> */}

              <div className="card mb-4 " style={{ width: "40rem" }}>
                <div className="card-body">
                  <h3>Photo</h3>
                  <hr />
                  <p>Masukan Foto</p>
                  <input
                    type="file"
                    name="photo"
                    onChange={handlePhoto}
                    placeHolder="phoyo"
                  />
                </div>
              </div>
              <button
                className="btn btn-primary"
                style={{ width: "79%" }}
                type="submit"
              >
                input
              </button>
            </div>
          </form>
        </div>
      )}

      {!isLogin && <NotFound />}
    </div>
  );
}
