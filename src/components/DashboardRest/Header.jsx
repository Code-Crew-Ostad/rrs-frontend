import React, { useState } from 'react'
import SubmitButton from './../SubmitButton';
import { UserLogout } from '../../api/apiRequest';

const Header = () => {
    const [logoutLoader,setLogoutLoader]=useState(false);

    const Logout = async () => {
    setLogoutLoader(true)
    sessionStorage.clear();
    localStorage.clear();
    await UserLogout
    setLogoutLoader(false);
    window.location.href="/"
}

return (
    <div>
        <div className='flex justify-end w-full border-slate-900 shadow-md h-16 p-5'>
            <span className='bg-[#babcbb] text-[#413d3d] rounded-lg px-3 mr-3 shadow-md'>{localStorage.getItem('email')}</span> 
            <span className='bg-[#3a936d] text-white rounded-lg px-3 shadow-md mr-3'>{localStorage.getItem('type')}</span>
            <SubmitButton submit={logoutLoader} text="Logout" onClick={Logout} type="button" className="block px-4 text-sm text-[#fffefe] rounded-lg bg-[#7a2f2f]"/>
        </div>
        
    </div>
)
}

export default Header