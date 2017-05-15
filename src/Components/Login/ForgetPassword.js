import React, {Component} from 'react'

class ForgetPassword extends Component {
    render(){
        return(
            <div>

                <nav className="navbar navbar-primary navbar-transparent navbar-absolute">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            {/*<a className="navbar-brand" href="#">Brinx Administrator</a>*/}
                        </div>
                    </div>
                </nav>

                <div className="wrapper wrapper-full-page">
                    <div className="full-page login-page" data-color="blue">
                        <div className="content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                                        <form action="#" method="#">
                                            <div className="space-down"></div>
                                            <div className="card card-login">
                                                <div className="card-content">
                                                    <h5 className="text-center">Recuperar Contraseña</h5>
                                                    <div className="space-down"></div>
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i className="fa fa-user"></i>
                                                        </span>
                                                        <div className="form-group label-floating">
                                                            <label className="control-label">Nombre</label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                    </div>
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i className="fa fa-envelope"></i>
                                                        </span>
                                                        <div className="form-group label-floating">
                                                            <label className="control-label">Email</label>
                                                            <input type="email" className="form-control"/>
                                                        </div>
                                                    </div>
                                                    <div className="space-down"></div>
                                                    <div className="text-center">
                                                        <button type="submit" className="btn btn-login">Recupear Contraseña <i className="fa fa-sign-out"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer className="footer">
                            <div className="container">
                                <nav className="pull-left">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                Inicio
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Nosotros
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Actividades
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#ForgetPassword">
                                                Recuperar Contraseña
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <p className="copyright pull-right">
                                    &copy;
                                    <a href="#">Brinxs</a> Administrator By Maxcorp SAS
                                </p>
                            </div>
                        </footer>
                    </div>
                </div>

            </div>
        )
    }
}
export default ForgetPassword;