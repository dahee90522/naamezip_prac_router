/* eslint-disable react/prop-types */
import React from 'react';

import { Route, Redirect } from 'react-router-dom';
//사용자가 로그인을 하지 않고 인증이 필요한 컴포넌트에 접근하려는 경우, 접근을 차단하고 로그인 페이지로 보냄
function AuthRoute({ authenticated, component: Component, render, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          render ? render(props) : <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default AuthRoute;

