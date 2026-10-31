// Lab Chat — talks to Google's Gemini API straight from the visitor's browser.
// The API key is kept in localStorage only; it is never sent to any server
// except generativelanguage.googleapis.com.

(function () {
  "use strict";

  var KEY_STORAGE = "futureproof-gemini-key";
  var API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";
  var SYSTEM_PROMPT =
    "You are Nexus-50, a friendly assistant on the Future Proof AI website. " +
    "You help students and young builders design durable, future-proof AI applications: " +
    "decoupling UI from models, adapter patterns, data sovereignty, verification, and ethics. " +
    "Keep answers encouraging, beginner-friendly, and concise (under 250 words). Use plain text, no markdown.";

  var keybox = document.getElementById("keybox");
  if (!keybox) return; // chat only lives on the home page

  var keyInput = document.getElementById("gemini-key");
  var saveBtn = document.getElementById("save-key");
  var removeBtn = document.getElementById("remove-key");
  var statusEl = document.getElementById("chat-status");
  var log = document.getElementById("chat-log");
  var form = document.getElementById("chat-form");
  var input = document.getElementById("chat-input");
  var sendBtn = document.getElementById("chat-send");
  var clearBtn = document.getElementById("clear-chat");

  var history = []; // { role: "user" | "model", text: "" }

  function getKey() {
    try { return localStorage.getItem(KEY_STORAGE) || ""; } catch (e) { return ""; }
  }
  function setKey(k) {
    try {
      if (k) localStorage.setItem(KEY_STORAGE, k);
      else localStorage.removeItem(KEY_STORAGE);
    } catch (e) { /* private mode: key just won't persist */ }
  }

  function refreshUi() {
    var hasKey = Boolean(getKey());
    keybox.classList.toggle("hidden", hasKey);
    statusEl.textContent = hasKey ? "Connected · Gemini 2.5 Flash" : "Waiting for API key";
    input.disabled = !hasKey;
    sendBtn.disabled = !hasKey;
    input.placeholder = hasKey ? "Ask about model lock-in, adapters, ethics…" : "Add your Gemini key above to start chatting";
  }

  function addMessage(text, kind) {
    var div = document.createElement("div");
    div.className = "msg " + kind;
    div.textContent = text;
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
    return div;
  }

  function trimHistory() {
    var MAX = 12;
    if (history.length > MAX) history = history.slice(history.length - MAX);
  }

  async function askGemini() {
    var key = getKey();
    if (!key) return;

    var typing = addMessage("Nexus-50 is thinking…", "ai");
    sendBtn.disabled = true;
    input.disabled = true;

    try {
      var response = await fetch(API_URL + "?key=" + encodeURIComponent(key), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: history.map(function (m) {
            return { role: m.role, parts: [{ text: m.text }] };
          })
        })
      });

      if (!response.ok) {
        var hint;
        if (response.status === 400 || response.status === 403) {
          hint = "That API key looks invalid or lacks permission. Double-check it in Google AI Studio, then remove and re-save it.";
        } else if (response.status === 429) {
          hint = "Rate limit reached — the free tier allows a few requests per minute. Wait a moment and try again.";
        } else {
          hint = "Gemini returned an error (" + response.status + ").";
        }
        var apiError = new Error(hint);
        apiError.userFacing = true;
        throw apiError;
      }

      var data = await response.json();
      var parts = data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts;
      var text = parts ? parts.map(function (p) { return p.text || ""; }).join("").trim() : "";
      if (!text) {
        var emptyError = new Error("Gemini replied with nothing useful. Try rephrasing your question.");
        emptyError.userFacing = true;
        throw emptyError;
      }

      typing.remove();
      addMessage(text, "ai");
      history.push({ role: "model", text: text });
      trimHistory();
    } catch (err) {
      typing.remove();
      addMessage(err && err.userFacing ? err.message : "Couldn’t reach Gemini. Check your internet connection (or key) and try again.", "error");
    } finally {
      sendBtn.disabled = false;
      input.disabled = false;
      input.focus();
    }
  }

  saveBtn.addEventListener("click", function () {
    var k = keyInput.value.trim();
    if (!k) {
      statusEl.textContent = "Paste a key first 🙂";
      return;
    }
    setKey(k);
    keyInput.value = "";
    refreshUi();
    addMessage("Key saved locally. I’m Nexus-50 — ask me anything about building AI that lasts!", "ai");
  });

  removeBtn.addEventListener("click", function () {
    setKey("");
    refreshUi();
    addMessage("API key removed from this browser.", "error");
  });

  clearBtn.addEventListener("click", function () {
    history = [];
    log.innerHTML = "";
    addMessage("Chat cleared. What shall we build next?", "ai");
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var text = input.value.trim();
    if (!text || sendBtn.disabled) return;
    input.value = "";
    addMessage(text, "user");
    history.push({ role: "user", text: text });
    trimHistory();
    askGemini();
  });

  refreshUi();
})();
