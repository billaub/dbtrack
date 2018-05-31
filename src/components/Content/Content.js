import React, { Component } from 'react';
import GridLink from '../Grid/GridLink';

class Content extends Component {

    render() {
        return (
            <section id="content">
                <section className="hbox stretch">
                    <section>
                        <section className="vbox">
                            <GridLink />
                        </section>
                    </section>
                </section>
            </section>
        );
    }
}

export default Content;