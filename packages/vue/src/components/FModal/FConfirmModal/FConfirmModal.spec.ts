import { mount } from "@vue/test-utils";
import { config, FKUIConfigButtonOrder } from "../../../config";
import FConfirmModal from "./FConfirmModal.vue";

describe("events", () => {
    it('should send "close" event on close button clicked', async () => {
        const wrapper = mount(FConfirmModal, {
            props: {
                isOpen: true,
            },
            global: {
                stubs: ["teleport"],
            },
        });
        const closeElement = wrapper.get(".close-button");

        await closeElement.trigger("click");
        expect(wrapper.emitted().close).toBeTruthy();
    });

    it('should send "confirm" event on confirm button clicked', async () => {
        const wrapper = mount(FConfirmModal, {
            props: {
                isOpen: true,
            },
            global: {
                stubs: ["teleport"],
            },
        });
        const dismissElement = wrapper.get(".button--primary");

        await dismissElement.trigger("click");
        expect(wrapper.emitted().confirm).toBeTruthy();
    });

    it('should send custom event "unsure" event on maybe button clicked', async () => {
        const wrapper = mount(FConfirmModal, {
            props: {
                isOpen: true,
                buttons: [
                    {
                        label: "Kanske",
                        reason: "unsure",
                        event: "unsure",
                        type: "secondary",
                    },
                ],
            },
            emits: ["close", "unsure"],
            global: {
                stubs: ["teleport"],
            },
        });
        const closeElement = wrapper.get(".button--secondary");

        await closeElement.trigger("click");
        expect(wrapper.emitted().unsure).toBeTruthy();
    });
});

describe("button order", () => {
    it("should display buttons left to right", () => {
        config.buttonOrder = FKUIConfigButtonOrder.LEFT_TO_RIGHT;
        const wrapper = mount(FConfirmModal, {
            props: {
                isOpen: true,
            },
            global: {
                stubs: ["teleport"],
            },
        });
        const buttonsGroup = wrapper.get(".modal__footer");
        const primary = buttonsGroup.findAll("button")[0];
        expect(primary.classes()).toContain("button--primary");
    });

    it("should display buttons right to left", () => {
        config.buttonOrder = FKUIConfigButtonOrder.RIGHT_TO_LEFT;
        const wrapper = mount(FConfirmModal, {
            props: {
                isOpen: true,
            },
            global: {
                stubs: ["teleport"],
            },
        });
        const buttonsGroup = wrapper.get(".modal__footer");
        const primary = buttonsGroup.findAll("button")[1];
        expect(primary.classes()).toContain("button--primary");
    });
});

describe("props", () => {
    it("should change heading text via headring prop", () => {
        const wrapper = mount(FConfirmModal, {
            props: {
                isOpen: true,
                heading: "foo heading",
            },
            global: {
                stubs: ["teleport"],
            },
        });

        const heading = wrapper.find("h1");
        expect(heading.text()).toBe("foo heading");
    });

    it("should change content text via content prop", () => {
        const wrapper = mount(FConfirmModal, {
            props: {
                isOpen: true,
                content: "bar content",
            },
            global: {
                stubs: ["teleport"],
            },
        });

        const content = wrapper.find(".modal__content");
        expect(content.text()).toBe("bar content");
    });

    it("should append screenreader text if given", () => {
        const wrapper = mount(FConfirmModal, {
            props: {
                isOpen: true,
                buttons: [
                    {
                        label: "Lorem ipsum",
                        screenreader: "with screenreader text",
                        type: "secondary",
                    },
                ],
            },
            global: {
                stubs: ["teleport"],
            },
        });

        const button = wrapper.get(".button--secondary");
        const nbsp = "\xa0";
        expect(button.text()).toBe(`Lorem ipsum${nbsp}with screenreader text`);
    });

    it("should not append extra space if no screenreader text is given", () => {
        const wrapper = mount(FConfirmModal, {
            props: {
                isOpen: true,
                buttons: [{ label: "Lorem ipsum", type: "secondary" }],
            },
            global: {
                stubs: ["teleport"],
            },
        });

        const button = wrapper.get(".button--secondary");
        expect(button.text()).toBe("Lorem ipsum");
    });
});

describe("slots", () => {
    it("should change heading via slot", () => {
        const wrapper = mount(FConfirmModal, {
            props: {
                isOpen: true,
            },
            slots: {
                heading: "foo heading",
            },
            global: {
                stubs: ["teleport"],
            },
        });

        const heading = wrapper.find("h1");
        expect(heading.text()).toBe("foo heading");
    });

    it("should change content via slot", () => {
        const wrapper = mount(FConfirmModal, {
            props: {
                isOpen: true,
            },
            slots: {
                heading: "<pre>bar content</pre>",
            },
            global: {
                stubs: ["teleport"],
            },
        });

        const content = wrapper.find("pre");
        expect(content.text()).toBe("bar content");
    });

    it("should use slot over prop in heading", () => {
        const wrapper = mount(FConfirmModal, {
            props: {
                isOpen: true,
                heading: "prop heading",
            },
            slots: {
                heading: "slot heading",
            },
            global: {
                stubs: ["teleport"],
            },
        });

        expect(wrapper.find(".modal__header").text()).toBe("slot heading");
    });

    it("should use content slot over prop", () => {
        const wrapper = mount(FConfirmModal, {
            props: {
                isOpen: true,
                content: "<p>prop content</p>",
            },
            slots: {
                content: "<pre>slot content</pre>",
            },
            global: {
                stubs: ["teleport"],
            },
        });

        expect(wrapper.find(".modal__content").text()).toBe("slot content");
    });
});
