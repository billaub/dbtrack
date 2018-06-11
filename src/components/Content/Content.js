import React, { Component } from 'react';
import GridLink from '../Grid/GridLink';

class Content extends Component {

    render() {
        return (
            <section id="content">
                <GridLink search={this.props.search}/>                
            </section>
        );
    }
}

export default Content;