import './sign.css';

import { Link } from 'react-router-dom';
/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';

function Login() {
  return (
    <div className="logintopcontainer">
      <div className="Logincontainer">
        <img
          src="https://naamezip.com/static/media/logo-vertical-blk@3x.bc829382.png"
          alt="로그인 페이지 로고"
          className="loginlogo"
        />
        <div className="emaillogin">
          <Link to to="/signin">
            이메일로 로그인
          </Link>
        </div>
        <div className="emailsignup">
          <Link to to="/signup">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
