import React, { useEffect, useState } from "react";
import NavbarGuest from "../../../Component/Header/Navbar";
import styles from "./customer.module.css";
import kris from "../../../images/kris.png";
import account from "../../../icon/profile.svg";
import ship from "../../../icon/ship.svg";
import order from "../../../icon/cart.svg";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const MyOrderCustomer = () => {
  const Navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  const [transactions, setTransactions] = useState("");
  async function fetchData() {
    try {
      const token = localStorage.getItem("token");
      const result = await axios.get(
        `${process.env.REACT_APP_BACKEND_API_HOST}/users/profile`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProfile(result.data.data);
    } catch (error) {
      // console.log(error.response);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  //   console.log(profile);

  async function fetchTransactions() {
    try {
      const token = localStorage.getItem("token");
      const result = await axios.get(
        `${process.env.REACT_APP_BACKEND_API_HOST}/order`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setTransactions(result.data.data);
    } catch (error) {
      // console.log(error.response);
    }
  }
  useEffect(() => {
    fetchTransactions();
  }, []);

  //   console.log(transaction)

  return (
    <div>
      <NavbarGuest />
      <aside>
        <div className={styles.profile}>
          <div className={styles.imgProfile}>
            <img src={profile.photo ? profile.photo : kris} alt="" />
          </div>
          <h4 style={{ marginTop: "30px" }}>{profile.fullname}</h4>
        </div>
        <div className={`col ${styles.mainBox}`}>
          <div className={`col ${styles.box1}`}>
            <Link to="/profileCustomer" className={styles.linkto}>
              <div className={styles.bgBox1}>
                <img src={account} alt="" />
              </div>
              <h3>My Account</h3>
            </Link>
          </div>

          <div className={`col ${styles.box3}`}>
            <Link to="/myOrder" className={styles.linkto}>
              <div className={styles.bgBox3}>
                <img src={order} alt="" />
              </div>
              <h3>My Order</h3>
            </Link>
          </div>
        </div>
      </aside>
      <main className={styles.mainorder}>
        <h1>My Order</h1>
        <hr />
        <table className={styles.contentTable}>
          {/* {isLoading && <h1>loading.....</h1>} */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Total</th>
              <th>Payment</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {transactions &&
              transactions.map((index) => (
                <tr>
                  <td>{index.username}</td>
                  <td>{index.product_name}</td>
                  <td>{index.amount}</td>
                  <td>{index.total}</td>

                  <td>
                    {index.status === 0 ? (
                      <Button
                        as={Link}
                        to={`/checkout/${index.id}`}
                        variant="primary"
                        size="sm"
                        className="me-2"
                      >
                        Waiting For Payment
                      </Button>
                    ) : (
                      <button className="btn btn-primary">
                        Payment Success
                      </button>
                    )}
                  </td>
                  <td>
                    <Button
                      as={Link}
                      to={`/detailorder/${index.id}`}
                      variant="primary"
                      size="sm"
                      className="me-2 btn-danger"
                    >
                      DETAIL ORDER
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default MyOrderCustomer;
