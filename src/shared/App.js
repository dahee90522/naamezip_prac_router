
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Mainpage, Mypage, Login, Signin , NotFound} from '../pages';
import { signIn } from './auth/auth';
import AuthRoute from './auth/AuthRoute';
import Logout from './auth/Logout';

const App = (props) => { 
    // const[loginInfo, setLoginInfo ]= useState({ UserInfo:[ 
    //     {email:'dahee1@gmail.com',pw:'1'}, 
    //     {email:'dahee2@gmail.com',pw:'2'}, 
    //     {email:'dahee3@gmail.com',pw:'3'} ],
    // }); 
    
    const [user, setUser] = useState(null);
    const authenticated = user != null;

    const login = ({ email, password }) => setUser(signIn({ email, password }));
    const logout = () => setUser(null);
    return (
        <div>
            <Switch> 
                {/* <Route exact path="/Mypage/:email" component={Mypage}/>
                <Route exact path="/Mypage" component={Mypage}/> */}
                {/* <Route exact path="/Mypage" render={() => <Mypage user={user} key={user.id}  />}/> */}
                <AuthRoute
                    authenticated={authenticated}
                    path="/mypage"
                    render={props => <Mypage user={user} {...props} />}
                />
                <Route exact path="/Login" component={Login}/>
                {/* <Route exact path="/Signin" component={Signin}/> */}
                <Route exact path="/Signin" render={props => (
                    <Signin authenticated={authenticated} login={login} {...props} />
                )}/>
                <Route exact path="/logout" render={props => (
                    <Logout logout={logout} />
                )}/>
                <Route exact path="/" component={Mainpage}/>
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;