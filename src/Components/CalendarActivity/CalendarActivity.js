import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import SideBar from './../../Sections/SideBar'
import NavBar from './../../Sections/NavBar'
import Footer from './../../Sections/Footer'

class CalendarActivity extends Component {
    render(){
        return(
            <div className="wrapper">
                <SideBar/>
                <div className="main-panel">
                    <NavBar/>
                    <div className="content">
                        <div className="container-fluid">
                            <p>Calendario de Actividades</p>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default CalendarActivity;
