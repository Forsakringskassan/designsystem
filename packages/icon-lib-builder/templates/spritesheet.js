/* eslint-env browser */
/* eslint-disable no-undef -- IMPORT_SPRITESHEET, PACKAGE, LIBRARY */
/* eslint-disable no-unused-vars -- injectSpritesheet function */
function injectSpritesheet() {
    IMPORT_SPRITESHEET(); // icons is inserted here by the build script
    const element = document.createElement("div");
    element.innerHTML = spritesheet;
    element.style.display = "none";
    element.setAttribute("aria-hidden", "true");
    element.setAttribute("data-icon-package", PACKAGE);
    element.setAttribute("data-icon-library", LIBRARY);
    document.body.appendChild(element);
}
