---
name: focus-indicator
title: "focus-indicator() mixin"
short-title: focus-indicator()
layout: api
search:
    terms:
        - fokus
        - fokusindikator
        - sass
---

Sass-mixin för att lägga på en fokusindikator på en CSS-regel.

## Syntax

```scss nocompile nolint
@mixin focus-indicator();
```

## Exempel

```scss
@use "@fkui/design" as fkui;

.my-selector {
    &:focus {
        @include fkui.focus-indicator;
    }
}
```
