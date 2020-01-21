import React from 'react';
import Logo from '../../../images/logo.png';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light"
                    style={{backgroundColor:"#3f51b5", height:"64px", color:'white'}}
                >
                    <a className="navbar-brand" href="/#home">
                        {/*www.flaticon.com/free-icon/profits_909769*/}
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
                            <a className="nav-item nav-link" href="/login"
                            style={{color:'white'}}
                            >Login</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}