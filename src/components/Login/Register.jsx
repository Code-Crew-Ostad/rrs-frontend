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
                    navigate("/verify/"+email)
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
        <>
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
                        <div className='p-2 text-center rounded-md  peer-checked:bg-green-400 peer-checked:text-white hover:bg-green-600 hover:text-white'>
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
                        <div className='p-2 text-center rounded-md  peer-checked:bg-green-400 peer-checked:text-white hover:bg-green-600 hover:text-white'>
                            <p>I'm a Restaurant Owner</p>
                        </div>
                    </label>
                </div>
                <div className='flex h-auto w-4/12 flex-col border shadow-lg p-10 mt-3 rounded-lg'>
                    <label htmlFor='firstName'>First Name</label>
                    <input className='rounded h-10 border border-green-200 outline-none p-2 mb-5 placeholder:text-[1.5vh]' 
                        type="text" 
                        text="First Name" 
                        name='firstName' 
                        placeholder="Optional" 
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                    <label htmlFor='lastName'>Last Name</label>
                    <input className='rounded h-10 border border-green-200 outline-none p-2 mb-5 placeholder:text-[1.5vh]' 
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
                            className='rounded h-10 border border-green-200 outline-none p-2 mb-5 placeholder:text-[1.5vh]' 
                            type="text" 
                            text="Email" 
                            name='email'
                            autoComplete='off' />
                    <SubmitButton submit={BtnLoader} text="Next >" onClick={LoginEmail} className="p-3 text-white bg-green-400 hover:bg-green-600 rounded-lg text-lg mt-5" role="status" />
                </div>
            </div> 
            <Toaster position={"bottom-center"} />
        </>
        
    );
};

export default Register;