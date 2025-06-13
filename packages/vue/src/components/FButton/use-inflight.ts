import { type Ref, ref } from "vue";

export type UseInflightFn = () => void | Promise<void>;
export type UseInflightWrapped = () => Promise<void>;

export interface UseInflight {
    inflight: Readonly<Ref<boolean>>;
    fn: UseInflightWrapped | undefined;
}

export function useInflight(fn: unknown): UseInflight {
    const inflight = ref(false);

    if (!fn || typeof fn !== "function") {
        return { inflight, fn: undefined };
    }

    const originalFn = fn;

    async function wrapper(): Promise<void> {
        try {
            inflight.value = true;
            await originalFn();
        } finally {
            inflight.value = false;
        }
    }

    return { inflight, fn: wrapper };
}
