import { Placement } from "../IPopup";

/**
 * @public
 */
export interface IPopupErrorData {
    teleportDisabled: boolean;
    placement: Placement;
    arrowPosition: string;
    arrowOffset: number;
}
