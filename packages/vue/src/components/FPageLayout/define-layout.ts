export interface LayoutSlotDefinition {
    attach: "none" | "left" | "right";
    direction: "column" | "row";
}

export interface LayoutDefinition {
    name: string;
    slots: Record<string, LayoutSlotDefinition>;
}

export function defineLayout<T extends LayoutDefinition>(definition: T): T {
    return definition;
}
