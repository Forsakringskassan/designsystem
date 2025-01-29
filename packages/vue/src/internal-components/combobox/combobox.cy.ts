import { defineComponent } from "vue";
import FTextField from "../../components/FTextField/FTextField.vue";
import FNumericTextField from "../../components/FTextField/extendedTextFields/FNumericTextField/FNumericTextField.vue";
import { setupComboboxSelectors } from "./combobox-selectors";

const { input, button, dropdown, options, activeOption } =
    setupComboboxSelectors();

const defaultMountOptions = {
    props: { options: ["foo", "bar", "baz"] },
    slots: { default: "Etikett" },
};

describe("Dropdown behavior", () => {
    it("should not show options when mounted", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(dropdown).should("not.exist");
    });

    it("should toggle dropdown when clicking input", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).click();
        cy.get(dropdown).should("be.visible");
        cy.get(input).click();
        cy.get(dropdown).should("not.exist");
        cy.get(input).click();
        cy.get(dropdown).should("be.visible");
        cy.get(input).click();
        cy.get(dropdown).should("not.exist");
    });

    it("should toggle dropdown when clicking button", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(button).click();
        cy.get(dropdown).should("be.visible");
        cy.get(button).click();
        cy.get(dropdown).should("not.exist");
        cy.get(button).click();
        cy.get(dropdown).should("be.visible");
        cy.get(button).click();
        cy.get(dropdown).should("not.exist");
    });

    it("should close dropdown when pressing escape", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).click();
        cy.get(dropdown).should("be.visible");
        cy.get(input).type("{esc}");
        cy.get(dropdown).should("not.exist");
    });

    it("should close dropdown if clicked outside", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).click();
        cy.get(dropdown).should("be.visible");
        cy.get("body").click(0, 0);
        cy.get(dropdown).should("not.exist");
    });

    it("should show dropdown with no active option when clicking input", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).click();
        cy.get(dropdown).should("be.visible");
        cy.get(activeOption).should("not.exist");
    });

    it("should show dropdown with active option when clicking value and existing value has matching option", () => {
        const { props, slots } = defaultMountOptions;
        cy.mount(FTextField, { props: { ...props, modelValue: "bar" }, slots });
        cy.get(input).click();
        cy.get(activeOption).should("have.text", "bar");
    });
});

describe("ARIA attributes", () => {
    it("should have expected aria setup when mounted", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).should("have.attr", "aria-expanded", "false");
        cy.get(input).should("not.have.attr", "aria-controls");
        cy.get(input).should("not.have.attr", "aria-activedescendant");
        cy.get(button).should("have.attr", "aria-expanded", "false");
        cy.get(button).should("not.have.attr", "aria-controls");
    });

    it("should have expected aria setup when dropdown is shown with no active option", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).click();
        cy.get(input).should("have.attr", "aria-expanded", "true");
        cy.get(input).should("have.attr", "aria-controls");
        cy.get(input).should("not.have.attr", "aria-activedescendant");
        cy.get(button).should("have.attr", "aria-expanded", "true");
        cy.get(button).should("have.attr", "aria-controls");
    });

    it("should have expected aria setup when dropdown is shown with active option", () => {
        const { props, slots } = defaultMountOptions;
        cy.mount(FTextField, { props: { ...props, modelValue: "bar" }, slots });
        cy.get(input).click();
        cy.get(input).should("have.attr", "aria-expanded", "true");
        cy.get(input).should("have.attr", "aria-controls");
        cy.get(input).should("have.attr", "aria-activedescendant");
        cy.get(button).should("have.attr", "aria-expanded", "true");
        cy.get(button).should("have.attr", "aria-controls");
    });

    it("should show dropdown with no active option when clicking button", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(button).click();
        cy.get(dropdown).should("be.visible");
        cy.get(activeOption).should("not.exist");
    });

    it("should set focus on input after toggled by button", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(button).click();
        cy.get(input).should("have.focus");
    });

    it("should close menu and set selected value when clicking option", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).type("{downArrow}{downArrow}");
        cy.get(activeOption).click();
        cy.get(dropdown).should("not.exist");
        cy.get(input)
            .should("have.value", "bar")
            .and("have.attr", "aria-description")
            .and("contain", "Valt förslag");
    });

    it("should not show options when getting focus by tab or programatically", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).focus();
        cy.get(dropdown).should("not.exist");
    });

    it("should not show dropdown if no options are available", () => {
        cy.mount(FTextField, {
            props: { options: [] },
            slots: { default: "Etikett" },
        });
        cy.get(input).click();
        cy.get(dropdown).should("not.exist");
    });
});

