chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.browserAction.disable(tabId);
});

chrome.tabs.onActivated.addListener((activeInfo) =>  {
    let tabId = activeInfo.tabId;
    chrome.tabs.get(tabId, (tab) => {
        let url = tab.url;
        let substring = ['beatport', 'soundcloud', 'youtube'];
        for (let i = 0; i< substring.length; ++i)
            if (url.indexOf(substring[i]) !== -1)
                chrome.browserAction.enable(tabId);
            else
                chrome.browserAction.disable(tabId);
    });
});