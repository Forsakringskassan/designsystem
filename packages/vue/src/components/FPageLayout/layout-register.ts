import { type NormalizedLayoutDefinition } from "./define-layout";

const layoutRegister: Partial<Record<string, NormalizedLayoutDefinition>> = {};

/**
 * @internal
 */
export function getLayout(name: string): NormalizedLayoutDefinition | null {
    return layoutRegister[name] ?? null;
}

/**
 * @internal
 */
export function setLayout(
    name: string,
    layout: NormalizedLayoutDefinition,
): void {
    layoutRegister[name] = layout;
}
