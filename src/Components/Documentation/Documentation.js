import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import NavBar from './../../Sections/NavBar'
import SideBar from './../../Sections/SideBar'
import Footer from './../../Sections/Footer'

class Documentation extends Component{
    render(){
        return(
            <div className="wrapper">
                <SideBar/>
                <div className="main-panel">
                    <NavBar/>
                    <div className="content">
                        <div className="container-fluid">
                            <p>Esquema de Ayuda</p>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default Documentation;
