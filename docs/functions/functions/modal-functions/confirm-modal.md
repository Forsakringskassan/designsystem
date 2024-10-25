---
title: confirmModal() function
short-title: confirmModal()
layout: article
---

Open a {@link FConfirmModal} confirmation modal with given text.

This is for Vue Options API.
Use {@link useModal useModal()} with Composition API.

## Syntax

```ts
function confirmModal(callingInstance, texts);
```

### Parameters

`callingInstance`
: Current component attempting to open confirmation modal. Typically `this`.

`texts`
: Texts to display in modal.

    `heading: string`
    : Text to display in modal header.

    `content: string`
    : Text to display in modal body.

    `confirm: string`
    : Text for confirmation button.

    `dismiss: string`
    : Text for cancel button.

### Return value

A `Promise` resolving to `true` if the user confirms the action and `false` if the user cancels the action.

## Exempel

```ts
const confirmed = await confirmModal(this, {
    heading: "Ta bort arbetsgivare",
    content: `Är du säker att du vill ta bort "${arbetsgivare.namn}"?`,
    confirm: "Ja, ta bort",
    dismiss: "Nej, behåll",
});
if (confirmed) {
    /* ... */
}
```

## Relaterat

-   {@link useModal useModal()} for using with composition API.
