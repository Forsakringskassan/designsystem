/**
 * @public
 */
export function isAlphanumeric(keyCode: number): boolean {
    // incomplete: also should include Swedish å, ä, ö plus numpad keycodes
    // move to Vue
    // use this code instead: github.com/mui/mui-x/blob/master/packages/x-data-grid/src/utils/keyboardUtils.ts
    // return event.key.length === 1 && !event.ctrlKey && !event.metaKey;
    return (keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90);
}
