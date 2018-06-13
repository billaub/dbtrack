import React, { Component } from 'react';

class ListUserItem extends Component {

    constructor(props) {
        super(props);
        this.followUser = this.followUser.bind(this);
    }

    followUser() {
        console.log("JWT " + window.localStorage.getItem("token"));
        fetch("http://localhost:8000/subscribe/", {
            body: JSON.stringify({ id: this.props.id }),
            headers: {
                "Authorization": "JWT " + window.localStorage.getItem("token"),
                "Content-Type": "application/json",
                'Accept': 'application/json'
            },
            method: "POST"
        })
        .then(res => console.log(res));
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