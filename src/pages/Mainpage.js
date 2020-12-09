import React from 'react';
import './MainStyle.css';
import Slot1 from './slot/slot1';
import Fulcon1 from './slot/fullcon1';
import Footer from './footer/footer';

function main() {
    return(
        <div className="maincontainer">
            <div className = "mainimagecontainer">
                <a href = "#" id = "img1" className="mainimage">
                    <img src = "https://cdn-cached.naamezip.net/1607331432224.png"/>
                </a>
                {/*<button value = "다음" onclick = "check(1)"/>*/}
            </div>
            <div className="slotcontainerApp">
                <Slot1/>
                <Fulcon1/>
            </div>
            <div className="instacontainer">
                <a href = "https://instagram.com/naamezip" className="insta">@naamezip</a>
            </div>
            <Footer/>
        </div>
    );
}
export default main; 