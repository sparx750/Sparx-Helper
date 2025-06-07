# Sparx Helper 🚀

An advanced, AI-powered helper script designed to automate reading comprehension tasks on the Sparx platform. It features a sleek, customizable user interface, manual and fully automatic modes, and leverages the Google Gemini API for intelligent question answering.
If you want new updates join here https://discord.gg/Dt3M5Y33
![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript)
![Status](https://img.shields.io/badge/Status-Active-4C1?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)

*(Imagine a screenshot of the sleek UI here)*
`![Sparx Helper UI in action](path/to/your/screenshot.png)`

## 🌟 Features

*   **🤖 AI-Powered Answering**: Uses the Google Gemini API to analyze passage text and accurately identify the correct multiple-choice answer.
*   **⚙️ Dual Modes**:
    *   **Manual Mode**: Control each step of the process with button clicks—copy the passage, then get the answer for each question.
    *   **Automatic Mode**: Let the script take over! It will automatically read passages, answer all associated questions, and navigate to the next passage until you stop it.
*   **🎨 Customizable Themes**: Personalize your experience with built-in themes (Default, Dark, Colourful) or easily create your own by modifying the CSS variables.
*   **🔒 Password Protected**: Access to the helper is protected by a password to prevent unauthorized use.
*   **🖱️ Draggable & Intuitive UI**: The main panel is draggable, so you can place it anywhere on the screen. It also includes an integrated "How-to-use" guide.
*   **🍪 Automatic Cookie-Banner Removal**: The script immediately finds and removes annoying cookie consent pop-ups for an uninterrupted experience.
*   **⌨️ Keyboard Shortcuts**: Start (`1`) and stop (`Esc`) the automatic mode with simple key presses for quick control.
*   **✨ Modern & Animated Interface**: A polished UI with smooth animations, gradients, and futuristic styling.

## 🛠️ Installation

You can run this script in two main ways. The bookmarklet method is highly recommended as it's the easiest to reuse.

### Method 1: Bookmarklet (Recommended)

1.  **Copy the Script**: Copy the entire JavaScript code provided.
2.  **Create a New Bookmark**: Right-click your browser's bookmarks bar and select "Add page..." or "Add bookmark...".
3.  **Name It**: Give the bookmark a memorable name, like `Sparx Helper`.
4.  **Paste the Code**: In the **URL** or **Address** field, type `javascript:` and then **paste the entire copied script immediately after it**.

    > **IMPORTANT**: The `javascript:` prefix is essential. The final URL should look like this:
    > ```javascript
    > javascript:(function () { /*...all your code here... */ })();
    > ```

5.  **Save**: Save the bookmark.

Now, whenever you are on a Sparx reading page, just click this bookmark to launch the helper.

### Method 2: Developer Console

1.  Navigate to the Sparx page where you want to use the helper.
2.  Open your browser's Developer Tools (press `F12`, or `Ctrl+Shift+I` on Windows/Linux, or `Cmd+Opt+I` on Mac).
3.  Go to the **Console** tab.
4.  Copy and paste the entire script into the console.
5.  Press `Enter`.

> *Note: This method is temporary. You will need to repeat this process every time you reload the page.*

## 🚀 How to Use

1.  **Launch**: Run the script using one of the installation methods above.
2.  **Enter Password**: A password prompt will appear. Enter `CHEATS` and click **UNLOCK**.
3.  The main **Sparx Helper** UI will appear on the right side of the screen.

### Manual Workflow

This gives you full control over each step.

1.  **Copy Page Text**: On a page with a new passage, click this button. The script will find the text between "Start reading here" and "Stop reading here", store it, and automatically click the necessary "I have read..." and "Yes, ask..." buttons.
2.  **Get Answer for Question**: Once a question appears, click this button. The script will use the stored passage and the current question to ask the AI for the answer.
    *   The answer will appear in the top-left card.
    *   The script will **automatically click the correct answer button** on the page for you.
3.  Repeat step 2 for all questions in the set.

### Automatic Workflow

Let the script do all the work.

1.  **Enable Automatic Mode**:
    *   Click the settings icon (`⚙️`) on the helper panel.
    *   Check the "Automatic Mode" checkbox.
    *   Click the **"Start Automatic"** button or press the `1` key.
2.  **Sit Back & Relax**: The script will now:
    *   Perform the initial passage setup.
    *   Process every question for that passage.
    *   Click the main "Next" button to load the next passage.
    *   Repeat the entire cycle.
3.  **Stop the Script**: To stop the process, click the **"Stop Automatic"** button or press the `Esc` key.

## ⚙️ Configuration & Theming

The settings panel allows for further customization.

*   **Settings Icon (`⚙️`)**: Opens the options panel.
*   **Automatic Mode**: Toggles the availability of the automatic mode controls.
*   **Custom Design**:
    *   Enable this to show the theme options.
    *   Select a theme (`Default`, `Dark`, `Colourful`).
    *   Click **"Save Theme"** to apply and save your choice for future sessions. Your preference is stored in your browser's `localStorage`.

## ⚠️ Important Notes & Disclaimers

*   **API Key**: This script contains a hardcoded Google Gemini API key. This key is public and may have usage limits or be disabled at any time. For reliable, long-term use, you should get your own free API key from [Google AI Studio](https://aistudio.google.com/app/apikey) and replace the one in the script:
    ```javascript
    // Find this line in the script and replace the key
    const geminiApiKey = 'YOUR_NEW_API_KEY_HERE';
    ```
*   **Academic Integrity**: This tool is a proof-of-concept and is intended for educational purposes only. Using this script to cheat on assignments is a violation of academic integrity policies and is strongly discouraged.
*   **Website Changes**: This script relies on specific selectors and text on the Sparx website (e.g., `button.sr_...`, "Start reading here"). If Sparx updates its website, the script may break. It may require updates to the selectors in the code to function again.
*   **Authorized Users**: The script has a hardcoded list of names (Jack Sigma, Alex yenzab etc) it checks for on the page before running. If none of these names are present, it will display an "Access Denied" message.
So this is what  you may need to do go to content.js and go to line 238 where you have to put your full name. TO GET ACESS.
