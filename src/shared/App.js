
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Mainpage, Mypage } from '../pages';
//pages->폴더이름?의 index.js를 가져오는듯?
import Menu from '../components/Menu';

class App extends Component {
    render() {
        return (
            <div>
                <Mainpage/>
                <Route exact path="/" component={Mainpage}/>
                <Switch>
                    <Route exact path="/Mypage/:name" component={Mypage}/>
                    <Route exact path="/Mypage" component={Mypage}/>
                </Switch>
            </div>
        );
    }
}

export default App;