import { type StackHandle } from "@fkui/logic";
import { type Placement } from "./IPopupUtils";

/**
 * @public
 */
export interface IPopupData {
    teleportDisabled: boolean;
    placement: Placement;
    focus: StackHandle | null;
}
