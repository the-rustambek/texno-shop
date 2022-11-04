import React, { useRef, useState } from "react";
 import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../ProductsAboutPage.css";

 
import { Lazy, Pagination, Navigation } from "swiper";

export default function SwiperProduct() {
  return (
    <div className="swiper-product">
      <Swiper
        style={{
          "--swiper-navigation-color": "#BBC2D0",
          "--swiper-pagination-color": "#3D639D",
        }}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Lazy, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            data-src="https://swiperjs.com/demos/images/nature-1.jpg"
            className="swiper-lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-src="https://swiperjs.com/demos/images/nature-2.jpg"
            className="swiper-lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-src="https://swiperjs.com/demos/images/nature-3.jpg"
            className="swiper-lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-src="https://swiperjs.com/demos/images/nature-4.jpg"
            className="swiper-lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-src="https://swiperjs.com/demos/images/nature-5.jpg"
            className="swiper-lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-src="https://swiperjs.com/demos/images/nature-6.jpg"
            className="swiper-lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-src="https://swiperjs.com/demos/images/nature-7.jpg"
            className="swiper-lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-src="https://swiperjs.com/demos/images/nature-8.jpg"
            className="swiper-lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            data-src="https://swiperjs.com/demos/images/nature-9.jpg"
            className="swiper-lazy"
          />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
