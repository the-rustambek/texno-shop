import React from 'react'
import Products from './components/Products'
import SearchProduct from './components/SearchProduct'
import "./ProductsPage.css"

export default function ProductsPage() {
  return (
    <div className='productspage'>
      <div className='products-top'>
        <a href="/" className='products-toplink' >
        Заявки    
        </a>
        <span>{">"}</span>
        <p className="productspage-text">
        Оформить заказ
        </p>
      </div>
      <SearchProduct />
      <Products />
    </div>
  )
}
