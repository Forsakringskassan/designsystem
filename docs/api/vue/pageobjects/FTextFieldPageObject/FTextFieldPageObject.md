---
sortorder: 1
layout: content-with-menu
component: FTextFieldPageObject
---

FTextFieldPageObject: FTextFieldPageObject() constructor

The constructor of the `FTextFieldPageObject` page object.

## Syntax

```ts
new FTextFieldPageObject(selector: string);
```

### Parameters

`selector`
: The root selector.

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
