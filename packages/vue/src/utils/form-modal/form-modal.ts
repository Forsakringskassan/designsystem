import { type MaybeWithFKUIContext } from "../../config";
import { type MaybeComponent } from "../maybe-component";
import { openModal } from "../open-modal/open-modal";
import { type ModalOptions } from "./modal-options";

/**
 * @public
 */
export type MaybeOptions = Partial<ModalOptions>;

/**
 * Open a form modal and return the results from the input fields.
 *
 * @public
 * @param callingInstance - Calling component.
 * @param Component - Vue component to render.
 * @param options - Component options.
 * @returns A promise resolved with values from input fields or rejected if user cancels.
 */
export async function formModal<T>(
    callingInstance: MaybeWithFKUIContext,
    Component: MaybeComponent,
    options?: MaybeOptions,
): Promise<T> {
    const props = {
        size: options?.size ?? "",
        ...options?.props,
    };
    const result = await openModal<T>(callingInstance, Component, {
        props,
    });
    if (result.reason === "submit") {
        return result.data;
    } else {
        /* eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors -- technical debt */
        return Promise.reject("cancel");
    }
}
