
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Mainpage, Mypage, Login, Signin } from '../pages';
//pages->폴더이름?의 index.js를 가져오는듯?

class App extends Component {
    render() {
        return (
            <div>                
                <Switch> 
                    <Route exact path="/Mypage/:email" component={Mypage}/>
                    <Route exact path="/Mypage" component={Mypage}/>
                    <Route exact path="/Login" component={Login}/>
                    <Route exact path="/Signin" component={Signin}/>
                    <Route exact path="/" component={Mainpage}/>
                </Switch>
            </div>
        );
    }
}

export default App;