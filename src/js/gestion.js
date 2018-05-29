var tracks = [];
var i = 0;
chrome.storage.sync.get(null, (obj) => {
    keys = Object.keys(obj);
    keys.forEach((key) => {
        chrome.storage.sync.get(key, (obj) => {
            track = Object.values(obj)[0];
            console.log(track);
            tracks[i++] = track;
            var li = document.getElementById("tracks_saved");
            li.innerHTML += "<a target=\"_blank\" href=\"" + track + "\"><li >" + track + "</li>";
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var clear_tracks = document.getElementById("clear_tracks");
    console.log(clear_tracks);
    clear_tracks.addEventListener('click', function() {
        chrome.storage.sync.clear(() => { window.location.reload() });
    });
});