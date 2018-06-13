import React, { Component } from 'react';
import './ActionButton.css';

class LogoutButton extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        window.localStorage.clear();
        window.location.href = "dashboard.html";
    }

    render() {
        return (
            <li>
                <button onClick={this.handleSubmit} className="btn btn-s-md btn-default btn-rounded button-register">Déconnexion</button>
            </li>
        );
    }
}

export default LogoutButton;