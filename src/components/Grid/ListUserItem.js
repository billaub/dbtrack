/* global chrome */
import React, { Component } from 'react';

class ListUserItem extends Component {

    constructor(props) {
        super(props);
        this.followUser = this.followUser.bind(this);
    }

    followUser() {
        fetch("http://46.105.96.65:8000/subscribe/", {
            body: JSON.stringify({ id: this.props.id }),
            headers: {
                "Authorization": "JWT " + window.localStorage.getItem("token"),
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            method: "POST"
        })
            .then(res => {
                let p = this;
                chrome.notifications.create("subscribe", {
                    title: "DbTrack",
                    iconUrl: "icon.png",
                    type: "basic",
                    message: "Vous vous êtes abonné à " + p.props.username,
                }, () => {
                });
                this.props.refresh();
            });
    }

    render() {
        return (
            <li className="list-group-item">
                <div className="pull-right m-l">
                    <a onClick={this.followUser} className="m-r-sm"><i className="icon-user-follow icon-download-grid" /></a>
                </div>
                <a className="jp-play-me m-r-sm pull-left"><i className="icon-user text" /></a>
                <div className="clear text-ellipsis">
                    <span>{this.props.username}</span>
                </div>
            </li>
        );
    }
}

export default ListUserItem;