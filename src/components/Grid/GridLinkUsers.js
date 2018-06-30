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
        if (window.localStorage.getItem("token") !== null) {
            this.fetchAllUsers();
        }
    }

    fetchAllUsers() {
        fetch("http://46.105.96.65:8000/users/")
            .then(res => res.json())
            .then(json => {
                json = json.filter((item) => item.username !== window.localStorage.getItem("pseudo"));
                this.setState({ data: json });
            });
        fetch("http://46.105.96.65:8000/subscriptions/", {
            headers: {
                "Authorization": "JWT " + window.localStorage.getItem("token")
            }
        })
            .then(res => res.json())
            .then(json => {
                var list = this.state.data;
                list = list.filter((item1) => {
                    return json.filter((item2) => {
                        return item1.username === item2.username;
                    }).length === 0;
                });
                this.setState({ data: list });
            })
    }


    render() {
        const { data } = this.state;
        const listUsers = data.map((item) => {
            return (
                <ListUserItem key={item.username} username={item.username} id={item.id} refresh={this.fetchAllUsers} />
            );
        })
        const listEmpty = (
            <div className="post-item">
                <div className="caption wrapper-lg">
                    <h2 className="post-title">Il n'y a rien ici ...</h2>
                    <div className="post-sum">
                        <p>Il y a aucun nouvel utilisateur à suivre</p>
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
                    <h2 className="font-thin m-b">Trouver des amis à suivre !</h2>
                    <div className="row row-sm">
                        {window.localStorage.getItem("token") !== null
                            ? (
                                listUsers.length > 0 ? (
                                    <ul className="list-group list-group-lg no-radius no-border no-bg m-t-n-xxs m-b-none auto">
                                        {listUsers}
                                    </ul>
                                ) : listEmpty) : notLogged}
                    </div>
                </section>
            </section>
        );
    }
}

export default GridLinkUsers;