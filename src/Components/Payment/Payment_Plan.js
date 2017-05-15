import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Plan_one from './../../../public/img/card-2.jpg'
import Plan_tow from './../../../public/img/card-2.jpg'
import Plan_three from './../../../public/img/card-2.jpg'

import SideBar from './../../Sections/SideBar'
import NavBar from './../../Sections/NavBar'
import Footer from './../../Sections/Footer'

class Payment_Plan extends Component{
    render(){
        return(
            <div className="wrapper">
                <SideBar/>
                <div className="main-panel">
                    <NavBar/>
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card card-product" >
                                        <div className="card-image" data-header-animation="false">
                                            <a>
                                                {/*<img src={require('./../../../public/img/card-2.jpg')} />*/}
                                                <img className="img-responsive" src={Plan_one} alt="Imagen Plan One"/>
                                            </a>
                                        </div>
                                        <div className="card-content">

                                            <h4 className="card-title">
                                                <a> Plan Xs</a>
                                            </h4>
                                            <div className="card-description">
                                                <p>These sea-facing suite rooms are on the edge of the cliff. Being on one of the most happening beaches of Rio you live within walking distance to restaurants and night spots.</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="price">
                                                <h4>$400/night</h4>
                                            </div>
                                            <div className="stats pull-right">
                                                {/* <p className="category"><i className="material-icons">place</i> Rio de Janero, Brasil</p> */}
                                                <button className="btn btn-login"><i className="fa fa-credit-card"></i> Pagar mi Plan</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-product" >
                                        <div className="card-image" data-header-animation="false">
                                            <a>
                                                {/*<img src={require('./../../../public/img/card-2.jpg')} />*/}
                                                <img className="img-responsive" src={Plan_tow} alt="Imagen del plan 2 "/>
                                            </a>
                                        </div>
                                        <div className="card-content">

                                            <h4 className="card-title">
                                                <a> Plan Xl</a>
                                            </h4>
                                            <div className="card-description">
                                                <p>These sea-facing suite rooms are on the edge of the cliff. Being on one of the most happening beaches of Rio you live within walking distance to restaurants and night spots.</p>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="price">
                                                <h4>$400/night</h4>
                                            </div>
                                            <div className="stats pull-right">
                                                {/* <p className="category"><i className="material-icons">place</i> Rio de Janero, Brasil</p> */}
                                                <button className="btn btn-login"><i className="fa fa-credit-card"></i> Pagar mi Plan</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card card-product">
                                        <div className="card-image" data-header-animation="false">
                                            <a>
                                                {/*<img src={require('./../../../public/img/card-2.jpg')} />*/}
                                                <img className="img-responsive" src={Plan_three} alt="imagen del Plan three"/>
                                            </a>
                                        </div>
                                        <div className="card-content">
                                            <h4 className="card-title">
                                                <a>Plan All</a>
                                            </h4>
                                            <div className="card-description">
                                                These sea-facing suite rooms are on the edge of the cliff. Being on one of the most happening beaches of Rio you live within walking distance to restaurants and night spots.
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <div className="price">
                                                <h4>$400/night</h4>
                                            </div>
                                            <div className="stats pull-right">
                                                {/* <p className="category"><i className="material-icons">place</i> Rio de Janero, Brasil</p> */}
                                                <button className="btn btn-login"><i className="fa fa-credit-card"></i> Pagar mi Plan
                                                </button>
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
        )
    }
}

export default Payment_Plan;