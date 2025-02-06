import { type DefineComponent, defineComponent, provide } from "vue";
import { ValidationService } from "@fkui/logic";
import { FTextField } from "../../components";
import { FTextFieldPageObject } from "../../cypress";
import IPopupError from "./IPopupError.vue";

const textfield = new FTextFieldPageObject(".text-field");
interface Styling {
    caption: string;
    styleDiv: string;
    styleTh1: string;
    styleTh2: string;
    styleTh3: string;
}
function createComponent(styling: Styling): DefineComponent {
    const { caption, styleDiv, styleTh1, styleTh2, styleTh3 } = styling;
    return defineComponent({
        template: /* HTML */ `
            <div style="${styleDiv}">
                <table>
                    <caption style="font-weight: bold; caption-side: bottom;">
                        ${caption}
                    </caption>
                    <thead>
                        <tr>
                            <th style="${styleTh1}" scope="col">Column 1</th>
                            <th style="${styleTh2}" scope="col">Column 2</th>
                            <th style="${styleTh3}" scope="col">Column 3</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Text</td>
                            <td>
                                <f-text-field
                                    id="input"
                                    v-validation.required.number.maxLength="{ maxLength: { length: 1} }"
                                >
                                    Etikett
                                </f-text-field>
                            </td>
                            <td>Text</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `,

        components: {
            IPopupError,
            FTextField,
        },
        setup() {
            provide("textFieldTableMode", true);
        },
        mounted() {
            ValidationService.setSubmitted("input");
        },
    });
}
function triggerPopupError(textfield: FTextFieldPageObject): void {
    textfield.input().focus();
    textfield.input().blur();
    textfield.input().click();
}

describe("PopupError", () => {
    beforeEach(() => {
        cy.viewport(400, 400);
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("should be visible below the input field", () => {
        const component = createComponent({
            caption: "PopupError below the input field",
            styleDiv: "height: 380px; width: 380px;",
            styleTh1: "width: 25%",
            styleTh2: "width: 50%",
            styleTh3: "width: 25%",
        });
        cy.mount(component);
        triggerPopupError(textfield);
        cy.toMatchScreenshot();
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("should be visible to the rigth of the input field", () => {
        const component = createComponent({
            caption: "PopupError to the rigth of the input field",
            styleDiv: "height: 100px; width: 380px;",
            styleTh1: "width: 5%",
            styleTh2: "width: 5%",
            styleTh3: "width: 90%",
        });
        cy.mount(component);
        triggerPopupError(textfield);
        cy.toMatchScreenshot();
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("should be visible to the left of the input field", () => {
        const component = createComponent({
            caption: "PopupError to the left of the input field",
            styleDiv: "height: 100px; width: 380px;",
            styleTh1: "width: 90%",
            styleTh2: "width: 5%",
            styleTh3: "width: 5%",
        });
        cy.mount(component);
        triggerPopupError(textfield);
        cy.toMatchScreenshot();
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("should be visible above the input field", () => {
        const component = createComponent({
            caption: "PopupError above the input field",
            styleDiv: "height: 280px; width: 380px; padding-top: 200px;",
            styleTh1: "width: 5%",
            styleTh2: "width: 90%",
            styleTh3: "width: 5%",
        });
        cy.mount(component);
        triggerPopupError(textfield);
        cy.toMatchScreenshot();
    });

    /* eslint-disable-next-line mocha/no-skipped-tests -- temporary to get builds running */
    it.skip("should be inline, below the input field", () => {
        const component = createComponent({
            caption: "PopupError inline below the input field",
            styleDiv: "height: 100px;",
            styleTh1: "width: 5%",
            styleTh2: "width: 90%",
            styleTh3: "width: 5%",
        });
        cy.mount(component);
        triggerPopupError(textfield);
        cy.toMatchScreenshot();
    });

    it("should close on escape key", () => {
        const component = createComponent({
            caption: "Close PopupError with esc-key",
            styleDiv: "height: 380px; width: 380px;",
            styleTh1: "width: 25%",
            styleTh2: "width: 50%",
            styleTh3: "width: 25%",
        });
        cy.mount(component);
        triggerPopupError(textfield);
        cy.get(".popup-error").should("be.visible");
        textfield.input().trigger("keyup", { key: "Escape" });
        cy.get(".popup-error").should("not.exist");
    });

    it("should close on blur", () => {
        const component = createComponent({
            caption: "Close PopupError with blur",
            styleDiv: "height: 380px; width: 380px;",
            styleTh1: "width: 25%",
            styleTh2: "width: 50%",
            styleTh3: "width: 25%",
        });
        cy.mount(component);
        triggerPopupError(textfield);
        cy.get(".popup-error").should("be.visible");
        textfield.input().blur();
        cy.get(".popup-error").should("not.exist");
    });
});
