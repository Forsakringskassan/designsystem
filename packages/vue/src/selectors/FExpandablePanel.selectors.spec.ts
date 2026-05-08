import { defineComponent } from "vue";
import { mount } from "@vue/test-utils";
import { FExpandablePanel } from "../components";
import { FExpandablePanelSelectors } from "./FExpandablePanel.selectors";

const FExpandablePanelComponent = defineComponent({
    template: /* HTML */ `
        <f-expandable-panel
            :id
            :expanded="localExpanded"
            :notifications
            @toggle="toggle"
        >
            <template #title> Titel </template>
            <template #default>
                <p>Innehåll</p>
            </template>
            <template v-if="showOutside" #outside>
                <p>Relaterat innehåll</p>
            </template>
        </f-expandable-panel>
    `,
    props: {
        id: {
            type: String,
            required: true,
        },
        expanded: {
            type: Boolean,
            default: false,
        },
        notifications: {
            type: Number,
            default: 0,
        },
        showOutside: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            localExpanded: this.expanded,
        };
    },
    methods: {
        toggle() {
            this.localExpanded = !this.localExpanded;
        },
    },
    components: {
        FExpandablePanel,
    },
});

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FExpandablePanelComponent, {
        props: { id: "my-panel" },
    });
    const { selector } = FExpandablePanelSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".expandable-panel");
    expect(root.classes()).toContain("expandable-panel");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(1);
    const { selector } = FExpandablePanelSelectors('[data-test="my-panel"]');
    expect(selector).toBe('[data-test="my-panel"]');
});

it("toggleButton() should return the heading button element", () => {
    expect.assertions(2);
    const wrapper = mount(FExpandablePanelComponent, {
        props: { id: "my-panel", expanded: false },
    });
    const { toggleButton } = FExpandablePanelSelectors();
    const el = wrapper.get(toggleButton());
    expect(el.element.tagName.toLowerCase()).toBe("button");
    expect(el.attributes("aria-expanded")).toBe("false");
});

it("expandCollapseIcon() should return the icon element", () => {
    expect.assertions(1);
    const wrapper = mount(FExpandablePanelComponent, {
        props: { id: "my-panel" },
    });
    const { expandCollapseIcon } = FExpandablePanelSelectors();
    expect(wrapper.find(expandCollapseIcon()).exists()).toBeTruthy();
});

it("body() should return the body element", () => {
    expect.assertions(2);
    const wrapper = mount(FExpandablePanelComponent, {
        props: { id: "my-panel" },
    });
    const { body } = FExpandablePanelSelectors();
    const el = wrapper.find(body());
    expect(el.exists()).toBeTruthy();
    expect(el.text()).toBe("Innehåll");
});

it("notification() should exist when notifications prop is set", () => {
    expect.assertions(1);
    const wrapper = mount(FExpandablePanelComponent, {
        props: { id: "my-panel", notifications: 3 },
    });
    const { notification } = FExpandablePanelSelectors();
    expect(wrapper.find(notification()).exists()).toBeTruthy();
});

it("notification() should not exist when notifications prop is zero", () => {
    expect.assertions(1);
    const wrapper = mount(FExpandablePanelComponent, {
        props: { id: "my-panel", notifications: 0 },
    });
    const { notification } = FExpandablePanelSelectors();
    expect(wrapper.find(notification()).exists()).toBeFalsy();
});

it("relatedInfo() should exist when outside slot is used", () => {
    expect.assertions(1);
    const wrapper = mount(FExpandablePanelComponent, {
        props: { id: "my-panel", showOutside: true },
    });
    const { relatedInfo } = FExpandablePanelSelectors();
    expect(wrapper.find(relatedInfo()).exists()).toBeTruthy();
});

it("relatedInfo() should not exist when outside slot is not used", () => {
    expect.assertions(1);
    const wrapper = mount(FExpandablePanelComponent, {
        props: { id: "my-panel" },
    });
    const { relatedInfo } = FExpandablePanelSelectors();
    expect(wrapper.find(relatedInfo()).exists()).toBeFalsy();
});
