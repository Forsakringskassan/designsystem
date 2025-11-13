const { Rule } = require("html-validate/node");
const { getDocumentationUrl, getSlots } = require("./common");

/**
 * @typedef {import("html-validate").RuleDocumentation} RuleDocumentation
 */

/**
 * @typedef {Object} Entry
 * @property {string} slot
 * @property {string} component
 * @property {string} [replacement]
 * @property {string} [additionalMessage]
 * @property {string} url
 */

/** @type {Entry[]} */
const deprecatedSlots = [
    {
        slot: "#checkbox-description",
        component: "f-interactive-table",
        replacement: "selectable-description",
        url: "/components/table-and-list/table.html",
    },
];

/**
 * @param {import("html-validate").ElementReadyEvent} event
 * @returns {boolean}
 */
function isRelevant(event) {
    return deprecatedSlots
        .map((it) => it.component)
        .includes(event.target.tagName);
}

/**
 * @extends {Rule<Entry, void>}
 */
class SlotDeprecated extends Rule {
    /**
     * @param {Entry} context
     * @returns {RuleDocumentation}
     */
    documentation(context) {
        const { url, replacement, additionalMessage } = context;
        const message = replacement
            ? `Slot \`${context.slot}\` is deprecated and should be replaced with \`${replacement}\``
            : `Slot \`${context.slot}\` is deprecated.`;
        return {
            description: additionalMessage
                ? `${message}\n\n${additionalMessage}`
                : message,
            url: getDocumentationUrl(url),
        };
    }

    setup() {
        this.on("element:ready", isRelevant, (event) => {
            const { target } = event;
            const slots = getSlots(target);
            const entries = deprecatedSlots.filter((it) =>
                target.is(it.component),
            );

            for (const entry of entries) {
                const description = slots[entry.slot];
                if (!description) {
                    continue;
                }

                this.report({
                    node: target,
                    location: description.location,
                    message: entry.replacement
                        ? `slot "{{ slot }}" is deprecated and replaced with "{{ replacement }}"`
                        : `slot "{{ slot }}" is deprecated`,
                    context: entry,
                });
            }
        });
    }
}

module.exports = SlotDeprecated;
