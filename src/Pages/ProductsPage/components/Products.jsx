import React, { useEffect, useMemo, useState } from "react";
import productsImage from "../../../Assets/Svg/phone.svg";
import Pagination from "./Pagination";
import PriceIcon from "../../../Assets/Svg/price.svg";
import skidka from "../../../Assets/Svg/skidka.svg";
import refresh from "../../../Assets/Svg/refresh.svg";


export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
 
  const [currentPage, setCurrentPage] = useState(1);
  let PageSize = 10;

  var currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return products.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

   return (
    <div className="products">
      <h2 className="products-count">Все товары ({products.length})</h2>
      <div className="products-blok">
        {currentTableData?.length > 0 && (
          <ul className="products-list">
            {currentTableData?.map((product, i) => (
              <li className="products-item" key={i}>
                <div className="products-thumb">
                  <a href="#">
                    <img
                      src={productsImage}
                      alt="productsImage"
                      className="products-img"
                    />
                  </a>
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
                <a href="#">
                  <h3 className="products-name">{product?.title} </h3>
                </a>
                <p className="products-price">7 300 000 сум</p>
                <div className="products-card">
                  <div className="products-money">от 2 435 000 сум</div>
                  <span>x24</span>
                </div>
              </li>
            ))}
          </ul>
        )}
        <Pagination
          key={currentTableData?.id}
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={products?.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}
