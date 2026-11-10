---
title: Dialogträd
status: Produktionsklar
layout: component
component: FDialogueTree
---

Låter användaren navigera genom X antal dialoger som leder till en slutvy baserat på tidigare val.

## Exempel med tre frågor

```html static
<div class="dialogue-tree" data-test="dialogue-tree">
    <ul class="dialogue-tree__list">
        <li class="dialogue-tree__list-item">
            <f-button
                size="medium"
                variant="secondary"
                icon-right="arrow-right"
            >
                Anställning
            </f-button>
        </li>
        <li class="dialogue-tree__list-item">
            <f-button
                size="medium"
                variant="secondary"
                icon-right="arrow-right"
            >
                Enskild firma eller handelsbolag
            </f-button>
        </li>
        <li class="dialogue-tree__list-item">
            <f-button
                size="medium"
                variant="secondary"
                icon-right="arrow-right"
            >
                Aktiebolag
            </f-button>
        </li>
    </ul>
</div>
```

## Användning

```html static
<!-- [html-validate-disable-block aria-label-misuse -- well supported]-->
<f-dialogue-tree v-model="current" dialogue-tree="tree">
    <template #default="{ userData }">
        <template v-if="userData.id === '1'"> 1 </template>
        <template v-if="userData.id === '2'"> 2 </template>
    </template>
</f-dialogue-tree>
```

## Exempel

```import
<!-- [html-validate-disable-block aria-label-misuse -- well supported]-->
ExampleFDialogueTree.vue
```

## Flerstegsmodal

Exempel på innehållet i en egen Vue-komponent som kombinerar {@link component:FFormModal} och `FDialogueTree` för flera steg.
Öppna komponenten med hjälp av {@link useModal `useModal()`}.

Lägg inte `FFormModal` direkt i sidans template.

```jsx
<!-- [html-validate-disable-block aria-label-misuse -- well supported]-->
const myAwesomeDialogTree: FDialogueTreeSubQuestion = {
  label: "Vad vill du lägga till?",
  options: [ /* ... */ ],
};

<f-form-modal>
  <template #input-text-fields>
    <f-dialogue-tree :dialogue-tree="myAwesomeDialogTree"></f-dialogue-tree>
  </template>
</f-form-modal>
```

```import nomarkup
<!-- [html-validate-disable-block aria-label-misuse -- well supported]-->
FlerstegsModalExample.vue
```

## API

:::api
vue:FDialogueTree
:::
