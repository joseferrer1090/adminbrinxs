import React, {Component} from 'react';
import {Link, Route, BrowserRouter, HashRouter} from 'react-router-dom'
import {Router, Switch} from 'react-router'


import Login from './Components/Login/Login'
import ForgetPassword from './Components/Login/ForgetPassword'
import Home from './Components/Home/Home'
import Profile from './Components/Profile/Profile'
import Payment_Plan from './Components/Payment/Payment_Plan'
import Help_Faq from './Components/Help/Help_Faq'
import Lessons from './Components/Lessons/Lessons'
import Activities from './Components/Activities/Activities'
import Documentation from './Components/Documentation/Documentation'
import CalendarActivity from './Components/CalendarActivity/CalendarActivity'

class App extends Component {
    render(){
        return(
            <HashRouter>
                <div>
                    <Route exact path="/Admin/Login" component={Login}/>
                    <Route exact path="/Admin/ForgetPassword" component={ForgetPassword}/>
                    <Route exact path="/Admin/Home" component={Home}/>
                    <Route exact path="/Admin/Profile/Profile" component={Profile}/>
                    <Route exact path="/Admin/Payment/Payment_Plan" component={Payment_Plan}/>
                    <Route exact path="/Admin/Help/Help_Faq" component={Help_Faq}/>
                </div>
            </HashRouter>
        )
    }
}
export default App;