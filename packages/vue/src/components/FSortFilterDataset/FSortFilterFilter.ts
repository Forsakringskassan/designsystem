import { isSet } from "@fkui/logic";

function includesAllSearchTerms(
    item: Record<string, string | number | undefined>,
    filterAttributes: string[],
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

export function filter<T>(
    list: T[],
    filterAttributes: string[],
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
        includesAllSearchTerms(
            item as unknown as Record<string, string | number | undefined>,
            filterAttributes,
            searchTerms,
        ),
    );
}
