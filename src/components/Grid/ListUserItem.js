import React, { Component } from 'react';

class ListUserItem extends Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <li className="list-group-item">
                <div className="pull-right m-l">
                    <a className="m-r-sm"><i className="icon-user-follow icon-download-grid" /></a>
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