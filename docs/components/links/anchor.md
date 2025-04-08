---
title: Länk
status: Produktionsklar
layout: component
component:
    - name: anchor
      source: components/**/_anchor.scss
---

Länk används för navigation mellan olika sidor eller inom samma sida.

```import live-example test-id=live
AnchorLiveExample.vue
```

## Länk på flera rader (fristående)

Vid fokus hamnar ramen runt hela länken även om den sträcker sig över flera rader.

```html
<a class="anchor anchor--block" href="javascript:"
    >Fristående länk på flera rader. Fristående länk på flera rader. Fristående
    länk på flera rader. Fristående länk på flera rader.
</a>
```

## Länk med ikon på flera rader (fristående)

```html
<!-- [html-validate-disable-block fkui/prefer-ficon -- html example does not use @fkui/vue]-->
<a class="anchor anchor--block" href="javascript:">
    <svg focusable="false" class="icon f-icon-doc">
        <use href="#f-icon-doc"></use>
    </svg>
    Fristående länk med ikon på flera rader. Fristående länk med ikon på flera
    rader. Fristående länk med ikon på flera rader.
</a>
```

## Länk i löptext (ej fristående)

```html
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ligula felis,
facilisis at ante ac, semper porta ipsum. Nam quis condimentum nulla, vel
elementum purus. Sed tempor velit id posuere aliquet.<a
    class="anchor"
    href="javascript:"
    >Här är en länk på flera rader. Här är en länk på flera rader. Här är en
    länk på flera rader. Här är en länk på flera rader. Här är en länk på flera
    rader.
</a>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ligula felis,
facilisis at ante ac, semper porta ipsum. Nam quis condimentum nulla, vel
elementum purus. Sed tempor velit id posuere aliquet.
```
