---
title: confirmModal
layout: content-with-menu
---

```ts
export interface confirmModalObject {
    heading: string;
    content: string;
    confirm: string;
    dismiss: string;
}
export async function confirmModal(
    callingInstance: MaybeWithFKUIContext,
    modalData: confirmModalObject,
): Promise<boolean>;
```

Provides function for simpler usage of [open-modal](#/Utilities/open-modal)

## Usage

```ts
result = await confirmModal(this, {
    heading: "Ta bort arbetsgivare",
    content: `Är du säker att du vill ta bort "${arbetsgivare.namn}"?`,
    confirm: "Ja, ta bort",
    dismiss: "Nej, behåll",
});
```
