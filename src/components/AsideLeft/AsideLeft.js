import React, { Component } from 'react';
import AsideFooter from './AsideFooter';

class AsideLeft extends Component {

    constructor(props) {
        super(props);
        this.updateDisplay = this.updateDisplay.bind(this);
    }

    updateDisplay(display) {
        this.props.handleDisplay(display);
    }

    render() {
        return (
            <aside className="bg-black dk aside hidden-print" id="nav">
                <section className="vbox">
                    <section className="w-f-md scrollable">
                        <div className="slim-scroll" data-height="auto" data-disable-fade-out="true" data-distance="0" data-size="10px" data-railOpacity="0.2">
                            <nav className="nav-primary hidden-xs">
                                <ul className="nav text-sm">
                                    <li>
                                        <a onClick={() => this.updateDisplay(0)}>
                                            <i className="icon-playlist icon text-success-lter"></i>
                                            <span>Ma Liste</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => this.updateDisplay(1)}>
                                            <i className="icon-drawer icon text-primary-lter"></i>
                                            <span>Abonnements</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => this.updateDisplay(2)}>
                                            <i className="icon-people icon text-info"></i>
                                            <span>Utilisateurs</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </section>
                    {window.localStorage.getItem("pseudo") !== null ?
                        <AsideFooter />
                        : (<div></div>) }
                </section>
            </aside>
                );
            }
        }
        
export default AsideLeft;