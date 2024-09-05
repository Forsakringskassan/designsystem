import { FConfirmModal } from "../../components/FModal";
import { MaybeWithFKUIContext } from "../../config";
import { openModal } from "../open-modal";

/**
 * @public
 */
export interface confirmModalObject {
    heading: string;
    content: string;
    confirm: string;
    dismiss: string;
}

/**
 * @public
 */
export async function confirmModal(
    callingInstance: MaybeWithFKUIContext,
    modalData: confirmModalObject,
): Promise<boolean> {
    const buttons = [
        { label: modalData.confirm, event: "confirm", type: "primary" },
        { label: modalData.dismiss, event: "dismiss", type: "secondary" },
    ];
    const { reason } = await openModal(callingInstance, FConfirmModal, {
        props: {
            heading: modalData.heading,
            content: modalData.content,
            buttons,
        },
    });

    return reason === "confirm";
}
