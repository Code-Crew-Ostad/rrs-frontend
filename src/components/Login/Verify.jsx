import React,{useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import { VerifyRegistrationRequest} from "../../api/apiRequest";
import toast, {Toaster} from "react-hot-toast";
import SubmitButton from "../SubmitButton";

const VerifyTwo = () => {

    let {email}=useParams();
    const [BtnLoader, SetBtnLoader] = useState(false);
    const [otp,setOtp]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();
    const [success, setSuccess]= useState('');

    const LoginVerify = async (e) => {
        e.preventDefault();
        if (otp.length === 0) {
            toast.error("Verification Code Required !");
        } else if(password.length < 6){
            toast.error("Please set a password of at least 6 characters");
        }else {
            SetBtnLoader(true)
                        console.log(email)
            let res= await VerifyRegistrationRequest(email,otp,password);
            SetBtnLoader(false)
            if(res['status']==="success"){
                setSuccess('success');
                toast.success(res['message']);
                

                // localStorage.setItem('login','1');
                // localStorage.setItem('email',res['data']['email']);
                // localStorage.setItem('type',res['data']['type']);
                // localStorage.setItem('id',res['data']['id']);
                // localStorage.setItem('name',res['data']['firstName'] +" "+ res['data']['lastName']);
                
                // if(sessionStorage.getItem('lastLocation')!==null){
                //     window.location.href=sessionStorage.getItem('lastLocation')
                // }
                // else{
                //     window.location.href="/"
                // }

                // if(res['data']['type']==='owner'){
                //     navigate("/restaurant/dashboard");
                // }
                // else if(res['data']['type']==='user'){
                //     navigate("/feed");
                // }
                // else{
                //     window.location.href="/"
                // }

            }
            else{
                toast.error(res['message']);
            }
        }
    }
    return (
        <>
        <div className='flex justify-center  '>
            {
                success=="success" ? (<div className='flex flex-col text-2xl gap-3 h-screen justify-center'>
                    <p>Congratulations!</p>
                    <p className='inline-block text-xl'>Your are now regiested. To continue, Login to your Account.</p></div>): (
                    <div className=' flex h-full w-4/12 flex-col w-50 border shadow-lg p-10 mt-10'>
                <h6 className="mb-5 text-xl text-green-600">A 6 digit OTP has been sent to your mail.</h6>
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
                )
            }
            <Toaster position={"bottom-center"} />
        </div> 
    </>
    );
};

export default VerifyTwo;