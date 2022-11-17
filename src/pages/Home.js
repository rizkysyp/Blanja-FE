import React, { useEffect, useState } from "react";
import axios from "axios";
import NavbarGuest from "../Component/Header/Navbar";
import style from "../pages/Home/style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import Carousel from "../Component/Carosel";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  console.log(process.env.REACT_APP_BACKEND_API_HOST, "data");
  useEffect(() => {
    const getdata = async () => {
      try {
        let result = await axios.get(
          process.env.REACT_APP_BACKEND_API_HOST +
            `/products/sort?search=&sortby=&sort=`
        );
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
        <div className="container mt-3">
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

      <section>
        <div className="container mt-5">
          <div>
            <h3>Popular</h3>
          </div>
          <div className="row bg-light mx-auto mt-5">
            {data.map((item) => (
              <Card
                className="card shadow-sm"
                style={{
                  width: "208px",
                  marginLeft: "13px",
                  textDecoration: "none",
                  color: "#000000",
                }}
                to={`/product-detail/${item.id}`}
                as={Link}
              >
                {/* style={{ width: "10rem" }}> */}
                <div className="d-flex justify-content-center">
                  <img className={style.photo} src={item.photo}></img>
                </div>
                <p className="fs-2">{item.name}</p>
                <p className="text-danger fs-3">Rp. {item.price}</p>
                <p className="fs-6">(10)</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
