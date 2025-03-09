import "html-validate/jest";
import { mount, VueWrapper } from "@vue/test-utils";
import { type PropType, defineComponent } from "vue";
import flushPromises from "flush-promises";
import { createPlaceholderInDocument } from "@fkui/test-utils/vue";
import logic from "@fkui/logic";
import { ListItem } from "../../types";
import { FFormModal, FFormModalAction, FModal } from "../FModal";
import { FTextField } from "../FTextField";
import { type FValidationFormCallback } from "../FValidationForm";
import { ValidationPlugin } from "../../plugins";
import FCrudDataset from "./FCrudDataset.vue";
import FCrudButton from "./FCrudButton.vue";

jest.useFakeTimers();

afterEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
});

const ADD_TEMPLATE = /* HTML */ `
    <template #add="{ item }">
        <span> add </span>
        <input id="id-input" type="number" v-model.number="item.id" />
        <input id="name-input" type="text" v-model="item.name" />
    </template>
`;

const ADD_TEMPLATE_REQUIRED = /* HTML */ `
    <template #add="{ item }">
        <span> add </span>
        <f-text-field
            v-validation.required
            id="id-input-required"
            type="number"
            v-model.number="item.id"
        ></f-text-field>
        <f-text-field
            v-validation.required
            id="name-input-required"
            type="text"
            v-model="item.name"
        ></f-text-field>
        <input />
    </template>
`;

const MODIFY_TEMPLATE = /* HTML */ `
    <template #modify="{ item }">
        <span> modify </span>
        <input id="name-input" type="text" v-model="item.name" />
        <input id="child-name-input" type="text" v-model="item.child.name" />
    </template>
`;

const DELETE_TEMPLATE = /* HTML */ `
    <template #delete="{ item }">
        <span> delete </span>
        {{ item.name }}?
    </template>
`;

const TestComponent = defineComponent({
    name: "TestComponent",
    components: { FCrudDataset, FCrudButton, FModal, FTextField },
    props: {
        beforeSubmit: {
            type: Function as PropType<FValidationFormCallback>,
            required: false,
            default(): void {
                /* do nothing */
            },
        },
        beforeValidation: {
            type: Function as PropType<FValidationFormCallback>,
            required: false,
            default(): void {
                /* do nothing */
            },
        },
        onCancel: {
            type: Function as PropType<FValidationFormCallback>,
            required: false,
            default(): void {
                /* do nothing */
            },
        },
    },
    data() {
        return {
            items: [
                { id: 1, name: "a", child: { name: "a1" } },
                { id: 2, name: "b", child: { name: "b1" } },
                { id: 3, name: "c", child: { name: "c1" } },
            ],
            createdEventData: null as null | ListItem,
            updatedEventData: null as null | ListItem,
            deletedEventData: null as null | ListItem,
            showBeforeValidationMessage: false,
        };
    },
    methods: {
        onCreatedEvent(item: ListItem): void {
            this.createdEventData = item;
        },
        onUpdatedEvent(item: ListItem): void {
            this.updatedEventData = item;
        },
        onDeletedEvent(item: ListItem): void {
            this.deletedEventData = item;
        },
    },
});

function createWrapper(
    templates = new Array<string>(),
    { stubs = [] as string[], props = {} } = {},
): VueWrapper<InstanceType<typeof TestComponent>> {
    const templateStart = `
        <f-crud-dataset
            v-model="items"
            :on-cancel="onCancel"
            :before-validation="beforeValidation"
            :before-submit="beforeSubmit"
            @created="onCreatedEvent"
            @updated="onUpdatedEvent"
            @deleted="onDeletedEvent"
        >
            <template #default>
                <div id="cancelMessage">Modalen har stängts</div>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in items" :key="item.id">
                            <td>{{ item.id }}</td>
                            <td>{{ item.name }}</td>
                            <td>
                                <f-crud-button
                                    id="modifyButton"
                                    action="modify"
                                    :item="item"
                                    label
                                />
                            </td>
                            <td>
                                <f-crud-button
                                    id="deleteButton"
                                    action="delete"
                                    :item="item"
                                    label
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </template>
    `;
    const templateEnd = "</f-crud-dataset>";

    let templateMiddle = "";
    for (const t of templates) {
        templateMiddle += t;
    }
    const newComponent = defineComponent({
        template: templateStart.concat(templateMiddle).concat(templateEnd),
        extends: TestComponent,
    });

    return mount(newComponent, {
        global: {
            plugins: [ValidationPlugin],
            stubs: ["FIcon", ...stubs],
        },
        props,
        attachTo: createPlaceholderInDocument(),
    }) as VueWrapper<InstanceType<typeof TestComponent>>;
}

