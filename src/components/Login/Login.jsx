import React, { useState } from 'react';
import { UserLoginRequest} from "../../api/apiRequest";
import {useNavigate} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [BtnLoader, SetBtnLoader] = useState(false);
    const navigate = useNavigate();
    const LoginEmail = async (e) => {
        e.preventDefault();
        if (email == "rest@mail.com" && password=="123") {
            navigate("/restaurant/dashboard")
        } else {
            toast.error("Wrong Credentials!");
        }
    }
    return (
        <div className='h-screen'>
            <div className='flex justify-center'>
            <div className=' flex h-auto w-4/12 flex-col border shadow-lg p-10 mt-10'>
                <label htmlFor='email'>Email</label>
                <input value={email} 
                        onChange={(e)=>{setEmail(e.target.value)}} 
                        className='border border-gray-400 rounded-lg w-full py-2 px-3 text-black mb-5 focus:outline-none focus:ring focus:ring-violet-100' 
                        type="text" 
                        text="Email" 
                        name='email'
                        autoComplete='off'
                        autoFocus='true' />
                <label htmlFor='password'>Password</label>
                <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className='border border-gray-400 rounded-lg w-full py-2 px-3 text-black mb-3 focus:outline-none focus:ring focus:ring-violet-100' type="password" text="Password" name='password' />
                <button submit={BtnLoader} onClick={LoginEmail} className="p-3 text-white bg-green-400 hover:bg-green-600 rounded-lg text-lg mt-5 focus:outline-none focus:ring focus:ring-violet-200" >Login</button>
            </div>
        </div> 
        <Toaster position={"bottom-center"} />
        </div>
        
    );
};

export default Login;