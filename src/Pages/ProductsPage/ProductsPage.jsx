import React from 'react'
import { Link } from 'react-router-dom'
import Products from './components/Products'
import SearchProduct from './components/SearchProduct'
import "./ProductsPage.css"

export default function ProductsPage() {
  return (
    <div className='productspage'>
      <div className='products-top'>
        <Link to="/" className='products-toplink' >
        Заявки    
        </Link>
        <span>{">"}</span>
        <p className="productspage-text">
        Оформить заказ
        </p>
      </div>
       <Products />
    </div>
  )
}
