import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

export default function EmailCheck() {
  return (
    <Container style={{ height: "100vh" }}>
      <div className="form-login align-self-center">
        <div className="header-form">
          <h2 className="tittle-form">Reset Your Password</h2>
        </div>
        <Form onSubmit="">
          <div className="form-floating">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="email"
            />
            <label>Email</label>
          </div>
          <Button
            className="btn btn-login btn-danger rounded-pill"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
}
