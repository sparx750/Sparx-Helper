// This function is called when the user clicks the extension's icon.
chrome.action.onClicked.addListener((tab) => {
  // We can only inject into tabs that have a URL (e.g., not the "new tab" page).
  if (tab.url.startsWith("http://") || tab.url.startsWith("https://")) {
    
    // Use the scripting API to execute a file on the specified tab.
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js'] // The file to inject.
    }).then(() => {
      console.log("Sparx Helper content script injected successfully.");
    }).catch(err => {
      console.error("Failed to inject content script:", err);
    });

  }
});
