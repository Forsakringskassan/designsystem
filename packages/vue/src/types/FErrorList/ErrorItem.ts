/**
 * @public
 */
export interface ErrorItem {
    /**
     * Error title.
     */
    title: string;
    /**
     * Id of the element to scroll to (and focus on if not `focusElementId` is set).
     */
    id?: string;
    /**
     * Id of the element to focus on. If undefined or not found, `id` is used as fallback.
     */
    focusElementId?: string;
}
