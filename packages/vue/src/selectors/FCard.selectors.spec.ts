import { defineComponent } from "vue";
import { mount } from "@vue/test-utils";
import { FCard } from "../components";
import { FCardSelectors } from "./FCard.selectors";

const FCardComponent = defineComponent({
    template: /* HTML */ `
        <f-card>
            <template #header="{ headingSlotClass }">
                <h3 :class="headingSlotClass">Rubrik</h3>
            </template>
            <template #default>
                <p>Innehåll</p>
            </template>
            <template #footer>
                <div>Fot</div>
            </template>
        </f-card>
    `,
    props: {},
    components: {
        FCard,
    },
});

it("should use default selector when no selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FCardComponent);
    const { selector } = FCardSelectors();
    const root = wrapper.get(selector);
    expect(selector).toBe(".card");
    expect(root.classes()).toContain("card");
});

it("should use explicit selector when custom selector was given", () => {
    expect.assertions(2);
    const wrapper = mount(FCardComponent, {
        attrs: { "data-test": "my-card" },
    });
    const { selector } = FCardSelectors('[data-test="my-card"]');
    const root = wrapper.get(selector);
    expect(selector).toBe('[data-test="my-card"]');
    expect(root.classes()).toContain("card");
});

it("header() should return the header element", () => {
    expect.assertions(1);
    const wrapper = mount(FCardComponent);
    const { header } = FCardSelectors();
    expect(wrapper.get(header()).text()).toContain("Rubrik");
});

it("content() should return the content element", () => {
    expect.assertions(1);
    const wrapper = mount(FCardComponent);
    const { content } = FCardSelectors();
    expect(wrapper.get(content()).text()).toBe("Innehåll");
});

it("footer() should exist when footer slot is used", () => {
    expect.assertions(1);
    const wrapper = mount(FCardComponent);
    const { footer } = FCardSelectors();
    expect(wrapper.find(footer()).exists()).toBeTruthy();
});

it("errorMessage() should not exist by default", () => {
    expect.assertions(1);
    const wrapper = mount(FCardComponent);
    const { errorMessage } = FCardSelectors();
    expect(wrapper.find(errorMessage()).exists()).toBeFalsy();
});
