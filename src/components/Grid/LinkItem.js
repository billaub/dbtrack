import React, { Component } from 'react';

class LinkItem extends Component {

    render() {
        return (
            <div className="col-lg-2">
                <div className="item">
                    <div className="pos-rlt">
                        <div className="item-overlay opacity r r-2x bg-black">
                            <div className="center text-center m-t-n">
                                <a href=""><i className="icon-arrow-down-circle i-2x"/> </a>
                            </div>
                            <div className="bottom padder m-b-sm">
                                <a href=""><i className="icon-trash" /></a>
                            </div>
                        </div>
                        <a href="">
                            <img src="" className="r r-2x img-full" />
                        </a>
                    </div>
                    <div className="padder-v">
                        <a href="" className="text-ellipsis">Video name</a>
                        <a href="" className="text-ellipsis text-ms text-muted">Video platform</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default LinkItem;