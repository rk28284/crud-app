import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/userapi";


export const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });

    const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(data);
      if (response.token) {
        localStorage.setItem("token", response.token);
        toast.success("Login successful!");
        setData({ email: "", password: "" });
        setTimeout(() => navigate("/dashboard"), 400);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
 <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer />
      <div className="max-w-md w-full bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">User Login</h2>
        <form onSubmit={handleSubmit}>
      <div>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={handleChange}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            required
          />
      </div>
      <div>
  
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={handleChange}
            className="w-full mb-6 p-2 border border-gray-300 rounded"
            required
          />
      </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Not registered?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  )
}









  

 