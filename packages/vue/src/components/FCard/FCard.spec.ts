import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import FCard from "./FCard.vue";
import "html-validate/vitest";

describe("snapshots", () => {
    it("should match snapshot", () => {
        expect.assertions(3);
        const wrapper = shallowMount(FCard, {
            slots: {
                header: "Header slot",
                default: "Content slot",
                footer: "Footer slot",
            },
        });
        expect(wrapper.element).toMatchSnapshot();
        expect(wrapper.get(".card__header")).toBeTruthy();
        expect(wrapper.get(".card__footer")).toBeTruthy();
    });

    it("should not render header class when heading slot is omitted", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FCard);
        expect(wrapper.find(".card__header").exists()).toBeFalsy();
    });

    it("should not render footer class when footer slot is omitted", () => {
        expect.assertions(1);
        const wrapper = shallowMount(FCard);
        expect(wrapper.find(".card__footer").exists()).toBeFalsy();
    });
});

describe("html-validate", () => {
    it("should allow valid values", async () => {
        expect.assertions(1);
        const markup = /* HTML */ `
            <f-card>
                <template #default> Content </template>
            </f-card>
            <f-card>
                <template #header></template>
                <template #default> Content </template>
                <template #footer></template>
            </f-card>
        `;
        await expect(markup).toBeValid();
    });

    it("should not allow invalid values", async () => {
        expect.assertions(1);
        const markup = /* HTML */ ` <f-card></f-card> `;
        await expect(markup).toMatchInlineCodeframe(`
            "error: <f-card> component requires slot "default" to be implemented (vue/required-slots)
            > 1 |  <f-card></f-card>
                |   ^^^^^^
            Selector: f-card"
        `);
    });
});
