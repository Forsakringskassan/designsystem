/* globals window */

/**
 * Mocks for DomUtils
 * JSDom do not support offsetHeight, offsetWidth. See : https://github.com/jsdom/jsdom/issues/135
 * Simulate visible element with an extra class
 */
const VISIBLE = "test-visible";

Object.defineProperties(window.HTMLElement.prototype, {
    offsetLeft: {
        get: function () {
            return this.classList.contains(VISIBLE) ? 1 : 0;
        },
    },
    offsetTop: {
        get: function () {
            return this.classList.contains(VISIBLE) ? 1 : 0;
        },
    },
    offsetHeight: {
        get: function () {
            return this.classList.contains(VISIBLE) ? 1 : 0;
        },
    },
    offsetWidth: {
        get: function () {
            return this.classList.contains(VISIBLE) ? 1 : 0;
        },
    },
});
