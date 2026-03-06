import {
    type MaybeRefOrGetter,
    type Ref,
    computed,
    ref,
    toValue,
    watch,
} from "vue";
import { useTranslate } from "../../plugins";
import { filter } from "./FSortFilterFilter";
import { sort } from "./FSortFilterSorter";
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

function sortFilterData<T>(
    data: T[],
    filterAttributes: PropertyKey[],
    searchString: string,
    sortAttribute: SortableAttribute,
): T[] {
    const filteredData = filter(data, filterAttributes, searchString);

    return sort(filteredData, {
        attribute: sortAttribute.attribute as keyof T | "",
        ascending: sortAttribute.ascending,
    });
}

export interface SortFilterDatasetState<T> {
    searchString: Ref<string>;
    sortAttribute: Ref<SortOrder>;
    sortFilterResult: Ref<T[]>;
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

export function useSortFilterDataset<T>(
    data: MaybeRefOrGetter<T[]>,
    sortableAttributes: MaybeRefOrGetter<
        Record<PropertyKey, string | Readonly<Ref<string>>>
    >,
    filterAttributes: MaybeRefOrGetter<PropertyKey[] | undefined>,
    defaultSortAttribute: PropertyKey,
    defaultSortAscending: boolean,
): SortFilterDatasetState<T> {
    const searchString = ref("");
    const sortAttribute = ref<SortOrder>({ ...defaultSortValue });
    const sortFilterResult: Ref<T[]> = ref([]);
    const useDefaultSortOrder = ref(true);

    /**
     * Data snapshot taken when new sortfilter is run.
     *
     * This data snapshot is used to be compare with new input data in order to
     * distinguish added and removed rows.
     */
    let dataSnapshot: T[] = [];

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
        dataSnapshot = [...toValue(data)];
        sortFilterResult.value = sortFilterData(
            dataSnapshot,
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

        dataSnapshot = [...toValue(data)];
        sortFilterResult.value = sortFilterData(
            dataSnapshot,
            internalFilterAttributes.value,
            searchString.value,
            sortAttribute.value,
        );
    }

    watch(searchString, () => {
        dataSnapshot = [...toValue(data)];
        sortFilterResult.value = sortFilterData(
            dataSnapshot,
            internalFilterAttributes.value,
            searchString.value,
            sortAttribute.value,
        );
    });

    /**
     * Visually resets sort without resorting the current output data.
     *
     * This is intended when existing input data is mutated.
     */
    function handleDataChanged(): void {
        const newData = toValue(data);
        const newResult = [...sortFilterResult.value];

        const noLongerIncluded = newResult.filter(
            (it) => !newData.includes(it),
        );
        noLongerIncluded.forEach((it) => {
            newResult.splice(newResult.indexOf(it), 1);
        });

        const additions = newData
            .filter((it) => !dataSnapshot.includes(it))
            .filter((it) => !newResult.includes(it));
        additions.forEach((it) => newResult.push(it));

        sortAttribute.value = defaultSortValue;
        sortFilterResult.value = newResult;
    }

    /**
     * Runs a full sort replacing the current output data.
     *
     * This is intended when the input data is fully replaced.
     */
    function handleDataReplaced(): void {
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

        dataSnapshot = [...toValue(data)];
        sortFilterResult.value = sortFilterData(
            dataSnapshot,
            internalFilterAttributes.value,
            searchString.value,
            sortAttribute.value,
        );
    }

    watch(
        () => toValue(data),
        (newData, oldData) => {
            if (newData === oldData) {
                handleDataChanged();
            } else {
                handleDataReplaced();
            }
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
