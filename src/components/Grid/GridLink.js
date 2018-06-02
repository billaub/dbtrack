/* global chrome */
import React, { Component } from 'react';
import LinkItem from './LinkItem';
import './GridLink.css';

class GridLink extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialData: [],
            data: [],
            search: ''
        };
        this.fetchSavedUrls = this.fetchSavedUrls.bind(this);
        this.filterUrls = this.filterUrls.bind(this);
        this.deleteAllItems = this.deleteAllItems.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentWillMount() {
        this.fetchSavedUrls();
        this.setState({ search: this.props.search });
    }

    componentDidUpdate() {
        if (this.props.search !== this.state.search) {
            this.setState({ search: this.props.search });
            this.filterUrls();
        }
    }

    fetchSavedUrls() {
        let p = this;
        chrome.storage.sync.get(null, (obj) => {
            var keys = Object.keys(obj);
            keys.forEach((key) => {
                chrome.storage.sync.get(key, (obj) => {
                    p.setState({ data: p.state.data.concat(Object.values(obj)[0]) });
                    p.setState({ initialData: p.state.initialData.concat(Object.values(obj)[0]) });
                });
            });
        });
    }

    filterUrls() {
        if (this.props.search.length > 1) {
            var array = [...this.state.initialData];
            this.setState({ data: array.filter((item, index) => item.title.toLowerCase().includes(this.props.search.toLowerCase())) });
        } else {
            var initialArray = [...this.state.initialData];
            this.setState({ data: initialArray });
        }
    }

    deleteItem(key) {
        let p = this;
        chrome.storage.sync.remove("track_" + key, (k) => {
            var array = [...p.state.data];
            p.setState({ data: array.filter((item, index) => item.url !== key) });
        });
    }

    deleteAllItems() {
        chrome.storage.sync.clear();
        this.setState({ data: [] });
    }



    render() {
        const { data } = this.state;
        const listItems = data.map((item) => {
            return (
                <LinkItem key={item.url} platform={item.platform} title={item.title} url={item.url} deleteItem={this.deleteItem} />
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