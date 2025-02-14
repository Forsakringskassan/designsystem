const { Rule, DOMTokenList } = require("html-validate");
const { getDocumentationUrl } = require("./common");

const deprecatedClasses = [
    {
        name: "navbar",
        description:
            "`.navbar` and related classes are deprecated and should be replaced with Vue components `FPageHeader` and `FNavigationMenu` or their HTML and style.",
        url: "/components/page-layout/fpageheader.html",
    },
    {
        name: "button--text",
        description:
            "`.button--text` class is deprecated and should be replaced with `button--discrete`",
        url: "/components/button.html",
    },
];

class ClassDeprecated extends Rule {
    documentation({ description, url }) {
        return {
            description,
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
                for (const deprecatedClass of deprecatedClasses) {
                    if (deprecatedClass.name !== item) {
                        continue;
                    }

                    this.report({
                        node: event.target,
                        location,
                        message: "`.{{ name }}` class is deprecated.",
                        context: deprecatedClass,
                    });
                }
            }
        });
    }
}

module.exports = ClassDeprecated;
