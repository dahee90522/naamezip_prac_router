
import React from 'react';
import { withRouter } from 'react-router-dom';

function Logout({ logout, history }) {
  const handleClick = () => {
    logout();
    history.push('/');
  }
  return <h3 onClick={handleClick}>로그아웃</h3>;
}

export default withRouter(Logout);