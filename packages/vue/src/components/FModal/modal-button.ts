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
 * @public
 */
export function prepareButtonList(
    src: FModalButtonDescriptor[],
): FModalButton[] {
    return src.map((it) => ({
        label: it.label,
        screenreader: it.screenreader,
        event: it.event ?? "dismiss",
        reason: it.reason ?? it.event ?? "dismiss",
        classlist: ["button", `button--${it.type ?? "secondary"}`],
        buttonType: it.submitButton ? "submit" : "button",
    }));
}
