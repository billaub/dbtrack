/* global chrome */
import React, { Component } from 'react';
import LinkItem from './LinkItem';
import './GridLink.css';

class GridLink extends Component {

    constructor(props) {
        super(props);
        this.fetchSavedUrls = this.fetchSavedUrls.bind(this);
    }

    fetchSavedUrls() {
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
                    <a href="" className="btn btn-s-md btn-dark btn-rounded pull-right button-clear">Tout supprimer</a>
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