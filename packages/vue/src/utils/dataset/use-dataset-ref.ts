import { type Ref, ref } from "vue";
import { type Dataset } from "./dataset";
import { toDataset } from "./to-dataset";

/**
 * Creates a dataset as a Vue ref.
 *
 * @public
 * @since v6.39.0
 */
export function useDatasetRef<T>(initial?: T[]): Ref<Dataset<T>> {
    return ref(toDataset(initial ?? [])) as Ref<Dataset<T>>;
}
