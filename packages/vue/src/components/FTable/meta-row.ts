import { type ItemIdentifier } from "@fkui/vue";

/** @internal */
export interface MetaRow<T> {
    key: ItemIdentifier;
    row: T;
    rowindex: number; // 1-based index of the row including all nested rows, expanded or not
    level?: number;
    setsize?: number;
    posinset?: number;
    isExpandable?: boolean;
    isExpanded?: boolean;
}
