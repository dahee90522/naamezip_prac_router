import React from 'react';
import './Mypage.css';


const Mypage = ({location, match}) => {
    return (
        <div className="topcontainer">
            {match.params.name}마이페이지임
        </div>
    );
};

export default Mypage;