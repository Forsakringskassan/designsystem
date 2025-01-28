import { config, FKUIConfigButtonOrder } from "../../config";

/**
 * @public
 */
export interface FModalButtonDescriptor {
    label: string;
    /** Additional text to present for a screenreader after ordinary text */
    screenreader?: string;
    event?: string;
    reason?: string;
    type: "primary" | "secondary";
    submitButton?: boolean;
}

/**
 * @public
 */
export interface FModalButton {
    label: string;
    /** Additional text to present for a screenreader after ordinary text */
    screenreader?: string;
    event: string;
    reason: string;
    classlist: string[];
    buttonType: "button" | "submit";
}

/**
 * @internal
 */
export function getButtonType(
    descriptor: FModalButtonDescriptor,
    index: number,
    all: FModalButtonDescriptor[],
    mode: "auto" | "explicit",
): "button" | "submit" {
    /* explicitly marked as submit */
    if (descriptor.submitButton === true) {
        return "submit";
    }

    /* explicitly marked as not submit */
    if (descriptor.submitButton === false) {
        return "button";
    }

    /* unless automatically determining submit buttons all non-explicit submit
     * buttons are regular buttons */
    if (mode === "explicit") {
        return "button";
    }

    /* if there is one or more explicitly marked button this is a regular button
     * as it would otherwise have returned earlier in the function */
    const numExplicit = all.filter((it) => it.submitButton === true).length;
    if (numExplicit > 0) {
        return "button";
    }

    /* if there is exactly one primary button and this button is the one set
     * this to be the submit button */
    const numPrimary = all.filter((it) => it.type === "primary").length;
    if (numPrimary === 1) {
        if ( descriptor.type === "primary") {
            return "submit";
        } else {
            return "button";
        }
    }

    /* if there is no explicit submit or any primary buttons the first button is
     * assumed to be a submit button */
    if (index === 0) {
        return "submit";
    }

    /* default to regular button */
    return "button";
}

/**
 * @internal
 */
export function normalizeButtonList(
    src: FModalButtonDescriptor[],
    {
        submit = "explicit",
        buttonOrder = config.buttonOrder,
    }: {
        buttonOrder?: FKUIConfigButtonOrder;
        submit?: "explicit" | "auto";
    } = {},
): FModalButton[] {
    const list: FModalButton[] = src.map((it, index) => ({
        label: it.label,
        screenreader: it.screenreader,
        event: it.event ?? "dismiss",
        reason: it.reason ?? it.event ?? "dismiss",
        classlist: ["button", `button--${it.type ?? "secondary"}`],
        buttonType: getButtonType(it, index, src, submit),
    }));

    switch (buttonOrder) {
        case FKUIConfigButtonOrder.LEFT_TO_RIGHT:
            return list;
        case FKUIConfigButtonOrder.RIGHT_TO_LEFT:
            return list.reverse();
    }
}
