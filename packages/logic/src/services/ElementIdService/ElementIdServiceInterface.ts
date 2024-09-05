/**
 * @public
 */
export interface ElementIdServiceInterface {
    /**
     * Returns an element id in the following format: `fkui-vue-element-<elementId>`.
     */
    generateElementId(prefix?: string): string;
    /**
     * Resets the internal state.
     */
    reset(): void;
}
