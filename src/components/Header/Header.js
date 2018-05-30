import React, { Component } from 'react';
import './Header.css';
import SimpleLineIcon from 'react-simple-line-icons';

class Header extends Component {
    render() {
        return (
            <header className="bg-white-only header header-md navbar navbar-fixed-top-xs">
                <div className="navbar-header aside bg-info">
                    <a className="btn btn-link visible-xs" data-toggle="class:nav-off-screen,open" data-target="#nav,html">
                        <SimpleLineIcon name="list" size="Medium" />
                    </a>
                    <a href="index.html" className="navbar-brand text-lt">
                        <SimpleLineIcon name="earphones" size="Medium" />
                    </a>
                    <a className="btn btn-link visible-xs" data-toggle="dropdown" data-target=".user">
                        <SimpleLineIcon name="settings" size="Medium"/>
                    </a>
                </div>

            </header>
        );
    }
}

export default Header;