document.addEventListener('DOMContentLoaded', () => {
    const launchButton = document.getElementById('launch-button');

    launchButton.addEventListener('click', () => {
        // Find the currently active tab
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const currentTab = tabs[0];
            if (currentTab) {
                // Disable the button to prevent multiple clicks
                launchButton.disabled = true;
                launchButton.textContent = 'Launched!';

                // Execute the main content script on the active tab
                chrome.scripting.executeScript({
                    target: { tabId: currentTab.id },
                    files: ['content.js']
                }).then(() => {
                    // Close the popup after the script is injected
                    setTimeout(() => window.close(), 300);
                }).catch(err => {
                    console.error("Failed to inject script:", err);
                    launchButton.textContent = 'Injection Failed!';
                });
            }
        });
    });
});
