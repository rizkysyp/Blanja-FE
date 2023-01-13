import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import formal from "../../../images/formal.png";
import bagpack from "../../../images/bagpack.png";
import dasi from "../../../images/dasi.png";
import heels from "../../../images/heels.png";
import handbag from "../../../images/formal.png";
import accessories from "../../../images/accesories.png";
import "./category.css";
import { Link } from "react-router-dom";

const Category = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: true,
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  return (
    <div className="container">
      <div className="main-slider">
        <h3 className="title">
          <b>Category</b>
        </h3>
        <span className="desc">What are you currently looking for!</span>
        <div className="row">
          <Slider {...settings}>
            <Link to="/category/T-Shirt">
              <div className="slider-content">
                <img src={formal} alt="" />
              </div>
            </Link>
            <div className="slider-content">
              <img src={accessories} alt="" />
            </div>
            <div className="slider-content">
              <img src={bagpack} alt="" />
            </div>
            <div className="slider-content">
              <img src={dasi} alt="" />
            </div>
            <div className="slider-content">
              <img src={heels} alt="" />
            </div>
            <div className="slider-content">
              <img src={handbag} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Category;
