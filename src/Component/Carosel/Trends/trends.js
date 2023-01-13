import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../../images/Slide1.jpg";
import slide2 from "../../../images/Slide2.jpg";

import "./trend.css";

const Trends = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <div className="main-slider">
        <Slider {...settings}>
          <div className="slider-content">
            <img src={slide1} alt="" />
          </div>
          <div className="slider-content">
            <img src={slide2} alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Trends;
