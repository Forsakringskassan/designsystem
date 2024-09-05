import "@fkui/test-utils/jest";
import { focusElement } from "./focus-element";

describe("focusElement", () => {
    it("should focus text field", () => {
        document.body.innerHTML = /* HTML */ ` <input type="text" /> `;
        const textField = document.getElementsByTagName("input")[0];
        focusElement(textField, document.body);
        expect(textField).toHaveFocus();
    });

    it("should focus first radio button when none is checked", () => {
        document.body.innerHTML = /* HTML */ `
            <div>
                <input type="radio" value="true" name="radio-group" />
                <input type="radio" value="false" name="radio-group" />
            </div>
        `;
        const radioButtons = document.getElementsByTagName("input");
        const firstRadioButton = radioButtons[0];

        focusElement(firstRadioButton, document.body);
        expect(firstRadioButton).toHaveFocus();
    });

    it("should focus second radio button when it is checked", () => {
        document.body.innerHTML = /* HTML */ `
            <div>
                <input type="radio" value="true" name="radio-group" />
                <input type="radio" value="false" name="radio-group" checked />
            </div>
        `;
        const radioButtons = document.getElementsByTagName("input");
        const firstRadioButton = radioButtons[0];
        const secondRadioButton = radioButtons[1];

        focusElement(firstRadioButton, document.body);
        expect(secondRadioButton).toHaveFocus();
    });

    it("should focus div with tabindex='0'", () => {
        document.body.innerHTML = /* HTML */ ` <div tabindex="0"></div> `;
        const div = document.getElementsByTagName("div")[0];
        focusElement(div, document.body);
        expect(div).toHaveFocus();
    });
});
