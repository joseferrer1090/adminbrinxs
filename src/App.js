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

class App extends Component {

    render(){
        return(

            <HashRouter>

                <div>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/ForgetPassword" component={ForgetPassword}/>
                    <Route exact path="/Home" component={Home}/>
                    <Route exact path="/Profile" component={Profile}/>
                    <Route exact path="/Payment_Plan" component={Payment_Plan}/>
                    <Route exact path="/Help_Faq" component={Help_Faq}/>
                    <Route exact path="/Lessons" component={Lessons}/>
                    <Route exact path="/Activities" component={Activities}/>
                    <Route exact path="/Documentation" component={Documentation}/>
                </div>

            </HashRouter>


        )
    }

}

export default App;