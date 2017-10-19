chrome.storage.local.get({'nightmode': true}, function(items) {
  if(items.nightmode) {
    setNightMode();
  }
});

function setNightMode() {
  var regex = /https:\/\/trello\.com\/(.*)/;

  if(regex.test(document.URL)) {
    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = chrome.extension.getURL('css/main.css');
    (document.head||document.documentElement).appendChild(style);
  }
}

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.text && (msg.text == "removeUserStyle")) {
        removeUserStyle();
    }
});
