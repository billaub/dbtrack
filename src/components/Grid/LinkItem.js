import React, { Component } from 'react';

class LinkItem extends Component {

    constructor(props) {
        super(props);
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
                                <a href="" clasName="pull-right"><i className="icon-trash" /></a>
                            </div>
                        </div>
                        <a href="">
                            <img src="https://d37tspgf48im77.cloudfront.net/CACHE/images/uploads/c8814b79dd2c84141513ef3da415e3c6d0e433356e983d424e228fcb5e5e8516/BF82B0AF-CBF3-4270-9344-CAC430EF6E37/e57d60f032d42aecb09f66da68b7e358.jpeg"
                                className="r r-2x img-full" widdth={400} height={200} />
                        </a>
                    </div>
                    <div className="padder-v">
                        <a href="" className="text-ellipsis">Video name
                            <i className="icon-arrow-down-circle icon-download-grid" />
                        </a>
                        <a href="" className="text-ellipsis text-ms text-muted">Video platform</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default LinkItem;