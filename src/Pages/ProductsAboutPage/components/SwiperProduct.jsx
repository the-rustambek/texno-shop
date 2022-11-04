import React, { useRef, useState } from "react";
 import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";
import phone from "../../../Assets/Svg/phone.svg"
import phone1 from "../../../Assets/Svg/phone1.svg"

import "../ProductsAboutPage.css";

 
import {   Pagination, Navigation } from "swiper";

export default function SwiperProduct() {
  return (
    <div className="swiper-product">
      <Swiper
        style={{
           "--swiper-pagination-color": "red",
        }}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={phone}
            className="swiper-lazy" alt="swiper-img"
          />
         </SwiperSlide>
        <SwiperSlide>
        <img
            src={phone1}
            className="swiper-lazy" alt="swiper-img"
          />
         </SwiperSlide>
         <SwiperSlide>
          <img
            src={phone}
            className="swiper-lazy" alt="swiper-img"
          />
         </SwiperSlide>
        <SwiperSlide>
        <img
            src={phone1}
            className="swiper-lazy" alt="swiper-img"
          />
         </SwiperSlide> <SwiperSlide>
          <img
            src={phone}
            className="swiper-lazy" alt="swiper-img"
          />
         </SwiperSlide>
        <SwiperSlide>
        <img
            src={phone1}
            className="swiper-lazy" alt="swiper-img"
          />
         </SwiperSlide>
      </Swiper>
    </div>
  );
}
