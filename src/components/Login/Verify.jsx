import React,{useState} from 'react';
import {useParams} from "react-router-dom";
import { VerifyRegistrationRequest} from "../../api/apiRequest";
import toast, {Toaster} from "react-hot-toast";
import SubmitButton from "../SubmitButton";

const VerifyTwo = () => {

    let {email}=useParams();
    const [BtnLoader, SetBtnLoader] = useState(false);
    const [otp,setOtp]=useState("");
    const [password,setPassword]=useState("");

    const LoginVerify = async (e) => {
        e.preventDefault();
        if (otp.length === 0) {
            toast.error("Verification Code Required !");
        } else if(password.length < 6){
            toast.error("Please set a password of at least 6 characters");
        }else {
            SetBtnLoader(true)
            let res= await VerifyRegistrationRequest(email,otp,password);
            SetBtnLoader(false)
            if(res['status']==="success"){
                toast.success(res['message']);
                localStorage.setItem('login','1');
                localStorage.setItem('email',res['email'])
                localStorage.setItem('type',res['type'])
                
                if(sessionStorage.getItem('lastLocation')!==null){
                    window.location.href=sessionStorage.getItem('lastLocation')
                }
                else{
                    window.location.href="/"
                }

            }
            else{
                toast.error(res['message']);
            }
        }
    }


    return (
        <>
        <div className='flex justify-center  '>
            <div className=' flex h-full w-4/12 flex-col w-50 border shadow-lg p-10 mt-10'>
                <h6 className="mb-5 text-xl text-green-600">An OTP has been sent to {email}</h6>
                <label htmlFor='otp'>OTP</label>
                <input  value={otp} 
                        onChange={(e)=>{setOtp(e.target.value)}} 
                        type="text"
                        className='rounded h-10 border border-green-200 outline-none p-2 placeholder:text-[1.5vh]' 
                        name="otp"
                        text="otp"
                        placeholder='Enter OTP'
                />
                <label htmlFor='password'>Password</label>
                <input  value={password} 
                        onChange={(e)=>{setPassword(e.target.value)}} 
                        type="text"
                        className='rounded h-10 border border-green-200 outline-none p-2 placeholder:text-[1.5vh]' 
                        name="password"
                        text="password"
                        placeholder='Required'
                />
                <SubmitButton submit={BtnLoader} text="Verify & Login" onClick={LoginVerify} className="p-3 text-white bg-[#25916a] hover:opacity-80 rounded-lg text-lg mt-5" role="status" />
            </div>
        </div> 
    <Toaster position={"bottom-center"} />
    </>
    );
};

export default VerifyTwo;