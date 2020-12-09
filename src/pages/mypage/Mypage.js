import React from 'react';
import './Mypage.css';


const Mypage = ({match}) => {
    return (
        <div className="topcontainer">
            <h1>{match.params.name}마이페이지임</h1>
        </div>
    );
};

export default Mypage;