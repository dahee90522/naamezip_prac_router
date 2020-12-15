import '../menu.css';

import { Login, Mainpage, Mypage, NotFound, Signin, Signup } from '../pages';
import { NavLink, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import { signIn, signUp } from './auth/auth';

import AuthRoute from './auth/AuthRoute';
import Logoutbtn from './auth/Logoutbtn';

const App = () => {
  const activeStyle = {
    fontWeight: 'bold',
  };

  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ email, password }) => setUser(signIn({ email, password }));
  // const signup = ({ name, email, password }) =>
  const signup = ({ name, email, password }) =>
    setUser(signUp({ name, email, password }));
  const logout = () => setUser(null);
  return (
    <div>
      <div className="topcontainer">
        <div className="topmenu">
          <NavLink to="/">
            <img
              src="https://cdn2.naamezip.net/static/media/logo-vertical-blk@3x.bc829382.png"
              alt="logo"
              className="logo"
            />
          </NavLink>
          <ul className="menucon">
            <li className="discovery">
              <NavLink to="/discovery" activeStyle={activeStyle}>
                남의집 둘러보기
              </NavLink>
            </li>
            <li className="host">
              <NavLink to="/host" activeStyle={activeStyle}>
                남의집 관리실
              </NavLink>
            </li>
            <li className="about">
              <NavLink to="/about" activeStyle={activeStyle}>
                남의집이란
              </NavLink>
            </li>
            <li className="mypagemenu">
              {authenticated ? (
                <NavLink to="/mypage" activeStyle={activeStyle}>
                  마이페이지
                </NavLink>
              ) : (
                <NavLink to="/login" activeStyle={activeStyle}>
                  로그인
                </NavLink>
              )}
            </li>
            {/* <li><Logoutbtn/></li> */}
          </ul>
        </div>
      </div>
      <Switch>
        <AuthRoute
          authenticated={authenticated} // 로그인 된 사람만 들어가게 하기
          path="/mypage"
          render={props => <Mypage user={user} {...props} />}
        />
        {/* 마이 페이지에 로그인 값 넘기기 */}
        <Route exact path="/Login" component={Login} />
        <Route
          exact
          path="/Signin"
          render={props => (
            <Signin authenticated={authenticated} login={login} {...props} />
          )}
        />
        <Route
          exact
          path="/Signup"
          render={props => <Signup signup={signup} {...props} />}
        />
        <Route
          exact
          path="/logout"
          render={() => <Logoutbtn logout={logout} />}
        />
        <Route exact path="/" component={Mainpage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
