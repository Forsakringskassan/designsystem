"use strict";
(() => {
  // node_modules/@forsakringskassan/docs-generator/dist/runtime-bootstrap.mjs
  function onContentReady(callback) {
    const { readyState } = document;
    if (readyState === "complete" || readyState === "interactive") {
      setTimeout(callback, 0);
    } else {
      document.addEventListener("DOMContentLoaded", callback);
    }
  }
  function withCookieConsent(callback) {
    function hasCookie(name) {
      return document.cookie.split("; ").some((row) => row.startsWith(`${name}=`));
    }
    onContentReady(() => {
      if (!document.querySelector(".cookie-warning")) {
        callback();
        return;
      }
      if (!navigator.cookieEnabled) {
        return;
      }
      if (hasCookie("doc-cookie-consent")) {
        callback();
        return;
      }
      const registeredUrl = window.location.href;
      window.addEventListener(
        "doc-cookie-consent",
        () => {
          if (window.location.href === registeredUrl) {
            callback();
          }
        },
        {
          once: true
        }
      );
    });
  }
  window.withCookieConsent = withCookieConsent;
})();
