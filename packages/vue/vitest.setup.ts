/* eslint-disable-next-line unicorn/no-global-object-property-assignment -- technical debt */
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
