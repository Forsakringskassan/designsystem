import { type Validator, ValidationService } from "@fkui/logic";
import { flushPromises, mount } from "@vue/test-utils";
import { beforeEach, describe, expect, it, vi } from "vitest";
import FValidationFormAsync from "./FValidationFormAsync.vue";

describe("FValidationForm: On submit, the button enters an inflight state", () => {
    const phoneNumberValidator: Validator = {
        name: "phoneNumber",
        validation(value) {
            return true;
        },
    };

    it("Only submit inflight", async () => {
        expect.assertions(5);
        ValidationService.registerValidator(phoneNumberValidator);
        const wrapper = mount(FValidationFormAsync);

        const submitButton = wrapper.find("[data-test=submit-button]");
        const cancelButton = wrapper.find("[data-test=cancel-button]");
        vi.useFakeTimers();
        await wrapper.find("form").trigger("submit");
        /**
         *  FValidationFormAsync onSubmit function has set timeout 5000ms
         * use fake time add 500ms
         */
        await vi.advanceTimersByTimeAsync(500);
        await flushPromises();

        expect(submitButton.attributes("aria-disabled")).toBe("true");
        expect(submitButton.classes()).toContain("button__inflight");
        expect(cancelButton.classes()).not.toContain("button__inflight");

        /**
         * add 5000 ms to be sure promise will be ready
         */
        await vi.advanceTimersByTimeAsync(5000);
        await flushPromises();
        await wrapper.vm.$nextTick();

        expect(submitButton.attributes("aria-disabled")).toBe("false");
        expect(submitButton.classes()).not.toContain("button__inflight");

        vi.useRealTimers();
    });
});
