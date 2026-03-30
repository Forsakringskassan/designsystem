import { type Ref, ref } from "vue";
import { type Dataset, type DatasetNestedKeyOf } from "./dataset";
import { toDataset } from "./to-dataset";

/**
 * Creates a dataset as a Vue ref.
 *
 * @public
 * @since v6.39.0
 */
export function useDatasetRef<T extends object>(
    initial?: T[],
    nestedAttribute?: DatasetNestedKeyOf<T>,
): Ref<Dataset<T>> {
    return ref(toDataset(initial ?? [], nestedAttribute)) as Ref<Dataset<T>>;
}
