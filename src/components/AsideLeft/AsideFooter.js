import React, { Component } from 'react';

class AsideFooter extends Component {
    render() {
        return (
            <footer className="footer hidden-xs no-padder text-center-nav-xs">
                <div className="bg hidden-xs ">
                    <div className="dropdown dropup wrapper-sm clearfix">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <span className="thumb-sm avatar pull-left m-l-xs">
                                <img src="images/a3.png" className="dker" alt="..." />
                                <i className="on b-black"></i> </span> <span className="hidden-nav-xs clear"> <span className="block m-l"> <strong className="font-bold text-lt">John.Smith</strong> <b className="caret"></b> </span> <span className="text-muted text-xs block m-l">Art Director</span> </span> </a>
                        <ul className="dropdown-menu animated fadeInRight aside text-left">
                            <li> <span className="arrow bottom hidden-nav-xs"></span> <a href="#">Settings</a> </li>
                            <li> <a href="profile.html">Profile</a> </li>
                            <li> <a href="#"> <span className="badge bg-danger pull-right">3</span> Notifications </a> </li>
                            <li> <a href="docs.html">Help</a> </li>
                            <li className="divider"></li>
                            <li> <a href="modal.lockme.html" data-toggle="ajaxModal">Logout</a> </li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default AsideFooter;