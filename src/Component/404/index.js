import React, { Link } from "react";
import { Navigate } from "react-router-dom";
import { ReactDOM } from "react";

class NotFound extends React.Component {
  render() {
    return (
      <div className="container mt-5 align-items-center h-100">
        <div>
          <h1
            className="text-center"
            style={{ fontSize: "200px", color: "#DB3022" }}
          >
            403
          </h1>
          <h2 className="text-center" style={{ fontSize: "30px" }}>
            Forbidden
          </h2>
          <p className="text-center mt-3">
            Please Login or Sign Up Account with Toko Role's
          </p>
        </div>
      </div>
    );
  }
}

export default NotFound;
