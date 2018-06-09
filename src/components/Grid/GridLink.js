/* global chrome */
import React, { Component } from 'react';
import GridLinkItem from './GridLinkItem';
import ListLinkItem from './ListLinkItem';
import SimpleLineIcon from 'react-simple-line-icons';
import './GridLink.css';

class GridLink extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialData: [],
            data: [],
            search: '',
            displayGrid: true
        };
        this.fetchSavedUrls = this.fetchSavedUrls.bind(this);
        this.filterUrls = this.filterUrls.bind(this);
        this.deleteAllItems = this.deleteAllItems.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.switchTypeOfDisplay = this.switchTypeOfDisplay.bind(this);
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

    switchTypeOfDisplay(gridDisplay) {
        this.setState({ displayGrid: gridDisplay });
    }

    render() {
        const { data, displayGrid } = this.state;
        const gridListItems = data.map((item) => {
            return (
                <GridLinkItem key={item.url} platform={item.platform} title={item.title} url={item.url} deleteItem={this.deleteItem} />
            );
        });

        const listListItems = data.map((item) => {
            return (
                <ListLinkItem key={item.url} platform={item.platform} title={item.title} url={item.url} deleteItem={this.deleteItem} />
            );
        });

        const listEmpty = (
            <div className="post-item">
                <div className="caption wrapper-lg">
                    <h2 className="post-title">Il n'y a rien ici ...</h2>
                    <div className="post-sum">
                        <p>Vous pouvez ajouter des liens grâce à DbTrack</p>
                    </div>
                </div>
            </div>
        );

        return (
            <section className="vbox">
                <section className="scrollable padder-lg">
                    <button onClick={(e) => this.switchTypeOfDisplay(true, e)} className="btn btn-sm bg-white btn-icon rounded pull-right button-type-display">
                        <SimpleLineIcon name="grid" size="Medium" />
                    </button>
                    <button onClick={(e) => this.switchTypeOfDisplay(false, e)} className="btn btn-sm bg-white btn-icon rounded pull-right button-type-display">
                        <SimpleLineIcon name="list" size="Medium" />
                    </button>
                    <button onClick={this.deleteAllItems} className="btn btn-s-md btn-dark btn-rounded pull-right button-clear">
                        Tout supprimer
                    </button>
                    <h2 className="font-thin m-b">Ma Liste</h2>
                    <div className="row row-sm">
                        {displayGrid ?
                            gridListItems.length > 0 ? gridListItems : listEmpty
                            : listListItems.length > 0 ?
                                (
                                    <ul className="list-group list-group-lg no-radius no-border no-bg m-t-n-xxs m-b-none auto">
                                        {listListItems}
                                    </ul>
                                ) : listEmpty
                        }
                    </div>
                </section>
            </section>
        );
    }
}

export default GridLink;