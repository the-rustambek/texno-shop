import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import axios from "axios";
import UseProducts from '../components/useProducts'

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
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

  // Change page
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
