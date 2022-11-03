import React, { useEffect, useState } from 'react'
 import productsImage from "../../../Assets/Images/productsImage.png";

 const products = [...Array(33)];

export default function Products() {
    
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//          fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()).then((data) => 
//          setProducts(data)  
//     );
// }, []);

  return (
    <div className='products'>
            <h2 className="products-count">
            Все товары (121)
            </h2>
            <div className="products-blok">
                { products.length>0 &&(
               <ul className="products-list">
               {products.map((product,i)=>(
                <li className="products-item">
                    <div className="products-thumb">
                       <a href="#">
                         <img src={productsImage} alt="productsImage" 
                         className="products-img" /></a>
                    </div>
                   <a href="#">
                    <h3 className="products-name">
                    Смартфон Samsung Google
                    </h3>
                    </a>
                    <p className="products-price">
                    7 300 000 сум 
                    </p>
                    <div className="products-card">
                        <div className="products-money">
                        от 2 435 000 сум
                        </div>
                        <span>x24</span>
                    </div>
                    </li> 
               ))}
               
                    
                </ul>
                 ) 
                }
            </div>
    </div>
  )
}
