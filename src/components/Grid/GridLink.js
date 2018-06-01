/* global chrome */
import React, { Component } from 'react';
import LinkItem from './LinkItem';
import './GridLink.css';

class GridLink extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.fetchSavedUrls = this.fetchSavedUrls.bind(this);
    }

    fetchSavedUrls() {
        let p = this;
        chrome.storage.sync.get(null, (obj) => {
            var keys = Object.keys(obj);
            keys.forEach((key) => {
                chrome.storage.sync.get(key, (obj) => {
                    p.setState({ data: p.state.data.concat(Object.values(obj)[0]) });
                });
            });
        });
    }

    componentWillMount() {
        this.fetchSavedUrls();
    }

    render() {
        const { data } = this.state;
        const listItems = data.map((item) => {
            return (
                <LinkItem platform={item.platform} title={item.title} url={item.url} />
            );
        })
        return (
            <section className="vbox">
                <section className="scrollable padder-lg">
                    <a href="" className="btn btn-s-md btn-dark btn-rounded pull-right button-clear">Tout supprimer</a>
                    <h2 className="font-thin m-b">Ma Liste</h2>
                    <div className="row row-sm">
                        {listItems}
                    </div>
                </section>
            </section>
        );
    }
}

export default GridLink;