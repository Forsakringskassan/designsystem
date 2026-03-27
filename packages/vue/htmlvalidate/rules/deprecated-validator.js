const { Rule, sliceLocation } = require("html-validate");
const { getDocumentationUrl } = require("./common");

const replacements = {
    dummy: ["dummyReplacements"],
};
const deprecated = Object.keys(replacements);

/**
 * @param {string} text
 * @returns {IterableIterator<{ value: string, begin: number, end: number }>}
 */
function* splitModifiers(text) {
    const splitDots = /\.([^.]*)/g;
    let match;
    while ((match = splitDots.exec(text)) !== null) {
        const value = match[1];
        const end = splitDots.lastIndex;
        const begin = end - value.length;
        yield {
            value,
            begin,
            end,
        };
    }
}

class DeprecatedValidator extends Rule {
    documentation(context) {
        return {
            description: [
                `The \`${context}\` validator is deprecated, replace with one or more of:`,
                "",
                ...replacements[context].map((it) => `  - \`${it}\``),
            ].join("\n"),
            url: getDocumentationUrl("/components/validering/validatorer.html"),
        };
    }

    setup() {
        this.on("attr", (event) => {
            const { key, keyLocation } = event;
            if (!key.startsWith("v-validation.")) {
                return;
            }
            for (const modifier of splitModifiers(key)) {
                const { value: validator, begin, end } = modifier;
                if (!deprecated.includes(validator)) {
                    continue;
                }
                const location = sliceLocation(keyLocation, begin, end);
                this.report({
                    node: event.target,
                    context: validator,
                    location,
                    message: `validator "${validator}" is deprecated`,
                });
            }
        });
    }
}

module.exports = DeprecatedValidator;
