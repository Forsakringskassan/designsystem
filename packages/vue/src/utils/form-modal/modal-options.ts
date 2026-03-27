/**
 * @public
 */
export interface ModalOptions {
    /** Modal size */
    size: "large" | "fullscreen";
    /** Modal props */
    props: Record<string, unknown | undefined>;
}
