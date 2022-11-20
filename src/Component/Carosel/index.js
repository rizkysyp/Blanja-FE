import Foto1 from "../../image/Foto1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper";
// Import Swiper React components
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./styles.css";

// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="container mt-4">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        rewind={true}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{ backgroundColor: "transparent" }}>
          <img src={Foto1}></img>
        </SwiperSlide>

        <SwiperSlide style={{ backgroundColor: "transparent" }}>
          <img src={Foto1}></img>
        </SwiperSlide>

        <SwiperSlide style={{ backgroundColor: "transparent" }}>
          <img src={Foto1}></img>
        </SwiperSlide>

        <SwiperSlide style={{ backgroundColor: "transparent" }}>
          <img src={Foto1}></img>
        </SwiperSlide>

        <SwiperSlide style={{ backgroundColor: "transparent" }}>
          <img src={Foto1}></img>
        </SwiperSlide>

        <SwiperSlide style={{ backgroundColor: "transparent" }}>
          <img src={Foto1}></img>
        </SwiperSlide>
      </Swiper>
    </div>

    // <div className="container mt-3">
    //   <div className="carousel-top">
    //     <Carousel
    //       className="w-100"
    //       responsive={responsiveTopCarousel}
    //       arrows={true}
    //       showDots={true}
    //       autoPlay={true}
    //     >
    //       <div className="carousel-items">
    //         <img
    //           className="carousel-img"
    //           src={require("../../image/Foto1.png")}
    //           alt="Carl 1"
    //         />
    //       </div>

    //       <div className="carousel-items">
    //         <img
    //           className="carousel-img"
    //           src={require("../../image/Foto1.png")}
    //           alt="Carl 1"
    //         />
    //       </div>

    //       <div className="carousel-items">
    //         <img
    //           className="carousel-img"
    //           src={require("../../image/Foto1.png")}
    //           alt="Carl 1"
    //         />
    //       </div>
    //     </Carousel>
    //   </div>
    // </div>
  );
}

// export default function App() {
//   return (
//     <div className="container mt-3">
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <img src={Foto1}></img>
//         </SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }
