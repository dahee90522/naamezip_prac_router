
import React, { useState } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Mainpage, Mypage, Login, Signin , NotFound} from '../pages';
import { signIn } from './auth/auth';
import AuthRoute from './auth/AuthRoute';
import Logoutbtn from './auth/Logoutbtn';
import '../menu.css';

const App = (props) => { 
    
    const activeStyle = {
        fontWeight :'bold'
    };

    const [user, setUser] = useState(null);
    const authenticated = user != null;

    const login = ({ email, password }) => setUser(signIn({ email, password }));
    const logout = () => setUser(null);

    return (
        <div>
            <div className="topcontainer">
                <div className = "topmenu">
                    <NavLink to="/"><img 
                        src = "https://cdn2.naamezip.net/static/media/logo-vertical-blk@3x.bc829382.png" 
                        alt = "logo" 
                        className = "logo"
                    />
                    </NavLink>
                    <ul className = "menucon">
                        <li className="discovery"><NavLink to="/discovery"activeStyle={activeStyle}>남의집 둘러보기</NavLink></li>
                        <li className="host"><NavLink to="/host"activeStyle={activeStyle}>남의집 관리실</NavLink></li>
                        <li className="about"><NavLink to="/about"activeStyle={activeStyle}>남의집이란</NavLink></li>
                        {/* <li className="mypagemenu"><NavLink to="/login"activeStyle={activeStyle}>로그인</NavLink></li>  */}
                        <li className="mypagemenu">
                            {authenticated ? (
                                <NavLink to="/mypage"activeStyle={activeStyle}>마이페이지</NavLink>
                            ) : (
                                <NavLink to="/login"activeStyle={activeStyle}>로그인</NavLink>
                        )}</li>                    
                    </ul>
                </div>
            </div>
            <Switch> 
                <AuthRoute
                    authenticated={authenticated}
                    path="/mypage"
                    render={props => <Mypage user={user} {...props} />}
                />
                <Route exact path="/Login" component={Login}/>
                <Route exact path="/Signin" render={props => (
                    <Signin authenticated={authenticated} login={login} {...props} />
                )}/>
                <Route exact path="/logout" render={props => (
                    <Logoutbtn logout={logout} />
                )}/>
                <Route exact path="/" component={Mainpage}/>
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;