import React from 'react';
import Logo from '../../../images/logo.png';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-success">
                    <a className="navbar-brand" href="/#home">
                        <img src={Logo} className="logo-image" alt='logo'/>
                        
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mr-auto">
                            <a className="nav-item nav-link" href="/#home">
                                Home
                            </a>
                        </div>
                        <div className="navbar-nav">
                            <a className="nav-item nav-link" href="/login">Login</a>
                            <a className="nav-item nav-link" href="/registrazione">Registrazione</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}