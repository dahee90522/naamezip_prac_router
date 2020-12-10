import React, { Component } from 'react';
import './sign.css';
import { Link } from 'react-router-dom';

class Signin extends Component {
    state = {
        email: ''
      }
      handleChange = (e) => {
        this.setState({
          email: e.target.value
        })
      }
    render(){
        return (
            <div className = "Signincontainer">
                <h3><span>이메일</span>로 로그인하기</h3><br/>
                <form>
                    <input name ="email" value={this.state.email} placeholder="이메일주소 입력" onChange={this.handleChange}id = "email"/><br/>
                    <input type = "password" name ="password" placeholder="비밀번호 입력"/><br/>
                    <Link to ={`/mypage/${this.state.email}`}><input type = "button" value = "로그인"/></Link>
                </form>
            </div>
        );
    }
}

export default Signin;  
