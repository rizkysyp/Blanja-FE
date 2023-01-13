import "./checkout.module.css";
import React from "react";
import { Form, Card, Container, CarouselItem } from "react-bootstrap";
import gopay from "../../images/gopay.png";
import cc from "../../images/cc.png";
import pos from "../../images/pos.png";
import NavbarGuest from "../../Component/Header/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const Checkout = () => {
  const [bag, setBag] = useState();
  const [price, setPrice] = useState("");
  const [checkout, setCheckout] = useState("");
  const Navigate = useNavigate();
  const { id } = useParams();
  async function fetchData() {
    try {
      console.log(id);
      const token = localStorage.getItem("token");
      const result = await axios.get(
        process.env.REACT_APP_BACKEND_API_HOST + `/order/detail/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCheckout(result.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handlePayment = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      console.log(id);
      await axios.put(
        process.env.REACT_APP_BACKEND_API_HOST + `/order/status/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Swal.fire("Success", "Payment Succed", "success");
      Navigate("/myorder");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(checkout);
  return (
    <div>
      <div>
        <NavbarGuest />
      </div>
      <div className="container-fluid bg-new">
        <div className="container py-3">
          <h1>Payment</h1>
          <div className="container col-12 row py-3">
            <div className="col col-8 row">
              <div className="container col-12 row py-3">
                <div className="col col-12 row container shadow py-3 align-items-center">
                  <div className="col-2">
                    <img src={gopay} alt="" className="bag-product" />
                  </div>
                  <div className="col-4">
                    <h2>Gopay</h2>
                  </div>
                  <div className="col col-2 offset-4">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </div>
              </div>
              <div className="container col-12 row py-3">
                <div className="col col-12 row container shadow py-3 align-items-center">
                  <div className="col-2">
                    <img src={pos} alt="" className="bag-product" />
                  </div>
                  <div className="col-4">
                    <h2>Pos</h2>
                  </div>
                  <div className="col col-2 offset-4">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </div>
              </div>
              <div className="container col-12 row py-3">
                <div className="col col-12 row container shadow py-3 align-items-center">
                  <div className="col-2">
                    <img src={cc} alt="" className="bag-product" />
                  </div>
                  <div className="col-4">
                    <h2>Visa</h2>
                  </div>
                  <div className="col col-2 offset-4">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container col-4">
              <div
                className="col col-12 row container shadow py-3"
                style={{ backgroundColor: "white" }}
              >
                <div className="col col-12">
                  <h6>Shopping Summary</h6>
                </div>
                <div className="row pt-3">
                  <div className="col-6">
                    <h6 style={{ color: "#9B9B9B" }}>Order</h6>
                  </div>
                  <div className="col-3 offset-3">
                    <h6>Rp.{checkout.total}</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <h6 style={{ color: "#9B9B9B" }}>Delivery</h6>
                  </div>
                  <div className="col-3 offset-3">
                    <h6>Rp.0</h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <hr />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <h6 style={{ color: "black" }}>Shopping summary</h6>
                  </div>
                  <div className="col-3 offset-3">
                    <h6 className="text-danger">Rp.{checkout.total}</h6>
                  </div>
                </div>
                <div className="row align-items-center py-3">
                  <div className="col-12">
                    <button
                      className="btn btn-danger"
                      onClick={handlePayment}
                      style={{
                        height: "50px",
                        borderRadius: "40px",
                        width: "350px",
                      }}
                    >
                      <p style={{ marginTop: "10px" }}>Buy</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
