const { Rule, DOMTokenList } = require("html-validate");
const { getDocumentationUrl } = require("./common");

/**
 * @typedef {import("html-validate").RuleDocumentation} RuleDocumentation
 */

/**
 * @typedef {Object} Entry
 * @property {string} name
 * @property {string} [replacement]
 * @property {string} [additionalMessage]
 * @property {string} url
 */

/** @type {Entry[]} */
const deprecatedClasses = [
    {
        name: "navbar",
        additionalMessage:
            "It should be replaced with the Vue components `FPageHeader` and `FNavigationMenu`.",
        url: "/components/page-layout/fpageheader.html",
    },
    {
        name: "button--text",
        replacement: "button--tertiary",
        url: "/components/button.html",
    },
    {
        name: "button--discrete",
        replacement: "button--tertiary",
        url: "/components/button.html",
    },
];

/**
 * @extends {Rule<Entry, void>}
 */
class ClassDeprecated extends Rule {
    /**
     * @param {Entry} context
     * @returns {RuleDocumentation}
     */
    documentation(context) {
        const { url, replacement, additionalMessage } = context;
        const message = replacement
            ? `Class \`${context.name}\` is deprecated and should be replaced with \`${replacement}\``
            : `Class \`${context.name}\` is deprecated.`;
        return {
            description: additionalMessage
                ? `${message}\n\n${additionalMessage}`
                : message,
            url: getDocumentationUrl(url),
        };
    }

    setup() {
        this.on("attr", (event) => {
            const { key, value, valueLocation } = event;
            const hasClassValue = key === "class" && typeof value === "string";
            if (!hasClassValue) {
                return;
            }

            const tokens = new DOMTokenList(event.value, valueLocation);

            for (const { item, location } of tokens.iterator()) {
                for (const entry of deprecatedClasses) {
                    if (entry.name !== item) {
                        continue;
                    }

                    this.report({
                        node: event.target,
                        location,
                        message: entry.replacement
                            ? `class "{{ name }}" is deprecated and replaced with "{{ replacement }}"`
                            : `class "{{ name }}" is deprecated`,
                        context: entry,
                    });
                }
            }
        });
    }
}

module.exports = ClassDeprecated;
