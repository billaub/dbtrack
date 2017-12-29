document.addEventListener('DOMContentLoaded', function () {
    let save_button = document.getElementById("toto");
    console.log(save_button);
    let url = '';
    chrome.tabs.getSelected(null, function (tab) {
        url = tab.url;
        save_button.addEventListener('click', function () {
            insert = {
                ['track_' + url]: url
            };
            chrome.storage.sync.set(insert, function () {
                chrome.notifications.create("track_saved", {
                    title: "dbtrack",
                    iconUrl: "icon.png",
                    type: "basic",
                    message: decodeURIComponent(escape("Url enregistrée")),
                }, () => {
                });
            });
            chrome.storage.sync.get(null, function (obj) {
                console.log(obj);
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
  let open_button = document.getElementById("open_tracks");
  console.log(open_button);
  open_button.addEventListener('click', function() {
    chrome.tabs.create({url:"gestion.html"});
  });
});
