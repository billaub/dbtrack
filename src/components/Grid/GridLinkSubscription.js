/* global chrome */
import React, { Component } from 'react';
import GridLinkItem from './GridLinkItem';
import ListLinkItem from './ListLinkItem';
import SimpleLineIcon from 'react-simple-line-icons';
import './GridLink.css';

class GridLinkSubscription extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialData: [],
            data: [],
            search: '',
            displayGrid: true
        };

    }

    render() {
    
        return (
            <section className="vbox">
                <section className="scrollable padder-lg">
                    
                    <h2 className="font-thin m-b">Activités des personnes que vous suivez</h2>
                    <div className="row row-sm">
                        
                    </div>
                </section>
            </section>
        );
    }
}

export default GridLinkSubscription;