const { Rule } = require("html-validate");
const { getDocumentationUrl } = require("./common");

class ButtonGroupRule extends Rule {
    documentation() {
        return {
            description:
                "Buttons in a FKUI button-group must have the class button-group__item ",
            url: getDocumentationUrl("/components/button.html#gruppering"),
        };
    }

    setup() {
        /* listen on dom ready event */
        this.on("dom:ready", (event) => {
            this.reportButtonGroupViolations(event);
        });
    }

    reportButtonGroupViolations(event) {
        const buttonGroups = event.document.querySelectorAll(".button-group");

        for (const buttonGroup of buttonGroups) {
            this.nestedButtonsHaveGroupItems(buttonGroup);
        }
    }

    nestedButtonsHaveGroupItems(buttonGroup) {
        const buttons = buttonGroup.querySelectorAll("button");

        for (const button of buttons) {
            if (button.classList.contains("button-group__item") === false) {
                this.report(
                    button,
                    "A button that is a direct child to a button group must have the following classes: ['button-group__item']",
                );
            }
        }
    }
}

module.exports = ButtonGroupRule;
