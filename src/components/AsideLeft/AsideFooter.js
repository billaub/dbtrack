import React, { Component } from 'react';

class AsideFooter extends Component {
    render() {
        return (
            <footer className="footer hidden-xs no-padder text-center-nav-xs">
                <div className="bg hidden-xs ">
                    <div className="dropdown dropup wrapper-sm clearfix">
                        <a href="" className="dropdown-toggle" data-toggle="dropdown">
                            <span className="hidden-nav-xs clear">
                                <span className="block m-l">
                                    <strong className="font-bold text-lt">Bonjour {window.localStorage.getItem("pseudo")}</strong>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default AsideFooter;