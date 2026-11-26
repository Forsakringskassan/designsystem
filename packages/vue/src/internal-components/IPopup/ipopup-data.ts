import { type StackHandle } from "@fkui/logic";
import { type Placement } from "./i-popup-utils";

/**
 * @public
 */
export interface IPopupData {
    teleportDisabled: boolean;
    placement: Placement;
    focus: StackHandle | null;
    anchorOffset: { x: number; y: number } | null;
}
