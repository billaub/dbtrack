/* global chrome */
import React, { Component } from 'react';
import LinkItem from './LinkItem';

class GridLink extends Component {

    constructor(props) {
        super(props);
        this.fetchSavedUrls = this.fetchSavedUrls.bind(this);
    }

    fetchSavedUrls() {0
        var tracks = [];
        chrome.storage.sync.get(null, (obj) => {
            var keys = Object.keys(obj);
            var i = 0;
            keys.forEach((key) => {
                chrome.storage.sync.get(key, (obj) => {
                    var track = Object.values(obj)[0];
                    tracks[i++] = track;
                });
            });
        });
        console.log(tracks);
    }

    componentWillMount() {
        this.fetchSavedUrls();
    }

    render() {
        return (
            <section className="vbox">
                <section className="scrollable padder-lg">
                    <h2 className="font-thin m-b">Ma Liste</h2>
                    <div className="row row-sm">
                        <LinkItem />
                        <LinkItem />
                        <LinkItem />
                        <LinkItem />
                    </div>
                </section>
            </section>
        );
    }
}

export default GridLink;