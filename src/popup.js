function exportTree() {
  chrome.bookmarks.getTree((tree) => {
    const downloadUrl = "data:application/json;charset=utf-8," + encodeURIComponent(JSON.stringify(tree));
    chrome.downloads.download({
      url: downloadUrl,
      filename: "chrome.json",
    });
  });
}

document.getElementById('exportBtn').addEventListener('click', exportTree);
