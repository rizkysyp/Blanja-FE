import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Button, Col, Row, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
const Login = () => {
  return (
    <div>
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
          <Form>
            <div className="form-floating">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="email"
                value=""
              />
              <label>Email</label>
            </div>

            <div className="form-floating">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Tes"
                value=""
              />
              <label>Password</label>
            </div>
            <Button className="btn btn-login btn-danger">Login</Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Login;
