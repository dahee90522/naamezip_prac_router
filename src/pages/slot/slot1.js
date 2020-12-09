import React from 'react';
import './slot.css';

function slot1() {
    return ( 
    <div className = "slotcontainer" >
        <h1 className = "title" > <a href = "https://naamezip.com/collection/3">떠오르는 남의집 </a></h1> 
        <h2 className = "explain" > 요즘엔 술 주제가 인기 있어요. <span > 전체보기 </span></h2 >
        <div className = "slotdetailcon">
            <div className = "slotdetail" >
            {/* onmouseup="document.getElementById('title').style.text-decoreation ='underline'" */}
                <div className = "slotdetailimgcon">
                    <img src = "https://cdn-cached.naamezip.net/1594044423970.JPG"></img>
                </div>
                <h1 id = "title">여행 블로거의 '혼삶'가이드 4회차</h1>
                <h2 >혼자 잘 지내려면, 동지들이 필요하다 #혼행 #혼술</h2>
                <div className="slotdetailadddate">
                    <h2 >서울특별시 영등포구 도림로112길</h2>
                    <h2 >12.31(목), 07:30pm</h2>
                </div>
            </div>
            <div className = "slotdetail">
                <div className = "slotdetailimgcon">
                    <img src = "https://cdn-cached.naamezip.net/1606206189725.jpg"></img>
                    </div>
                    <h1>도심속 오롯한 ㄷ자 한옥집 1회차</h1>
                    <h2>함께 모여 맛있는 음식과 술 한잔 즐겨요</h2>
                <div className="slotdetailadddate">
                    <h2 >서울특별시 종로구 자하문로</h2>
                    <h2 >01.05(화), 02:00pm</h2>
                </div>
            </div>
            <br/>
            <div className = "slotdetail"><div className = "slotdetailimgcon">
                <img src = "https://cdn-cached.naamezip.net/1602945589682.jpg"></img>
                </div>
                <h1 >의식주(酒) 1회차</h1>
                <h2>현직바텐더와 함께하는 우아한 청춘을 위한 술이야기:)</h2>
                <div className="slotdetailadddate">
                    <h2 >서울특별시 용산구 우사단로10길</h2>
                    <h2 >01.07(목), 07:00pm</h2>
                </div>
            </div>
            <div className = "slotdetail"><div className = "slotdetailimgcon">
                <img src = "https://cdn-cached.naamezip.net/1606808207990.jpg"></img>
                </div>
                <h1 >포스트디셈버 1회차</h1>
                <h2 >패션디자이너의 아틀리에 '포스트디셈버'로 초대합니다.</h2>
                <div className="slotdetailadddate">
                    <h2 >서울특별시 서초구 동광로49길</h2>
                    <h2 >01.09(토), 02:00pm</h2>
                </div>
            </div>
        </div>
    </div>
    );
}

export default slot1;