/* global chrome */
import React, { Component } from 'react';

class ListLinkItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            thumbnailUrl: ''
        }
        this.copyUrlToClipboard = this.copyUrlToClipboard.bind(this);
        this.deleteLinkItem = this.deleteLinkItem.bind(this);
        this.openIFrame = this.openIFrame.bind(this);
    }

    openIFrame() {
        chrome.tabs.create({ url: this.props.url });
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

    deleteLinkItem() {
        this.props.deleteItem(this.props.url);
    }

    render() {
        return (
            <li className="list-group-item">
                <div className="pull-right m-l">
                    <a onClick={this.deleteLinkItem} className="m-r-sm"><i className="icon-trash icon-delete-grid" /></a>
                    <a onClick={this.copyUrlToClipboard} className="m-r-sm"><i className="icon-arrow-down-circle icon-download-grid" /></a>
                </div>
                <a onClick={this.openIFrame} className="jp-play-me m-r-sm pull-left"><i className="icon-control-play text" /></a>
                <div className="clear text-ellipsis">
                    <span>{this.props.title}</span>
                </div>
            </li>
        );
    }
}

export default ListLinkItem;