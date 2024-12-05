import { isEmpty } from "@fkui/logic";

export function filterOptions(
    options: string[],
    filter: string,
    selectMode: boolean,
): string[] {
    if (isEmpty(filter) || selectMode) {
        return options;
    }

    const filterLowerCased = filter.toLowerCase();

    return options.filter(
        (it) => it.toLowerCase().indexOf(filterLowerCased) > -1,
    );
}
