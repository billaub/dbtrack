import React, { Component } from 'react';
import LinkItem from './LinkItem';

class GridLink extends Component {

    render() {
        return (
            <section className="scrollable padder-lg w-f-md">
                <a className="pull-right text-muted m-t-lg" data-toggle="class:fa-spin">
                    <i className="icon-refresh i-lg inline" />
                </a>
                <h2 className="font-thin m-b">Ma liste</h2>
                <div className="row row-sm">
                    <LinkItem />
                    <LinkItem />
                    <LinkItem />
                    <LinkItem />
                    <LinkItem />
                    <LinkItem />
                    <LinkItem />
                    <LinkItem />
                    <LinkItem />
                    <LinkItem />
                </div>
            </section>
        );
    }
}

export default GridLink;