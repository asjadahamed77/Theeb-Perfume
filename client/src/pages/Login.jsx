import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form className="flex flex-col pt-4 px-4  rounded-lg shadow-lg w-[370px] pb-4">
        <p className="text-2xl font-semibold">Login to Theeb</p>
        <div className="mt-6 mb-2 flex flex-col gap-4">
          <input type="email" placeholder="Enter Email" className="w-full bg-transparent p-2 shadow-md rounded-md " />
          <input type="password" placeholder="Enter Password" className="w-full bg-transparent p-2 shadow-md border-gray-400 rounded-md " />
        </div>
        <button className="bg-mainColor text-white py-2 mt-4 hover:opacity-75 duration-300 transition-all rounded-md">Login</button>
        <p className="italic text-sm text-right cursor-pointer mt-1 hover:opacity-70 hover:underline duration-300">forgot password?</p>
        <p>Do not have an account? <span onClick={()=>navigate('/sign-up')} className="text-blue-600 hover:underline duration-300 cursor-pointer">Create account</span></p>
      </form>
    </div>
  );
};

export default Login;
