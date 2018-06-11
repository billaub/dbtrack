import React, { Component } from 'react';
import Header from '../Header/Header';
import AsideLeft from '../AsideLeft/AsideLeft';
import Content from '../Content/Content';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(str) {
        this.setState({ search: str });
    }

    render() {
        return (
            <section className="vbox">
                <Header handleSearch={this.handleSearch} />
                <section>
                    <section className="hbox stretch">
                        <AsideLeft />
                        <Content search={this.state.search}/>
                    </section>
                </section>
            </section>
        );
    }
}
export default Dashboard;