import { Link } from "react-router-dom";
import { Container, Card, Button, Col, Row, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./seller.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function RegisterSeller() {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    fullname: "",
    role: "toko",
  });

  const postForm = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", inputData.email);
    formData.append("password", inputData.password);
    formData.append("fullname", inputData.fullname);
    formData.append("role", inputData.role);

    console.log(formData);
    axios
      .post("http://localhost:3060/users/register", formData, {
        headers: {
          "Content-Type": "application/json",
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

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  return (
    <div>
      <Container>
        <div className="form-login">
          <div className="header-form">
            <h2 className="tittle-form">Please register for Seller Account</h2>
            <div className="mb-2 mt-4">
              <Link to="/register-cust">
                <Button className="btn-register btn-customer">Customer</Button>
              </Link>
              <Button className="btn-register btn-seller">Seller</Button>
            </div>
          </div>
          <Form onSubmit={postForm}>
            <div className="form-floating">
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email"
                value={inputData.email}
                onChange={handleChange}
              />
              <label>Email</label>
            </div>

            <div className="form-floating">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="password"
                value={inputData.password}
                onChange={handleChange}
              />
              <label>Password</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                name="fullname"
                className="form-control"
                placeholder="email"
                value={inputData.fullname}
                onChange={handleChange}
              />
              <label>Full Name</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                name="role"
                className="form-control"
                placeholder="role"
                value="toko"
                readOnly
                disabled
              />
              <label>Role</label>
            </div>
            <Button className="btn btn-login btn-danger" type="submit">
              Register
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
}
