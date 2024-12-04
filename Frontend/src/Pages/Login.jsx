import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    loginname: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.loginname || !formData.password) {
      setError('Please enter both username/email and password');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/Login', {
        loginname: formData.loginname,
        password: formData.password,
      });

      console.log('Login successful:', response.data);

      navigate(`/${response.data.loggedinuser.username}`);
    } catch (err) {
      console.error('Login failed:', err.response?.data?.message || err.message);
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  const handleSignUpRedirect = () => {
    navigate('/Signup');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
        
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="loginname" className="block text-gray-600 mb-2">Username or Email</label>
            <input
              type="text"
              name="loginname"
              value={formData.loginname}
              onChange={handleChange}
              placeholder="Enter your username or email"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-gray-600">Don't have an account?</p>
          <button
            onClick={handleSignUpRedirect}
            className="text-blue-500 hover:text-blue-600 font-semibold"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
