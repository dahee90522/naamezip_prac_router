import React from 'react';
import './sign.css';
import { Link } from 'react-router-dom';

function Login()  {
    return (
        <div className = "logintopcontainer">
            
        <div className = "Logincontainer">
            <img src = "https://naamezip.com/static/media/logo-vertical-blk@3x.bc829382.png"alt = "로그인 페이지 로고"className = "loginlogo"/>
            <Link to to="/signin">이메일로 로그인</Link>
        </div>
        </div>
    );
};

export default Login;  