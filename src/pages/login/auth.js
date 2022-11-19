import { Link, Navigate } from "react-router-dom";
import { Container, Card, Button, Col, Row, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavbarGuest from "../../Component/Header/Navbar";
import { loginUser } from "../../redux/actions/login";
import axios from "axios";

const Auth = () => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState({
    email: "",
    otp: "",
  });

  const postData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", inputData.email);
    formData.append("otp", inputData.otp);

    console.log(formData);
    axios
      .post(process.env.REACT_APP_BACKEND_API_HOST + "/users/verif", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        alert("Verif Success, You Can Login");
        Navigate("/login");
        console.log(res);
      })
      .catch((err) => {
        alert("OTPMU Salah");
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
      <div>
        <NavbarGuest />
      </div>
      <Container>
        <div className="form-login">
          <div className="header-form">
            <h2 className="tittle-form">Please Verify Your Account</h2>
          </div>
          <Form onSubmit={postData}>
            <div className="form-floating">
              <input
                type="email"
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
                type="text"
                name="otp"
                className="form-control"
                value={inputData.otp}
                onChange={handleChange}
                placeholder="OTP"
              />
              <label>OTP</label>
            </div>
            <Button className="btn btn-login btn-danger" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Auth;
