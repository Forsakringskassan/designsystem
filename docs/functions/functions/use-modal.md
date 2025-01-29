---
title: useModal() composable
short-title: useModal()
name: useModal
layout: article
---

Composable to get access to modal functions without using `callingInstance`:

- `openModal()`
- `confirmModal()`
- `formModal()`

This is for Vue Composition API.
Use {@link open-modal openModal()}, {@link confirm-modal confirmModal()} and {@link form-modal formModal()} with Options API.

## Syntax

```ts nocompile
function useModal();
```

### Parameters

None

### Return value

`openModal(component, options)`
: A wrapped {@link open-modal openModal()} function without `callingInstance` parameter.

`confirmModal(text)`
: A wrapped {@link confirm-modal confirmModal()} function without `callingInstance` parameter.

`formModal(component, options)`
: A wrapped {@link form-modal formModal()} function without `callingInstance` parameter.

## Example

Open a simple modal:

```ts
import { defineComponent } from "vue";
import { useModal } from "@fkui/vue";

const MyAwesomeModal = defineComponent({});

/* --- cut above ---*/

const { openModal } = useModal();

async function onOpen(): Promise<void> {
    const result = await openModal(MyAwesomeModal);
}
```

Open a confirmation modal:

```ts
import { useModal } from "@fkui/vue";

const arbetsgivare = {
    namn: "",
};

/* --- cut above --- */

const { confirmModal } = useModal();

async function onOpen(): Promise<void> {
    const confirmed = await confirmModal({
        heading: "Ta bort arbetsgivare",
        content: `Är du säker att du vill ta bort "${arbetsgivare.namn}"?`,
        confirm: "Ja, ta bort",
        dismiss: "Nej, behåll",
    });
    if (confirmed) {
        /* ... */
    }
}
```

Open a form modal:

```ts
import { defineComponent } from "vue";
import { useModal } from "@fkui/vue";

/* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
interface MyAwesomeData {}

const MyAwesomeModal = defineComponent({});

/* --- cut above ---*/

const { formModal } = useModal();

async function onOpen(): Promise<void> {
    const result = await formModal<MyAwesomeData>(MyAwesomeModal);
}
```

## Related

- {@link open-modal openModal()}
- {@link confirm-modal confirmModal()}
- {@link form-modal formModal()}
