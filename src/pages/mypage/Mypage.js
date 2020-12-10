import React from 'react';
import './Mypage.css';

const Mypage = ({match}) => {
    return (
        <div className = "mypagecontainer">
            <div className="mypagetitle"><span>마이</span>페이지</div>
            <div className = "mypageinfo">
                <div className = "h3">
                    <h3>내정보</h3>
                    <h3>로그아웃</h3>
                </div>
                <div className = "mypagenamephone">{match.params.name}(19, 여) / 01023191342<span>수정</span></div>
                <div className = "mypageemail">itsdahee@kakao.com<span>카카오계정</span></div>
            </div>
            <div className = "mypagecardinfo">
                <div className = "h3">
                    <h3>등록카드</h3>
                    <h3>수정</h3>
                </div>
                <div className = "cardtrue">카드가 등록되어 있습니다.</div>
            </div>
            <div className="mypagenowtitle"><span>남의집</span>현황</div>
            
        </div>
    );
};

export default Mypage;