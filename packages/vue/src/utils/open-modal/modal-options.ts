/**
 * @public
 */
export interface ModalOptions {
    /**
     * Element to mount modal under. Default `<body>`.
     */
    attachTo: string | Element;

    /* props */
    props: Record<string, unknown | undefined>;
}
