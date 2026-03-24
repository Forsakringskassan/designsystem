/**
 * Metadata about a single element within a dataset.
 *
 * @public
 * @since %version%
 */
export interface DatasetElementMetadata {
    /** Zero-based position of the element in the dataset. */
    readonly rowIndex: number;

    /** 1-based position of the element in the dataset. */
    readonly ariaRowIndex: number;

    /** 1-based depth of the element in a hierarchical dataset. */
    readonly ariaLevel: number;

    /** Total number of elements at the same level in a hierarchical dataset. */
    readonly ariaSetSize: number;

    /** Position among siblings in a hierarchical dataset. */
    readonly ariaPosInSet: number;
}
