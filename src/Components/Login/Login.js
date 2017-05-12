import React, {Component} from 'react'

class Login extends Component {
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
                    <div className="full-page login-page">
                        <div className="content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <img className="img-responsive img-login-center" src={require('./../../../public/img/logo/x.svg')} alt="login de Brinx"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                                        <form action="#" method="#">
                                            <div className="card card-login">
                                                <div className="card-header text-center">
                                                    {/*<h4 className="card-title"> Plataforma Brinxs</h4>*/}
                                                </div>
                                                <div className="card-content">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i className="fa fa-user"></i>
                                                        </span>
                                                        <div className="form-group label-floating">
                                                            <label className="control-label">Email</label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                    </div>
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            <i className="fa fa-lock"></i>
                                                        </span>
                                                        <div className="form-group label-floating">
                                                            <label className="control-label">Contraseña</label>
                                                            <input type="password" className="form-control"/>
                                                        </div>
                                                    </div>
                                                    <div className="text-center">
                                                        <button type="submit" className="btn btn-login">Ingresar <i className="fa fa-sign-out"></i>
                                                        </button>
                                                        <p>
                                                            <a href="#">

                                                            </a>
                                                        </p>

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
export default Login;