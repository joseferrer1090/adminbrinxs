import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class SideBar extends Component {
    render(){
        return(
            <div>

                <div className="sidebar" data-background-color="green">
                    <div className="logo">
                        <a href="#">
                            <img className="img-responsive img-logo" src={require('./../../public/img/logo/brinx.svg')} alt="Brinx Admin"/>
                        </a>
                    </div>
                    <div className="logo logo-mini">
                        <a href="#">
                            <img className="img-responsive" src={require('./../../public/img/logo/x.svg')} alt="X de Brinx"/>
                        </a>
                    </div>
                    <div className="sidebar-wrapper">
                        <ul className="nav">
                            <li>
                                <Link to={'/Home'}>
                                    <i className="material-icons icons-white">home</i>
                                    <p className="icons-white">Inicio</p>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/Lessons'}>
                                    <i className="material-icons icons-white">apps</i>
                                    <p className="icons-white">Clases</p>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/Activities'}>
                                    <i className="material-icons icons-white">library_books</i>
                                    <p className="icons-white">Actividades</p>
                                </Link>

                            </li>
                            <li>
                                <a data-toggle="collapse" href="#ui-elements" className="collapsed" aria-expanded="false">
                                    <i className="material-icons icons-white">person</i>
                                    <p className="icons-white">Padres
                                        <b className="caret icons-white"></b>
                                    </p>
                                </a>
                                <div className="collapse" id="ui-elements" aria-expanded="false" style={{height: 0}}>
                                    <ul className="nav">
                                        <li><a>Accordions</a></li>
                                        <li><a >Alerts</a></li>
                                        <li><a >Buttons</a></li>
                                        <li><a >Colors</a></li>
                                        <li><a >Grid System</a></li>
                                        <li><a >Icons</a></li>
                                        <li><a >Modals</a></li>
                                        <li><a >Notifications</a></li>
                                        <li><a >Tabs</a></li>
                                        <li><a >Typography</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a data-toggle="collapse" href="#forms" className="collapsed" aria-expanded="false">
                                    <i className="material-icons icons-white">mood
                                    </i>
                                    <p className="icons-white">Tutores
                                        <b className="caret icons-white"></b>
                                    </p>
                                </a>
                                <div className="collapse" id="forms" aria-expanded="false" style={{height: 0}}>
                                    <ul className="nav">
                                        <li><a >Basic Elements</a></li>
                                        <li><a >Advanced Elements</a></li>
                                        <li><a>Form Validation</a></li>
                                        <li><a>Form Wizard</a></li>
                                        <li><a >Sample Forms</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a data-toggle="collapse" href="#tables" className="collapsed" aria-expanded="false">
                                    <i className="material-icons icons-white">face</i>
                                    <p className="icons-white">Niños
                                        <b className="caret icons-white"></b>
                                    </p>
                                </a>
                                <div className="collapse" id="tables" aria-expanded="false" style={{height: 0}}>
                                    <ul className="nav">
                                        <li><a>Simple Tables</a></li>
                                        <li><a>Data Tables</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <a data-toggle="collapse" href="#pages" className="collapsed" aria-expanded="false">
                                    <i className="material-icons icons-white">content_copy</i>
                                    <p className="icons-white">Paginas
                                        <b className="caret icons-white"></b>
                                    </p>
                                </a>
                                <div className="collapse" id="pages" aria-expanded="false" style={{height: 0}}>
                                    <ul className="nav">
                                        <li><a>Template</a></li>
                                        <li><a>User Profile</a></li>
                                        <li><a>Login</a></li>
                                        <li><a>Sign Up</a></li>
                                        <li><a>Pricing Table</a></li>
                                        <li><a>Invoice</a></li>
                                        <li><a>Help & FAQs</a></li>
                                        <li><a>Timeline</a></li>
                                        <li><a>404</a></li>
                                        <li><a>500</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <Link to="">
                                    <i className="material-icons icons-white">date_range</i>
                                    <p className="icons-white">Calendario
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/Documentation'}>
                                    <i className="material-icons icons-white">help</i>
                                    <p className="icons-white">Soporte</p>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>


            </div>
        )
    }
}
export default SideBar;
