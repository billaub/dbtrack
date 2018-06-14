/* global chrome */
import React, { Component } from 'react';

class GridSubItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            thumbnailUrl: ''
        }
        this.copyUrlToClipboard = this.copyUrlToClipboard.bind(this);
        this.unfollowUser = this.unfollowUser.bind(this);
        this.openIFrame = this.openIFrame.bind(this);
    }

    componentDidMount() {
        if (this.props.platform === 'youtube') {
            this.setState({ thumbnailUrl: 'http://img.youtube.com/vi/' + this.props.url.split('v=')[1] + '/0.jpg' });
        } else if (this.props.platform === 'soundcloud') {
            this.setState({ thumbnailUrl: '/img/soundcloud.jpg' });

        } else if (this.props.platform === 'beatport') {
            this.setState({ thumbnailUrl: '/img/beatport.png' });
        }
    }

    openIFrame() {
        chrome.tabs.create({ url: this.props.url });
    }

    copyUrlToClipboard() {
        document.oncopy = (e) => {
            e.clipboardData.setData("Text", this.props.url);
            e.preventDefault();
        };
        document.execCommand("Copy");
        document.oncopy = undefined;
        chrome.notifications.create("track_copied", {
            title: "DbTrack",
            iconUrl: "icon.png",
            type: "basic",
            message: "L'URL a bien été copié dans le presse-papier !",
        }, () => {
        });
    }

    unfollowUser() {
        fetch("http://localhost:8000/subscriptions/remove", {
            headers: {
                "Authorization": "JWT " + window.localStorage.getItem("token"),
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ username: this.props.user })
        })
            .then(res => {
                console.log(res);
                let p = this;
                chrome.notifications.create("unfollow", {
                    title: "DbTrack",
                    iconUrl: "icon.png",
                    type: "basic",
                    message: "Vous vous êtes désabonné de " + p.props.user,
                }, () => { })
                this.props.refresh();
            })
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-4 col-md-3">
                <div className="item">
                    <div className="pos-rlt">
                        <div className="item-overlay opacity r r-2x bg-black">
                            <div className="center text-center m-t-n">
                                <a onClick={this.openIFrame}><i className="fa fa-play-circle i-2x" /> </a>
                            </div>
                        </div>
                        <img src={this.state.thumbnailUrl} className="r r-2x img-full" widdth={400} height={200} alt="" />
                    </div>
                    <div className="padder-v">
                        <span className="text-ellipsis">{this.props.title}</span>
                        <a className="text-ellipsis text-ms text-muted">    {this.props.platform} par {this.props.user}
                            <i onClick={this.unfollowUser} className="icon-user-unfollow icon-delete-grid" />
                            <i onClick={this.copyUrlToClipboard} className="icon-arrow-down-circle icon-download-grid" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default GridSubItem;