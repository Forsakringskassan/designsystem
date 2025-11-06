import { mount } from "@vue/test-utils";
import FTable from "./FTable.vue";

describe("caption", () => {
    it("should not render if missing slot 'caption'", () => {
        const wrapper = mount(FTable, {
            attrs: {
                columns: [],
                rows: [],
            },
            slots: {},
        });
        expect(wrapper.find("[data-test='caption']").exists()).toBeFalsy();
    });

    it.todo("should not render if slot 'caption' is empty");

    it.todo("should render if slot 'caption' is present");

    it.todo(
        "should render with class 'sr-only' if slot 'caption' with class 'sr-only' is present",
    );
});
