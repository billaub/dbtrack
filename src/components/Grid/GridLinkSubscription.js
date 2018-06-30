import React, { Component } from 'react';
import GridSubItem from './GridSubItem';
import './GridLink.css';

class GridLinkSubscription extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.fetchTracksFromSub = this.fetchTracksFromSub.bind(this);
    }

    componentWillMount() {
        if (window.localStorage.getItem("token") !== null) {
            this.fetchTracksFromSub();
        }
    }

    fetchTracksFromSub() {
        fetch("http://46.105.96.65:8000/subscribe/tracks", {
            headers: {
                "Authorization": "JWT " + window.localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(json => {
                if (json.tracks !== "") {
                    this.setState({ data: json.tracks });
                }
            })
    }

    render() {

        const gridListItems = this.state.data.map((item) => {
            return (
                <GridSubItem key={item.url} platform={item.platform} title={item.title} url={item.url} user={item.user} refresh={this.fetchTracksFromSub} />
            );
        });

        const listEmpty = (
            <div className="post-item">
                <div className="caption wrapper-lg">
                    <h2 className="post-title">Il n'y a rien ici ...</h2>
                    <div className="post-sum">
                        <p>Aucune Activités des personnes que vous suivez ... Essayer d'en suivre plus !</p>
                    </div>
                </div>
            </div>
        );

        const notLogged = (
            <div className="post-item">
                <div className="caption wrapper-lg">
                    <h2 className="post-title">Il n'y a rien ici ...</h2>
                    <div className="post-sum">
                        <p>Vous devez être connecté pour pouvoir vous abonnez à d'autres utilisateurs</p>
                    </div>
                </div>
            </div>);

        return (
            <section className="vbox">
                <section className="scrollable padder-lg">
                    <h2 className="font-thin m-b">Activités des personnes que vous suivez</h2>
                    <div className="row row-sm">
                        {window.localStorage.getItem("token") !== null
                            ? (this.state.data.length > 0 ? gridListItems : listEmpty) : notLogged}
                    </div>
                </section>
            </section>
        );
    }
}

export default GridLinkSubscription;