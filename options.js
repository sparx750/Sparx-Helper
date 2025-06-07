document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('save-button');
    const apiKeyInput = document.getElementById('api-key');
    const statusMessage = document.getElementById('status-message');

    // Load any previously saved API key when the page opens
    chrome.storage.sync.get(['geminiApiKey'], (result) => {
        if (result.geminiApiKey) {
            apiKeyInput.value = result.geminiApiKey;
        }
    });

    // Save the new key when the button is clicked
    saveButton.addEventListener('click', () => {
        const apiKey = apiKeyInput.value;
        if (apiKey) {
            chrome.storage.sync.set({ geminiApiKey: apiKey }, () => {
                statusMessage.textContent = 'API Key saved successfully!';
                // Clear the message after a few seconds
                setTimeout(() => {
                    statusMessage.textContent = '';
                }, 3000);
            });
        } else {
            statusMessage.textContent = 'Please enter an API key.';
            statusMessage.style.color = '#f87171'; // Red for error
        }
    });
});
