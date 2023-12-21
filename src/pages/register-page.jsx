import React from 'react';
import Register from '../components/Login/Register';
import Master from '../components/Navbar/Master';

const RegisterPage = (logOrReg) => {
    return (
        <Master>
            <Register/>
        </Master>
    );
};

export default RegisterPage;