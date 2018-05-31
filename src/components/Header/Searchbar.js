import React, { Component } from 'react';
//import './Searchbar.css';

class Searchbar extends Component {

    render() {
        return (
            <form className="navbar-form navbar-left input-s-lg m-t m-l-n-xs hidden-xs" role="search">
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-btn">
                            <button type="submit" className="btn btn-sm bg-white btn-icon rounded">
                                <i className="fa fa-search"></i>
                            </button>
                        </span>
                        <input type="text" className="form-control input-sm no-border rounded" placeholder="Chercher le titre d'une musique ..." />
                    </div>
                </div>
            </form>
        );
    }
}

export default Searchbar;