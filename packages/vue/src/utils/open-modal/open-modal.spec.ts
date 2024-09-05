import flushPromises from "flush-promises";
import { type VNodeArrayChildren, defineComponent, h } from "vue";
import { MaybeWithFKUIContext } from "../../config";
import { openModal } from "./open-modal";

const callingInstance = { $fkui: {} } as MaybeWithFKUIContext;

interface MockProps {
    isOpen: boolean;
}

const MockModal = defineComponent({
    props: ["content", "isOpen", "payload", "reason"],
    render() {
        function createButtonElement(
            text: string,
            click: () => void,
        ): ReturnType<typeof h> {
            return h("button", { onClick: click }, text);
        }
        const props: MockProps = {
            isOpen: this.isOpen,
        };
        const data = {
            id: "my-fancy-dialog",
            "data-props": JSON.stringify(props),
        };
        const children: VNodeArrayChildren = [
            h("span", this.content ?? "A descriptive text"),
            createButtonElement("Close me!", () => {
                const haveData = this.payload || this.reason;
                this.$emit(
                    "close",
                    haveData
                        ? { data: this.payload, reason: this.reason }
                        : undefined,
                );
            }),
        ];
        return h("dialog", data, children);
    },
});

class PageObject {
    private container: HTMLElement;

    public constructor(container: HTMLElement) {
        this.container = container;
    }

    public get element(): HTMLElement | null {
        return this.container.querySelector("dialog");
    }

    public get content(): HTMLElement | null {
        return this.container.querySelector("dialog > span");
    }

    public get closeButton(): HTMLElement | null {
        return this.element?.querySelector("button") ?? null;
    }

    public exists(): boolean {
        return this.element !== null;
    }

    public props(): MockProps {
        return JSON.parse(this.element?.dataset.props ?? "{}");
    }
}

it("should attach modal to given parent when opened", async () => {
    expect.assertions(2);
    const container = document.createElement("div");
    openModal(callingInstance, MockModal, { attachTo: container });
    const modal = new PageObject(container);
    expect(modal.exists()).toBeTruthy();
    expect(modal.element).toBeInstanceOf(HTMLElement);
    modal.closeButton?.click();
    await flushPromises();
});

it("should remove modal from given parent when closed", async () => {
    expect.assertions(2);
    const container = document.createElement("div");
    openModal(callingInstance, MockModal, { attachTo: container });
    const modal = new PageObject(container);
    modal.closeButton?.click();
    await flushPromises();
    expect(modal.exists()).toBeFalsy();
    expect(modal.element).toBeNull();
});

it("should set isOpen to true", async () => {
    expect.assertions(1);
    const container = document.createElement("div");
    openModal(callingInstance, MockModal, { attachTo: container });
    const modal = new PageObject(container);
    const props = modal.props();
    expect(props.isOpen).toBe(true);
    modal.closeButton?.click();
    await flushPromises();
});

it("should resolve promise when close is emitted", async () => {
    expect.assertions(1);
    const container = document.createElement("div");
    const promise = openModal(callingInstance, MockModal, {
        attachTo: container,
        props: { payload: "foobar" },
    });
    const modal = new PageObject(container);
    modal.closeButton?.click();
    await expect(promise).resolves.toEqual({
        reason: "close",
        data: "foobar",
    });
});

it('should use "close" as default reason in resolved object', async () => {
    expect.assertions(1);
    const container = document.createElement("div");
    const promise = openModal(callingInstance, MockModal, {
        attachTo: container,
    });
    const modal = new PageObject(container);
    modal.closeButton?.click();
    await expect(promise).resolves.toEqual({
        reason: "close",
        data: undefined,
    });
});

it("should include custom reason in resolved object", async () => {
    expect.assertions(1);
    const container = document.createElement("div");
    const promise = openModal(callingInstance, MockModal, {
        attachTo: container,
        props: { reason: "foobar" },
    });
    const modal = new PageObject(container);
    modal.closeButton?.click();
    await expect(promise).resolves.toEqual({
        reason: "foobar",
        data: undefined,
    });
});

it("should support shorthand syntax", async () => {
    expect.assertions(1);
    openModal(callingInstance, MockModal, "my custom text");
    const modal = new PageObject(document.body);
    expect(modal.content?.textContent).toBe("my custom text");
    modal.closeButton?.click();
    await flushPromises();
});
