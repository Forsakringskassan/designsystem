const DayStep = {
    ArrowRight: 1,
    ArrowLeft: -1,
    ArrowUp: -7,
    ArrowDown: 7,
};

/**
 * @internal
 */
export function isDayStepKey(
    e: KeyboardEvent,
): e is KeyboardEvent & { code: keyof typeof DayStep } {
    return Object.keys(DayStep).includes(e.code);
}

/**
 * Returns number of day steps to increment or decrement current day based on arrow navigation.
 *
 * This function is based on default month navigation where left or right arrows navigates
 * one day step, while up or down arrows navigates one week.
 *
 * @internal
 */
export function getDayStep(
    keyBoardEvent: KeyboardEvent & { code: keyof typeof DayStep },
): number {
    return DayStep[keyBoardEvent.code];
}