async function submitForm(wrapper: VueWrapper): Promise<void> {
    await wrapper.find(".modal form").trigger("submit");

    // hasFormErrors in FValidationForm
    await flushPromises(); // ValidationService.validateAllElements
    await wrapper.vm.$nextTick(); // FValidationForm.hasFormErrors.$nextTick
    await jest.runAllTimers(); // FValidationForm.hasFormErrors.setTimeout

    // hasFormErrors is called twice
    await flushPromises();
    await wrapper.vm.$nextTick();
    await jest.runAllTimers();

    await wrapper.vm.$nextTick(); // Remove modal from DOM
}

describe("snapshot", () => {
    it("should match snapshot", () => {
        const wrapper = createWrapper([ADD_TEMPLATE], {
            stubs: ["FFormModal", "FConfirmModal"],
        });
        expect(wrapper).toMatchSnapshot();
    });
});

it("should not show add button when #add slot is absent", () => {
    const template = /* HTML */ `
        <f-crud-dataset>
            <template #modify></template>
            <template #buttons="{ buttonClasses }">
                <button type="button" :class="buttonClasses">Foo</button>
                <button type="button" :class="buttonClasses">Bar</button>
            </template>
        </f-crud-dataset>
    `;
    const TestComponent = defineComponent({
        components: { FCrudDataset },
        template,
    });
    const wrapper = mount(TestComponent, { stubs: ["FConfirmModal", "FIcon"] });
    const buttons = wrapper.findAll(".crud-dataset__add-button");
    expect(buttons).toHaveLength(0);
});

it("should show add button when #add slot is present", () => {
    const template = /* HTML */ `
        <f-crud-dataset>
            <template #add></template>
        </f-crud-dataset>
    `;
    const TestComponent = defineComponent({
        components: { FCrudDataset },
        template,
    });
    const wrapper = mount(TestComponent, { stubs: ["FConfirmModal", "FIcon"] });
    const buttons = wrapper.findAll(".crud-dataset__add-button");
    expect(buttons).toHaveLength(1);
    expect(buttons.at(0)?.text()).toBe("Lägg till ny");
});

it("should show custom buttons when #add slot is present", () => {
    const template = /* HTML */ `
        <f-crud-dataset>
            <template #add></template>
            <template #buttons="{ buttonClasses }">
                <button type="button" :class="buttonClasses">Foo</button>
                <button type="button" :class="buttonClasses">Bar</button>
            </template>
        </f-crud-dataset>
    `;
    const TestComponent = defineComponent({
        components: { FCrudDataset },
        template,
    });
    const wrapper = mount(TestComponent, { stubs: ["FConfirmModal", "FIcon"] });
    const buttons = wrapper.findAll(".crud-dataset__add-button");
    expect(buttons).toHaveLength(3);
    expect(buttons.at(0)?.text()).toBe("Lägg till ny");
    expect(buttons.at(1)?.text()).toBe("Foo");
    expect(buttons.at(2)?.text()).toBe("Bar");
});

it("should show add modal when the add button is pressed", async () => {
    const wrapper = createWrapper(
        [ADD_TEMPLATE, MODIFY_TEMPLATE, DELETE_TEMPLATE],
        {
            stubs: ["FConfirmModal"],
        },
    );
    const button = wrapper.find(".crud-dataset__add-button");
    await button.trigger("click");
    expect(wrapper.find("form > span").text()).toBe("add");
});

