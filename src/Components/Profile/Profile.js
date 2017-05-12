import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import SideBar from './../../Sections/SideBar'
import NavBar from './../../Sections/NavBar'
import Footer from './../../Sections/Footer'

class Profile extends Component {
    render(){
        return(
    <div className="wrapper">
        <SideBar/>
        <div className="main-panel">
            <NavBar/>
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card" id="profile-main">

                                <div className="card-content">

                                    <h3>Administrador Brinxs</h3>
                                    <hr/>

                                    <div role="tabpanel">
                                        <ul className="nav nav-pills">
                                            <li className="active"><a href="#profile11" aria-controls="profile11" role="tab" data-toggle="tab">Perfil</a>
                                            </li>
                                            <li><a href="#activities11" aria-controls="messages11" role="tab" data-toggle="tab">Actividades</a>
                                            </li>
                                            <li><a href="#settings11" aria-controls="settings11" role="tab" data-toggle="tab">Ajustes</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div role="tabpanel" className="tab-pane active" id="profile11">
                                                <p align="justify">Morbi mattis ullamcorper velit. Etiam rhoncus. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Cras id dui. Curabitur turpis..Morbi mattis ullamcorper velit. Etiam rhoncus. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Cras id dui. Curabitur turpis..</p>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="p-15">
                                                            <h4>Informacion General</h4>
                                                            <hr />
                                                            <div className="row m-l-5">
                                                                <div className="col-sm-6 p-5">
                                                                    <p><strong>Ocupacion</strong></p>
                                                                    <p><strong>Pais</strong></p>
                                                                    <p><strong>Ciudad</strong></p>
                                                                    <p><strong>Fecha de Nacimiento</strong></p>
                                                                </div>
                                                                <div className="col-sm-6 p-10 p-5">
                                                                    <p>Estudiante</p>
                                                                    <p>Colombia</p>
                                                                    <p>Bogota</p>
                                                                    <p>12/10/1982</p>
                                                                </div>
                                                            </div>
                                                            <h4>Informacion de Contacto</h4>
                                                            <hr />
                                                            <div className="row">
                                                                <div className="col-sm-6">
                                                                    <p><i className="fa fa-phone" /> Telephone</p>
                                                                    <p><i className="fa fa-fax" /> Fax</p>
                                                                    <p><i className="fa fa-mobile" /> Mobile</p>
                                                                    <p><i className="fa fa-envelope" /> Email</p>
                                                                    <p><i className="fa fa-skype" /> Skype</p>
                                                                </div>
                                                                <div className="col-sm-6 p-10">
                                                                    <p>+1 (612) 999 99999</p>
                                                                    <p>+1 (612) 999 99999</p>
                                                                    <p>+1 (612) 999 99999</p>
                                                                    <p>jose@email.com</p>
                                                                    <p>jose.skype</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="p-15">
                                                            <h4>Cursos Activos</h4>
                                                            <hr />
                                                            <p><strong>Data Analytics</strong></p>
                                                            <p><strong>Marketing</strong></p>
                                                            <p><strong>Machine Learning</strong></p>
                                                            <p><strong>Travel</strong></p>
                                                            <p><strong>Golf</strong></p>
                                                            <p><strong>Guitar</strong></p>
                                                            <p><strong>Reading</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div role="tabpanel" className="tab-pane" id="activities11">
                                                <div className="widget p-25">
                                                    <div className="widget-body">
                                                        <div className="streamline sl-style-2">
                                                            <div className="sl-item sl-primary">
                                                                <div className="sl-content">
                                                                    <small className="text-muted">5 mins ago</small>
                                                                    <p>Williams has just joined Project X</p>
                                                                </div>
                                                            </div>
                                                            <div className="sl-item sl-danger">
                                                                <div className="sl-content">
                                                                    <small className="text-muted">25 mins ago</small>
                                                                    <p>Jane sent you a request to grant access to the project folder</p>
                                                                </div>
                                                            </div>
                                                            <div className="sl-item sl-success">
                                                                <div className="sl-content">
                                                                    <small className="text-muted">40 mins ago</small>
                                                                    <p>Kate added you to her team</p>
                                                                </div>
                                                            </div>
                                                            <div className="sl-item">
                                                                <div className="sl-content">
                                                                    <small className="text-muted">55</small>
                                                                    <p>John has finished his task</p>
                                                                </div>
                                                            </div>
                                                            <div className="sl-item sl-warning">
                                                                <div className="sl-content">
                                                                    <small className="text-muted">60 mins ago</small>
                                                                    <p>Jim shared a folder with you</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div role="tabpanel" className="tab-pane" id="settings11">
                                                <div className="widget p-25">
                                                    <div className="widget-body">
                                                        <div className="select">
                                                            <select className="form-control">
                                                                <option>Select an Option</option>
                                                                <option>Option 1</option>
                                                                <option>Option 2</option>
                                                                <option>Option 3</option>
                                                                <option>Option 4</option>
                                                                <option>Option 5</option>
                                                            </select>
                                                        </div>
                                                        <div className="select m-t-15">
                                                            <select className="form-control">
                                                                <option>Select an Option</option>
                                                                <option>Option 1</option>
                                                                <option>Option 2</option>
                                                                <option>Option 3</option>
                                                                <option>Option 4</option>
                                                                <option>Option 5</option>
                                                            </select>
                                                        </div>
                                                        <div className="toggle-switch toggle-switch-demo m-t-30" data-ts-color="pink">
                                                            <input id="ts11" type="checkbox" hidden="hidden" />
                                                            <label htmlFor="ts11" className="ts-helper" />
                                                            <label htmlFor="ts11" className="ts-label m-l-10">Toggle Settings One</label>
                                                        </div>
                                                        <div className="toggle-switch toggle-switch-demo m-t-30" data-ts-color="purple">
                                                            <input id="ts22" type="checkbox" hidden="hidden" />
                                                            <label htmlFor="ts22" className="ts-helper" />
                                                            <label htmlFor="ts22" className="ts-label m-l-10">Toggle Settings Two</label>
                                                        </div>
                                                        <div className="checkbox m-b-15 m-t-30">
                                                            <label>
                                                                <input type="checkbox" defaultValue /><i className="input-helper f-10" />Settings option 1</label>
                                                        </div>
                                                        <div className="checkbox m-b-15 m-t-10">
                                                            <label>
                                                                <input type="checkbox" defaultValue /><i className="input-helper f-10" />Settings option 2</label>
                                                        </div>
                                                        <div className="m-t-30">
                                                            <label className="radio radio-inline m-r-20">
                                                                <input type="radio" name="inlineRadioOptions" defaultValue="option1" />
                                                                <i className="input-helper f-10" />1</label>
                                                            <label className="radio radio-inline m-r-20">
                                                                <input type="radio" name="inlineRadioOptions" defaultValue="option2" />
                                                                <i className="input-helper f-10" />2</label>
                                                            <label className="radio radio-inline m-r-20">
                                                                <input type="radio" name="inlineRadioOptions" defaultValue="option3" />
                                                                <i className="input-helper f-10" />3</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card card-profile">
                                <div className="card-avatar">
                                    <a>
                                        <img className="img" src="../../img/faces/man.svg" />
                                    </a>
                                </div>
                                <div className="card-content">
                                    <h6 className="category text-gray">Administrador / Plataforma Brinxs</h6>
                                    <h4 className="card-title">Administrador</h4>
                                    <p align="justify">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid atque beatae blanditiis dicta, doloremque error esse exercitationem maxime natus nisi perferendis saepe sapiente, similique sit suscipit veritatis voluptas voluptatum?
                                    </p>
                                    <a className="btn btn-danger btn-round">
                                        <i className="fa fa-times"></i> Cancelar Suscribcion
                                    </a>
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
export default Profile;
