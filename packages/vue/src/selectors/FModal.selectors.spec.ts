import { defineComponent, h, nextTick } from "vue";
import { afterEach, beforeEach, expect, it } from "vitest";
import { FConfirmModal } from "../components";
import { type MaybeWithFKUIContext, config } from "../config";
import { confirmModal, openModal } from "../utils";
import { FModalSelectors } from "./FModal.selectors";

const callingInstance = { $fkui: {} } as MaybeWithFKUIContext;
const originalTeleportTarget = config.teleportTarget;

let container: HTMLElement;
let pending: Promise<unknown> | undefined;

beforeEach(() => {
    container = document.createElement("div");
    document.body.append(container);
    config.teleportTarget = container;
});

afterEach(async () => {
    /* close any modal still open so the app is unmounted */
    container
        .querySelector<HTMLElement>(".modal__shelf > .close-button")
        ?.click();
    await pending;
    pending = undefined;
    container.remove();
    config.teleportTarget = originalTeleportTarget;
});

/**
 * Get the root element of the opened modal (the element with the `modal`
 * class), used as `:scope` when querying with the default selector.
 */
function getModalRoot(): Element {
    const root = container.querySelector(".modal");
    if (!root) {
        throw new Error("Modal is not open");
    }
    return root;
}

function query(selector: string): Element | null {
    return getModalRoot().querySelector(selector);
}

/**
 * Open a modal using `confirmModal()` and wait for it to finish opening.
 */
async function openConfirmModal(): Promise<void> {
    pending = confirmModal(callingInstance, {
        heading: "Lorem ipsum",
        content: "Dolor sit amet",
        confirm: "Bekräfta",
        dismiss: "Avbryt",
    });
    await nextTick();
}

it("should use default selector when no selector was given", async () => {
    expect.assertions(2);
    await openConfirmModal();
    const { selector } = FModalSelectors();
    expect(selector).toBe(":scope");
    expect(getModalRoot().matches(selector)).toBeTruthy();
});

it("should handle explicit selector (data-test attribute)", async () => {
    expect.assertions(2);
    /* eslint-disable-next-line @typescript-eslint/no-unsafe-argument -- false positives, the proper type of vue components are not passed to typescript-eslint */
    pending = openModal(callingInstance, FConfirmModal, {
        props: { "data-test": "my-modal" },
    });
    await nextTick();
    const { selector } = FModalSelectors('[data-test="my-modal"]');
    const root = document.querySelector(selector);
    expect(selector).toBe('[data-test="my-modal"]');
    expect(root?.classList).toContain("modal");
});

it("dialog() should return the dialog element", async () => {
    expect.assertions(1);
    await openConfirmModal();
    const { dialog } = FModalSelectors();
    expect(query(dialog())).not.toBeNull();
});

it("header() should return the header element", async () => {
    expect.assertions(1);
    await openConfirmModal();
    const { header } = FModalSelectors();
    expect(query(header())?.textContent.trim()).toBe("Lorem ipsum");
});

it("content() should return the content element", async () => {
    expect.assertions(1);
    await openConfirmModal();
    const { content } = FModalSelectors();
    expect(query(content())?.textContent.trim()).toBe("Dolor sit amet");
});

it("footer() should return the footer element", async () => {
    expect.assertions(1);
    await openConfirmModal();
    const { footer } = FModalSelectors();
    const labels = Array.from(
        query(footer())?.querySelectorAll("button") ?? [],
        (it) => it.textContent.trim(),
    );
    expect(labels.toSorted((a, b) => a.localeCompare(b))).toEqual([
        "Avbryt",
        "Bekräfta",
    ]);
});

it("closeButton() should return the close button of the modal", async () => {
    expect.assertions(2);
    /* custom modal with a decoy close button in the content */
    const DecoyModal = defineComponent({
        emits: ["close"],
        setup(_props, { emit }) {
            return () =>
                h(
                    FConfirmModal,
                    {
                        isOpen: true,
                        heading: "Lorem ipsum",
                        onClose: (payload: unknown) => {
                            emit("close", payload);
                        },
                    },
                    {
                        content: () =>
                            h(
                                "button",
                                {
                                    type: "button",
                                    class: "close-button",
                                    onClick: () => {
                                        emit("close", { reason: "decoy" });
                                    },
                                },
                                "Decoy",
                            ),
                    },
                );
        },
    });
    const result = openModal(callingInstance, DecoyModal);
    pending = result;
    await nextTick();
    const { closeButton } = FModalSelectors();
    const buttons = getModalRoot().querySelectorAll<HTMLElement>(closeButton());
    expect(buttons).toHaveLength(1);
    buttons[0].click();
    await expect(result).resolves.toEqual({ reason: "close" });
});
