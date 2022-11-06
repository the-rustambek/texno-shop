import React from "react";
import { Link } from "react-router-dom";
import productsImage from "../../../Assets/Svg/phone.svg";
import PriceIcon from "../../../Assets/Svg/price.svg";
import skidka from "../../../Assets/Svg/skidka.svg";
import refresh from "../../../Assets/Svg/refresh.svg";
import Skeleton from "@mui/material/Skeleton";

const Posts = ({ posts, loading }) => {
  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }

  return (
    <ul className="products-list">
      {(loading ? Array.from(new Array(10)) : posts)?.map((product, i) => (
        <li className="products-item" key={i}>
          <>
            {product ? (
              <div className="products-thumb">
                <Link to="/products-about">
                  <img
                    // src={productsImage}
                    src={product?.img}
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
            ) : (
              <Skeleton variant="rectangular" width={180} height={178} />
            )}
          </>

          {product ? (
            <Link to="/products-about">
              <h3 className="products-name">{product?.name} </h3>
            </Link>
          ) : (
            <Skeleton variant="text" />
          )}
          {product ? (
            <p className="products-price">{product?.old_price_formatted}</p>
          ) : (
            <Skeleton variant="text" width={100} height={20} />
          )}
          <div className="products-card">
            {product ? (
              <div className="products-money">
                {product?.installment_prices[2]?.current_price}
              </div>
            ) : (
              <Skeleton variant="rounded" width={70} height={28} />
            )}
            {product ? (
              <span>x{product?.installment_prices[2]?.duration}</span>
            ) : (
              <Skeleton
                variant="text"
                style={{ marginLeft: 6 }}
                width={30}
                height={40}
              />
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
