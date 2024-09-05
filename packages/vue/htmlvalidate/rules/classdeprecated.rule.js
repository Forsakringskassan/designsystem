const { Rule } = require("html-validate");
const { getDocumentationUrl } = require("./common");

class ClassDeprecated extends Rule {
    documentation() {
        return {
            description:
                "The class button--text is deprecated and should be replaced with button--discrete",
            url: getDocumentationUrl("/components/button.html"),
        };
    }

    setup() {
        /* listen on dom ready event */
        this.on("dom:ready", (event) => {
            this.reportDeprecatedClass(event);
        });
    }

    reportDeprecatedClass(event) {
        const buttons = event.document.querySelectorAll(".button--text");

        for (const button of buttons) {
            this.report(
                button,
                "['button--text'] is deprecated, please use ['button--discrete'] instead",
            );
        }
    }
}

module.exports = ClassDeprecated;
