import { type FDialogueTreeQuestion } from "./f-dialogue-tree-model";

/**
 * @public
 */
export interface FDialogueTreeData {
    currentStep: FDialogueTreeQuestion;
    steps: number[];
}
