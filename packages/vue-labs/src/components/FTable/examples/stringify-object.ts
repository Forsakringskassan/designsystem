function stringifyValue(value: unknown): string {
    if (Array.isArray(value)) {
        const joinedValues = value.map((it) => `'${String(it)}'`).join(", ");
        return `[${joinedValues}]`;
    }

    if (typeof value === "function") {
        return value.toString().split(`"`).join("'");
    }

    if (typeof value === "string") {
        return `'${value}'`;
    }

    return String(value);
}

export function stringifyObject(obj: Record<string, unknown>): string {
    const props = Object.keys(obj).map(
        (key) => `${key}: ${stringifyValue(obj[key])}`,
    );

    return `{ ${props.join(", ")} }`;
}
