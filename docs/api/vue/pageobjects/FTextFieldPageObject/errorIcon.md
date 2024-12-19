---
name: FTextFieldPageObject:errorIcon
title: errorIcon()
layout: content-with-menu
---

FTextFieldPageObject: errorIcon() method

The `errorIcon()` method returns a Cypress Chainable representing the error icon element of a {@link FTextField} component.

> **Note**: Deprecated: applications should not use `errorIcon()` in tests. If you want to test if the input field has a validation error use `nonExistingMethod()` to get the error message from the label.

## Syntax

```ts
textfield.errorIcon();
```

### Parameters

None

### Return value

`Cypress<Chainable<JQuery<HTMLElement>>>`

## Examples

```html
<f-text-field
    v-test="'awesome-input'"
    v-validation.minLength="{minLength: { length: 10 }}"
>
    My Awesome Input
</f-text-field>
```

```ts
const awesomeInput = FTextFieldPageObject("[data-test=awesome-input]");

/* input an invalid value */
awesomeInput.input.focus();
awesomeInput.input.enter("foo");

/* leave input to trigger validation */
awesomeInput.input.blur();

/* assert the error icon is visible */
awesomeInput.errorIcon().should("exist");
```

## See also

-   {@link FTextField}
