import { setLayout } from "./layout-register";

/**
 * @public
 */
export type LayoutAreaAttachPanel =
    | "none"
    | "left"
    | "right"
    | "top"
    | "bottom";

/**
 * @public
 */
export type LayoutAreaDirection = "column" | "row";

/**
 * @public
 */
export interface LayoutAreaDefinition {
    /** Where panels will attach to */
    attachPanel: LayoutAreaAttachPanel;

    /** What direction content of the area will appear (mapped to `flex-direction`) */
    direction: LayoutAreaDirection;

    /** If the content of the area is scrollable (in direction given by `direction`), default `false`. */
    scroll?: boolean;
}

/**
 * @internal
 */
export interface NormalizedLayoutAreaDefinition {
    attachPanel: LayoutAreaAttachPanel;
    direction: LayoutAreaDirection;
    scroll: boolean;
}

/**
 * A definition of a layout for {@link FPageLayout}.
 *
 * @public
 */
export interface LayoutDefinition {
    name: string;
    areas: Record<string, LayoutAreaDefinition>;
}

/**
 * A definition of a layout for {@link FPageLayout}.
 *
 * @internal
 */
export interface NormalizedLayoutDefinition {
    name: string;
    areas: Record<string, NormalizedLayoutAreaDefinition>;
}

/**
 * Defines a new layout for usage with {@link FPageLayout}.
 *
 * @internal
 */
export function defineLayout(
    definition: LayoutDefinition,
): NormalizedLayoutDefinition {
    return normalizeDefinition(definition);
}

/**
 * Register a new layout for usage with {@link FPageLayout}.
 *
 * @public
 */
export function registerLayout<T extends LayoutDefinition>(
    definition: T,
): void {
    setLayout(definition.name, normalizeDefinition(definition));
}

function normalizeDefinition(
    definition: LayoutDefinition,
): NormalizedLayoutDefinition {
    return {
        name: definition.name,
        areas: normalizeAreasDefinition(definition.areas),
    };
}

function normalizeAreasDefinition(
    areas: Record<string, LayoutAreaDefinition>,
): Record<string, NormalizedLayoutAreaDefinition> {
    return Object.fromEntries(
        Object.entries(areas).map(([key, area]) => {
            return [
                key,
                {
                    attachPanel: area.attachPanel,
                    direction: area.direction,
                    scroll: area.scroll ?? false,
                },
            ];
        }),
    );
}
