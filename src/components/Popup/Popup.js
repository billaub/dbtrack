/*global chrome*/
import React, { Component } from 'react';
import './Popup.css';

class Popup extends Component {

  constructor(props) {
    super(props);
    this.saveUrl = this.saveUrl.bind(this);
    this.openTab = this.openTab.bind(this);
  }

  saveUrl() {
    chrome.tabs.getSelected(null, function (tab) {
      let insert = {
        ['track_' + tab.url]: tab.url
      };
      chrome.storage.sync.set(insert, function () {
        if (chrome.runtime.error) {
          console.log("Runtime error.");
        }
      });
    });
  }

  openTab() {
    chrome.tabs.create({ url: "dashboard.html" });
  }

  render() {
    return (
      <div>
        <div className="first" id="container">
          <button className="save-button button-green" onClick={this.saveUrl}>Sauvegarder l'url</button>
        </div>
        <div className="second">
          <button className="save-button button-red" onClick={this.openTab}>Voir les urls sauvegardées</button>
        </div>
      </div>
    );
  }
}

export default Popup;
