import { type Ref, ref, toRaw, watch } from "vue";
import { applyArrayMetadata } from "./apply-array-metadata";
import { applyElementMetadata } from "./apply-element-metadata";
import { type Dataset } from "./dataset";
import { toDataset } from "./to-dataset";
import { getCurrentDatasetMode } from "./with-dataset-behaviour";

/**
 * Creates a dataset as a Vue ref.
 *
 * Assigning a plain `T[]` to `.value` automatically converts it to a
 * `Dataset<T>`, applying element metadata according to the currently active
 * dataset mode (use `withDatasetBehaviour()` to modify mode).
 *
 * @public
 * @since v6.39.0
 */
export function useDatasetRef<T extends object>(
    initial?: T[],
): Ref<Dataset<T>, T[] | Dataset<T>> {
    const inner = ref(toDataset(initial ?? [])) as Ref<Dataset<T>>;

    watch(
        inner,
        (value) => {
            const raw = toRaw(value) as T[];
            const mode = getCurrentDatasetMode();
            applyArrayMetadata(raw);
            applyElementMetadata(raw, mode);
        },
        { deep: 1, flush: "sync" },
    );

    return inner;
}
