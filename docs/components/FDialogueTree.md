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
            <button type="button">
                Anställning
                <f-icon name="arrow-right"></f-icon>
            </button>
        </li>
        <li class="dialogue-tree__list-item">
            <button type="button">
                Enskild firma eller handelsbolag
                <f-icon name="arrow-right"></f-icon>
            </button>
        </li>
        <li class="dialogue-tree__list-item">
            <button type="button">
                Aktiebolag
                <f-icon name="arrow-right"></f-icon>
            </button>
        </li>
    </ul>
</div>
```

## Användning

```html static
<f-dialogue-tree v-model="current" dialogue-tree="tree">
    <template #default="{ userData }">
        <template v-if="userData.id === '1'"> 1 </template>
        <template v-if="userData.id === '2'"> 2 </template>
    </template>
</f-dialogue-tree>
```

## Exempel

```import
ExampleFDialogueTree.vue
```

## Flerstegsmodal

Exempel på en kombination av komponenterna FFormModal och FDialogueTree för att skapa en modal som inehåller flera steg.

```jsx
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
FlerstegsModalExample.vue
```

## API

:::api
vue:FDialogueTree
:::
