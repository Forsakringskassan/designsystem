const { Rule } = require("html-validate/node");
const { getDocumentationUrl } = require("./common");

class FButtonTertiaryBlackDeprecated extends Rule {
    documentation() {
        return {
            description:
                "`tertiary-style` `black` is deprecated and replaced by `muted`",
            url: getDocumentationUrl("/components/fbutton.html"),
        };
    }

    setup() {
        this.on("attr", (event) => {
            const { key, value, valueLocation } = event;
            if (key !== "tertiary-style") {
                return;
            }
            if (value === "black") {
                this.report({
                    node: event.target,
                    location: valueLocation,
                    message:
                        "`tertiary-style` `black` is deprecated and replaced by `muted`",
                });
            }
        });
    }
}

module.exports = FButtonTertiaryBlackDeprecated;
