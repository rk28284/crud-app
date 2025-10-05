import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/userapi";


export const Login = () => {

   
  return (
 <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer />
      <div className="max-w-md w-full bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">User Login</h2>
        <form >
      <div>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
         
            className="w-full mb-4 p-2 border border-gray-300 rounded"
           
          />
      </div>
      <div>
  
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
         
            className="w-full mb-6 p-2 border border-gray-300 rounded"
       
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









  

 