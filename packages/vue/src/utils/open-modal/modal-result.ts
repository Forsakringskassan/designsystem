import { ModalReason } from "./modal-reason";

/**
 * @public
 */
export interface ModalResult<T = void> {
    /**
     * The reason the modal was closed.
     *
     * Can be one of the predefined reasons or an arbitrary string.
     */
    reason: ModalReason | string;

    /**
     * Payload data from the modal, the meaning of this data varies from modal
     * to modal.
     */
    data: T;
}

/**
 * @public
 */
export type AsyncModalResult<T> = Promise<ModalResult<T>>;
