import {
    type MaybeRefOrGetter,
    type Ref,
    computed,
    ref,
    toValue,
    watch,
} from "vue";
import { useTranslate } from "../../plugins";
import { type Dataset } from "../../utils";
import { filter } from "./f-sort-filter-filter";
import { sort } from "./f-sort-filter-sorter";
import { type SortOrder } from "./sort-order";
import { type SortableAttribute } from "./sortable-attribute";

const $t = useTranslate();

const defaultSortValue = {
    attribute: "",
    name: "",
    ascendingName: "",
    ascending: false,
    id: 0,
} satisfies SortOrder;

function updateSortOrders(
    sortableKeys: Array<string | symbol>,
    sortableAttributes: Record<PropertyKey, string | Readonly<Ref<string>>>,
): SortableAttribute[] {
    const arr = [] as SortableAttribute[];
    let id = 0;

    for (const key of sortableKeys) {
        arr.push({
            attribute: key,
            name: sortableAttributes[key],
            ascendingName: $t(
                "fkui.sort-filter-dataset.label.ascending",
                "stigande",
            ),
            ascending: true,
            id: id++,
        });
        arr.push({
            attribute: key,
            name: sortableAttributes[key],
            ascendingName: $t(
                "fkui.sort-filter-dataset.label.descending",
                "fallande",
            ),
            ascending: false,
            id: id++,
        });
    }

    return arr;
}

function findSortAttribute(
    attribute: string,
    ascending: boolean,
    sortOrders: SortableAttribute[],
): SortOrder {
    const foundAttribute = sortOrders.find((item) => {
        return item.attribute === attribute && item.ascending === ascending;
    });

    if (foundAttribute) {
        return {
            ...foundAttribute,
            name: toValue(foundAttribute.name),
        };
    } else {
        return { ...defaultSortValue };
    }
}

function normalizeFilterAttributes(
    data: unknown[],
    filterAttributes?: PropertyKey[],
): PropertyKey[] {
    if (!filterAttributes) {
        return Object.keys(data[0] ?? {});
    }
    return filterAttributes;
}

function sortFilterData<T extends object, TArray extends Dataset<T> | T[]>(
    data: TArray,
    filterAttributes: PropertyKey[],
    searchString: string,
    sortAttribute: SortableAttribute,
): TArray {
    const filteredData = filter(data, filterAttributes, searchString);

    return sort(filteredData, {
        attribute: sortAttribute.attribute as keyof T | "",
        ascending: sortAttribute.ascending,
    }) as TArray;
}

export interface SortFilterDatasetState<
    T extends object,
    TArray extends Dataset<T> | T[],
> {
    searchString: Ref<string>;
    sortAttribute: Ref<SortOrder>;
    sortFilterResult: Ref<TArray>;
    showClearButton: Ref<boolean>;
    defaultSortValue: SortOrder;
    sortableKeys: Ref<Array<string | symbol>>;
    sortOrders: Ref<SortableAttribute[]>;
    onUserChangeSortAttribute(this: void): void;
    onApiChangeSortAttribute(
        this: void,
        attribute: string,
        ascending: boolean,
    ): void;
}

export function useSortFilterDataset<
    T extends object,
    TArray extends Dataset<T> | T[],
>(
    data: MaybeRefOrGetter<TArray>,
    sortableAttributes: MaybeRefOrGetter<
        Record<PropertyKey, string | Readonly<Ref<string>>>
    >,
    filterAttributes: MaybeRefOrGetter<PropertyKey[] | undefined>,
    defaultSortAttribute: PropertyKey,
    defaultSortAscending: boolean,
): SortFilterDatasetState<T, TArray> {
    const searchString = ref("");
    const sortAttribute = ref<SortOrder>({ ...defaultSortValue });
    const sortFilterResult = ref<TArray>(
        [] as unknown as TArray,
    ) as Ref<TArray>;
    const useDefaultSortOrder = ref(true);

    /* all enumerable keys from sortableAttributes */
    const sortableKeys = computed(() => {
        return Reflect.ownKeys(toValue(sortableAttributes)).filter((key) => {
            const descriptor = Object.getOwnPropertyDescriptor(
                toValue(sortableAttributes),
                key,
            );
            return descriptor?.enumerable ?? false;
        });
    });

    const sortOrders = computed(() => {
        return updateSortOrders(
            sortableKeys.value,
            toValue(sortableAttributes),
        );
    });

    const internalFilterAttributes = computed(() => {
        return normalizeFilterAttributes(
            toValue(data),
            toValue(filterAttributes),
        );
    });

    const showClearButton = computed(() => {
        return searchString.value.length > 0;
    });

    function onUserChangeSortAttribute(): void {
        sortFilterResult.value = sortFilterData(
            toValue(data),
            internalFilterAttributes.value,
            searchString.value,
            sortAttribute.value,
        );
    }

    function onApiChangeSortAttribute(
        attribute: string,
        ascending: boolean,
    ): void {
        sortAttribute.value = findSortAttribute(
            attribute,
            ascending,
            sortOrders.value,
        );

        sortFilterResult.value = sortFilterData(
            toValue(data),
            internalFilterAttributes.value,
            searchString.value,
            sortAttribute.value,
        );
    }

    watch(searchString, () => {
        sortFilterResult.value = sortFilterData(
            toValue(data),
            internalFilterAttributes.value,
            searchString.value,
            sortAttribute.value,
        );
    });

    watch(
        () => toValue(data),
        () => {
            if (defaultSortAttribute !== "" && useDefaultSortOrder.value) {
                const foundAttribute = sortOrders.value.find((item) => {
                    return (
                        item.attribute === defaultSortAttribute &&
                        item.ascending === defaultSortAscending
                    );
                });
                if (foundAttribute) {
                    sortAttribute.value = {
                        ...foundAttribute,
                        name: toValue(foundAttribute.name),
                    };
                }
                useDefaultSortOrder.value = false;
            }

            sortFilterResult.value = sortFilterData(
                toValue(data),
                internalFilterAttributes.value,
                searchString.value,
                sortAttribute.value,
            );
        },
        { immediate: true, deep: true },
    );

    return {
        sortFilterResult,
        defaultSortValue,
        searchString,
        showClearButton,
        sortableKeys,
        sortOrders,
        sortAttribute,
        onUserChangeSortAttribute,
        onApiChangeSortAttribute,
    };
}
