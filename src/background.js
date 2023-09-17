chrome.contextMenus.onClicked.addListener(genericOnClick);

// A generic onclick callback function.
function genericOnClick(info) {
  chrome.bookmarks.create({
    title: info.selectionText || info.linkUrl,
    url: info.linkUrl
  })
}

chrome.runtime.onInstalled.addListener(function () {
  // Create one test item for each context type.
  chrome.contextMenus.create({
    id: 'bookmarkContextMenu',
    title: "Fly a paper airplane~",
    contexts: ['link']
  })
});

