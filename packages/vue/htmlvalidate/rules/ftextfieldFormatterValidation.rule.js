const { Rule } = require("html-validate");
const { getDocumentationUrl } = require("./common");

/**
 * @typedef {import("html-validate").HtmlElement} HtmlElement
 * @typedef {import("html-validate").Location} Location
 *
 * @typedef {object} ValidationDirective
 * @property {string} directive Validation directive.
 * @property {Set<string>} modifiers Validation modifiers.
 * @property {Location} location Attribute location (key)
 */

const matchVValidation = /^v-validation($|[.])/;
const validatorsWithFormatters = [
    "bankAccountNumber",
    "bankgiro",
    "clearingnumber",
    "date",
    "number",
    "personnummer",
    "plusgiro",
    "postalCode",
    "organisationsnummer",
    "percent",
];

function isRelevant(node) {
    return node.target.tagName === "f-text-field";
}

class FtextFieldFormatterValidation extends Rule {
    documentation() {
        return {
            description:
                "FTextField is using a validator that previously provided formatting, \
                now formatting must be provided separately using a formatter and/or parser. \
                You can also consider switching to extended components.",
            url: getDocumentationUrl(
                "/components/inmatning/inmatningsfalt.html",
            ),
        };
    }

    setup() {
        this.on("element:ready", isRelevant, (event) => {
            const target = event.target;

            const validationDirective = this.getValidationDirective(target);
            if (!validationDirective) {
                return;
            }

            const validator = this.getValidator(validationDirective);
            if (!validator) {
                return;
            }

            const formatter = target.getAttribute(":formatter");
            const parser = target.getAttribute(":parser");
            if (formatter || parser) {
                return;
            }

            this.report(
                target,
                `v-validation.${validator} must be used with :formatter and/or :parser`,
                validationDirective.location,
            );
        });
    }

    /**
     * @param {HtmlElement} target
     * @returns {ValidationDirective | null} Directive and modifiers
     */
    getValidationDirective(target) {
        const elementAttrs = target.attributes;
        const attr = elementAttrs.find((it) => matchVValidation.test(it.key));
        if (!attr) {
            return null;
        }
        const [directive, ...modifiers] = attr.key.split(".");
        return {
            directive,
            modifiers: new Set(modifiers),
            location: attr.keyLocation,
        };
    }

    /**
     * @param {ValidationDirective} validation
     * @return {string}
     */
    getValidator(validation) {
        return validatorsWithFormatters.find((it) => {
            return validation.modifiers.has(it);
        });
    }
}

module.exports = FtextFieldFormatterValidation;
