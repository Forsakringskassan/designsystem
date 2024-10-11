---
title: openModal
layout: content-with-menu
---

```ts
export interface ModalOptions {
    attachTo: string | Element;
    props: Record<string, string | undefined>;
}

export interface ModalResult<T> {
    reason: ModalReason | string;
    data: T;
}

export type AsyncModalResult<T> = Promise<ModalResult<T>>;

export function openModal<T>(
    callingInstance: MaybeWithFKUIContext,
    Component: MaybeComponent,
    text: string,
): AsyncModalResult<T>;

export function openModal<T>(
    callingInstance: MaybeWithFKUIContext,
    Component: MaybeComponent,
    options?: Partial<ModalOptions>,
): AsyncModalResult<T>;
```

Provides an API to pragmatically open modal dialogs.

## Usage

```ts
const result = await openModal(this, MyModalComponent, {
    props: {
        heading: "Modal title",
        content: "Text to display in modal",
    },
});
console.log("Modal closed with result", result);
// Modal closed with result { reason: "close", data: undefined }
```

## API for custom modals

The given component must adhere to the following contract:

1. When closed, no matter the reason, the modal MUST emit the `close` event.
2. When closed, the modal SHOULD include `{ reason: string }` as event payload.
3. When closed, the modal MAY include `{ data: T }` as event payload.
4. The modal MUST be visible by default or use the prop `isOpen` to control visibility.
5. The modal SHOULD respect the `content` prop to set the primary text of the modal.

Until the `close` event has been received the caller will be blocked.
Both `reason` and `data` will be available in the resolved promise.
