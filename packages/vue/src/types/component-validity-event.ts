import { type ValidityEvent } from "@fkui/logic";

/**
 * @public
 */
export interface ComponentValidityEvent extends ValidityEvent {
    focusElementId: string;
    errorMessage: string;
}

/**
 * @public
 */
export interface ComponentUnmountEvent {
    elementId: string;
}
