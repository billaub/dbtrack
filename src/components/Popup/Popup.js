/*global chrome*/
import React, { Component } from 'react';
import './Popup.css';

class Popup extends Component {

  constructor(props) {
    super(props);
    this.saveUrl = this.saveUrl.bind(this);
    this.openTab = this.openTab.bind(this);
    this.sendPopup = this.sendPopup.bind(this);
  }

  sendPopup(msg) {
    console.log("toto");
    chrome.notifications.create("track_saved", {
        title: "dbtrack",
        iconUrl: "icon.png",
        type: "basic",
        message: msg,
    }, () => {
    });
  }

  saveUrl() {
    let p = this;
    chrome.tabs.getSelected(null, function (tab) {
      let insert = {
        ['track_' + tab.url]: tab.url
      };
      chrome.storage.sync.set(insert, () => {
        if (chrome.runtime.error) {
          console.log("Runtime error.");
        }
        else {
          p.sendPopup("Url enregistrée");
        }
      });
    });
  }

  openTab() {
    console.log("opening tab");
    chrome.tabs.create({ url: "dashboard.html" });
  }

  render() {
    return (
      <div>
        <div className="first" id="container">
          <button className="save-button button-green" onClick={this.saveUrl}>Sauvegarder l'url</button>
        </div>
        <div className="second">
          <button className="save-button button-blue" onClick={this.openTab}>Voir les urls sauvegardées</button>
        </div>
      </div>
    );
  }
}

export default Popup;
