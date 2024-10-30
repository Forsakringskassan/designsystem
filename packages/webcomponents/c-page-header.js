/* eslint-env browser */

let globalSheets = null;

export function getGlobalStyleSheets() {
    if (globalSheets === null) {
        globalSheets = Array.from(document.styleSheets).map((x) => {
            const sheet = new CSSStyleSheet();
            const css = Array.from(x.cssRules)
                .map((rule) => rule.cssText)
                .join(" ");
            sheet.replaceSync(css);
            return sheet;
        });
    }

    return globalSheets;
}

export function addGlobalStylesToShadowRoot(shadowRoot) {
    shadowRoot.adoptedStyleSheets.push(...getGlobalStyleSheets());
}

export class CPageHeader extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        shadow.innerHTML =
            /* HTML */
            `
                <div class="page-header">
                    <div class="page-header__top">
                        <slot name="top"></slot>
                    </div>
                    <div class="page-header__middle">
                        <div class="page-header__left">
                            <slot name="left"></slot>
                        </div>
                        <div class="page-header__content">
                            <slot name="content"></slot>
                        </div>
                        <div class="page-header__right">
                            <slot name="right"></slot>
                        </div>
                    </div>

                    <div class="page-header__bottom">
                        <slot name="bottom"></slot>
                    </div>
                </div>
            `;

        addGlobalStylesToShadowRoot(shadow);
    }
}

customElements.define("c-page-header", CPageHeader);
