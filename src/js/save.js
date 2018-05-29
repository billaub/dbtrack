document.addEventListener('DOMContentLoaded', function() {
  var save_button = document.getElementById("toto");
  console.log(save_button);
  save_button.addEventListener('click', function() {
    var url = ''
      chrome.tabs.getSelected(null, function (tab) {
        url = tab.url;
        insert = {
          ['track_' + url]: url
        }
        chrome.storage.sync.set(insert, function () {console.log('done');});
        chrome.storage.sync.get(null, function (obj) {
          console.log(obj);
        });
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var open_button = document.getElementById("open_tracks");
  console.log(open_button);
  open_button.addEventListener('click', function() {
    chrome.tabs.create({url:"gestion.html"});
  });
});
