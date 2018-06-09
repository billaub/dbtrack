import React, { Component } from 'react';
// import AsideFooter from './AsideFooter';

class AsideLeft extends Component {

    render() {
        return (
            <aside className="bg-black dk aside hidden-print" id="nav">
                <section className="vbox">
                    <section className="w-f-md scrollable">
                        <div className="slim-scroll" data-height="auto" data-disable-fade-out="true" data-distance="0" data-size="10px" data-railOpacity="0.2">
                            <nav className="nav-primary hidden-xs">
                                <ul className="nav text-sm">
                                    <li>
                                        <a href="">
                                            <i className="icon-playlist icon text-success-lter"></i>
                                            {/* <b className="badge bg-success dker pull-right">9</b> */}
                                            <span>Ma Liste</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </section>
                    {/* <AsideFooter /> */}
                </section>
            </aside>
        );
    }
}

export default AsideLeft;