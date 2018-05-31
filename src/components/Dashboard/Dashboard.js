import React, { Component } from 'react';
import Header from '../Header/Header';
import AsideLeft from '../AsideLeft/AsideLeft';
import Content from '../Content/Content';

class Dashboard extends Component {
    render() {
        return (
            <section className="vbox">
                <Header />
                <section>
                    <section className="hbox stretch">
                        <AsideLeft />
                        <Content />
                    </section>
                </section>
            </section>
        );
    }
}
export default Dashboard;