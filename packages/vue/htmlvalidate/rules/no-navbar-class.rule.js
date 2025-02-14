const { Rule, sliceLocation } = require("html-validate");
const { getDocumentationUrl } = require("./common");

class NoNavbarClass extends Rule {
    documentation() {
        return {
            description:
                "`.navbar` and related classes are deprecated and should be replaced with Vue components `FPageHeader` and `FNavigationMenu` or their HTML and style.",
            url: getDocumentationUrl(
                "/components/page-layout/fpageheader.html",
            ),
        };
    }

    setup() {
        this.on("attr", (event) => {
            const { key, target, value, valueLocation } = event;
            const hasClassValue = key === "class" && typeof value === "string";
            if (!hasClassValue) {
                return;
            }

            const className = "navbar";
            const pattern = `(^| )${className}( |$)`;
            const match = value.match(pattern);
            if (!match) {
                return;
            }

            const start = value.indexOf(className, match.index);
            const end = start + className.length;
            const location = sliceLocation(valueLocation, start, end);

            this.report({
                node: target,
                location,
                message: `${className} class is deprecated.`,
            });
        });
    }
}

module.exports = NoNavbarClass;
