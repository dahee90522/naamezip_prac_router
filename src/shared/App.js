
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Mainpage, Mypage, Login, Signin } from '../pages';

const App = (props) => { 
    const[loginInfo, setLoginInfo ]= useState({ UserInfo:[ 
        {email:'dahee1@gmail.com',pw:'1'}, 
        {email:'dahee2@gmail.com',pw:'2'}, 
        {email:'dahee3@gmail.com',pw:'3'} ],
    }); 
    
    return (
        <div>
            <Switch> 
                <Route exact path="/Mypage/:email" component={Mypage}/>
                <Route exact path="/Mypage" component={Mypage}/>
                {/* <Route exact path="/Mypage" render={() => <Mypage user={user} key={user.id}  />}/> */}
                <Route exact path="/Login" component={Login}/>
                {/* <Route exact path="/Signin" component={Signin}/> */}
                <Route exact path="/Signin" render={() => <Signin user={loginInfo.UserInfo[1].email, loginInfo.UserInfo[1].pw}  />}/>
                <Route exact path="/" component={Mainpage}/>
            </Switch>
        </div>
    );
}

export default App;