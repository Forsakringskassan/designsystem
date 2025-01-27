import { mountComponent } from "../mount-component";
import { MaybeWithFKUIContext, config } from "../../config";
import { MaybeComponent } from "../maybe-component";
import { type ModalResult, type AsyncModalResult } from "./modal-result";
import { type ModalOptions } from "./modal-options";

/**
 * @public
 */
export type MaybeOptions = Partial<ModalOptions>;

type PartialResult<T = void> = Partial<ModalResult<T>>;

function unpackPayload<T = void>(
    event: string,
    src: PartialResult<T>,
): ModalResult<T> {
    const defaultPayload: PartialResult<T> = {};
    const { reason = event, data: rawData } = src ?? defaultPayload;
    /* this cast is needed when the caller lies about T, there is no sane way to
     * verify the type of the emitted event matches the caller requested type so
     * might as well just cast it. */
    const data: T = rawData as T;
    return { reason, data };
}

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
 * @public
 *
 * @param component - Vue component to render.
 * @param options - Component options.
 * @returns A promise resolved with reason for dismissal and optionally a
 * payload when the modal is closed.
 */
export function openModal<T = void>(
    callingInstance: MaybeWithFKUIContext,
    Component: MaybeComponent,
    text: string,
): AsyncModalResult<T>;

/**
 * @public
 */
export function openModal<T = void>(
    callingInstance: MaybeWithFKUIContext,
    Component: MaybeComponent,
    options?: MaybeOptions,
): AsyncModalResult<T>;

export function openModal<T = void>(
    callingInstance: MaybeWithFKUIContext,
    Component: MaybeComponent,
    options?: string | MaybeOptions,
): AsyncModalResult<T> {
    if (typeof options === "string") {
        return openModal(callingInstance, Component, {
            props: {
                content: options,
            },
        });
    }

    const defaultOptions: ModalOptions = {
        attachTo: config.teleportTarget,
        props: {},
    };
    const { attachTo, props } = { ...defaultOptions, ...options };

    return new Promise((resolve, reject) => {
        const terminate = (event: string, payload: PartialResult<T>): void => {
            try {
                const result = unpackPayload(event, payload);
                app.unmount();
                resolve(result);
            } catch (err) /* istanbul ignore next */ {
                /* eslint-disable-next-line no-console -- expected to log */
                console.error(err);
                reject(err);
            }
        };
        const app = mountComponent(callingInstance, Component, {
            attachTo,
            isOpen: true,
            onClose(data: PartialResult<T>) {
                terminate("close", data);
            },
            ...props,
        });
    });
}
