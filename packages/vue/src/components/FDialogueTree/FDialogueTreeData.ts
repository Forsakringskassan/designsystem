import { type FDialogueTreeQuestion } from "./FDialogueTreeModel";

/**
 * @public
 */
export interface FDialogueTreeData {
    currentStep: FDialogueTreeQuestion;
    steps: number[];
}
