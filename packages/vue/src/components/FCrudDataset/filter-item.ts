export function filterItem<T>(items: T[], target: T, nested?: keyof T): T[] {
    const newItems = [...items];

    for (let i = 0; i < newItems.length; i++) {
        const item = newItems[i];

        // Filter shallow item.
        if (item === target) {
            newItems.splice(i, 1);
            return newItems;
        }

        // Filter nested item.
        if (nested && Array.isArray(item[nested])) {
            const nestedItems = item[nested];
            const nestedIndex = nestedItems.findIndex((it) => it === target);

            if (nestedIndex !== -1) {
                nestedItems.splice(nestedIndex, 1);
                return newItems;
            }
        }
    }

    return newItems;
}
