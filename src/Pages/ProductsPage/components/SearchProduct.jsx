import React from 'react'
import Search from "../../../Assets/Images/Search.png";

export default function SearchProduct() {
  return (
    <div className='search-box'>
        <h2 className="search-title">
        Оформить заказ
        </h2>
        <form className="search-form">
            <input type="text" className="search-input" placeholder='Поиск по названию товара' />
            <button className="search-btn">
                <img src={Search} alt="Search" className="search-img" />
            </button>
        </form>
    </div>
  )
}
