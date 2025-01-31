import { FConfirmModal } from "../../components/FModal";
import { MaybeWithFKUIContext } from "../../config";
import { openModal } from "../open-modal";

/**
 * @public
 */
export interface ConfirmModalTexts {
    heading: string;
    content: string;
    confirm: string;
    dismiss: string;
}

/**
 * Open a confirmation modal with given text.
 *
 * @public
 * @param texts - Texts to show in modal.
 * @returns A promise resolved with a `true` if modal was dismissed in a
 * positive manner ("Yes, I want to ...") or `false` if dismissed in a negative manner ("No, don't ...")
 */
export async function confirmModal(
    callingInstance: MaybeWithFKUIContext,
    texts: ConfirmModalTexts,
): Promise<boolean> {
    const buttons = [
        { label: texts.confirm, event: "confirm", type: "primary" },
        { label: texts.dismiss, event: "dismiss", type: "secondary" },
    ];
    const { reason } = await openModal(callingInstance, FConfirmModal, {
        props: {
            heading: texts.heading,
            content: texts.content,
            buttons,
        },
    });

    return reason === "confirm";
}
