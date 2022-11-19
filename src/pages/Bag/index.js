import "./index.css";
import React from "react";
import { Form, Card, Container } from "react-bootstrap";
import photo from "../../image/kris.png";
import NavbarGuest from "../../Component/Header/Navbar";
const myBag = () => {
  return (
    <div>
      <header>
        <NavbarGuest />
      </header>
      <main>
        <div className="container col-12 d-flex mt-5">
          <div className="col-6 row">
            <div className="card d-flex flex-row align-items-center first">
              <div>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
              <div
                className="ml-3"
                style={{ marginLeft: "15px", marginTop: "12px" }}
              >
                <p>
                  Select All Items
                  <span style={{ marginLeft: "3px" }}>(2 items included)</span>
                </p>
              </div>
              <div>
                <a href="" style={{ marginLeft: "250px", color: "#DB3022" }}>
                  Delete
                </a>
              </div>
            </div>
            <div
              className="card d-flex flex-row align-items-center"
              style={{ height: "107px" }}
            >
              <div>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
              <div style={{ marginLeft: "15px" }}>
                <img src={photo} className="rounded"></img>
              </div>
              <div style={{ marginLeft: "15px" }}>
                <p>
                  Men's Formal suit - Black
                  <p style={{ color: "#9B9B9B" }}>Zalora Cloth</p>
                </p>
              </div>
            </div>

            <div
              className="card d-flex flex-row align-items-center"
              style={{ height: "107px" }}
            >
              <div>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
              </div>
              <div style={{ marginLeft: "15px" }}>
                <img src={photo} className="rounded"></img>
              </div>
              <div style={{ marginLeft: "15px" }}>
                <p>
                  <p className="font-weight-bold">Men's Formal suit - Black</p>
                  <p style={{ color: "#9B9B9B" }}>Zalora Cloth</p>
                </p>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="card kanan" style={{ marginLeft: "20px" }}>
              sas
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default myBag;
