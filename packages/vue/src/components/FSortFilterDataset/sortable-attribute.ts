import type { Ref } from "vue";

/**
 * @internal
 */

export interface SortableAttribute<TKeys = PropertyKey> {
    attribute: TKeys;
    name: string | Readonly<Ref<string>>;
    ascendingName: string;
    ascending: boolean;
    id: number;
}
