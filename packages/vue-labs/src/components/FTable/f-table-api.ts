/**
 * {@link FTable} public api. Exposed in template reference.
 *
 * ```
 * const tableRef = useTemplateRef("table");
 * ```
 *
 * @public
 */
export interface FTableApi {
    /**
     * Alters tabstop behaviour during action.
     * Typically used during single row removal to put focus on cell nearby.
     * Default behaviour is to reset tabstop on removal (focus on first cell).
     */
    withTabstopBehaviour(
        behaviour: "default" | "row-removal",
        action: () => void | Promise<void>,
    ): Promise<void>;
}
