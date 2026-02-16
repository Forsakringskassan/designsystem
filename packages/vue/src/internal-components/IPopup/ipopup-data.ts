import { type StackHandle } from "@fkui/logic";
import { type Placement } from "./i-popup-utils";

/**
 * @public
 * @deprecated Not used anymore since migration to composition API. Deprecated since %version%.
 */
export interface IPopupData {
    teleportDisabled: boolean;
    placement: Placement;
    focus: StackHandle | null;
}
