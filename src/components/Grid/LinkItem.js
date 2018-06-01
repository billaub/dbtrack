/* global chrome */
import React, { Component } from 'react';

class LinkItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            thumbnailUrl: ''
        }
        this.copyUrlToClipboard = this.copyUrlToClipboard.bind(this);
        this.deletLinkItem = this.deletLinkItem.bind(this);
    }

    componentDidMount() {
        if (this.props.platform == 'youtube') {
            this.setState({ thumbnailUrl: 'http://img.youtube.com/vi/' + this.props.url.split('v=')[1] + '/0.jpg' });
        } else if (this.props.platform == 'soundcloud') {

        } else if (this.props.platform == 'beatport') {

        }
    }

    copyUrlToClipboard() {
        document.oncopy = (e) => {
            e.clipboardData.setData("Text", this.props.url);
            e.preventDefault();
        }
        document.execCommand("Copy");
        document.oncopy = undefined;
        chrome.notifications.create("track_copied", {
            title: "dbtrack",
            iconUrl: "icon.png",
            type: "basic",
            message: "L'URL a bien été copié dans le presse-papier !",
        }, () => {
        });
    }

    deletLinkItem() {
        
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-4 col-md-3">
                <div className="item">
                    <div className="pos-rlt">
                        <div className="item-overlay opacity r r-2x bg-black">
                            <div className="center text-center m-t-n">
                                <a href=""><i className="fa fa-play-circle i-2x" /> </a>
                            </div>
                            <div className="bottom padder m-b-sm">
                                <a onClick={this.deletLinkItem} clasName="pull-right"><i className="icon-trash" /></a>
                            </div>
                        </div>
                        <a href="">
                            <img src={this.state.thumbnailUrl}
                                className="r r-2x img-full" widdth={400} height={200} />
                        </a>
                    </div>
                    <div className="padder-v">
                        <a onClick={this.copyUrlToClipboard} className="text-ellipsis">{this.props.title}
                            <i className="icon-arrow-down-circle icon-download-grid" />
                        </a>
                        <a href="" className="text-ellipsis text-ms text-muted">{this.props.platform}</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default LinkItem;