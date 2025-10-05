import {useState} from "react";
import {toast,ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Link} from "react-router-dom";
import { registerUser } from "../api/userapi";

export const Register = () => {
const [data,setData]=useState({
    username:"",
    email:"",
    password:"",
  });
  const handleChange=(e)=> {
    setData({...data,[e.target.name]:e.target.value });
  };

  const handleSubmit =async(e)=>{
  e.preventDefault();

  try {
    await registerUser(data);
    toast.success("Registration successful!");
    setData({ username:"",email:"",password:"" });
  } catch (err) {

    toast.error(err);
    
  }
};



  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer />
      <div className="max-w-md w-full bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">User Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={data.username}
            onChange={handleChange}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={handleChange}
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={data.password}
            onChange={handleChange}
            className="w-full mb-6 p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  )
}


