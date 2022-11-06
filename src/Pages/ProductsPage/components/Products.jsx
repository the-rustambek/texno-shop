import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import UseProducts from '../components/useProducts'
import SearchImg from "../../../Assets/Images/Search.png";

export default function Products() {
  const [query, setQuery] = useState("");
   const keys = ["name", "description"];
  const search = (posts) => {
    return posts.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
   useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(`https://api.radius.uz/api/v2/products?page=1&category_id=39&order_by=views&order_direction=desc&price_from=0&price_to=22999000?q=${query}`);
      setPosts(res.data?.data);
      setLoading(false);
    };
    if (query.length === 0 || query.length > 2) fetchPosts();
  }, [query]);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <><div className='search-box'>
    <h2 className="search-title">
    Оформить заказ
    </h2>
    <form className="search-form">
        <input        onChange={(e) => setQuery(e.target.value.toLowerCase())} type="text" className="search-input" placeholder='Поиск по названию товара' />
        <button className="search-btn">
            <img src={SearchImg} alt="Search" className="search-img" />
        </button>
    </form>
</div>
    <div className="products">
      <h2 className="products-count">Все товары ({posts.length})</h2>
      <div className="products-blok">
      <UseProducts posts={search(currentPosts)} loading={loading} />
         <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      </div>
    </div>
    </>
  );
}
