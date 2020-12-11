import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import './sign.css';


function Signin({ authenticated, login, location }) {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = () => {
    try {
        login({ email, password });
    } catch (e) {
        alert('로그인 실패임');
        setEmail('');
        setPassword('');
    }
    };

    const { from } = location.state || { from: { pathname: "/mypage" } };
    if (authenticated) return <Redirect to={from} />;

    return (
        <div className = "Signincontainer">
            <h3><span>이메일</span>로 로그인하기</h3><br/>
            <form>
                <input 
                    type = "text" 
                    name = "email" 
                    placeholder="이메일주소 입력"  
                    id = "email"
                    value = {email}
                    onChange={({ target: { value } }) => setEmail(value)}
                /><br/>
                <input 
                    type = "password" 
                    name ="password" 
                    placeholder="비밀번호 입력" 
                    id = "pw"
                    value = {password}
                    onChange={({ target: { value } }) => setPassword(value)}
                /><br/>
                    {/* <Link to ={`/mypage/`}>  */}
                        <input type = "button" value = "로그인" onClick={handleClick}/>
                    {/* </Link> */}
            </form>
        </div>
    );
}

export default Signin; 

