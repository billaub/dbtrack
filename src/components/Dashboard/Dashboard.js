import React, { Component } from 'react';
import Header from '../Header/Header';
import AsideLeft from '../AsideLeft/AsideLeft';
import Content from '../Content/Content';
import ContentSubscriptions from '../Content/ContentSubscriptions';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            displayContent: 0
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.handleDisplay = this.handleDisplay.bind(this);
    }

    handleSearch(str) {
        this.setState({ search: str });
    }

    handleDisplay(display) {
        console.log(display);
        this.setState({ displayContent: display });
    }

    render() {

        let display = (<div></div>);
        if (this.state.displayContent === 0) { //Main grid with links
            display = <Content search={this.state.search} />;
        } else if (this.state.displayContent === 1) { //Subscribers
            display = <ContentSubscriptions />
        } else if (this.state.displayContent === 2) { //list users

        }

        return (
            <section className="vbox">
                <Header handleSearch={this.handleSearch} />
                <section>
                    <section className="hbox stretch">
                        <AsideLeft handleDisplay={this.handleDisplay} />
                        {display}
                    </section>
                </section>
            </section>
        );
    }
}
export default Dashboard;