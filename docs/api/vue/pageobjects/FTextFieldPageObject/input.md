---
name: FTextFieldPageObject:input
title: input()
layout: content-with-menu
---

FTextFieldPageObject: input() method

The `input()` method returns a Cypress Chainable representing the `<input>` element of a {@link FTextField} component.

## Syntax

```ts
textfield.input();
```

### Parameters

None

### Return value

`Cypress<Chainable<JQuery<HTMLElement>>>`

## Examples

```html
<f-text-field v-test="'awesome-input'"> My Awesome Input </f-text-field>
```

```ts
const awesomeInput = FTextFieldPageObject("[data-test=awesome-input]");
awesomeInput.input.clear();
awesomeInput.input.enter("Lorem ipsum");
awesomeInput.input.blur();
```

## See also

-   {@link FTextField}
