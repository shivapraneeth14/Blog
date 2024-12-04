import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react';
import { Link } from "react-router-dom";
function Entertainment() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/allblog");
        console.log(response.data);
        const filteredBlogs = response.data.blogs.filter(blog => blog.tags.includes("Entertainment"));
        setBlogs(filteredBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    getPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blogs</h1>
      <div className="flex flex-col gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="flex flex-col sm:flex-row border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow p-4"
          >
        
            <img
              src={blog.featuredImage}
              alt={blog.title}
              className="w-full sm:w-1/3 h-40 object-cover rounded-md mb-4 sm:mb-0"
            />
            <div className="flex flex-col sm:ml-4">
              <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
              <p className="text-gray-700 mb-3">{blog.content}</p>
              <p className="text-sm text-gray-500 mb-3">
                Tags: {blog.tags || "No Tags"}
              </p>
              <Link
                to={`../Blog/${blog._id}`}
                className="text-blue-500 hover:underline font-medium"
              >
                More &gt;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Entertainment
