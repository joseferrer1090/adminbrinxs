import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component{
    render(){
        return(
            <footer className="footer">
                <div className="container-fluid">
                    <nav className="pull-left">
                        <ul>
                            <li>
                                <a href="#">
                                    Brinx
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Ayuda
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Contactenos
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Soporte
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <p className="copyright pull-right">
                        2017
                        &copy;
                        Brinxs Administrator
                    </p>
                </div>
            </footer>
        )
    }
}

export default Footer;