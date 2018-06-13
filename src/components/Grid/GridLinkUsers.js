import React, { Component } from 'react';
import ListUserItem from './ListUserItem';
import './GridLink.css';

class GridLinkUsers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.fetchAllUsers = this.fetchAllUsers.bind(this);
    }

    componentWillMount() {
        this.fetchAllUsers();
    }

    fetchAllUsers() {
        fetch("http://localhost:8000/users/")
            .then(res => res.json())
            .then(json => {
                this.setState({ data: json });
            });
    }


    render() {
        const { data } = this.state;
        const listUsers = data.map((item) => {
            return (
                <ListUserItem key={item.username} username={item.username} id={item.id} />
            );
        })
        const listEmpty = (
            <div className="post-item">
                <div className="caption wrapper-lg">
                    <h2 className="post-title">Il n'y a rien ici ...</h2>
                    <div className="post-sum">
                        <p>Il y a aucun utilisateur d'inscrit à DbTrack :(</p>
                    </div>
                </div>
            </div>
        );

        return (
            <section className="vbox">
                <section className="scrollable padder-lg">
                    <h2 className="font-thin m-b">Trouver des amis à suivre !</h2>
                    <div className="row row-sm">
                    {listUsers.length > 0 ? (
                        <ul className="list-group list-group-lg no-radius no-border no-bg m-t-n-xxs m-b-none auto">
                            {listUsers}
                        </ul>
                    ) : listEmpty}
                    </div>
                </section>
            </section>
        );
    }
}

export default GridLinkUsers;