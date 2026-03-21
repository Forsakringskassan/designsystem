import { isSet } from "@fkui/logic";
import { type Dataset } from "../../utils";

function includesAllSearchTerms(
    item: Record<PropertyKey, string | number | undefined>,
    filterAttributes: PropertyKey[],
    searchTerms: string[],
): boolean {
    const values = filterAttributes
        .map((it) => {
            const value = item[it];
            return isSet(value)
                ? value.toString().toLocaleLowerCase()
                : undefined;
        })
        .filter(Boolean);

    for (const searchTerm of searchTerms) {
        const match = values.find((it) => it?.includes(searchTerm));
        if (!match) {
            return false;
        }
    }
    return true;
}

export function filter<T, TArray extends Dataset<T> | T[]>(
    list: TArray,
    filterAttributes: PropertyKey[],
    searchString: string,
): TArray {
    searchString = searchString.trim();
    if (searchString.trim() === "") {
        return list;
    }

    const searchTerms = searchString
        .split(/\s+/)
        .map((word) => word.toLocaleLowerCase());

    return list.filter((item) =>
        includesAllSearchTerms(
            item as unknown as Record<PropertyKey, string | number | undefined>,
            filterAttributes,
            searchTerms,
        ),
    ) as TArray;
}
