/*global chrome*/
import React, { Component } from 'react';
import './Popup.css';

class Popup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      saveButtonActive: true
    }

    this.saveUrl = this.saveUrl.bind(this);
    this.openTab = this.openTab.bind(this);
    this.sendPopup = this.sendPopup.bind(this);
    this.checkUrl = this.checkUrl.bind(this);
    this.getPlatform = this.getPlatform.bind(this);
  }

  componentWillMount() {
    let p = this;
    chrome.tabs.getSelected(null, function (tab) {
      let url = tab.url;
      p.setState({ saveButtonActive: p.checkUrl(url) });
    });
  }

  checkUrl(url) {
    let regex = [
      ".*youtube.com/watch.*",
      ".*beatport.com/track.*",
      ".*soundcloud.com/.*"
    ];
    let re = new RegExp(regex.join("|"), "gi");
    let value = re.test(url);
    return value;
  }

  getPlatform(url) {
    let platforms = [
      "youtube",
      "beatport",
      "soundcloud"
    ];
    for (let i = 0; i < platforms.length; ++i)
      if (url.indexOf(platforms[i]) !== -1)
        return platforms[i];
    return "";
  }

  sendPopup(msg, icon) {
    chrome.notifications.create("track_saved", {
      title: "dbtrack",
      iconUrl: icon,
      type: "basic",
      message: msg,
    }, () => {
    });
  }

  saveUrl() {
    let p = this;
    chrome.tabs.getSelected(null, function (tab) {
      let insert = {
        ['track_' + tab.url]: {
          "url": tab.url,
          "title": tab.title,
          "platform": p.getPlatform(tab.url)
        }
      };

      if (window.localStorage.getItem("token") !== null) {
        fetch("http://localhost:8000/tracks/", {
          method: 'POST',
          headers: {
            "Authorization": "JWT " + window.localStorage.getItem("token"),
            "Content-Type": "application/json",
            'Accept': 'application/json',
          },
          body: JSON.stringify({ title: tab.title, url: tab.url, platform: p.getPlatform(tab.url) })
        });
      }

      chrome.storage.sync.set(insert, () => {
        if (chrome.runtime.error) {
          console.log("Runtime error.");
        }
        else {
          p.sendPopup("Url enregistrée", "icon.png");
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
          {this.state.saveButtonActive ? (
            <button className="save-button button-green" onClick={this.saveUrl}>Sauvegarder l'url</button>
          ) : (
              <button className="save-button button-grey">Sauvegarder l'url</button>
            )}
        </div>
        <div className="second">
          <button className="save-button button-blue" onClick={this.openTab}>Voir les urls sauvegardées</button>
        </div>
      </div>
    );
  }
}

export default Popup;