it("should show modify modal when the modify button is pressed", async () => {
    const wrapper = createWrapper(
        [ADD_TEMPLATE, MODIFY_TEMPLATE, DELETE_TEMPLATE],
        {
            stubs: ["FConfirmModal"],
        },
    );
    const button = wrapper.find("#modifyButton");
    await button.trigger("click");
    expect(wrapper.find("form > span").text()).toBe("modify");
});

it("should show delete modal when the delete button is pressed", async () => {
    expect.assertions(2);
    const wrapper = createWrapper(
        [ADD_TEMPLATE, MODIFY_TEMPLATE, DELETE_TEMPLATE],
        {
            stubs: ["FConfirmModal"],
        },
    );

    const confirmModal = wrapper.find("f-confirm-modal-stub");
    expect(confirmModal.attributes()["isopen"]).toBe("false");
    const button = wrapper.find("#deleteButton");
    await button.trigger("click");
    expect(confirmModal.attributes()["isopen"]).toBe("true");
});

it("should add item", async () => {
    const alertScreenReader = jest.spyOn(logic, "alertScreenReader");

    const wrapper = createWrapper(
        [ADD_TEMPLATE, MODIFY_TEMPLATE, DELETE_TEMPLATE],
        {
            stubs: ["FConfirmModal"],
        },
    );
    await wrapper.find(".crud-dataset__add-button").trigger("click");

    await wrapper.find("#id-input").setValue(4);
    await wrapper.find("#name-input").setValue("d");
    await submitForm(wrapper);

    const modifiedItem = wrapper.vm.$data.items[3];
    expect(modifiedItem.name).toBe("d");
    expect(alertScreenReader).toHaveBeenCalledWith("En rad har lagts till", {
        assertive: true,
    });
});

it("should modify items", async () => {
    const alertScreenReader = jest.spyOn(logic, "alertScreenReader");

    const wrapper = createWrapper(
        [ADD_TEMPLATE, MODIFY_TEMPLATE, DELETE_TEMPLATE],
        {
            stubs: ["FConfirmModal"],
        },
    );
    await wrapper.find("#modifyButton").trigger("click");

    await wrapper.find("#name-input").setValue("test");
    await wrapper.find("#child-name-input").setValue("test child");

    await submitForm(wrapper);

    const modifiedItem = wrapper.vm.$data.items[0];
    expect(modifiedItem.name).toBe("test");
    expect(modifiedItem.child.name).toBe("test child");
    expect(alertScreenReader).toHaveBeenCalledWith("Raden har ändrats", {
        assertive: true,
    });
});

it("should not modify original item on cancel", async () => {
    const wrapper = createWrapper([MODIFY_TEMPLATE], {
        stubs: ["FConfirmModal"],
    });
    const originalItem = wrapper.vm.$data.items[0];

    await wrapper.find("#modifyButton").trigger("click");

    await wrapper.find("#name-input").setValue("test");
    await wrapper.find("#child-name-input").setValue("test child");

    wrapper.find(".button-group .button--secondary").trigger("click");
    await jest.runAllTimers();
    await flushPromises();

    const updatedItem = wrapper.vm.$data.items[0];
    expect(originalItem).toEqual(updatedItem);
});

it("should emit created event when items are added", async () => {
    const wrapper = createWrapper(
        [ADD_TEMPLATE, MODIFY_TEMPLATE, DELETE_TEMPLATE],
        {
            stubs: ["FConfirmModal"],
        },
    );
    await wrapper.find(".crud-dataset__add-button").trigger("click");

    await wrapper.find("#id-input").setValue(4);
    await wrapper.find("#name-input").setValue("d");
    await submitForm(wrapper);

    expect(wrapper.vm.$data.createdEventData?.id).toBe(4);
    expect(wrapper.vm.$data.createdEventData?.name).toBe("d");
});

