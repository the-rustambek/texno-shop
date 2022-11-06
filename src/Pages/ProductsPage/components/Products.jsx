import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import UseProducts from '../components/useProducts'

export default function Products() {
 
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://api.radius.uz/api/v2/products?page=1&category_id=39&order_by=views&order_direction=desc&price_from=0&price_to=22999000');
      setPosts(res.data?.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div className="products">
      <h2 className="products-count">Все товары ({posts.length})</h2>
      <div className="products-blok">
      <UseProducts posts={currentPosts} loading={loading} />

         <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      </div>
    </div>
  );
}
