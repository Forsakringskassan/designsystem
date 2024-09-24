import { type FValidationFormCallback } from "../../components/FValidationForm/types";

/**
 * @public
 */
export interface ModalOptions {
    /** Modal size */
    size: "large" | "fullscreen";
    /** Modal beforeSubmit callback */
    beforeSubmit?: FValidationFormCallback;
    /** Modal props */
    props: Record<string, unknown | undefined>;
}
