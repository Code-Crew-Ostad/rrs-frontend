import React, { useState } from 'react';
import { UserRegistrationRequest} from "../../api/apiRequest";
import {useNavigate} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import SubmitButton from "../SubmitButton";

const Register = () => {

    const [userType, setUserType] = useState("");
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [mobile, setMobileNo]=useState("");
    const [email,setEmail]=useState("");
    

    const [BtnLoader, SetBtnLoader] = useState(false);

    const navigate = useNavigate();
    const LoginEmail = async (e) => {
        e.preventDefault();
        try {
            if (userType.length === 0) {
                toast.error("Please select user type !");
            } else if(email.length === 0) {
                toast.error("Email Required !");
            } else if(email.length > 0 && !email.includes("@")) {
                toast.error("Please enter a valid email !");
            }else {
                SetBtnLoader(true)
                let res= await UserRegistrationRequest(userType,email,firstName,lastName, mobile);
                SetBtnLoader(false)
                if(res['status']==="success"){
                    toast.success(res['message']);
                    window.location.href = "/verify/"+email;
                }
                else{
                    toast.error("Something went wrong !");
                }
            }
        } catch (error) {
            toast.error(error);
        }
    }
    return (
        <div className='h-screen'>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex w-4/12 border shadow-sm px-10 py-4 mt-10 justify-between rounded-lg'>
                    <label className='cursor-pointer'>
                        <input type='radio' 
                            name='radio' 
                            id='user' 
                            className='peer sr-only'
                            onChange={() => setUserType("user")}
                            value={userType}
                        />
                        <div className='p-2 text-center border rounded-md  peer-checked:bg-[#25916a] peer-checked:text-white hover:border-[#25916a]'>
                            <p>I want to reserve a seat</p>
                        </div>
                    </label>
                    <label className='cursor-pointer'>
                        <input type='radio' 
                            name='radio' 
                            id='user' 
                            className='peer sr-only'
                            onChange={() => setUserType("owner")}
                            value={userType}
                        />
                        <div className='p-2 text-center border rounded-md  peer-checked:bg-[#25916a] peer-checked:text-white hover:border-[#25916a]'>
                            <p>I'm a Restaurant Owner</p>
                        </div>
                    </label>
                </div>
                <div className='flex h-auto w-4/12 flex-col border shadow-lg p-10 mt-3 rounded-lg'>
                    <label htmlFor='firstName'>First Name</label>
                    <input className='border border-gray-400 rounded-lg w-full py-2 px-3 text-black mb-3 focus:outline-none focus:ring focus:ring-violet-100 placeholder:text-xs' 
                        type="text" 
                        text="First Name" 
                        name='firstName' 
                        placeholder="Optional" 
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                    <label htmlFor='lastName'>Last Name</label>
                    <input className='border border-gray-400 rounded-lg w-full py-2 px-3 text-black mb-3 focus:outline-none focus:ring focus:ring-violet-100 placeholder:text-xs' 
                        type="text" 
                        text="Last Name" 
                        name='lastName' 
                        placeholder="Optional" 
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                    <label htmlFor='email'>Email</label>
                    <input value={email} 
                            onChange={(e)=>{setEmail(e.target.value)}} 
                            placeholder="Required"
                            className='border border-gray-400 rounded-lg w-full py-2 px-3 text-black mb-3 focus:outline-none focus:ring focus:ring-violet-100 placeholder:text-xs' 
                            type="text" 
                            text="Email" 
                            name='email'
                            autoComplete='off'
                            autoFocus='true' />
                    <SubmitButton submit={BtnLoader} text="Next >" onClick={LoginEmail} className="p-3 text-white bg-[#25916a] hover:opacity-95 rounded-lg text-lg mt-5 focus:outline-none focus:ring focus:ring-violet-200" role="status" />
                </div>
            </div> 
            <Toaster position={"bottom-center"} />
        </div>
        
    );
};

export default Register;