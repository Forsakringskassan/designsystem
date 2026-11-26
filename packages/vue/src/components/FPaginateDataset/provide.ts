import { type InjectionKey, type Ref } from "vue";

interface PaginateDatasetProvide {
    currentPage: Readonly<Ref<number>>;
    numberOfPages: Readonly<Ref<number>>;
}

/**
 * @internal
 */
export const paginateDatasetKey = Symbol(
    "paginateDataset",
) as InjectionKey<PaginateDatasetProvide>;
