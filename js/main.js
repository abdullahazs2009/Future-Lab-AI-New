// Shared behavior: mobile menu, footer year, simple form handling.

(function () {
  "use strict";

  // Mobile menu toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    // Close the menu after choosing a page on phones
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Keep the footer year fresh
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  function showStatus(el, message, ok) {
    el.textContent = message;
    el.classList.remove("hidden", "ok", "err");
    el.classList.add(ok ? "ok" : "err");
  }

  // Contact form: validate, then hand off to the visitor's own email app
  var contact = document.getElementById("contact-form");
  if (contact) {
    contact.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.getElementById("cf-status");
      var name = document.getElementById("cf-name");
      var email = document.getElementById("cf-email");
      var subject = document.getElementById("cf-subject");
      var message = document.getElementById("cf-message");

      if (!name.value.trim() || !message.value.trim()) {
        showStatus(status, "Please fill in your name and message.", false);
        return;
      }
      if (!email.checkValidity()) {
        showStatus(status, "That email address doesn’t look right — mind checking it?", false);
        return;
      }

      var body = message.value.trim() + "\n\n— " + name.value.trim() + " (" + email.value.trim() + ")";
      var mailto = "mailto:hello@futureproofai.example" +
        "?subject=" + encodeURIComponent(subject.value.trim() || "Hello from " + name.value.trim()) +
        "&body=" + encodeURIComponent(body);

      showStatus(status, "Thanks! Opening your email app with the message ready to send…", true);
      window.location.href = mailto;
      contact.reset();
    });
  }

  // Newsletter form (demo only — no server yet)
  var news = document.getElementById("news-form");
  if (news) {
    news.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.getElementById("news-status");
      var email = document.getElementById("news-email");
      if (!email.checkValidity() || !email.value.trim()) {
        showStatus(status, "Please enter a valid email address.", false);
        return;
      }
      showStatus(status, "You’re on the list! (Demo note: connect a real mailing service before launch.)", true);
      news.reset();
    });
  }
})();
