import React from 'react'
import { Link } from 'react-router-dom'
import "./ProductsAboutPage.css"
import "swiper/css/bundle";
import SwiperProduct from './components/SwiperProduct';
 export default function ProductsAboutPage() {
  return (
    <div className='productspage'>
      <div className='products-top'>
        <Link to="/" className='products-toplink' >
        Заявки    
        </Link>
        <span>{">"}</span>
        <Link to="/products" className='products-toplink' >
        Оформить заказ    
        </Link>
        <span>{">"}</span>
        <p className="productspage-text">
        Смартфон Apple iPhone 11 128 Gb Slim Box черный
        </p>
      </div>
      <div className="productspage-box">
      <h2 className="productspage-title">
        Смартфон Apple iPhone 11 128 Gb Slim Box черный
        </h2>
        <SwiperProduct /> 

      </div>
      
    </div>
  )
}
