import { isSet } from "@fkui/logic";

function includesAllSearchTerms<T>(
    item: T,
    filterAttributes: Array<keyof T>,
    searchTerms: string[],
): boolean {
    const values = filterAttributes
        .map((it) => {
            const value = item[it];
            return isSet(value) ? String(value).toLocaleLowerCase() : undefined;
        })
        .filter((it): it is string => Boolean(it));

    return searchTerms.every((searchTerm) => {
        return values.some((it) => it.includes(searchTerm));
    });
}

export function filter<T>(
    list: T[],
    filterAttributes: Array<keyof T>,
    searchString: string,
): T[] {
    searchString = searchString.trim();
    if (searchString.trim() === "") {
        return list;
    }

    const searchTerms = searchString
        .split(/\s+/)
        .map((word) => word.toLocaleLowerCase());

    return list.filter((item) =>
        includesAllSearchTerms(item, filterAttributes, searchTerms),
    );
}
