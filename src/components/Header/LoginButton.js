import React, { Component } from 'react';
import Modal from 'react-modal';
import SimpleLineIcon from 'react-simple-line-icons';
import './ActionButton.css';

const customStyleModal = {
    content: {
        top: '100px',
        left: '400px',
        right: '400px',
        bottom: '100px',
    }
};

class LoginButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            pseudo: '',
            password: '',
            loginSuccess: false,
            loginFail: false
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:8000/auth/login/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: this.state.pseudo, password: this.state.password })
        })
            .then(res => {
                if (res.status === 200) {
                    this.setState({ loginSuccess: true });
                    res.json().then(json => {
                        window.localStorage.setItem("token", json.token);
                        window.localStorage.setItem("pseudo", json.pseudo);
                        window.setTimeout(() => {
                            window.location.href = "dashboard.html";
                        }, 3000);
                    })
                } else {
                    this.setState({ loginFail: true });
                }
            });
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    render() {

        let alert = (<div></div>);
        if (this.state.loginSuccess) {
            alert = (
                <div className="alert alert-success">
                    Connexion réussie !
                </div>
            );
        } else if (this.state.loginFail) {
            alert = (
                <div className="alert alert-danger">
                    La connexion a échoué ! Peut-être mauvais mot de passe ...
                </div>
            );
        }

        return (
            <li>
                <button onClick={this.openModal} className="btn btn-s-md btn-default btn-rounded button-register">Connexion</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.state.closeModal}
                    style={customStyleModal}
                    contentLabel="Inscription">
                    <button onClick={this.closeModal} className="btn btn-sm bg-white btn-icon rounded pull-right">
                        <SimpleLineIcon name="close" size="Medium" />
                    </button>
                    <h2>Connexion </h2>
                    {alert}
                    <form onSubmit={this.handleSubmit} className="form">
                        <div className="form-group">
                            <label>Pseudo</label>
                            <input type="text"
                                name="pseudo"
                                className="form-control"
                                placeholder="Pseudo ..."
                                value={this.state.pseudo}
                                onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Mot de passe</label>
                            <input type="password"
                                name="password"
                                className="form-control"
                                placeholder="Mot de passe ..."
                                value={this.state.password}
                                onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-sm btn-default">Envoyer</button>
                    </form>
                </Modal>
            </li>
        );
    }
}

export default LoginButton;