import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="bg-white-only header header-md navbar navbar-fixed-top-xs">
                <div className="navbar-header aside bg-info nav-xs">
                    <a className="btn btn-link visible-xs" data-toggle="class:nav-off-screen,open" data-target="#nav,html">
                        <i className="icon-list"></i>
                    </a>
                    <a href="index.html" className="navbar-brand text-lt">
                        <i className="icon-earphones"></i>
                        <img src="" alt="." className="hide" /> <span className="hidden-nav-xs m-l-sm">Musik</span>
                    </a>
                    <a className="btn btn-link visible-xs" data-toggle="dropdown" data-target=".user">
                        <i className="icon-settings"></i>
                    </a>
                </div>

            </header>
        );
    }
}
    
export default Header;