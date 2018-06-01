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
        this.deleteAllItems = this.deleteAllItems.bind(this);
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

    deleteAllItems() {
        chrome.storage.sync.clear();
        this.setState({ data: [] });
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
                    <a onClick={this.deleteAllItems} className="btn btn-s-md btn-dark btn-rounded pull-right button-clear">Tout supprimer</a>
                    <h2 className="font-thin m-b">Ma Liste</h2>
                    <div className="row row-sm">
                    {listItems.length > 0 ? listItems : (
                        <div className="post-item">
                            <div className="caption wrapper-lg">
                                <h2 className="post-title">Il n'y a rien ici ...</h2>
                                <div className="post-sum">
                                    <p>Vous pouvez ajouter des liens grâce à DbTrack</p>
                                </div>
                            </div>
                        </div>
                    )}
                    </div>
                </section>
            </section>
        );
    }
}

export default GridLink;