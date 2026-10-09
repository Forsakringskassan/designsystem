import { type ItemIdentifier } from "@fkui/vue";

/** @internal */
export interface MetaRow<T> {
    key: ItemIdentifier;
    row: T;
    level?: number;
    setsize?: number;
    posinset?: number;
    isExpandable?: boolean;
    isExpanded?: boolean;
}
