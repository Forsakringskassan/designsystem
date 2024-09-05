/* eslint-env browser */
/* eslint-disable no-undef -- injectSpritesheet */
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        injectSpritesheet();
    });
} else {
    injectSpritesheet();
}
