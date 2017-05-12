import React, {Component} from 'react'
import {Link} from 'react-router-dom'

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
                                    <br/>
                                    <div className="card card-product" style={{minHeight: 410}}>
                                        <div className="card-image" data-header-animation="false">
                                            <a>
                                                <img src={require('./../../../public/img/card-2.jpg')} />
                                            </a>
                                        </div>
                                        <div className="card-content">
                                            <div className="card-actions">
                                                <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                                    <i className="material-icons">build</i> Fix Header!
                                                </button>
                                                <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="View">
                                                    <i className="material-icons">art_track</i>
                                                </button>
                                                <button type="button" className="btn btn-success btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Edit">
                                                    <i className="material-icons">edit</i>
                                                </button>
                                                <button type="button" className="btn btn-danger btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Remove">
                                                    <i className="material-icons">close</i>
                                                </button>
                                            </div>
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
                                                <button className="btn btn-default"><i className="fa fa-credit-card"></i> Pagar mi Plan</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br/>
                                    <div className="card card-product" style={{minHeight: 410}}>
                                        <div className="card-image" data-header-animation="false">
                                            <a>
                                                <img src={require('./../../../public/img/card-2.jpg')} />
                                            </a>
                                        </div>
                                        <div className="card-content">
                                            <div className="card-actions">
                                                <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                                    <i className="material-icons">build</i> Fix Header!
                                                </button>
                                                <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="View">
                                                    <i className="material-icons">art_track</i>
                                                </button>
                                                <button type="button" className="btn btn-success btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Edit">
                                                    <i className="material-icons">edit</i>
                                                </button>
                                                <button type="button" className="btn btn-danger btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Remove">
                                                    <i className="material-icons">close</i>
                                                </button>
                                            </div>
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
                                                <button className="btn btn-default"><i className="fa fa-credit-card"></i> Pagar mi Plan</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <br/>
                                    <div className="card card-product" style={{minHeight: 410}}>
                                        <div className="card-image" data-header-animation="false">
                                            <a>
                                                <img src={require('./../../../public/img/card-2.jpg')} />
                                            </a>
                                        </div>
                                        <div className="card-content">
                                            <div className="card-actions">
                                                <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                                                    <i className="material-icons">build</i> Fix Header!
                                                </button>
                                                <button type="button" className="btn btn-default btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="View">
                                                    <i className="material-icons">art_track</i>
                                                </button>
                                                <button type="button" className="btn btn-success btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Edit">
                                                    <i className="material-icons">edit</i>
                                                </button>
                                                <button type="button" className="btn btn-danger btn-simple" rel="tooltip" data-placement="bottom" title="" data-original-title="Remove">
                                                    <i className="material-icons">close</i>
                                                </button>
                                            </div>
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
                                                <button className="btn btn-default"><i className="fa fa-credit-card"></i> Pagar mi Plan
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