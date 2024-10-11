---
title: mountComponent
layout: content-with-menu
---

```ts
export interface MountOptions {
    /**
     * Element to mount component under. Default `<body>`.
     */
    attachTo?: string | Element;

    /**
     * Attach as first child. Default `false`.
     */
    attachFirst?: boolean;
}

export function mountComponent(
    callingInstance: MaybeWithFKUIContext,
    Component: MaybeComponent,
    options: VNodeData & MountOptions,
): Vue;
```

Mount a VUE component using API.
The component will be mounted as a child of the target element and not onto the element itself.

## Usage

```ts
/* mount component */
const targetElement = ...;
const app = mountComponent(this, MyComponent, { attachTo: targetElement });

/* do fancy stuff */

/* cleanup */
app.unmount();
```

```import
MountOptionsExample.vue
```

## Passing props and listeners

Props and listeners can be passed in the options object:

```ts
mountComponent(this, MyComponent, {
    attachTo: targetElement,

    /* props */
    foo: "bar",

    /* listeners */
    onSubmit(): void {
        /* do something */
    },
});
```
