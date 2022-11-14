import React from "react";

import { Container, Row } from "react-bootstrap";
import Logo from "../../../icon/Logo.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import Filter from "../../../icon/Filter.svg";
import Cart from "../../../icon/cart.png";

const Sidebar = () => {
  return (
    <div
      className="container bg-white d-flex mx-auto"
      style={{ height: "100vh" }}
    >
      <div>
        <img src={Logo} className="img-fluid"></img>
        <span>asas</span>
        <span>ass</span>
      </div>
    </div>
  );
};

export default Sidebar;
