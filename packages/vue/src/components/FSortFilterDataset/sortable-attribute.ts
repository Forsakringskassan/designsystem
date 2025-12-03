import type { Ref } from "vue";

/**
 * @internal
 */

export interface SortableAttribute {
    attribute: string;
    name: string | Readonly<Ref<string>>;
    ascendingName: string;
    ascending: boolean;
    id: number;
}
