---
title: formModal() function
short-title: formModal()
layout: article
---

Open a form inside a {@link FFormModal} modal and return the form data.

This is for Vue Options API.
Use {@link useModal useModal()} with Composition API.

## Syntax

```ts
function formModal(callingInstance, options);
```

### Parameters

`callingInstance`
: Current component attempting to open confirmation modal. Typically `this`.

`options` {@optional}
: Modal options.

    `size` {@optional}
    : Optional modal size.

        Must be one of:

    	- `"large"`
    	- `"fullscreen"

    `props` {@optional}
    : Optional props to pass to modal.

### Return value

A `Promise` resolving to the form data bound to the `value` prop.

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

## Relaterat

- {@link useModal useModal()} for using with composition API.
