import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Blog() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getBlog = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/oneblog", {
                    params: { id },
                });
                setBlog(response.data.post);
            } catch (error) {
                setError(error.response?.data?.message || "Something went wrong");
            }
        };

        if (id) {
            getBlog();
        }
    }, [id]); 

    return (
        <div className="container mx-auto p-4">
            {error ? (
                <div className="text-red-500 text-center">{error}</div>
            ) : !blog ? (
                <div className="text-center text-gray-500">Loading...</div>
            ) : (
                <div className="max-w-2xl mx-auto p-4 border rounded-lg shadow-md bg-white">
                    <img
                        src={blog.featuredImage}
                        alt={blog.title}
                        className="w-full h-60 object-cover rounded-md mb-4"
                    />
                    <h1 className="text-2xl font-bold mb-2">{blog.title}</h1>
                    <p className="text-gray-700 mb-4">{blog.content}</p>
                </div>
            )}
        </div>
    );
}

export default Blog;
