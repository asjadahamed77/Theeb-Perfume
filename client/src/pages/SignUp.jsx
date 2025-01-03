import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [showVerify, setShowVerify] = useState(false);
  const inputRefs = React.useRef([])

  const handleInput = (e, index)=>{
    if(e.target.value.length>0 && index < inputRefs.current.length - 1){
      inputRefs.current[index+1].focus()
    }
  }

  const handleKeyDown = (e, index)=>{
    if(e.key === 'Backspace' && e.target.value === "" && index>0){
      inputRefs.current[index-1].focus()
    }
  }

  const handlePaste = (e)=>{
    const paste = e.clipboardData.getData('text')
    const pasteArray = paste.split('')
    pasteArray.forEach((char,index)=>{
      if(inputRefs.current[index]){
        inputRefs.current[index].value = char
      }
    })   
  }

  const submitHandler = async(e)=>{

  }

  return (
    <div className="flex justify-center items-center h-screen relative">
      <div
        className={` ${
          showVerify ? "hidden" : "flex"
        }  flex-col pt-4 px-4  rounded-lg shadow-lg w-[370px] pb-4`}
      >
        <p className="text-2xl font-semibold">Join with Theeb</p>
        <div className="mt-6 mb-2 flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full bg-transparent p-2 shadow-md rounded-md "
            required
          />
          <input
            type="text"
            placeholder="Enter Username"
            className="w-full bg-transparent p-2 shadow-md rounded-md "
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full bg-transparent p-2 shadow-md border-gray-400 rounded-md "
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full bg-transparent p-2 shadow-md border-gray-400 rounded-md "
            required
          />
          <input
            type="text"
            placeholder="Enter Mobile Number"
            className="w-full bg-transparent p-2 shadow-md border-gray-400 rounded-md "
            required
          />
        </div>
        <button
          onClick={() => setShowVerify(true)}
          className="bg-mainColor text-white py-2 mt-4 hover:opacity-75 duration-300 transition-all rounded-md"
        >
          Create Account
        </button>
        <p className="mt-2">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:underline duration-300 cursor-pointer"
          >
            Login here
          </span>
        </p>
      </div>
      {/* Showing Verify Account Component */}
      <div
        className={`${
          showVerify ? "flex" : "hidden"
        } absolute inset-0 bg-gray-900  justify-center items-center `}
      >
        {showVerify && (
           <form onSubmit={submitHandler} className='rounded-lg flex flex-col items-center bg-slate-100 w-[400px]  p-4'>
           <h1 className='text-lg'>Email Verification</h1>
           <p className='text-gray-600'>Enter 6 digit code sent to your email id.</p>
           <div className='flex justify-between mb-8 gap-1' onPaste={handlePaste}>
             {
               Array(6).fill(0).map((_,index)=>(
                 <input type="text" maxLength='1' key={index} required className='mt-4 w-12 h-12 bg-slate-200 text-mainColor text-center text-lg rounded-md ' ref={e => inputRefs.current[index] = e} onInput = {(e)=> handleInput(e, index)} onKeyDown = {(e)=> handleKeyDown(e, index)}  />
               ))
             }
           </div>
           <button type='submit' className='py-2 w-[80%] hover:opacity-80 bg-gray-900 text-white rounded-lg'>Verify Email</button>
         </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
