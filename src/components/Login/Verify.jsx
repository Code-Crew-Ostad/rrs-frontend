import React,{useState} from 'react';
import {useParams} from "react-router-dom";
import { VerifyLoginRequest} from "../../api/apiRequest";
import toast, {Toaster} from "react-hot-toast";
import SubmitButton from "../SubmitButton";

const VerifyTwo = () => {

    let {email}=useParams();
    const [BtnLoader, SetBtnLoader] = useState(false);
    const [pin,setPIN]=useState("");

    const LoginVerify = async (e) => {
        e.preventDefault();
        if (pin.length === 0) {
            toast.error("Verification Code Required !");
        } else {
            SetBtnLoader(true)
            let res= await VerifyLoginRequest(email,pin);
            SetBtnLoader(false)
            if(res['status']==="success"){
                toast.success(res['message']);
                localStorage.setItem('login','1');

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
                <h6 className="mb-5 text-xl text-green-600">An OTP has been sent to your email</h6>
                <label htmlFor='pin'>OTP</label>
                <input  value={pin} 
                        onChange={(e)=>{setPIN(e.target.value)}} 
                        type="text"
                        className='rounded h-10 border border-green-200 outline-none p-2' 
                        name="pin"
                        text="pin"
                        />
                <SubmitButton submit={BtnLoader} text="Verify & Login" onClick={LoginVerify} className="p-3 text-white bg-green-400 hover:bg-green-600 rounded-lg text-lg mt-5" role="status" />
            </div>
        </div> 
    <Toaster position={"bottom-center"} />
    </>
    );
};

export default VerifyTwo;