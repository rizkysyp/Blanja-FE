import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Product-Sales.module.css";
import NavbarGuest from "../../Component/Header/Navbar";
import Sidebar from "../../Component/Header/Sidebar";

// Auth


//End Of Auth
export default function Product() {
  const [data, setData] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [inputData, setInputData] = useState({
    name: "",
    stock: "",
    price: "",
    category_id: "1",
  });

  let users = "http://localhost:3060/products/";
  useEffect(() => {
    axios
      .get(users)
      .then((res) => {
        console.log("get data success");
        console.log(res.data.data);
        res.data && setData(res.data.data);
      })
      .catch((err) => {
        console.log("get data fail");
        console.log(err);
      });
  }, []);
  const postForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", inputData.name);
    formData.append("stock", inputData.stock);
    formData.append("price", inputData.price);
    formData.append("category_id", inputData.category_id);
    formData.append("photo", photo);
    console.log(formData);
    axios
      .post("http://localhost:3060/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("input data success");
        console.log(res);
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

  return (
    <div>
      <div>
        <NavbarGuest />
      </div>
      <div className="container mt-3">
        {/* post data */}
        <form
          onSubmit={postForm}
          className="container col-12 row flew-row justfity-content-center"
        >
          <div className="col-4">
            <Sidebar />
          </div>
          <div className="col-8">
            <div className="card mb-4 " style={{ width: "40rem" }}>
              <div className="card-body">
                <h3>Inventory</h3>
                <hr />
                <p>Name of goods</p>
                <input
                  type="text"
                  value={inputData.name}
                  name="name"
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
    </div>
  );
}
