(function () {
  chrome.contextMenus.create({
    title: "The name of the parent menu",
    id: "parent",
    contexts: ["selection"]
  });
})();
