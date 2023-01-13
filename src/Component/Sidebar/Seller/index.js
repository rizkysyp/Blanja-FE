import React from "react";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
const Sidebar = (data) => {
  const Navigate = useNavigate();

  
  console.log(data, "data");
  //   useEffect(() => {
  //     try {
  //       axios.get(
  //         process.env.REACT_APP_BACKEND_API_HOST + "/users/profile",
  //         users
  //       );
  //       res.data && setData(res.data.data);
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }, []);

  const logout = () => {
    localStorage.clear();
    Navigate("/login");
    Swal.fire("Success", "Logout success", "success");
  };
  return (
    <div
      className="col-3 d-flex flex-column pt-5 "
      style={{ height: "90vh", backgroundColor: "white" }}
    >
      <div className="justify-content-center d-flex flex-row ">
        <div className="d-flex flex-row h-25 justify-content-center ">
          <img
            src={data?.photo}
            alt=""
            className="img rounded-pill"
            style={{ height: "110px", width: "110px" }}
          />
          <div className="d-flex flex-column h-50 mt-3 ms-2">
            <h6 className="myfont ms-3">{data.fullname}</h6>
            {/* <ModalEditPhoto /> */}
          </div>
        </div>
      </div>

      <div className="w-50 justify-content-center d-flex flex-column mt-5 ms-5">
        <Link to="/history">
          <button className="myfont3 btn">
            <div
              className="btn mx-2"
              style={{
                backgroundColor: "#F36F45",
                borderRadius: "50px",
                width: "40px",
              }}
            >
              <img src="" alt="" />
            </div>
            History
          </button>
        </Link>
        <Link to="/mybag">
          <button className="myfont3 btn mb-5">
            <div
              className="btn mx-2"
              style={{
                backgroundColor: "#F3456F",
                borderRadius: "50px",
                width: "40px",
              }}
            >
              <img src="" alt="" />
            </div>
            My Bag
          </button>
        </Link>
        <button
          className="btn btn-danger btn-small rounded-pill"
          onClick={() => logout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
