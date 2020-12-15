// import React, { useState } from 'react';
// // import { Redirect } from 'react-router-dom';
// import './sign.css';

// function Signup({ signup }) {

// 	const [email, setEmail] = useState('');
// 	const [name, setName] = useState('');
// 	const [password, setPassword] = useState('');

// 	const handleClick = () => {
// 		try {
// 			signup({ name, email, password });
// 		} catch (e) {
// 			alert('회원가입 실패임ㅜㅜ');
// 			console.log(e);
// 			setEmail('');
// 			setPassword('');
            
// 		}
// 	};

// 	return (
// 		<div className = "Signincontainer">
// 			<h3><span>이메일</span>로 회원가입하기</h3><br/>
// 			<form>
// 				<input 
// 					type = "text" 
// 					name = "email" 
// 					placeholder="이름 입력"  
// 					id = "name"
// 					value = {name}
// 					onChange={({ target: { value } }) => setName(value)}
// 				/><br/>
// 				<input 
// 					type = "text" 
// 					name = "email" 
// 					placeholder="이메일주소 입력"  
// 					id = "email"
// 					value = {email}
// 					onChange={({ target: { value } }) => setEmail(value)}
// 				/><br/>
// 				<input 
// 					type = "password" 
// 					name ="password" 
// 					placeholder="비밀번호(8자 이상)" 
// 					id = "pw"
// 					value = {password}
// 					onChange={({ target: { value } }) => setPassword(value)}
// 				/><br/>
// 				<input 
// 					type = "password" 
// 					name ="password" 
// 					placeholder="비밀번호 재입력" 
// 					id = "repw"
// 				/><br/>
// 				{/* <Link to ={`/mypage/`}>  */}
// 				<input type = "button" value = "로그인" onClick={handleClick}/>
// 				{/* </Link> */}
// 			</form>
// 		</div>
// 	);
// }
// export default Signup; 