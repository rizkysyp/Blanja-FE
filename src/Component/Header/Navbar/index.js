import React from "react";
import { Container, Row } from "react-bootstrap";
import Logo from "../../../icon/Logo.svg";
import style from "./index.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Filter from "../../../icon/Filter.svg";
import Cart from "../../../icon/cart.png";
const NavbarGuest = () => {
  return (
    <div>
      <div className="container-fluid shadow-lg">
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-2 d-flex align-items-center">
              <img src={Logo}></img>
              <div>
                <p className={style.text}>Blanja</p>
              </div>
            </div>

            <div className="container col-6 d-flex justify-content-center">
              <input className="rounded-pill form-control" style={{}}></input>
              <img
                src={Filter}
                className="input-group-text"
                id="basic-addon2"
              ></img>
            </div>
            <div className="container col-4 d-flex align-items-center justify-content-end">
              <img src={Cart} className={style.cart}></img>
              <button className={"" + style.buttonLogin}>Login</button>
              <button className={"" + style.buttonSignup}>Button</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarGuest;
