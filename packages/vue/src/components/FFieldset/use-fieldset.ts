import { inject } from "vue";
import { type InjectionKeyTable } from "../../types";

/**
 * API for interacting with a {@link FFieldset}  component.
 *
 * Use {@link useFieldset} to inject the API from the closest `FFieldset`.
 *
 * @public
 */
export interface FFieldsetAPI {
    /**
     * Get the fieldset name if present.
     *
     * Defaults to `undefined`.
     */
    readonly sharedName: string | undefined;

    /**
     * Get the visibility behaviour for the fieldset details slot.
     *
     * Defaults to `"never"`.
     */
    readonly showDetails: "never" | "when-selected" | "always";

    /**
     * Get the fieldset label text (rendered).
     *
     * @see {@link renderSlotText} for details about how the label slot is rendered.
     *
     * Defaults to returning `undefined`.
     */
    getFieldsetLabelText(): string | undefined;
}

/**
 * @internal
 */
export const injectionKeys: InjectionKeyTable<FFieldsetAPI> = {
    sharedName: Symbol("sharedName"),
    showDetails: Symbol("showDetails"),
    getFieldsetLabelText: Symbol("getFieldsetLabelText"),
};

/**
 * Inject the closest {@link FFieldset} API.
 *
 * If there is no `FFieldset` ancestor all injected calls return default values.
 *
 * @public
 */
export function useFieldset(): FFieldsetAPI {
    return {
        sharedName: inject(injectionKeys.sharedName, undefined),
        showDetails: inject(injectionKeys.showDetails, "never"),
        getFieldsetLabelText: inject(
            injectionKeys.getFieldsetLabelText,
            () => undefined,
        ),
    };
}
