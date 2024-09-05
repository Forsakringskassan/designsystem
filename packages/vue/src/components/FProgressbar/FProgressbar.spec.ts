import { shallowMount } from "@vue/test-utils";
import FProgressbar from "./FProgressbar.vue";

const ariaLabel = "My progressbar";

afterEach(() => {
    jest.restoreAllMocks();
});

describe("FProgressbar", () => {
    it("should show progress", () => {
        const wrapper = shallowMount(FProgressbar, {
            props: { value: 25, ariaLabel },
        });
        expect(wrapper.get(".progress__meter--inprogress")).toBeTruthy();
    });

    it("should not show progress", () => {
        const wrapper = shallowMount(FProgressbar, {
            props: { value: 0, ariaLabel },
        });
        expect(wrapper.get(".progress__meter--pending")).toBeTruthy();
    });

    it("should set aria-valuenow", () => {
        const wrapper = shallowMount(FProgressbar, {
            props: { value: 27, ariaLabel },
        });
        expect(
            wrapper.get(".progress__meter").attributes("aria-valuenow"),
        ).toBe("27");
    });

    it("should set aria-valuetext", () => {
        const wrapper = shallowMount(FProgressbar, {
            props: { value: 35, ariaLabel },
        });
        expect(
            wrapper.get(".progress__meter").attributes("aria-valuetext"),
        ).toBe("Du har slutfört 35 %.");
    });

    it("should use placeholder %VALUE% text", () => {
        const wrapper = shallowMount(FProgressbar, {
            props: {
                value: 42,
                valueText: "Talet %VALUE% är svaret.",
                ariaLabel,
            },
        });
        expect(
            wrapper.get(".progress__meter").attributes("aria-valuetext"),
        ).toBe("Talet 42 är svaret.");
    });

    it("should round to integer", () => {
        const wrapper = shallowMount(FProgressbar, {
            props: { value: 33.33, ariaLabel },
        });
        expect(wrapper.get(".progress__meter").attributes().style).toBe(
            "width: 33%;",
        );
    });

    it("should not go below 0%", () => {
        // prevent vue error logging due to value validator
        jest.spyOn(console, "error").mockImplementation(jest.fn());
        const wrapper = shallowMount(FProgressbar, {
            props: { value: -5, ariaLabel },
            global: {
                config: {
                    warnHandler() {
                        /* do nothing: prevent vue warning about prop validation */
                    },
                },
            },
        });
        const meter = wrapper.get(".progress__meter");
        expect(meter.attributes("aria-valuenow")).toBe("0");
    });

    it("should not go above 100%", () => {
        const wrapper = shallowMount(FProgressbar, {
            props: { value: 105, ariaLabel },
            global: {
                config: {
                    warnHandler() {
                        /* do nothing: prevent vue warning about prop validation */
                    },
                },
            },
        });
        const meter = wrapper.get(".progress__meter");
        expect(meter.attributes("aria-valuenow")).toBe("100");
    });

    it("should set class pending when progress not started", () => {
        const wrapper = shallowMount(FProgressbar, {
            props: { value: 0, ariaLabel },
        });

        expect(wrapper.get(".progress__meter--pending")).toBeTruthy();
        expect(
            wrapper.find(".progress__meter--inprogress").exists(),
        ).toBeFalsy();
        expect(wrapper.find(".progress__meter--finished").exists()).toBeFalsy();
    });

    it("should set class in-progress when progress has started", () => {
        const wrapper = shallowMount(FProgressbar, {
            props: { value: 42, ariaLabel },
        });

        expect(wrapper.find(".progress__meter--pending").exists()).toBeFalsy();
        expect(wrapper.get(".progress__meter--inprogress")).toBeTruthy();
        expect(wrapper.find(".progress__meter--finished").exists()).toBeFalsy();
    });

    it("should set class finished when progress has completed", () => {
        const wrapper = shallowMount(FProgressbar, {
            props: { value: 100, ariaLabel },
        });

        expect(wrapper.find(".progress__meter--pending").exists()).toBeFalsy();
        expect(
            wrapper.find(".progress__meter--inprogress").exists(),
        ).toBeFalsy();
        expect(wrapper.get(".progress__meter--finished")).toBeTruthy();
    });
});
