import { type Component, getCurrentInstance } from "vue";
import { type MaybeWithFKUIContext } from "../config";
import {
    type AsyncModalResult,
    type ModalOptions,
    openModal,
} from "./open-modal";
import { type ConfirmModalTexts, confirmModal } from "./confirm-modal";
import { formModal } from "./form-modal";

/**
 * Composable to get access to modal functions.
 *
 * @public
 */
export interface UseModal {
    /**
     * Opens a modal using the given component.
     *
     * The component must adhere to the following rules:
     *
     * - Either be open by default or use a prop named `is-open` to toggle it.
     * - Emit the `close` event with the payload implementing `PartialResult<T>`.
     *
     * Props can be passed to the component using the options parameter.
     *
     * @param component - Vue component to render.
     * @param options - Component options.
     * @returns A promise resolved with reason for dismissal and optionally a
     * payload when the modal is closed.
     */
    openModal<T>(
        component: Component,
        options?: Partial<ModalOptions>,
    ): AsyncModalResult<T>;

    /**
     * Open a confirmation modal with given text.
     *
     * @public
     * @param texts - Texts to show in modal.
     * @returns A promise resolved with a `true` if modal was dismissed in a
     * positive manner ("Yes, I want to ...") or `false` if dismissed in a negative manner ("No, don't ...")
     */
    confirmModal(texts: ConfirmModalTexts): Promise<boolean>;

    /**
     * Open a form modal and return the results from the input fields.
     *
     * @param Component - Vue component to render.
     * @param options - Component options.
     * @returns A promise resolved with values from input fields or rejected if user cancels.
     */
    formModal<T>(
        component: Component,
        options?: Partial<ModalOptions>,
    ): Promise<T>;
}

/**
 * @public
 */
export function useModal(): UseModal {
    const instance = getCurrentInstance();
    if (!instance) {
        throw new Error(`useModal(..) used outside component scope`);
    }
    const context: MaybeWithFKUIContext = { $fkui: instance };
    return {
        openModal(component, options) {
            return openModal(context, component, options);
        },
        confirmModal(texts) {
            return confirmModal(context, texts);
        },
        formModal(component, options) {
            return formModal(context, component, options);
        },
    };
}
