import React, { Component } from 'react';
import Searchbar from './Searchbar';
import SimpleLineIcon from 'react-simple-line-icons';
import RegisterButton from './RegisterButton';

class Header extends Component {

    render() {

        let style = {
            display: 'inline-block'
        };

        return (
            <header className="bg-white-only header header-md navbar navbar-fixed-top-xs">
                <div className="navbar-header aside bg-info">
                    <a className="btn btn-link visible-xs" data-toggle="class:nav-off-screen,open" data-target="#nav,html">
                        <SimpleLineIcon name="list" size="Medium" />
                    </a>
                    <a href="dashboard.html" className="navbar-brand text-lt">
                        <SimpleLineIcon name="earphones" size="Medium" style={style} />
                        <span className="hidden-nav-xs m-l-sm">DbTrack</span>
                    </a>
                    <a className="btn btn-link visible-xs" data-toggle="dropdown" data-target=".user">
                        <SimpleLineIcon name="settings" size="Medium" />
                    </a>
                </div>
                <ul className="nav navbar-nav hidden-xs">
                    <li> <a href="#nav,.navbar-header" data-toggle="class:nav-xs,nav-xs" className="text-muted">
                        <i className="fa fa-indent text"></i>
                        <i className="fa fa-dedent text-active"></i>
                    </a>
                    </li>
                </ul>
                <Searchbar handleSearch={this.props.handleSearch} />
                <div className="navbar-right">
                    <ul className="nav navbar-nav m-n hidden-xs nav-user user">
                        <RegisterButton />
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;