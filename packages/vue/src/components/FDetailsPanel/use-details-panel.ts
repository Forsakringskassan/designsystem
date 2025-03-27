import { type Ref, ref } from "vue";

/**
 * @public
 */
export type DetailsPanelCloseCallback<T> = (data: {
    item: T;
    reason: string;
}) => void;

interface DetailsPanelControl<T> {
    readonly name: Readonly<Ref<string>>;
    item: Ref<T | null>;
    callback: Ref<DetailsPanelCloseCallback<T> | null>;
    open(item: T, options?: { onClose?: DetailsPanelCloseCallback<T> }): void;
    close(): void;
    destroy(): void;
}

/**
 * @public
 */
export interface UseDetailsPanel<T = unknown> {
    open(item: T, options?: { onClose?: DetailsPanelCloseCallback<T> }): void;
    close(): void;
}

let panels: Array<DetailsPanelControl<unknown>> = [];
const exclusiveGroups = new Map<string | symbol, { closeMeMaybe(): void }>();

/**
 * Resets all registered panels.
 *
 * All panels has to be remounted after this,
 *
 * @internal
 */
export function resetDetailPanels(): void {
    panels = [];
}

/**
 * @internal
 */
export function createDetailsPanel<T>(
    name: string,
    options: { exclusive: string | undefined },
): DetailsPanelControl<T> {
    const { exclusive } = options;
    const control: DetailsPanelControl<unknown> = {
        name: ref(name),
        item: ref(null),
        callback: ref(null),
        open(item, options) {
            if (exclusive) {
                const existing = exclusiveGroups.get(exclusive);
                if (existing) {
                    existing.closeMeMaybe();
                }
                exclusiveGroups.set(exclusive, {
                    closeMeMaybe: () => this.close(),
                });
            }

            this.item.value = item;
            this.callback.value = options?.onClose ?? null;
        },
        close() {
            this.item.value = null;
            this.callback.value = null;

            if (exclusive) {
                exclusiveGroups.delete(exclusive);
            }
        },
        destroy() {
            /* do nothing */
        },
    };
    panels.push(control);
    return control as DetailsPanelControl<T>;
}

function findPanelByName<T>(name: string): UseDetailsPanel<T> | undefined {
    return panels.find((it) => it.name.value === name) as
        | UseDetailsPanel<T>
        | undefined;
}

/**
 * Get a API object to access details panels (FDetailsPanel).
 *
 * @public
 * @param name - Name of panel.
 */
export function useDetailsPanel<T = unknown>(name: string): UseDetailsPanel<T> {
    return {
        open(item, options) {
            const panel = findPanelByName<T>(name);
            if (panel) {
                panel.open(item, options);
            }
        },
        close() {
            const panel = findPanelByName<T>(name);
            if (panel) {
                panel.close();
            }
        },
    };
}
