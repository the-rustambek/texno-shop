import React from "react";
 import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";
import phone from "../../../Assets/Svg/phone.svg"
import phone1 from "../../../Assets/Svg/phone1.svg"
import refresh from "../../../Assets/Svg/refresh.svg"
import price from "../../../Assets/Svg/price.svg"
import skidka from "../../../Assets/Svg/skidka.svg"
import skidkagreen from "../../../Assets/Svg/skidkagreen.svg"
import "../ProductsAboutPage.css";
 
import {   Pagination, Navigation } from "swiper";

export default function SwiperProduct() {
  return (
    <div className="swiper-product">
        <ul className="swiper-list">
          <li className="swiper-item">
            <img src={refresh} alt="refresh" className="swiper-icon" />
          </li>
          <li className="swiper-item  swiper-price">
            <img src={price} alt="refresh" className="swiper-icon" />
          </li>
          <li className="swiper-item swiper-skidka">
            <img src={skidka} alt="refresh" className="swiper-icon" />
          </li>
          <li className="swiper-item swiper-skidkagreen">
            <img src={skidkagreen} alt="refresh" className="swiper-icon" />
          </li>
        </ul>
      
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
