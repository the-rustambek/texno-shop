import React from 'react';
import { Link } from 'react-router-dom';
import productsImage from "../../../Assets/Svg/phone.svg";
import PriceIcon from "../../../Assets/Svg/price.svg";
import skidka from "../../../Assets/Svg/skidka.svg";
import refresh from "../../../Assets/Svg/refresh.svg";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="products-list">
    {posts?.map((product, i) => (
      <li className="products-item" key={i}>
        <div className="products-thumb">
          <Link to="/products-about">
            <img
              src={productsImage}
              alt="productsImage"
              className="products-img"
            />
          </Link>
          <div className="products-box">
            <img src={PriceIcon} alt="" className="price-icon" />
          </div>
          <div className="products-skidka">
            <img src={skidka} alt="" className="price-skidka" />
          </div>
          <div className="products-refresh">
            <img src={refresh} alt="" className="price-refresh" />
          </div>
        </div>
        <Link to="/products-about">
          <h3 className="products-name">{product?.title} </h3>
        </Link>
        <p className="products-price">{product?.id*100000} сум</p>
        <div className="products-card">
          <div className="products-money">от 2 435 000 сум</div>
          <span>x24</span>
        </div>
      </li>
    ))}
  </ul>
  );
};

export default Posts;