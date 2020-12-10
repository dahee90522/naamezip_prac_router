import React from 'react';
import './menu.css';
import { NavLink } from 'react-router-dom';


const Menu = () => {
    const activeStyle = {
        fontWeight :'bold'
    };
    return (
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
                    {/* <li className="mypagemenu"><NavLink to="/mypage/dahee"activeStyle={activeStyle}>마이페이지</NavLink></li> */}
                    <li className="mypagemenu"><NavLink to="/login"activeStyle={activeStyle}>로그인</NavLink></li> 
                 
                </ul>
            </div>
        </div>
    );
};

export default Menu;