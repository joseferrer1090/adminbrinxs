import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import SideBar from './../../Sections/SideBar'
import NavBar from './../../Sections/NavBar'
import Footer from './../../Sections/Footer'
class Home extends Component{
    render(){
        return(
            <div>
                <div className="wrapper">
                    <SideBar/>
                    <div className="main-panel">
                        <NavBar/>
                        <div className="content">
                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card card-stats">
                                        <div className="card-header">
                                            <div className="icon icon-warning">
                                                <i className="zmdi zmdi-equalizer"></i>
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <p className="category"><strong>Visits</strong></p>
                                            <h3 className="card-title">70,340</h3>
                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons text-info">info</i>
                                                <a href="#pablo">See detailed report</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card card-stats">
                                        <div className="card-header">
                                            <div className="icon icon-warning">
                                                <i className="zmdi zmdi-equalizer"></i>
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <p className="category"><strong>Visits</strong></p>
                                            <h3 className="card-title">70,340</h3>
                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons text-info">info</i>
                                                <a href="#pablo">See detailed report</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card card-stats">
                                        <div className="card-header">
                                            <div className="icon icon-warning">
                                                <i className="zmdi zmdi-equalizer"></i>
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <p className="category"><strong>Visits</strong></p>
                                            <h3 className="card-title">70,340</h3>
                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons text-info">info</i>
                                                <a href="#pablo">See detailed report</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-sm-6">
                                    <div className="card card-stats">
                                        <div className="card-header">
                                            <div className="icon icon-warning">
                                                <i className="zmdi zmdi-equalizer"></i>
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <p className="category"><strong>Visits</strong></p>
                                            <h3 className="card-title">70,340</h3>
                                        </div>
                                        <div className="card-footer">
                                            <div className="stats">
                                                <i className="material-icons text-info">info</i>
                                                <a href="#pablo">See detailed report</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;