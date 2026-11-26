import { inject } from "vue";
import { type ListItem } from "../../types";

/**
 * @public
 */
export interface FCrudDatasetInterface {
    delete(item: ListItem): void;
    modify(item: ListItem): void;
}

export function FCrudDatasetInjected(): FCrudDatasetInterface {
    return {
        /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- technical debt */
        delete: inject("delete")!,
        /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- technical debt */
        modify: inject("modify")!,
    };
}
