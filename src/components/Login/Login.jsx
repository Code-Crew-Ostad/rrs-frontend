import React, { useState } from 'react';
import { UserLoginRequest} from "../../api/apiRequest";
import {useNavigate} from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';
import SubmitButton from "../SubmitButton";

const Login = () => {

        // const user = useSelector((state)=>state.user.data);
        // const dispatch = useDispatch();

        const [email,setEmail]=useState("");
        const [password,setPassword]=useState("");
        const [BtnLoader, SetBtnLoader] = useState(false);
        const navigate = useNavigate();
    
        const LoginEmail = async (e) => {
            e.preventDefault();
            try {
                if(email.length === 0) {
                    toast.error("Email Required !");}
                else if (email.length > 0 && !email.includes("@")) {
                    toast.error("email Required !");
                } else if(password.length < 6){
                    toast.error("Password length is short!");
                }else {
                SetBtnLoader(true)
                let res= await UserLoginRequest(email, password);
                SetBtnLoader(false)

                if(res['status']==="success"){  
                    toast.success(res['message']);

                    //-------------Redux-Toolkit-----------------
                    // dispatch(setUser({'email':res['data']['email'], 
                    //             'type':res['data']['type'],
                    //             'firstName':res['data']['firstName'],
                    //             'lastName':res['data']['lastName'],
                    //         }));
                    //-------------Local Storage-----------------
                    localStorage.setItem('login','1');
                    localStorage.setItem('email',res['data']['email']);
                    localStorage.setItem('type',res['data']['type']);
                    localStorage.setItem('id',res['data']['id']);
                    localStorage.setItem('name',res['data']['firstName'] +" "+ res['data']['lastName']);
                
                    if(res['data']['type']==='owner'){
                        navigate("/restaurant/dashboard");
                    }
                    else if(res['data']['type']==='user'){
                        navigate("/feed");
                    }
                    else{
                        window.location.href="/"
                    }

                    // if(sessionStorage.getItem('lastLocation')!==null){
                    //     window.location.href=sessionStorage.getItem('lastLocation')
                    // }
                    // else{
                        
                    // }
                }
                else{
                    toast.error(res['message']);
                    return false;
                }
            }
            } catch (error) {
                toast.error(error)
            }

        }
    return (
        <div className='h-screen'>
            <div className='flex justify-center items-center h-auto'>
                <div className=' flex h-auto w-4/12 flex-col border rounded-md shadow-lg p-10 mt-10'>
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
                    <SubmitButton submit={BtnLoader} text="Login" wait="Logging you in..." onClick={LoginEmail} className="p-3 text-white bg-[#25916a] hover:opacity-80 rounded-lg text-lg mt-5 focus:outline-none focus:ring focus:ring-violet-200" />
                </div>
            </div> 
            <Toaster position={"bottom-center"} />
        </div>
        
    );
};

export default Login;