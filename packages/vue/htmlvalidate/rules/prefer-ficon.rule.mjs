import { Rule } from "html-validate/node";
import { getDocumentationUrl } from "./common.mjs";

/**
 * @typedef {import("html-validate/node").ElementReadyEvent} ElementReadyEvent
 */

/**
 *
 * @param {ElementReadyEvent} event
 */
function isRelevant(event) {
    const { target } = event;
    return target.is("svg") && target.classList.includes("icon");
}

export class PreferFIcon extends Rule {
    documentation() {
        return {
            description:
                "Prefer using `<f-icon>` instead of directly using `<svg>`",
            url: getDocumentationUrl("/components/ficon.html"),
        };
    }

    setup() {
        this.on("element:ready", isRelevant, () => {
            this.report({
                message:
                    "Prefer using <f-icon> instead of directly using <svg>",
            });
        });
    }
}