it("should emit updated event when items are updated", async () => {
    const wrapper = createWrapper(
        [ADD_TEMPLATE, MODIFY_TEMPLATE, DELETE_TEMPLATE],
        {
            stubs: ["FConfirmModal"],
        },
    );
    await wrapper.find("#modifyButton").trigger("click");

    await wrapper.find("#name-input").setValue("test");
    await submitForm(wrapper);

    expect(wrapper.vm.$data.updatedEventData?.id).toBe(1);
    expect(wrapper.vm.$data.updatedEventData?.name).toBe("test");
});

it("should call :onCancel after cancel", async () => {
    const wrapper = createWrapper(
        [ADD_TEMPLATE, MODIFY_TEMPLATE, DELETE_TEMPLATE],
        {
            stubs: ["FConfirmModal"],
        },
    );

    await wrapper.find(".crud-dataset__add-button").trigger("click");

    wrapper.find(".button-group .button--secondary").trigger("click");
    await jest.runAllTimers();
    await flushPromises();

    expect(wrapper.find("#cancelMessage").text()).toBe("Modalen har stängts");
});

describe("beforeSubmit", () => {
    it('should call "beforeSubmit" when it is provided and submit button clicked', async () => {
        const beforeSubmit = jest.fn();
        const wrapper = createWrapper(
            [ADD_TEMPLATE, MODIFY_TEMPLATE, DELETE_TEMPLATE],
            {
                stubs: ["FConfirmModal"],
                props: {
                    isOpen: true,
                    beforeSubmit: beforeSubmit,
                },
            },
        );
        await wrapper.find(".crud-dataset__add-button").trigger("click");

        expect(beforeSubmit).toHaveBeenCalledTimes(0);

        await submitForm(wrapper);

        expect(beforeSubmit).toHaveBeenCalledTimes(1);
    });

    it("should not emit submit when beforeSubmit returns CANCEL", async () => {
        function onBeforeSubmit(): FFormModalAction {
            return FFormModalAction.CANCEL;
        }
        const wrapper = createWrapper(
            [ADD_TEMPLATE, MODIFY_TEMPLATE, DELETE_TEMPLATE],
            {
                stubs: ["FConfirmModal"],
                props: {
                    isOpen: true,
                    beforeSubmit: onBeforeSubmit,
                },
            },
        );

        await wrapper.find(".crud-dataset__add-button").trigger("click");
        await submitForm(wrapper);

        expect(
            wrapper
                .findComponent(FCrudDataset)
                .findComponent(FFormModal)
                .emitted().submit,
        ).toBeFalsy();
    });

    it("should emit submit when beforeSubmit returns CONTINUE", async () => {
        function onBeforeSubmit(): FFormModalAction {
            return FFormModalAction.CONTINUE;
        }
        const wrapper = createWrapper(
            [ADD_TEMPLATE, MODIFY_TEMPLATE, DELETE_TEMPLATE],
            {
                stubs: ["FConfirmModal"],
                props: {
                    isOpen: true,
                    beforeSubmit: onBeforeSubmit,
                },
            },
        );

        await wrapper.find(".crud-dataset__add-button").trigger("click");
        await submitForm(wrapper);

        expect(
            wrapper
                .findComponent(FCrudDataset)
                .findComponent(FFormModal)
                .emitted().submit,
        ).toBeTruthy();
    });

    it("should emit submit when beforeSubmit returns undefined", async () => {
        function onBeforeSubmit(): void {
            return;
        }
        const wrapper = createWrapper(
            [ADD_TEMPLATE, MODIFY_TEMPLATE, DELETE_TEMPLATE],
            {
                stubs: ["FConfirmModal"],
                props: {
                    isOpen: true,
                    beforeSubmit: onBeforeSubmit,
                },
            },
        );

        await wrapper.find(".crud-dataset__add-button").trigger("click");
        await submitForm(wrapper);

        expect(
            wrapper
                .findComponent(FCrudDataset)
                .findComponent(FFormModal)
                .emitted().submit,
        ).toBeTruthy();
    });

    it("should emit submit when beforeSubmit props not set (default)", async () => {
        const wrapper = createWrapper(
            [ADD_TEMPLATE, MODIFY_TEMPLATE, DELETE_TEMPLATE],
            {
                stubs: ["FConfirmModal"],
                props: {
                    isOpen: true,
                },
            },
        );

        await wrapper.find(".crud-dataset__add-button").trigger("click");
        await submitForm(wrapper);

        expect(
            wrapper
                .findComponent(FCrudDataset)
                .findComponent(FFormModal)
                .emitted().submit,
        ).toBeTruthy();
    });
});

