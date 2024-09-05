const { Rule } = require("html-validate");
const { getDocumentationUrl } = require("./common");

const formatters = [
    "bankaccountnumber",
    "bankgiro",
    "clearingnumber",
    "dateformat",
    "date",
    "email",
    "maxlength",
    "maxvalue",
    "organisationsnummer",
    "personnummer",
    "phonenumber",
    "plusgiro",
    "postalCode",
];
const allowedTags = ["input", "f-text-field"];

class RequiredMaxLength extends Rule {
    documentation() {
        return {
            description: "Element is missing a maxlength-validation",
            url: getDocumentationUrl(
                "/components/inmatning/inmatningsfalt.html",
            ),
        };
    }

    setup() {
        this.on("element:ready", (event) => {
            const attributeKeys = [];
            const target = event.target;
            const elementAttrs = target.attributes;
            const tagName = target.tagName;
            const valueOfType = target.getAttributeValue("type");

            if (!allowedTags.includes(tagName)) {
                return;
            }

            for (let i = 0; i < elementAttrs.length; i++) {
                attributeKeys.push(elementAttrs[i].key);
            }
            const validation = attributeKeys.find((attr) =>
                attr.includes("v-validation"),
            );
            const maxlength =
                attributeKeys.find((attr) => attr.includes("maxlength")) ===
                "maxlength";

            if (maxlength) {
                return;
            } else {
                this.checkValidation(
                    formatters,
                    validation,
                    target,
                    valueOfType,
                );
            }
        });
    }

    checkValidation(formatters, validation, target, valueOfType) {
        if ((!valueOfType || valueOfType === "text") && validation) {
            this.checkError(formatters, validation, target);
        }

        if (!validation) {
            this.checkInputType(valueOfType, target);
        }
    }

    checkError(formatters, validation, target) {
        const validators = validation.split(".");
        const lengthValidators = validators.filter((attrs) =>
            formatters.includes(attrs),
        );

        if (lengthValidators.length === 0) {
            this.report(target, `v-validation must have a maxlength-validator`);
        }
    }

    checkInputType(valueOfType, target) {
        if (valueOfType && valueOfType !== "text") {
            return;
        } else {
            this.report(target, "v-validation.maxLength must be used");
        }
    }
}

module.exports = RequiredMaxLength;
