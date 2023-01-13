import "./style.module.css";
import React from "react";
import { Link } from "react-router-dom";
import stars from "../../icon/Stars.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const Cards = (data) => {
  return (
    <div className="container">
      <Link to={`/detail/${data.product_name}`}>
        <div className="card card-md-5 cursor">
          <div className="images">
            <img
              src={data.product_image}
              className="image"
              style={{ height: "10px" }}
            />
          </div>
          <div className="card-body">
            <p className="title">{data.product_name}</p>
            <ul className="list">
              <li className="price">Rp. {data.product_price}</li>
              <li className="store">{data.product_brand}</li>
              <li className="rating">
                <img src={stars} />
                <img src={stars} />
                <img src={stars} />
                <img src={stars} />
                <img src={stars} />
                (5/5)
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
