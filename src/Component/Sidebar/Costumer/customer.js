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

const MyOrderCustomer = () => {
  const Navigate = useNavigate();
  const [profile, setProfile] = useState([]);

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
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    Swal("Good Job!", "User Logout", "success");
    Navigate("/login");
  };
  return (
    <div>
      <aside>
        <div className={styles.profile}>
          <div className={styles.imgProfile}>
            <img src={profile.photo ? profile.photo : kris} alt="" />
          </div>
          <h4>{profile.fullname}</h4>
          <p onClick={handleLogout}>Logout</p>
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
          <div className={`col ${styles.box2}`}>
            <Link to="#" className={styles.linkto}>
              <div className={styles.bgBox2}>
                <img src={ship} alt="" />
              </div>
              <h3>Shipping Address</h3>
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
    </div>
  );
};

export default MyOrderCustomer;
