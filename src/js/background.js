chrome.tabs.onUpdated.addListener(function(tabId, change, tab) {
    var url = tab.url;
    var substring = new Array('beatport', 'soundcloud', 'youtube');
    for (i = 0; i < 3; i++) {
        if (url.indexOf(substring[i]) !== -1) {
            chrome.pageAction.show(tabId);
        }
    }
});