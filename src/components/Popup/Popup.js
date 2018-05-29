import React, { Component } from 'react';
import './Popup.css';

class Popup extends Component {
  render() {
    return (
      <div>
        <div className="first" id="container">
          <button className="save_button" id="toto">Sauvegarder l'url</button>
        </div>
        <div className="second">
          <button className="button_blue" id="open_tracks">Voir les urls sauvegardées</button>
        </div>
      </div>
    );
  }
}

export default Popup;
