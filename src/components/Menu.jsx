import React from "react";
import {NavLink} from "react-router-dom";
import logo from '../logo.svg';

export class Menu extends React.Component{
    render(){
        return(
            <div>
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <ul>
                            <li><NavLink to="/">Главная</NavLink></li>
                            <li><NavLink to="/about">О нас</NavLink></li>
                            <li><NavLink to="/contacts">Контакты</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="burger">
                    <nav className="navbar navbar-dark bg-dark">
                        <div className="container-fluid">
                            <img src={logo} style={{height:'50px', position:'relative'}} alt="logo" />
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"/>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}
