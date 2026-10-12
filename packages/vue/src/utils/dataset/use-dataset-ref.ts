import { type Ref, ref, toRaw, watch } from "vue";
import { type Dataset, type DatasetNestedKeyOf } from "./dataset";
import { reindexDataset } from "./reindex-dataset";
import { toDataset } from "./to-dataset";

/**
 * Creates a dataset as a Vue ref.
 *
 * @deprecated Use Vue's `ref()` instead. For expandable rows in `FTable`, pass
 *   the nested property name to `expandable-attribute`.
 * @public
 * @since %version%
 */
export function useDatasetRef<T extends object>(
    initial?: T[],
    nestedAttribute?: DatasetNestedKeyOf<T>,
): Ref<Dataset<T>, T[] | Dataset<T>> {
    const inner = ref(toDataset(initial ?? [], nestedAttribute)) as Ref<
        Dataset<T>
    >;

    function* collect(array: T[]): Generator<number | unknown[]> {
        yield array;
        yield array.length;
        if (nestedAttribute) {
            for (const item of array) {
                const nested = item[nestedAttribute];
                if (Array.isArray(nested)) {
                    yield* collect(nested);
                }
            }
        }
    }

    watch(
        () => Array.from(collect(inner.value)),
        () => {
            const raw = toRaw(inner.value);
            reindexDataset(raw, nestedAttribute);
        },
        { deep: 1, flush: "sync" },
    );

    return inner;
}
