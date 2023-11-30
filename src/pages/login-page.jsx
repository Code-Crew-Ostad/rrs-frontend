import React from 'react';
import Login from '../components/Login/Login';
import Master from '../components/Navbar/Master';

const LoginPage = (logOrReg) => {
    return (
        <Master>
            <Login/>
        </Master>
    );
};

export default LoginPage;