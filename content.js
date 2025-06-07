(function () {
    // --- THEME CSS VARIABLES (can be overridden by themes) ---
    const initialThemeVars = `
        :root {
            --helper-bg-gradient-start: rgba(14, 26, 48, 0.85);
            --helper-bg-gradient-end: rgba(14, 26, 48, 0.85);
            --helper-padding: 25px 30px 30px;
            --helper-border-radius: 20px;
            --helper-box-shadow1: rgba(31, 38, 135, 0.4);
            --helper-box-shadow2-color: #4f9eff;
            --helper-box-shadow-inset-color: rgba(79, 158, 255, 0.2);
            --helper-text-color: white;
            --helper-title-color: #4f9eff;
            --helper-title-shadow: #4f9eff;
            --helper-button-bg: #2563eb;
            --helper-button-text-color: white;
            --helper-button-shadow-color: rgba(37, 99, 235, 0.6);
            --helper-button-hover-bg-start: #2a78ff;
            --helper-button-hover-bg-end: #1e4ad9;
            --helper-button-hover-shadow-color: rgba(29, 78, 216, 0.8);
            --helper-status-bg: rgba(255,255,255,0.1);
            --helper-status-text-color: #a3cef1;
            --helper-status-shadow-inset-color: rgba(79,158,255,0.4);
            --helper-howto-bg-start: #112240;
            --helper-howto-bg-end: #1a2b56;
            --helper-howto-shadow1-color: #4f9eff;
            --helper-howto-shadow-inset-color: #2a56d1;
            --helper-howto-title-color: #a7c7ff;
            --helper-howto-text-color: #cbd5e1;
        }
    `;

    const style = document.createElement('style');
    style.innerHTML = `
        ${initialThemeVars}

        /* --- ADDED: Hides cookie banners immediately on script load --- */
        #cookiescript_injected_wrapper, #cookiescript_injected {
            display: none !important;
            visibility: hidden !important;
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideIn { from { transform: translateY(-50px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0px); } }
        @keyframes inputGlow { 0% { box-shadow: 0 0 5px rgba(79, 158, 255, 0.3); } 50% { box-shadow: 0 0 15px rgba(79, 158, 255, 0.8); } 100% { box-shadow: 0 0 5px rgba(79, 158, 255, 0.3); } }
        @keyframes buttonPulse { 0% { transform: scale(1); box-shadow: 0 4px 12px var(--helper-button-shadow-color); } 50% { transform: scale(1.02); box-shadow: 0 6px 20px var(--helper-button-hover-shadow-color), 0 0 25px var(--helper-box-shadow2-color); } 100% { transform: scale(1); box-shadow: 0 4px 12px var(--helper-button-shadow-color); } }
        @keyframes rotateScaleOut { from { transform: rotate(0deg) scale(1); opacity: 1; } to { transform: rotate(180deg) scale(0.5); opacity: 0; } }
        @keyframes shake { 0% { transform: translateX(0); } 25% { transform: translateX(-5px); } 50% { transform: translateX(5px); } 75% { transform: translateX(-5px); } 100% { transform: translateX(0); } }
        @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
        @keyframes slideOut { from { transform: translateY(0); opacity: 1; } to { transform: translateY(-50px); opacity: 0; } }

        .overlay-enter { animation: fadeIn 0.5s ease-out forwards; }
        .password-box-enter { animation: slideIn 0.6s ease-out forwards; animation-delay: 0.2s; }
        .lock-icon-float { animation: float 2s ease-in-out infinite; }
        .input-glow:focus { animation: inputGlow 1.5s infinite alternate; }
        .button-hover-effect { transition: all 0.3s ease; box-shadow: 0 4px 12px var(--helper-button-shadow-color); }
        .button-hover-effect:hover { transform: translateY(-3px); box-shadow: 0 8px 20px var(--helper-button-hover-shadow-color); }
        .exit-button-animation { transition: all 0.3s ease; }
        .exit-button-animation:hover { transform: rotate(90deg) scale(1.2); color: #ff5577 !important; }
        .pulse-animation { animation: buttonPulse 2s infinite ease-in-out; }
        .shake-animation { animation: shake 0.3s ease-in-out; }

        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: #1a1a2e; border-radius: 5px; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(145deg, #4f9eff, #2563eb); border-radius: 5px; }
        ::-webkit-scrollbar-thumb:hover { background: linear-gradient(145deg, #2563eb, #4f9eff); }

        #sparx-settings-panel {
            position: fixed; top: 50%; left: 50%;
            transform: translate(-50%, -50%) scale(0.8);
            z-index: 100001;
            background: linear-gradient(145deg, var(--helper-bg-gradient-start), var(--helper-bg-gradient-end));
            padding: 25px; border-radius: 15px; width: 380px;
            color: var(--helper-text-color);
            box-shadow: 0 10px 30px rgba(0,0,0,0.3), 0 0 20px var(--helper-box-shadow2-color);
            backdrop-filter: blur(10px);
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            opacity: 0; transition: opacity 0.3s ease, transform 0.3s ease;
            display: none;
        }
        #sparx-settings-panel.visible { display: block; opacity: 1; transform: translate(-50%, -50%) scale(1); }
        #sparx-settings-panel h2 { color: var(--helper-title-color); text-shadow: 0 0 8px var(--helper-title-shadow); margin-top: 0; margin-bottom: 20px; text-align: center; font-size: 22px; }
        #sparx-settings-panel label { display: block; margin-bottom: 10px; font-size: 16px; color: var(--helper-text-color); }
        #sparx-settings-panel input[type="checkbox"] { margin-right: 8px; accent-color: var(--helper-title-color); }
        #sparx-settings-panel .theme-options label { display: inline-block; margin-right: 15px; }
        #sparx-settings-panel .theme-options input[type="radio"] { margin-right: 5px; }
        #sparx-settings-panel button {
            width: auto; padding: 10px 20px; background: var(--helper-button-bg); color: var(--helper-button-text-color);
            border: none; border-radius: 8px; font-weight: 600; cursor: pointer; margin-top: 15px;
             transition: all 0.3s ease;
        }
         #sparx-settings-panel button:hover {
            background: linear-gradient(45deg, var(--helper-button-hover-bg-start), var(--helper-button-hover-bg-end));
            transform: translateY(-2px);
        }
        .settings-section { margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .settings-section:last-child { border-bottom: none; margin-bottom: 0; }
        #automatic-controls-container { margin-top: 10px; text-align: center; }
        #automatic-controls-container button { font-size: 15px; padding: 10px 15px; }

        .settings-icon { font-size: 20px !important; font-weight: bold; cursor: pointer; color: var(--helper-title-color) !important; transition: transform 0.3s ease; padding: 0 5px; }
        .settings-icon:hover { transform: rotate(90deg); }
    `;
    if (document.head) {
        document.head.appendChild(style);
    } else {
        document.addEventListener('DOMContentLoaded', () => document.head.appendChild(style));
    }

    // --- START: ADDED CODE TO PERMANENTLY REMOVE COOKIE BANNERS ---
    const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
            if (mutation.type !== 'childList') continue;
            for (const node of mutation.addedNodes) {
                if (node.nodeType === 1) { // Check if it's an element node
                    const targetNode = node.id === 'cookiescript_injected_wrapper' || node.id === 'cookiescript_injected' ? node : node.querySelector('#cookiescript_injected_wrapper, #cookiescript_injected');
                    if (targetNode) {
                        targetNode.remove();
                        console.log(`Sparx Helper: Intercepted and removed cookie banner #${targetNode.id}.`);
                    }
                }
            }
        }
    });
    // Start observing the entire document to catch the banner whenever it's added
    observer.observe(document.documentElement, { childList: true, subtree: true });

    // Also run a check on script start in case the banner is already present
    document.querySelectorAll('#cookiescript_injected_wrapper, #cookiescript_injected').forEach(el => {
        el.remove();
        console.log(`Sparx Helper: Found and removed existing cookie banner #${el.id}.`);
    });
    // --- END: ADDED CODE ---


    let currentPassageText = "";
    let isAutomaticModeRunning = false;
    let currentTheme = "default";

    const themes = {
        default: {},
        dark: {
            '--helper-bg-gradient-start': 'rgba(14, 26, 48, 0.9)',
            '--helper-bg-gradient-end': 'rgba(10, 20, 40, 0.9)',
            '--helper-title-color': '#4f9eff',
            '--helper-button-bg': '#2563eb',
            '--helper-status-text-color': '#a3cef1',
        },
        colourful: {
            '--helper-bg-gradient-start': 'rgba(255, 165, 0, 0.85)',
            '--helper-bg-gradient-end': 'rgba(255, 140, 0, 0.85)',
            '--helper-box-shadow1': 'rgba(0, 0, 0, 0.2)',
            '--helper-box-shadow2-color': '#007bff',
            '--helper-box-shadow-inset-color': 'rgba(0, 123, 255, 0.1)',
            '--helper-text-color': '#212529',
            '--helper-title-color': '#0056b3',
            '--helper-title-shadow': '#007bff',
            '--helper-button-bg': '#007bff',
            '--helper-button-text-color': 'white',
            '--helper-button-shadow-color': 'rgba(0, 123, 255, 0.4)',
            '--helper-button-hover-bg-start': '#0056b3',
            '--helper-button-hover-bg-end': '#004085',
            '--helper-button-hover-shadow-color': 'rgba(0, 64, 133, 0.6)',
            '--helper-status-bg': 'rgba(0,0,0,0.05)',
            '--helper-status-text-color': '#004085',
            '--helper-status-shadow-inset-color': 'rgba(0,123,255,0.2)',
            '--helper-howto-bg-start': '#ffe8cc',
            '--helper-howto-bg-end': '#ffdcb2',
            '--helper-howto-shadow1-color': '#007bff',
            '--helper-howto-shadow-inset-color': '#0056b3',
            '--helper-howto-title-color': '#0056b3',
            '--helper-howto-text-color': '#212529',
        }
    };

    function applyTheme(themeName) {
        const root = document.documentElement;
        const themeToApply = themes[themeName] || themes.default;
        currentTheme = themeName;
        const defaultThemeForReset = initialThemeVars.match(/--[\w-]+:.*?;/g);
        if (defaultThemeForReset) {
            defaultThemeForReset.forEach(prop => {
                const [key, ] = prop.split(':');
                const initialMatch = new RegExp(`${key.trim()}:\\s*(.*?);`).exec(initialThemeVars);
                if(initialMatch && initialMatch[1]){ root.style.setProperty(key.trim(), initialMatch[1].trim()); }
            });
        }
        for (const [key, value] of Object.entries(themeToApply)) { root.style.setProperty(key, value); }
        localStorage.setItem('sparxHelperTheme', themeName);
    }

    function loadSavedTheme() {
        const savedTheme = localStorage.getItem('sparxHelperTheme');
        applyTheme((savedTheme && themes[savedTheme]) ? savedTheme : 'default');
    }

    function createPasswordUI() {
        const overlay = document.createElement('div');
        overlay.style.cssText = `position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(8px); z-index: 99999; display: flex; justify-content: center; align-items: center; opacity: 0;`;
        overlay.classList.add('overlay-enter');
        const passwordBox = document.createElement('div');
        passwordBox.style.cssText = `background: linear-gradient(145deg, #1a1a2e, #16213e); padding: 30px; border-radius: 20px; box-shadow: 0 0 30px rgba(79, 158, 255, 0.3), inset 0 0 15px rgba(79, 158, 255, 0.1); border: 1px solid rgba(79, 158, 255, 0.2); text-align: center; width: 320px; transform: translateY(-50px); opacity: 0; position: relative;`;
        passwordBox.classList.add('password-box-enter');
        const titleEl = document.createElement('div');
        titleEl.innerHTML = '<span class="lock-icon-float">🔒</span> ENTER PASSWORD';
        titleEl.style.cssText = `color: #4f9eff; font-size: 24px; font-weight: bold; margin-bottom: 20px; text-shadow: 0 0 10px rgba(79, 158, 255, 0.5); display: flex; align-items: center; justify-content: center; gap: 10px;`;
        const input = document.createElement('input');
        input.type = 'password'; input.placeholder = 'Enter password...';
        input.style.cssText = `background: rgba(255,255,255,0.1); border: 2px solid rgba(79,158,255,0.3); border-radius: 10px; padding: 10px 20px; color: white; font-size: 16px; margin-bottom: 15px; width: 100%; box-sizing: border-box; outline: none; transition: border-color 0.3s ease, box-shadow 0.3s ease;`;
        input.classList.add('input-glow');
        input.onfocus = () => { input.style.borderColor = '#4f9eff'; input.style.boxShadow = '0 0 10px rgba(79, 158, 255, 0.8)'; };
        input.onblur = () => { input.style.borderColor = 'rgba(79,158,255,0.3)'; input.style.boxShadow = 'none'; };
        const submitBtn = document.createElement('button');
        submitBtn.innerText = 'UNLOCK';
        submitBtn.style.cssText = `background: linear-gradient(45deg, #4f9eff, #2563eb); color: white; border: none; padding: 12px 30px; border-radius: 12px; font-weight: bold; cursor: pointer; font-size: 16px; transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(37, 99, 235, 0.6);`;
        submitBtn.classList.add('button-hover-effect');
        submitBtn.onmouseenter = () => { submitBtn.style.background = 'linear-gradient(45deg, #2a78ff, #1e4ad9)'; submitBtn.style.transform = 'translateY(-3px)'; submitBtn.style.boxShadow = '0 6px 20px rgba(29, 78, 216, 0.8)'; };
        submitBtn.onmouseleave = () => { submitBtn.style.background = 'linear-gradient(45deg, #4f9eff, #2563eb)'; submitBtn.style.transform = 'translateY(0)'; submitBtn.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.6)'; };
        passwordBox.appendChild(titleEl); passwordBox.appendChild(input); passwordBox.appendChild(document.createElement('br')); passwordBox.appendChild(submitBtn);
        overlay.appendChild(passwordBox); document.body.appendChild(overlay);
        return new Promise((resolve) => {
            submitBtn.onclick = () => {
                if (input.value === 'CHEATS') {
                    overlay.style.animation = 'fadeOut 0.5s ease-out forwards'; passwordBox.style.animation = 'slideOut 0.6s ease-out forwards';
                    setTimeout(() => overlay.remove(), 600); resolve(true);
                } else {
                    input.value = ''; input.placeholder = 'Incorrect password!'; input.style.borderColor = '#e11d48'; input.classList.add('shake-animation');
                    setTimeout(() => { input.classList.remove('shake-animation'); input.placeholder = 'Enter password...'; input.style.borderColor = 'rgba(79,158,255,0.3)'; }, 500);
                }};
            input.addEventListener('keypress', (e) => { if (e.key === 'Enter') submitBtn.click(); });
        });
    }

    function checkAccess() {
        const pageContent = document.body.innerText;
        // --- ADDED "Sayid Baana" ---
        const authorizedUsers = ['YOUR NAME','FRIEND NAME','FRIEND NAME];
        return authorizedUsers.some(user => pageContent.includes(user));
    }

    function createAnswerCard() {
        const card = document.createElement('div'); card.id = 'answer-card';
        card.style.cssText = `position: fixed; top: 20px; left: 20px; background: rgba(26, 35, 126, 0.85); padding: 20px; border-radius: 15px; width: 320px; color: white; box-shadow: 0 8px 24px rgba(31, 38, 135, 0.6), 0 0 20px rgba(79, 158, 255, 0.5); transform: translateY(-120%); transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease; z-index: 10000; backdrop-filter: blur(10px); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; border: 1px solid rgba(79, 158, 255, 0.3);`;
        const titleEl = document.createElement('div');
        titleEl.style.cssText = `font-size: 20px; font-weight: 700; margin-bottom: 12px; border-bottom: 2px solid rgba(255,255,255,0.25); padding-bottom: 6px; letter-spacing: 0.05em; text-shadow: 0 0 8px #4f9eff;`;
        titleEl.innerText = 'Answer';
        const timerEl = document.createElement('div'); timerEl.id = 'answer-timer';
        timerEl.style.cssText = `font-size: 14px; margin-top: 12px; color: #90caf9; font-weight: 600; text-align: right; user-select: none;`;
        const contentEl = document.createElement('div'); contentEl.id = 'answer-content';
        contentEl.style.cssText = `font-size: 16px; line-height: 1.4; min-height: 40px; user-select: text;`;
        card.appendChild(titleEl); card.appendChild(contentEl); card.appendChild(timerEl);
        document.body.appendChild(card);
        setTimeout(() => { card.style.transform = 'translateY(0)'; card.style.boxShadow = '0 8px 24px rgba(31, 38, 135, 0.6), 0 0 30px rgba(79, 158, 255, 0.8)'; }, 100);
        return card;
    }

    async function fetchAnswer(passage, question) {
        const geminiApiKey = 'AIzaSyBfx6M9C5KZiMWr1SYxirkA774DVlvYeWs';
        if (geminiApiKey === 'YOUR_GOOGLE_GEMINI_API_KEY_HERE' || geminiApiKey === 'AIzaSyDDJN8uRliFCL7Gty_r8df4Rpfc-moLlzs') {
            const errorMsg = "API KEY ERROR: Edit script to add your Gemini key."; updateAnswerCard(errorMsg); return errorMsg;
        }
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${geminiApiKey}`;
        const prompt = `\nYou are an advanced AI assistant. Your task is to meticulously analyze the provided text and fully comprehend its context and details. After your analysis, I will provide you with a multiple-choice question based on this text. Your goal is to identify the single best correct answer from the options presented in the question. You MUST respond ONLY with the full text of the correct option. Do not add any other words, letters (like A, B, C, D unless they are part of the option itself), or explanations. If the answer is not clearly stated or cannot be definitively found within the provided text, you MUST respond with the exact phrase: not in story\n\nPassage Text:\n---\n${passage}\n---\n\nQuestion:\n---\n${question}\n---\n\nYour Answer (exact text of the correct option OR "not in story"):`;
        try {
            const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json', }, body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { temperature: 0.3, maxOutputTokens: 150, }, safetySettings: [ { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" }, { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" }, { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" }, { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" }, ], }), });
            if (!response.ok) { const errorData = await response.json(); console.error('Gemini API Error:', response.status, errorData); let eMsg = `API Error: ${response.status}${errorData.error?.message ? ` - ${errorData.error.message}` : ''}`; if (errorData.error?.message?.toLowerCase().includes("api key not valid")) eMsg = "API KEY ERROR: Key not valid."; return eMsg; }
            const data = await response.json();
            if (data.candidates?.[0]?.content?.parts?.[0]?.text) return data.candidates[0].content.parts[0].text.trim();
            if (data.promptFeedback?.blockReason) { console.warn('Gemini API Blocked:', data.promptFeedback.blockReason); return `Content blocked: ${data.promptFeedback.blockReason}.`; }
            console.warn("Gemini API: No valid candidates/block reason.", data); return "not in story";
        } catch (error) { console.error('Fetch error:', error); return "Error fetching answer."; }
    }

    function updateAnswerCard(answer) {
        const content = document.getElementById('answer-content');
        if (content) { const a = document.createElement('a'); a.innerText = answer; content.innerHTML = `<strong>Answer:</strong> ${a.innerHTML}`; }
        if (isAutomaticModeRunning) return;
        if (!answer.toLowerCase().includes("error") && !answer.toLowerCase().includes("api key") && !answer.toLowerCase().includes("not in story")) {
            autoClickAnswerButton(answer, false);
        } else if (answer.toLowerCase() === "not in story") {
            autoClickAnswerButton(answer, false);
        }
    }

    function autoClickAnswerButton(answerText, isAutomatic = false) {
        const statusBox = document.getElementById('sparx-status-box');
        let answerButtonClicked = false;

        if (!answerText || answerText.toLowerCase().includes("error") || answerText.toLowerCase().includes("api key")) {
            if (isAutomatic && statusBox) { statusBox.innerText = `AI Error: ${answerText}. Stopping.`; isAutomaticModeRunning = false; updateAutomaticControls(); }
            return false;
        }

        if (answerText.toLowerCase() === "not in story") {
            console.log("Sparx Helper: AI response is 'not in story'. Looking for corresponding button.");
            document.querySelectorAll('button').forEach(btn => {
                if (btn.innerText.trim().toLowerCase() === "not in story") {
                    if (!answerButtonClicked) {
                        btn.click(); btn.classList.add('pulse-animation'); answerButtonClicked = true;
                        console.log("Sparx Helper: Clicked page button 'not in story'.");
                        setTimeout(() => btn.classList.remove('pulse-animation'), 500);
                    }
                }
            });
            if (!answerButtonClicked) {
                console.warn("Sparx Helper: 'not in story' button not found on page, though AI suggested it.");
                if (statusBox) statusBox.innerText = "AI: 'not in story', button not found.";
            }
        } else {
            document.querySelectorAll('button').forEach(btn => {
                if (btn.innerText.trim().toLowerCase() === answerText.toLowerCase()) {
                     if (!answerButtonClicked) {
                        btn.click(); btn.classList.add('pulse-animation'); answerButtonClicked = true;
                        console.log(`Sparx Helper: Clicked answer button: "${answerText}"`);
                        setTimeout(() => btn.classList.remove('pulse-animation'), 500);
                    }
                }
            });
            if (!answerButtonClicked) {
                console.warn(`Sparx Helper: Answer button for "${answerText}" not found.`);
                if (statusBox) statusBox.innerText = `Answer "${answerText.substring(0,20)}..." btn not found.`;
            }
        }
        return answerButtonClicked;
    }

    function clickContinueButton(isAutomatic = false) {
        let clicked = false;
        const statusBox = document.getElementById('sparx-status-box');
        const mainNextButtonSelector = 'button.sr_8fd9e2f8[data-test-id="next-continue-button"]';

        const selectorsToTry = isAutomatic ? [
            'button[data-test-id="continue-button"]', 'button[data-test-id*="next-question"]',
            'button' // General fallback, will be filtered
        ] : ['button'];


        for (const selector of selectorsToTry) {
            if (clicked) break;
            document.querySelectorAll(selector).forEach(btn => {
                if (clicked) return;
                if (btn.matches(mainNextButtonSelector)) return; // Explicitly skip the main "Next" (passage) button

                const btnText = btn.innerText.trim().toLowerCase();
                // --- MODIFIED CONDITION TO AVOID CLICKING THE COOKIE SETTINGS BUTTON ---
                if ( (btnText === 'continue' || (isAutomatic && (btnText.includes('next') || btnText.includes('ok') || btnText.includes('got it') || btnText.includes('submit') ))) && !btnText.includes('cookie settings')) {
                     btn.click(); console.log(`Sparx Helper: Clicked "Continue/Next/OK/Submit" button: "${btn.innerText.trim()}"`);
                     btn.classList.add('pulse-animation'); setTimeout(() => btn.classList.remove('pulse-animation'), 500); clicked = true;
                }
            });
        }
        if (!clicked) {
            console.warn('Sparx Helper: Could not find and click a "Continue" (after answer) button.');
            if (isAutomatic && statusBox) {
                // Don't stop auto mode here, let the main loop decide based on finding next question
            }
        }
        return clicked;
    }

    async function performInitialPassageSetup() {
        const statusBox = document.getElementById('sparx-status-box');
        if (!statusBox) { console.error("Status box not found!"); return { success: false, reason: "internal_error_statusbox" };}
        statusBox.innerText = 'Step 1: Extracting passage...';
        currentPassageText = "";
        const fullPageText = document.body.innerText;
        const startMarker = "Start reading here";
        const stopMarker = "Stop reading here";
        const readButtonText = "I have read up to here";
        const yesAskQuestionsButtonSelector = 'button.sr_8545bf68.sr_b38acd4e.sr_91cee2bc';

        const startIndex = fullPageText.indexOf(startMarker);
        if (startIndex === -1) { statusBox.innerText = `Error: "${startMarker}" not found.`; return { success: false, reason: "start_marker_not_found" }; }
        const textAfterStart = fullPageText.substring(startIndex + startMarker.length);
        const stopIndexInSubstring = textAfterStart.indexOf(stopMarker);
        if (stopIndexInSubstring === -1) { statusBox.innerText = `Error: "${stopMarker}" not found.`; return { success: false, reason: "stop_marker_not_found" }; }
        currentPassageText = textAfterStart.substring(0, stopIndexInSubstring).trim();
        if (!currentPassageText) { statusBox.innerText = 'Error: No text between markers.'; return { success: false, reason: "no_passage_text" }; }
        console.log("Sparx Helper: Passage Stored:", currentPassageText.substring(0, 100) + "...");
        statusBox.innerText = 'Passage stored. Clicking buttons...';

        let readButtonClicked = false;
        document.querySelectorAll('button').forEach(btn => { if (btn.innerText.trim().toLowerCase() === readButtonText.toLowerCase()) { btn.click(); readButtonClicked = true; console.log(`Sparx Helper: Clicked "${readButtonText}" button.`); }});
        if (!readButtonClicked) console.warn(`Sparx Helper: Button "${readButtonText}" not found.`);
        await new Promise(resolve => setTimeout(resolve, 300));

        const yesAskButton = document.querySelector(yesAskQuestionsButtonSelector);
        if (yesAskButton) { yesAskButton.click(); console.log('Sparx Helper: Clicked "Yes, ask me the questions." button.'); statusBox.innerText = 'Initial setup complete. Ready for questions.'; }
        else { console.warn('Sparx Helper: "Yes, ask me the questions." button not found.'); statusBox.innerText = 'Passage stored. "Yes, ask..." button not found.'; }
        await new Promise(resolve => setTimeout(resolve, 500));
        return { success: true };
    }

    async function processSingleQuestion() {
        const statusBox = document.getElementById('sparx-status-box');
        if (!statusBox) { return { success: false, reason: "internal_error_statusbox", critical: true };}
        if (!currentPassageText) { statusBox.innerText = 'Error: No passage text. Perform initial setup.'; return { success: false, reason: "no_passage_setup", critical: true }; }

        statusBox.innerText = 'Finding question...';
        const questionText = (() => {
            const elementsToSearch = document.querySelectorAll('div, p, section');
            for (let el of elementsToSearch) {
                const txt = el.innerText.trim();
                if (el.offsetWidth > 0 || el.offsetHeight > 0 || el.getClientRects().length > 0) {
                    if (txt.includes('?') && txt.length > 30 && txt.length < 2500 && (/(?:[A-Da-d][\.\)]|[1-4][\.\)])\s/.test(txt) || /Question\s*\d*:?/i.test(txt) || el.closest('[class*="question-container"], [data-test-id*="question"]'))) {
                        console.log("Sparx Helper: Potential question block found:", txt.substring(0,100)); return txt;
                    }}
            } return '';
        })();

        if (!questionText) { console.log("Sparx Helper: No more questions found for the current passage."); return { success: false, reason: "no_question_found" }; }
        console.log("Sparx Helper: Question Found:", questionText.substring(0,150)+"...");
        statusBox.innerText = 'Fetching answer from AI...';

        const answer = await fetchAnswer(currentPassageText, questionText);
        // updateAnswerCard(answer); // Only update the card, don't auto-click from here in auto mode

        // Update the answer card display
        const answerCardContent = document.getElementById('answer-content');
        if (answerCardContent) { const a = document.createElement('a'); a.innerText = answer; answerCardContent.innerHTML = `<strong>Answer:</strong> ${a.innerHTML}`; }


        if (answer.toLowerCase().includes("error") || answer.toLowerCase().includes("api key")) {
            statusBox.innerText = answer; return { success: false, reason: "api_error", critical: true };
        }

        const answerActionTaken = autoClickAnswerButton(answer, true);

        if (!answerActionTaken && answer.toLowerCase() !== "not in story") { statusBox.innerText = `AI gave answer, but button "${answer.substring(0,30)}..." not found.`; }
        else if (answerActionTaken) { statusBox.innerText = `Answer "${answer.substring(0,30)}..." processed.`; }
        else if (answer.toLowerCase() === "not in story" && !answerActionTaken) { statusBox.innerText = "AI said 'not in story', no corresponding button on page."; }

        await new Promise(resolve => setTimeout(resolve, 700));
        clickContinueButton(true); // Attempt to click continue after answering
        await new Promise(resolve => setTimeout(resolve, 1500));
        return { success: true, answer: answer };
    }

    async function runAutomaticMode() {
        if (!isAutomaticModeRunning) return;
        const statusBox = document.getElementById('sparx-status-box');
        if (!statusBox) { isAutomaticModeRunning = false; updateAutomaticControls(); return; }
        statusBox.innerText = 'Automatic Mode: Starting new cycle...';
        updateAutomaticControls();

        const setupResult = await performInitialPassageSetup();
        if (!isAutomaticModeRunning || !setupResult.success) {
            statusBox.innerText = `Automatic: Setup failed - ${setupResult.reason || 'stopped'}. Stopping.`;
            isAutomaticModeRunning = false; updateAutomaticControls(); return;
        }

        let questionsProcessedThisPassage = 0;
        while (isAutomaticModeRunning) {
            statusBox.innerText = `Automatic: Processing question ${questionsProcessedThisPassage + 1}...`;
            const questionResult = await processSingleQuestion();
            if (!isAutomaticModeRunning) { statusBox.innerText = 'Automatic mode stopped.'; updateAutomaticControls(); break; }
            if (questionResult.reason === "no_question_found") { statusBox.innerText = 'Automatic: No more questions for this passage.'; break; }
            if (questionResult.critical || !questionResult.success) {
                statusBox.innerText = `Automatic: Error - ${questionResult.reason}. Stopping.`;
                isAutomaticModeRunning = false; updateAutomaticControls(); break;
            }
            questionsProcessedThisPassage++;
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

        if (isAutomaticModeRunning) {
            statusBox.innerText = 'Automatic: Attempting to click main "Next"...';
            const nextButtonSelector = 'button.sr_8fd9e2f8[data-test-id="next-continue-button"]';
            const nextButton = document.querySelector(nextButtonSelector);
            if (nextButton) {
                nextButton.click(); console.log('Sparx Helper: Clicked main "Next" button.');
                statusBox.innerText = 'Automatic: Main "Next" clicked. Waiting...';
                await new Promise(resolve => setTimeout(resolve, 3000));
                if (isAutomaticModeRunning) runAutomaticMode();
                else { statusBox.innerText = 'Automatic mode stopped.'; updateAutomaticControls(); }
            } else {
                statusBox.innerText = 'Automatic: Main "Next" button not found. Stopping.';
                console.log('Sparx Helper: Main "Next" button not found. End of automatic sequence.');
                isAutomaticModeRunning = false; updateAutomaticControls();
            }
        } else { statusBox.innerText = 'Automatic mode stopped.'; updateAutomaticControls(); }
    }

    function updateAutomaticControls() {
        const controlsContainer = document.getElementById('automatic-controls-container');
        if (!controlsContainer) return;
        const isChecked = document.getElementById('automatic-mode-checkbox')?.checked;
        if (isChecked) {
            controlsContainer.style.display = 'block';
            if (isAutomaticModeRunning) {
                controlsContainer.innerHTML = `<button id="stop-automatic-btn">Stop Automatic (Esc)</button>`;
                const stopBtn = document.getElementById('stop-automatic-btn');
                if(stopBtn) stopBtn.onclick = () => { isAutomaticModeRunning = false; document.getElementById('sparx-status-box').innerText = 'Automatic mode stopping...'; updateAutomaticControls(); };
            } else {
                controlsContainer.innerHTML = `<button id="start-automatic-btn">Start Automatic (Press 1)</button>`;
                const startBtn = document.getElementById('start-automatic-btn');
                if(startBtn) startBtn.onclick = () => { isAutomaticModeRunning = true; updateAutomaticControls(); runAutomaticMode(); };
            }
        } else { controlsContainer.style.display = 'none'; isAutomaticModeRunning = false; }
    }

    function createSettingsPanel() {
        let panel = document.getElementById('sparx-settings-panel');
        if (panel) { panel.classList.add('visible'); return panel; }
        panel = document.createElement('div'); panel.id = 'sparx-settings-panel';
        panel.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;"><h2>Sparx Helper Options</h2><div id="close-settings-btn" style="font-size: 24px; cursor: pointer; color: #e11d48;">×</div></div>
            <div class="settings-section"><label><input type="checkbox" id="automatic-mode-checkbox"> Automatic Mode</label><div id="automatic-controls-container" style="display: none;"></div></div>
            <div class="settings-section"><label><input type="checkbox" id="custom-design-checkbox"> Custom Design</label><div id="theme-options-container" style="display: none; margin-top: 10px;" class="theme-options"><label><input type="radio" name="theme" value="default"> Default</label><label><input type="radio" name="theme" value="dark"> Dark</label><label><input type="radio" name="theme" value="colourful"> Colourful</label><button id="save-theme-btn">Save Theme</button></div></div>`;
        document.body.appendChild(panel); panel.classList.add('visible');
        document.getElementById('close-settings-btn').onclick = () => panel.classList.remove('visible');
        const autoCheckbox = document.getElementById('automatic-mode-checkbox');
        autoCheckbox.onchange = () => { updateAutomaticControls(); localStorage.setItem('sparxHelperAutomaticMode', autoCheckbox.checked.toString()); };
        if (localStorage.getItem('sparxHelperAutomaticMode') === 'true') autoCheckbox.checked = true;
        updateAutomaticControls();
        const designCheckbox = document.getElementById('custom-design-checkbox');
        const themeOptionsContainer = document.getElementById('theme-options-container');
        designCheckbox.onchange = () => { themeOptionsContainer.style.display = designCheckbox.checked ? 'block' : 'none'; localStorage.setItem('sparxHelperCustomDesign', designCheckbox.checked.toString()); };
        if (localStorage.getItem('sparxHelperCustomDesign') === 'true') { designCheckbox.checked = true; themeOptionsContainer.style.display = 'block'; }
        document.getElementById('save-theme-btn').onclick = () => { const selTheme = document.querySelector('input[name="theme"]:checked'); if (selTheme) { applyTheme(selTheme.value); document.getElementById('sparx-status-box').innerText = `Theme '${selTheme.value}' applied.`; }};
        const curThemeRadio = panel.querySelector(`input[name="theme"][value="${currentTheme}"]`); if (curThemeRadio) curThemeRadio.checked = true;
        return panel;
    }

    function createMainUI() {
        const container = document.createElement('div'); container.id = 'sparx-helper';
        container.style.cssText = `position: fixed; top: 50%; right: 20px; transform: translateY(-50%); z-index: 100000; background: linear-gradient(145deg, var(--helper-bg-gradient-start), var(--helper-bg-gradient-end)); padding: var(--helper-padding); border-radius: var(--helper-border-radius); width: 340px; color: var(--helper-text-color); box-shadow: 0 6px 20px var(--helper-box-shadow1), 0 0 25px var(--helper-box-shadow2-color), inset 0 0 15px var(--helper-box-shadow-inset-color); backdrop-filter: blur(12px); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; user-select: none; cursor: grab; transition: box-shadow 0.3s ease, opacity 0.5s ease-out, background 0.3s ease; opacity: 0;`;
        let isDragging = false, dOffsetX = 0, dOffsetY = 0;
        container.onmousedown = (e) => { if (e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT' || e.target.closest('.how-to-use-wrapper') || e.target.closest('.settings-icon')) return; isDragging = true; dOffsetX = e.clientX - container.getBoundingClientRect().left; dOffsetY = e.clientY - container.getBoundingClientRect().top; container.style.cursor = 'grabbing'; e.preventDefault(); };
        window.onmouseup = () => { if (isDragging) { isDragging = false; container.style.cursor = 'grab'; }};
        window.onmousemove = (e) => { if (!isDragging) return; let nX = e.clientX - dOffsetX, nY = e.clientY - dOffsetY; const p = 10, r = container.getBoundingClientRect(); nX = Math.min(Math.max(p, nX), window.innerWidth - r.width - p); nY = Math.min(Math.max(p, nY), window.innerHeight - r.height - p); container.style.right = 'auto'; container.style.left = nX + 'px'; container.style.top = nY + 'px'; container.style.transform = 'none'; };
        const header = document.createElement('div'); header.style.cssText = `display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; user-select: none;`;
        const titleEl = document.createElement('div'); titleEl.innerText = 'sparx helper'; titleEl.style.cssText = `font-size: 24px; font-weight: 700; color: var(--helper-title-color); letter-spacing: 0.05em; text-shadow: 0 0 10px var(--helper-title-shadow);`;
        const settingsBtn = document.createElement('div'); settingsBtn.innerHTML = '⚙️'; settingsBtn.title = 'Settings'; settingsBtn.className = 'settings-icon'; settingsBtn.onclick = () => createSettingsPanel();
        const exitBtn = document.createElement('div'); exitBtn.innerHTML = '×'; exitBtn.title = 'Close'; exitBtn.className = 'exit-button-animation'; Object.assign(exitBtn.style, {color: '#e11d48', fontSize: '28px', fontWeight: '900', cursor: 'pointer', lineHeight: '1'});
        exitBtn.onclick = () => { container.style.animation = 'rotateScaleOut 0.5s ease-out forwards'; const ac = document.getElementById('answer-card'); if (ac) ac.style.animation = 'slideOut 0.5s ease-out forwards'; isAutomaticModeRunning = false; setTimeout(() => { container.remove(); if (ac) ac.remove(); const sp = document.getElementById('sparx-settings-panel'); if(sp) sp.remove(); }, 500); };
        const headerControls = document.createElement('div'); headerControls.style.display = 'flex'; headerControls.style.alignItems = 'center'; headerControls.appendChild(settingsBtn); headerControls.appendChild(exitBtn);
        header.appendChild(titleEl); header.appendChild(headerControls);
        function createButton(text) { const btn = document.createElement('button'); btn.innerText = text; btn.style.cssText = `width: 100%; margin: 8px 0; padding: 14px; background: var(--helper-button-bg); color: var(--helper-button-text-color); border: none; border-radius: 12px; font-weight: 700; font-size: 16px; cursor: pointer; box-shadow: 0 4px 12px var(--helper-button-shadow-color); transition: all 0.3s ease; user-select: none;`; btn.classList.add('button-hover-effect'); btn.onmouseenter = () => btn.style.background = `linear-gradient(45deg, var(--helper-button-hover-bg-start), var(--helper-button-hover-bg-end))`; btn.onmouseleave = () => btn.style.background = `var(--helper-button-bg)`; return btn; }
        const btnCopyPageText = createButton('Copy Page Text');
        const btnGetAnswer = createButton('Get Answer for Question');
        const statusBox = document.createElement('div'); statusBox.id = 'sparx-status-box'; statusBox.innerText = 'Ready!'; statusBox.style.cssText = `margin-top: 20px; padding: 14px; background: var(--helper-status-bg); border-radius: 12px; text-align: center; font-size: 15px; font-weight: 600; color: var(--helper-status-text-color); user-select: text; min-height: 40px; line-height: 1.4; box-shadow: inset 0 0 15px var(--helper-status-shadow-inset-color); transition: box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease;`;
        const howToUseWrapper = document.createElement('div'); howToUseWrapper.className = 'how-to-use-wrapper'; howToUseWrapper.style.cssText = `margin-top: 24px; border-radius: 14px; background: linear-gradient(145deg, var(--helper-howto-bg-start), var(--helper-howto-bg-end)); padding: 15px 20px; box-shadow: 0 0 15px var(--helper-howto-shadow1-color), inset 0 0 12px var(--helper-howto-shadow-inset-color); user-select: none; cursor: pointer; transition: box-shadow 0.3s ease, background 0.3s ease; position: relative; overflow: hidden;`;
        const howToUseTitle = document.createElement('div'); howToUseTitle.innerText = 'How to use? (click to toggle)'; howToUseTitle.style.cssText = `font-size: 18px; font-weight: 700; color: var(--helper-howto-title-color); text-shadow: 0 0 7px var(--helper-title-shadow); user-select: none;`;
        const howToUseContent = document.createElement('div'); howToUseContent.style.cssText = `margin-top: 12px; font-size: 15px; line-height: 1.4; color: var(--helper-howto-text-color); max-height: 0; overflow: hidden; transition: max-height 0.6s ease-in-out, padding 0.6s ease-in-out; user-select: text;`;
        howToUseContent.innerHTML = `<ol style="padding-left: 18px; margin:0;"><li>Ensure page has "Start reading here", "Stop reading here" markers, and the relevant action buttons ("I have read...", "Yes, ask...", "Next").</li><li>Click <strong>Copy Page Text</strong>: Extracts text, clicks introductory buttons.</li><li>Click <strong>Get Answer for Question</strong>: Uses copied text and current question for AI.</li><li><strong>Settings (⚙️ icon):</strong> Configure Automatic Mode and Themes.</li><li><strong>Automatic Mode:</strong> Check box in settings, then click "Start Automatic" (or '1'). Script loops through passages and questions. Press 'Esc' or "Stop Automatic" to halt.</li></ol>`;
        let isHowToVisible = false; howToUseWrapper.onclick = () => { isHowToVisible = !isHowToVisible; howToUseContent.style.maxHeight = isHowToVisible ? '300px' : '0'; howToUseContent.style.paddingTop = isHowToVisible ? '10px' : '0'; };
        howToUseWrapper.appendChild(howToUseTitle); howToUseWrapper.appendChild(howToUseContent);
        container.appendChild(header); container.appendChild(btnCopyPageText); container.appendChild(btnGetAnswer); container.appendChild(statusBox); container.appendChild(howToUseWrapper);
        document.body.appendChild(container);

        btnCopyPageText.onclick = async () => {
            const sb = document.getElementById('sparx-status-box'); if(!sb) return;
            const setupResult = await performInitialPassageSetup();
            if (setupResult.success) { /* sb updated in func */ }
            else { sb.innerText = `Page Text Copy Failed: ${setupResult.reason || 'Unknown'}`; sb.style.boxShadow = 'inset 0 0 20px rgba(255,0,0,0.4)'; }
        };
        btnGetAnswer.onclick = async () => {
            const sb = document.getElementById('sparx-status-box'); if(!sb) return;
            if (!currentPassageText) { sb.innerText = 'Error: Copy page text first.'; sb.style.boxShadow = 'inset 0 0 20px rgba(255,0,0,0.4)'; return; }
            const qResult = await processSingleQuestion();
            if (!qResult.success && qResult.critical) { sb.innerText = `Error: ${qResult.reason || 'Unknown'}`; sb.style.boxShadow = 'inset 0 0 20px rgba(255,0,0,0.4)'; }
            else if (!qResult.success && qResult.reason === "no_question_found") { sb.innerText = 'No question found for current passage.'; }
        };

        loadSavedTheme();
        setTimeout(() => container.style.opacity = '1', 50);
        createAnswerCard();
        document.addEventListener('keydown', (e) => {
            const autoCB = document.getElementById('automatic-mode-checkbox');
            if (autoCB?.checked) {
                if (e.key === '1' && !isAutomaticModeRunning) { document.getElementById('start-automatic-btn')?.click(); e.preventDefault(); }
                else if (e.key === 'Escape' && isAutomaticModeRunning) { document.getElementById('stop-automatic-btn')?.click(); e.preventDefault(); }
            }
        });
    }

    (async () => {
        if (document.getElementById('sparx-helper')) { console.log('Sparx Helper already running.'); return; }
        if (!checkAccess()) {
            document.body.innerHTML = ''; document.body.style.background = 'black'; document.body.style.color = 'white';
            const em = document.createElement('div'); em.innerText = 'Access Denied.'; em.style.cssText = `display:flex; height:100vh; justify-content:center; align-items:center; font-size:32px; font-weight:bold; color:#e11d48; text-shadow:0 0 10px #e11d48; animation:fadeIn 1s ease-out forwards;`;
            document.body.appendChild(em); return;
        }
        const passwordCorrect = await createPasswordUI();
        if (passwordCorrect) { createMainUI(); }
    })();
})();
