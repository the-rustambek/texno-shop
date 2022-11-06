import React, { useEffect, useState } from "react";
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
import {  useParams } from "react-router-dom";
import axios from "axios";
import { get } from "lodash";
 
import {   Pagination, Navigation } from "swiper";

export default function SwiperProduct() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  let  {slug} = useParams()
   useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`https://api.radius.uz/api/v2/products?page=1&category_id=39&order_by=views&order_direction=desc&price_from=0&price_to=22999000`);
    const filtered = res.data?.data?.filter(
      (slugitem)=> slugitem?.slug===slug
    )
       setPosts(filtered);
       console.log(filtered)
       setLoading(false);
    };
    fetchPosts();
   }, []);
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
              {get(posts,"[0]")?.gallery?.map((product, i) => (
  <SwiperSlide>
  <img
    src={product?.original}
    className="swiper-lazy" alt="swiper-img"
  />
 </SwiperSlide>
              ))}

      
       
      </Swiper>
    </div>
  );
}
