import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NavBar extends Component {
    render(){
        return(
            <div>

                <nav className="navbar navbar-default navbar-absolute">
                    <div className="container-fluid">
                        <div className="navbar-minimize">
                            <button id="minimizeSidebar" className="btn btn-round btn-white btn-fill btn-just-icon">
                                <i className="material-icons visible-on-sidebar-regular f-26">keyboard_arrow_left</i>
                                <i className="material-icons visible-on-sidebar-mini f-26">keyboard_arrow_right</i>
                            </button>
                        </div>
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#"> Administrador - Brinx - Padre </a>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav navbar-right">

                                <li>
                                    <Link to={'/Profile'}>
                                        <i className="material-icons">person</i>
                                        <p className="hidden-lg hidden-md">Profile</p>
                                    </Link>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        <i className="material-icons">settings</i>
                                        <p className="hidden-lg hidden-md">
                                            Notifications
                                            <b className="caret"></b>
                                        </p>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="#Payment_Plan">Pagar mi plan</a>
                                        </li>
                                        <li>
                                            <a href="#">Salir</a>
                                        </li>

                                    </ul>
                                </li>
                                <li className="separator hidden-lg hidden-md"></li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
    }
}
export default NavBar;