it("should call before validation", async () => {
    const beforeValidation = jest.fn();
    const wrapper = createWrapper(
        [ADD_TEMPLATE_REQUIRED, MODIFY_TEMPLATE, DELETE_TEMPLATE],
        {
            stubs: ["FConfirmModal"],
            props: {
                isOpen: true,
                beforeValidation: beforeValidation,
            },
        },
    );
    await wrapper.find(".crud-dataset__add-button").trigger("click");

    await wrapper.find("#id-input-required").setValue("");
    await wrapper.find("#name-input-required").setValue("");

    expect(beforeValidation).toHaveBeenCalledTimes(0);
    await submitForm(wrapper);
    expect(beforeValidation).toHaveBeenCalledTimes(1);
    expect(
        wrapper.findComponent(FCrudDataset).findComponent(FFormModal).emitted()
            .submit,
    ).toBeFalsy();
});

describe("onCancel", () => {
    it("should be called on cancel-event emitted", async () => {
        const onCancel = jest.fn();
        const wrapper = createWrapper(
            [ADD_TEMPLATE, MODIFY_TEMPLATE, DELETE_TEMPLATE],
            {
                stubs: ["FConfirmModal"],
                props: {
                    isOpen: true,
                    onCancel: onCancel,
                },
            },
        );
        await wrapper.find(".crud-dataset__add-button").trigger("click");

        expect(onCancel).toHaveBeenCalledTimes(0);

        wrapper
            .findComponent(FCrudDataset)
            .findComponent(FFormModal)
            .vm.$emit("cancel");

        expect(onCancel).toHaveBeenCalledTimes(1);
    });

    it("should be called on close-button clicked", async () => {
        const onCancel = jest.fn();
        const wrapper = createWrapper(
            [ADD_TEMPLATE, MODIFY_TEMPLATE, DELETE_TEMPLATE],
            {
                stubs: ["FConfirmModal"],
                props: {
                    isOpen: true,
                    onCancel: onCancel,
                },
            },
        );
        await wrapper.find(".crud-dataset__add-button").trigger("click");

        expect(onCancel).toHaveBeenCalledTimes(0);

        wrapper.find(".close-button").trigger("click");

        expect(onCancel).toHaveBeenCalledTimes(1);
    });

    it("should be called on cancel-button clicked", async () => {
        const onCancel = jest.fn();
        const wrapper = createWrapper(
            [ADD_TEMPLATE, MODIFY_TEMPLATE, DELETE_TEMPLATE],
            {
                stubs: ["FConfirmModal"],
                props: {
                    isOpen: true,
                    onCancel: onCancel,
                },
            },
        );
        await wrapper.find(".crud-dataset__add-button").trigger("click");

        expect(onCancel).toHaveBeenCalledTimes(0);

        wrapper.find(".button-group .button--secondary").trigger("click");

        expect(onCancel).toHaveBeenCalledTimes(1);
    });
});

describe("html-validate", () => {
    it("should require default slot", () => {
        expect("<f-crud-dataset></f-crud-dataset>").not.toHTMLValidate({
            message:
                '<f-crud-dataset> component requires slot "default" to be implemented',
        });
    });

    it("should html-validate", () => {
        expect(
            "<f-crud-dataset><template #default></template></f-crud-dataset>",
        ).toHTMLValidate();
    });
});