describe("Keyboard navigation", () => {
    it("should show options with first option active when pressing down arrow", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).focus();
        cy.get(input).type("{downArrow}");
        cy.get(dropdown).should("exist");
        cy.get(activeOption).should("have.text", "foo");
    });

    it("should show options with last option active when pressing up arrow", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).focus();
        cy.get(input).type("{upArrow}");
        cy.get(dropdown).should("exist");
        cy.get(activeOption).should("have.text", "baz");
    });

    it("should navigate amont options when pressing down- and up-arrows", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).click();
        cy.get(activeOption).should("not.exist");
        cy.get(input).type("{downArrow}");
        cy.get(activeOption).should("have.text", "foo");
        cy.get(input).type("{downArrow}");
        cy.get(activeOption).should("have.text", "bar");
        cy.get(input).type("{downArrow}");
        cy.get(activeOption).should("have.text", "baz");
        cy.get(input).type("{downArrow}");
        cy.get(activeOption).should("have.text", "foo");
        cy.get(input).type("{upArrow}");
        cy.get(activeOption).should("have.text", "baz");
    });

    it("should reopen menu when pressing backspace results in matching options", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).type("a");
        cy.get(options).should("be.visible");
        cy.get(input).type("x");
        cy.get(options).should("not.exist");
        cy.get(input).type("{backspace}");
        cy.get(input).should("be.visible");
    });

    it("should close dropdown when pressing escape and then reopen it when typing", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).click();
        cy.get(dropdown).should("be.visible");
        cy.get(input).type("{esc}");
        cy.get(dropdown).should("not.exist");
        cy.get(input).type("f");
        cy.get(dropdown).should("be.visible");
    });

    it("should do nothing when pressing escape if no options are shown", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).type("{esc}");
        cy.get(input).type("{downArrow}");
        cy.get(dropdown).should("be.visible");
    });

    it("should open last item when pressing key up after option was selected and cleared ", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).type("{downArrow}");
        cy.get(activeOption).click();
        cy.get(input).should("have.value", "foo");
        cy.get(input).clear();
        cy.get(activeOption).should("not.exist");
        cy.get(input).type("{upArrow}");
        cy.get(activeOption).should("have.text", "baz");
    });
});

describe("Option selection", () => {
    it("should set selected value and close dropdown when clicking option", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).type("{downArrow}{downArrow}");
        cy.get(activeOption).click();
        cy.get(dropdown).should("not.exist");
        cy.get(input)
            .should("have.value", "bar")
            .and("have.attr", "aria-description")
            .and("contain", "Valt förslag");
    });

    it("should not select any option for invalid input value", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).click();
        cy.get(input).type("invalid");
        cy.get(activeOption).should("not.exist");
    });

    it("should filter options when typed value has matching options", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).type("a");
        cy.get(options)
            .then((it) => [...it].map((it) => it.innerText))
            .should("deep.equal", ["bar", "baz"]);
    });

    it("should close options when typed value not has matching options", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).type("c");
        cy.get(options).should("not.exist");
    });

    it("should close dropdown and set selected value when clicking an option", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).click();
        cy.get(dropdown).should("be.visible");
        cy.get(options).first().click();
        cy.get(dropdown).should("not.exist");
        cy.get(input).should("have.value", "foo");
    });
});

describe("Option selection - No Match", () => {
    it("should not announce that value is selected when focused and no match", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).type("lorem");
        cy.get(input).blur();
        cy.get(input).focus();
        cy.get(input)
            .should("have.attr", "aria-description")
            .and("not.contain", "Valt förslag");
    });
});

describe("Input Validation", () => {
    it("should not open dropdown for input exceeding maxlength", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).click();
        cy.get(input).type("A".repeat(150));
        cy.get(dropdown).should("not.exist");
    });
});

describe("Focus and Announcements", () => {
    it("should announce that value is selected when focused", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).type("bar");
        cy.get(input).blur();
        cy.get(input).focus();
        cy.get(input)
            .should("have.attr", "aria-description")
            .and("contain", "Valt förslag");
    });

    it("should show dropdown with no active option when clicking value and existing value has no matching option", () => {
        const { props, slots } = defaultMountOptions;
        cy.mount(FTextField, {
            props: { ...props, modelValue: "lorem" },
            slots,
        });
        cy.get(input).click();
        cy.get(activeOption).should("not.exist");
    });
});

describe("Dropdown Positioning", () => {
    it("should position dropdown correctly on resize", () => {
        cy.viewport(320, 568);
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).click();
        cy.get(dropdown).should("be.visible");
    });
});

describe("Dropdown Visibility on Input Click", () => {
    it("should show optins when clicking input", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).click();
        cy.get(dropdown).should("be.visible");
    });

    it("should not show optins when clicking input again", () => {
        cy.mount(FTextField, defaultMountOptions);
        cy.get(input).click();
        cy.get(dropdown).should("be.visible");
        cy.get(input).click();
        cy.get(dropdown).should("not.exist");
    });
});

describe("Extended textfields", () => {
    it("should handle when value is formatted", () => {
        cy.mount(FNumericTextField, {
            props: { options: ["4", "4,1", "8"] },
            slots: { default: "Nummerfält med alternativ" },
        });

        cy.get(input).type("4,10");
        cy.get(input).blur();
        cy.get(input).should("have.value", "4,1");
        cy.get(input).focus();
        cy.get(dropdown).should("not.exist");
        cy.get(input).click();
        cy.get(dropdown).should("be.visible");
        cy.get(activeOption).should("have.text", "4,1");
    });
});

describe("Disabled component", () => {
    it("should disable textfield and toggle button", () => {
        cy.mount(FTextField, {
            props: {
                disabled: true,
                options: ["foo"],
            },
            slots: { default: "etikett" },
        });
        cy.get(button).should("be.disabled");
        cy.get(input).should("be.disabled");
    });
});

describe("Reactive options", () => {
    it("should update options", () => {
        const TestComponent = defineComponent({
            template: /* HTML */ `
                <f-text-field :options maxlength="100">
                    Reactive options
                </f-text-field>
                <button
                    id="set-options"
                    type="button"
                    @click="options = ['foo', 'bar', 'baz']"
                >
                    Set options
                </button>
            `,
            data() {
                return {
                    options: [] as string[],
                };
            },
            components: {
                FTextField,
            },
        });

        cy.mount(TestComponent);
        cy.get(input).click();
        cy.get(dropdown).should("not.exist");
        cy.get("#set-options").click();
        cy.get(input).click();
        cy.get(dropdown).should("exist");
    });
});
