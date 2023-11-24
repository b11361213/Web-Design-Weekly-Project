chrome.tabs.query({currentWindow: true, active: true, lastFocusedWindow: true}, function(tabs) {
    tabs.forEach(function(tab) {
        console.log('Tab ID: ', tab.id);
        console.log('Tab URL: ', tab.url);
    });
});