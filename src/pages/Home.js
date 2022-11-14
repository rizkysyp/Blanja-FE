import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarGuest from "../Component/Header/Navbar";
import style from "../pages/Home/style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import Carousel from "../Component/Carosel";

export default function Home() {
  const [data, setData] = useState([]);
  const product = "http://localhost:3060/products";

  useEffect(() => {
    const getdata = async () => {
      try {
        let result = await axios.get(product);
        setData(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getdata();
  }, []);

  return (
    <div className="Body">
      <header>
        <NavbarGuest />
      </header>
      <section>
        <Carousel />
      </section>
      <div>buat carosel</div>
      <section>
        <div className="container mt-">
          <div>
            <h3>New</h3>
          </div>
          <div className="row bg-light mx-auto">
            {data.map((item) => (
              <div
                className="card shadow-sm"
                style={{ width: "208px", marginLeft: "13px" }}
              >
                {/* style={{ width: "10rem" }}> */}
                <div className="d-flex justify-content-center">
                  <img className={style.photo} src={item.photo}></img>
                </div>
                <p className="fs-2">{item.name}</p>
                <p className="text-danger fs-3">Rp. {item.price}</p>
                <p className="fs-6">(10)</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
