import { type Ref, ref } from "vue";

type PanelCallback<T> = (data: { item: T; reason: string }) => void;

interface ClosablePanelControl<T> {
    readonly name: Readonly<Ref<string>>;
    item: Ref<T | null>;
    callback: Ref<PanelCallback<T> | null>;
    open(item: T, options?: { onClose?: PanelCallback<T> }): void;
    close(): void;
    destroy(): void;
}

interface ClosablePanel<T = unknown> {
    open(item: T, options?: { onClose?: PanelCallback<T> }): void;
    close(): void;
}

const panels: Array<ClosablePanelControl<unknown>> = [];

export function createClosablePanel<T>(name: string): ClosablePanelControl<T> {
    const control: ClosablePanelControl<unknown> = {
        name: ref(name),
        item: ref(null),
        callback: ref(null),
        open(item, options) {
            this.item.value = item;
            this.callback.value = options?.onClose ?? null;
        },
        close() {
            this.item.value = null;
            this.callback.value = null;
        },
        destroy() {
            /* do nothing */
        },
    };
    panels.push(control);
    return control as ClosablePanelControl<T>;
}

export function usePanel<T = unknown>(name: string): ClosablePanel<T> {
    return {
        open(item, options) {
            const panel = panels.find((it) => it.name.value === name);
            if (panel) {
                panel.open(item, options);
            }
        },
        close() {
            const panel = panels.find((it) => it.name.value === name);
            if (panel) {
                panel.close();
            }
        },
    };
}
