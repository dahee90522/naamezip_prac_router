import React, { useState } from 'react';
import './sign.css';
// import { Link } from 'react-router-dom';
// import Router from 'next/router';


const Signin = props => {
    // function check(){
    //     var idid = document.getElementById('id');
    //     var pwpw = document.getElementById('pw');
    //     console.log(idid.target.value, "   ", pwpw.target.value);
    //     if(props.email === idid && props.pw === pwpw){
    //         console.log(props.email);
    //     }

    // }
    return (
        <div className = "Signincontainer">
            <h3><span>이메일</span>로 로그인하기</h3><br/>
            <form>
                <input 
                    type = "text" 
                    name = "email" 
                    placeholder="이메일주소 입력"  
                    id = "email"
                /><br/>
                <input 
                    type = "password" 
                    name ="password" 
                    placeholder="비밀번호 입력" 
                    id = "pw"
                /><br/>
                    {/* <Link to ={`/mypage/`}>  */}
                        <input type = "button" value = "로그인" onClick = {check}/>
                    {/* </Link> */}
            </form>
        </div>
    );
}

export default Signin; 

