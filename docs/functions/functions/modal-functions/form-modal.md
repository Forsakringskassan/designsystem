---
title: formModal
layout: content-with-menu
---

```ts
export interface ModalOptions {
    /** Modal size */
    size: "large" | "fullscreen";
    /** Modal props */
    props: Record<string, string | undefined>;
}

type MaybeOptions = Partial<ModalOptions>;

export async function formModal<T>(
    Component: MaybeComponent,
    options?: MaybeOptions,
): Promise<T>;
```

Provides an API to programatically open FFormModal dialogs.

## Usage

Provided the component `MyFormModalComponent` has a `data` field of type `MyFormInterface` corresponding to the returned value on submit.
On cancel/close a promise is rejected.

```ts
/* Typescript interface definition of MyFormInterface: */
interface MyFormInterface {
    field1: string;
    field2: string;
}
```

```ts
let result: MyFormInterface;
try {
    result = await formModal<MyFormInterface>(MyFormModalComponent);
} catch (err) {
    /* handle cancel/close case */
    return;
}
/* handle submit case */
console.log("Modal closed with result", result);
// Modal closed with result `data`
```

The example below is for sending `size`, and custom Vue props to the component `MyFormModalComponent`.

```ts
let result: MyFormInterface;
try {
    result = await formModal<MyFormInterface>(MyFormModalComponent, {
        size: "large"
        props: {
            myCustomProp: "myCustomProp",
        },
    });
} catch (err) {
    /* handle cancel/close case */
    return;
}
/* handle submit case */
console.log("Modal closed with result", result);
// Modal closed with result `data`
```
