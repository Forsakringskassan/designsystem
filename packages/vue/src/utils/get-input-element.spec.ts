import "html-validate/jest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import { FTextField } from "../components/FTextField";
import { FLabel } from "../components/FLabel";
import { getInputElement } from "./get-input-element";

const inputWrapper: VueWrapper = shallowMount(FTextField);
const noInputWrapper: VueWrapper = shallowMount(FLabel);

it("should not throw if an input element is found", () => {
    expect(() => {
        getInputElement(inputWrapper.vm);
    }).not.toThrow();
});

it("should throw if no input element is found", () => {
    expect(() => {
        getInputElement(noInputWrapper.vm);
    }).toThrow(`Could not find input element from element "label#"`);
});
