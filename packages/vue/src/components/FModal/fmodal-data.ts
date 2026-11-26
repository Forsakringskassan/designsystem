import { type StackHandle } from "@fkui/logic";

/**
 * @public
 */
export interface FModalData {
    nonModalFocusableElements: HTMLElement[];
    savedFocus: StackHandle | null;
    savedScroll: number | null;
}
