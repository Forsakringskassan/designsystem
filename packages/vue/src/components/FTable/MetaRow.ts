export interface MetaRow<T> {
    key: string;
    row: T;
    rowIndex: number;
    level?: number;
    setsize?: number;
    posinset?: number;
    isExpandable?: boolean;
    isExpanded?: boolean;
}
