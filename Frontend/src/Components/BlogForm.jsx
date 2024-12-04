import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {  useParams } from 'react-router-dom';


function BlogForm({ onClose }) {
    const {username} = useParams()
    const [userid,setuserid] = useState()

    useEffect(()=>{
        const getuserid = async()=>{
            try {
                const reponse = await axios.post("http://localhost:3000/api/getuserid",{username:username})
                console.log(reponse)
                console.log(reponse.data.userid)
                setuserid(reponse.data.userid)

            } catch (error) {
                console.log(error)
            }
        }
        getuserid()
    },[])
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: userid,
    tags: '',
    featuredImage:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    
    if (name === "featuredImage") {
      setFormData({ ...formData, featuredImage: e.target.files[0] });  
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  
console.log(formData.featuredImage)
    const form = new FormData();

    form.append('title', formData.title);
    form.append('content', formData.content);
    form.append('author', userid);
    form.append('tags', formData.tags);
    form.append('featuredImage', formData.featuredImage); 
    console.log([...form])

    try {
        console.log(form)
      const response = await axios.post("http://localhost:3000/api/create", form, {
        headers: {
            'Content-Type': 'multipart/form-data',  
        },
      });
      
      console.log(response);
      onClose()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative bg-white w-1/2 p-6 rounded-md shadow-lg">
      <button
        className="absolute top-2 right-2 text-xl text-gray-600"
        onClick={onClose}
      >
        &times;
      </button>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
          className="w-full border rounded-md px-3 py-2"
        />
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Content"
          required
          className="w-full border rounded-md px-3 py-2"
        />
       
        <input
          type="text"
          name="tags"
          value={formData.tags}
          onChange={handleChange}
          placeholder="Tags (comma-separated)"
          className="w-full border rounded-md px-3 py-2"
        />
        <input
          type="file"
          name="featuredImage"
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}

export default BlogForm;
