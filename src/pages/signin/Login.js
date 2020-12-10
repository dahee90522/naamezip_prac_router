import React from 'react';
import './sign.css';
import { Link } from 'react-router-dom';

function Login()  {
    return (
        <div className = "Logincontainer">
            <Link to to="/signin">이메일로 로그인</Link>
        </div>
    );
};

export default Login;  