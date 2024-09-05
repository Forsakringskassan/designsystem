import { ComponentValidityEvent } from "./ComponentValidityEvent";

/**
 * @public
 */
export interface GroupValidityEvent {
    isValid: boolean;
    componentsWithError: ComponentValidityEvent[];
    componentCount: number;
}
