import React, { Component } from 'react';

class Searchbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ inputValue: e.target.value });
        this.props.handleSearch(e.target.value);
    }

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
                        <input type="text"
                            value={this.state.inputValue}
                            onChange={this.handleChange}
                            className="form-control input-sm no-border rounded" 
                            placeholder="Chercher le titre d'une musique ..." />
                    </div>
                </div>
            </form>
        );
    }
}

export default Searchbar;