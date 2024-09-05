/**
 * @public
 */
export interface FDialogueTreeSubQuestion {
    label: string;
    options: FDialogueTreeOption[];
}

/**
 * @public
 */
export interface FDialogueTreeEndQuestion {
    label: string;
    /* Step information */
    userData: unknown;
}

/**
 * @public
 */
export type FDialogueTreeQuestion =
    | FDialogueTreeSubQuestion
    | FDialogueTreeEndQuestion;

/**
 * Each option leads to a new question
 * @public
 */
export interface FDialogueTreeOption {
    label: string;
    question: FDialogueTreeQuestion;
}

/**
 * User progress for the Dialogue Tree.
 * Stores information regarding the options the user has made.
 * @public
 */
export interface FDialogueTreeUserProgress {
    /* Title for last clicked option*/
    label: string;

    /* If the user has reached the last step */
    lastStep: boolean;

    /* Step progress */
    steps: number[];
}

/**
 * Checks if question is an end or sub question
 * @public
 */
export function isDialogueTreeEndQuestion(
    value: Partial<FDialogueTreeEndQuestion>,
): value is FDialogueTreeEndQuestion {
    return Boolean(value.userData);
}
