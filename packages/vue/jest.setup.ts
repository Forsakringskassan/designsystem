/* include typescript declarations for vite static asset handling (e.g. `?raw`) */
/// <reference types="vite/client" />

import { enableAutoUnmount } from "@vue/test-utils";
import { ElementIdService } from "@fkui/logic";

enableAutoUnmount(afterEach);

afterEach(() => {
    /* reset id generation to ensure we get a stable result no matter which/what
     * order tests are run */
    ElementIdService.reset();
});

window.matchMedia = function matchMedia(media: string): MediaQueryList {
    const queries: Record<string, boolean> = {
        "(prefers-reduced-motion: reduce)": true,
    };
    /* eslint-disable @typescript-eslint/no-explicit-any -- typed as upstream interface */
    return new (class MediaQueryListMock extends EventTarget {
        public readonly matches: boolean = queries[media] ?? false;
        public readonly media = media;
        public onchange:
            | ((this: MediaQueryListMock, ev: MediaQueryListEvent) => any)
            | null = null;
        public addListener(
            cb: (this: MediaQueryListMock, event: MediaQueryListEvent) => any,
        ): void {
            this.addEventListener("change", cb as () => any);
        }
        public removeListener(
            cb: (this: MediaQueryListMock, event: MediaQueryListEvent) => any,
        ): void {
            this.removeEventListener("change", cb as () => any);
        }
    })();
    /* eslint-enable @typescript-eslint/no-explicit-any */
};
