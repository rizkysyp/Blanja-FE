import "./bag.module.css";
import React from "react";
import { Form, Card, Container, CarouselItem } from "react-bootstrap";
import { Button } from "react-bootstrap";
import NavbarGuest from "../../Component/Header/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const MyBag = () => {
  const [bag, setBag] = useState();
  const [price, setPrice] = useState("");
  const [checkout, setCheckout] = useState("");
  const Navigate = useNavigate();
  const token = localStorage.getItem("token");
  async function fetchData() {
    try {
      const token = localStorage.getItem("token");
      const result = await axios.get(
        process.env.REACT_APP_BACKEND_API_HOST + `/bag`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setBag(result.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  const deleteData = async (id) => {
    //sending
    await axios.delete(
      process.env.REACT_APP_BACKEND_API_HOST + `/bag/delete/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    Swal.fire("Good job!", "Delete Sukses", "success");
    //panggil function "fetchData"
  };

  const handleCheckout = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      console.log(checkout);
      console.log(token);
      await axios.post(
        process.env.REACT_APP_BACKEND_API_HOST + `/order`,
        checkout,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await axios.delete(
        process.env.REACT_APP_BACKEND_API_HOST + `/bag/delete/${bag[0].id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Swal.fire("Good job!", "Delete Sukses", "success");
      Navigate("/myorder");
    } catch (error) {
      console.log(error);
      return Swal("Good Job!", "Login Success", "success");
    }
  };
  useEffect(() => {
    if (price) {
      setCheckout({
        ...checkout,
        id_product: bag[0].id_product,
        total: bag[0].price * bag[0].amount,
        amount: bag[0].amount,
      });
    }
  }, [price, bag]);
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (bag) {
      let total = 0;
      bag.map((item) => (total = total + item.price * item.amount));
      setPrice(total);
    }
  }, [bag]);
  console.log(bag);
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
            {!bag ? (
              <p>Loading...</p>
            ) : bag.length < 1 ? (
              <p>Bag is empty</p>
            ) : (
              bag.map((item) => (
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
                    <img
                      src={item.photo}
                      className="rounded"
                      style={{ height: "80px" }}
                    ></img>
                  </div>
                  <div style={{ marginLeft: "15px" }}>
                    <p>
                      {item.product_name}
                      <p style={{ color: "#9B9B9B" }}>Zalora Cloth</p>
                    </p>
                  </div>
                  <div style={{ marginLeft: "35px" }}>
                    <p>Quantity</p>
                    <p>{item.amount}</p>
                  </div>
                  <div style={{ marginLeft: "180px" }}>
                    <p>Price</p>
                    <p>{item.price}</p>
                  </div>
                  <div style={{ marginLeft: "50px" }}>
                    <Button
                      onClick={() => deleteData(item.id)}
                      variant="danger"
                      size="md"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="container col-4">
            <div
              className="col col-12 row container shadow py-3"
              style={{ backgroundColor: "white" }}
            >
              <div className="col col-12">
                <h6>Shopping Summary</h6>
              </div>
              <div className="row py-3">
                <div className="col-6">
                  <h6 style={{ color: "#9B9B9B", fontSize: "15px" }}>
                    Total price
                  </h6>
                </div>
                <div className="col-3 offset-3">
                  <h6 style={{ fontWeight: "bold", fontSize: "15px" }}>
                    Rp.{price}
                  </h6>
                </div>
              </div>
              <div className="row align-items-center py-3">
                <div className="col-12">
                  {/* <Link to="/checkout" className="link"> */}
                  <button
                    className="btn btn-danger"
                    onClick={handleCheckout}
                    style={{
                      height: "50px",
                      borderRadius: "40px",
                      width: "350px",
                    }}
                  >
                    <p style={{ marginTop: "10px" }}>Buy</p>
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyBag;
