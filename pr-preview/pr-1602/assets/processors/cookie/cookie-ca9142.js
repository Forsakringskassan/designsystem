// node_modules/@forsakringskassan/docs-generator/dist/processors/cookie.mjs
function onContentReady(callback) {
  const { readyState } = document;
  if (readyState === "complete" || readyState === "interactive") {
    queueMicrotask(callback);
  } else {
    document.addEventListener("DOMContentLoaded", callback);
  }
}
function hasCookie(name) {
  return document.cookie.split("; ").some((row) => row.startsWith(`${name}=`));
}
function showCookieWarning(el) {
  el.style.display = "block";
}
function hideCookieWarning(el) {
  el.style.display = "none";
}
function setCookie(name) {
  const expires = new Date(Date.now() + 1e3 * 60 * 60 * 24 * 400);
  document.cookie = `${name}=;expires=${expires.toString()};path=/`;
}
onContentReady(() => {
  const el = document.querySelector(".cookie-warning");
  if (!el) {
    return;
  }
  if (!hasCookie("doc-hide-cookie-warning")) {
    showCookieWarning(el);
    const consentAllButton = document.querySelector(
      "#consent-all-button"
    );
    if (consentAllButton) {
      consentAllButton.addEventListener("click", () => {
        setCookie("doc-hide-cookie-warning");
        setCookie("doc-cookie-consent");
        hideCookieWarning(el);
        window.dispatchEvent(new Event("doc-cookie-consent"));
      });
    }
    const consentFunctionalButton = document.querySelector(
      "#consent-functional-button"
    );
    if (consentFunctionalButton) {
      consentFunctionalButton.addEventListener("click", () => {
        setCookie("doc-hide-cookie-warning");
        hideCookieWarning(el);
      });
    }
  }
});
