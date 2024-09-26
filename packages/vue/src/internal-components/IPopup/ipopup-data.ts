import { type StackHandle } from "@fkui/logic";
import { Placement } from "./IPopupUtils";

/**
 * @public
 */
export interface IPopupData {
    teleportDisabled: boolean;
    placement: Placement;
    focus: StackHandle | null;
    noCloseOnResize: boolean;
}
