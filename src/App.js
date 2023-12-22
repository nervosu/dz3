import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './PostList';
import Pagination from './Pagination';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`https://dummyjson.com/posts?limit=10&skip=${(currentPage - 1) * 10}`);
      setPosts(response.data);
    };

    fetchPosts();
  }, [currentPage]);

  useEffect(() => {
    const fetchTotalPages = async () => {
      const response = await axios.get('https://dummyjson.com/posts');
      setTotalPages(Math.ceil(response.data.length / 10));
    };

    fetchTotalPages();
  }, []);

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  return (
    <div>
      <PostList posts={posts} />
      <Pagination totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default App;