import { Link } from "react-router-dom";
import { Container, Card, Button, Col, Row, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavbarGuest from "../../Component/Header/Navbar";
import { loginUser } from "../../redux/actions/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    let data = {
      email,
      password,
    };
    dispatch(loginUser(data, navigate("/")));
  };
  return (
    <div>
      <div>
        <NavbarGuest />
      </div>
      <Container>
        <div className="form-login">
          <div className="header-form">
            <h2 className="tittle-form">Please login with your account</h2>
            <div className="mb-2 mt-4">
              <Button className="btn-register btn-customer">Customer</Button>
              <Link to="/loginSeller">
                <Button className="btn-register btn-seller">Seller</Button>
              </Link>
            </div>
          </div>
          <Form onSubmit={postData}>
            <div className="form-floating">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <label>Email</label>
            </div>

            <div className="form-floating">
              <input
                type="password"
                name="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
              />
              <label>Password</label>
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

export default Login;
