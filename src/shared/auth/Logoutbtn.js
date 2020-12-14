/* eslint-disable react/prop-types */

import React from 'react';
import { withRouter } from 'react-router-dom';

function Logoutbtn({ logout, history }) {
	const handleClick = () => {
		logout();
		history.push('/'); 
	};
	return <h3 onClick={handleClick}>로그아웃</h3>;

}

export default withRouter(Logoutbtn);  