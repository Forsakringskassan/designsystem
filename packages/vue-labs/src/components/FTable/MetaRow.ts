import { type ItemIdentifier } from "@fkui/vue";

export interface MetaRow<T> {
    key: ItemIdentifier;
    row: T;
    rowIndex: number;
    level?: number;
    setsize?: number;
    posinset?: number;
    isExpandable?: boolean;
    isExpanded?: boolean;
}
