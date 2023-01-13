import { Link, Navigate } from "react-router-dom";
import { Container, Card, Button, Col, Row, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./customer.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
export default function RegisterCust() {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
    fullname: "",
    role: "customer",
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
      .post(
        process.env.REACT_APP_BACKEND_API_HOST + "/users/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("input data success");
        Swal.fire("Success", "Berhasil Register!", "success");
        Navigate("/auth");
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
            <h2 className="tittle-form">
              Please register for Customer Account
            </h2>
            <div className="mb-2 mt-4">
              <Button className="btn-register btn-customer">Customer</Button>
              <Link to="/register-seller">
                <Button className="btn-register btn-seller">Seller</Button>
              </Link>
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
                value="Customer"
                onChange={handleChange}
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
